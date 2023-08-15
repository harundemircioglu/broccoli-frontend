import { Component, OnInit } from '@angular/core';
import { Category } from 'src/core/models/category.model';
import { ApiService } from 'src/core/services/api/api.service';
import { AuthService } from 'src/core/services/auth/auth.service';
import { User } from 'src/core/models/user.model';
import { Router } from '@angular/router';
import { PostRequest } from 'src/core/models/request/post-request.model';
import { ResponseStatus } from 'src/core/models/response/base-response.model';
import { MessageService } from 'primeng/api';
import { Post } from 'src/core/models/post.model';

@Component({
  selector: 'app-new-post',
  templateUrl: './new-post.component.html',
  styleUrls: ['./new-post.component.scss'],
  providers: [MessageService]
})
export class NewPostComponent implements OnInit {

  currentUser: User | null = null;

  categories: Category[] = [];

  selectedCategory: Category | undefined;

  postRequest: PostRequest = <PostRequest>{};

  previewPost: boolean = false;



  constructor(
    private apiService: ApiService,
    public authService: AuthService,
    private router: Router,
    private messageService: MessageService
  ) { }

  selectedCategoryBtn(id: number) {
    this.apiService.getEntityById<Category>(id, Category).then(category => {
      this.selectedCategory = category?.data;
    })
  }

  onCreate(entity: PostRequest) {
    this.postRequest.category_id = this.selectedCategory?.id || 0;
    this.postRequest.user_id = this.currentUser?.id || 0;
    this.createEntity<PostRequest>(entity, 'Post').then(response => {
      if (response?.status == ResponseStatus.Ok) {
        this.messageService.add({ severity: 'success', summary: 'Başarılı', detail: 'Gönderi paylaşıldı' });
        setTimeout(() => {
          this.router.navigate(['/']);
        }, 4000);
      }
    });
  }

  createEntity<TEntity>(entity: TEntity, entityType: string) {
    return this.apiService.createEntity<TEntity>(entity, entityType);
  }

  previewPostBtn() {
    this.previewPost = true;
  }

  refresh() {
    this.authService.currentUser.subscribe(user => {
      this.currentUser = user;
      if (!user) {
        this.router.navigate(['/']);
      } else {
        this.apiService.getAllEntities(Category).subscribe(response => {
          this.categories = response.data;
        })
      }
    })
  }

  ngOnInit() {
    this.refresh();
  }
}
