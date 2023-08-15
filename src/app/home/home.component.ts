import { Component, OnInit } from '@angular/core';
import { Post } from 'src/core/models/post.model';
import { ApiService } from 'src/core/services/api/api.service';
import { AuthService } from 'src/core/services/auth/auth.service';
import { User } from 'src/core/models/user.model';
import { FavoritesPostRequest } from 'src/core/models/request/favoritesPost-request.model';
import { ResponseStatus } from 'src/core/models/response/base-response.model';
import { MessageService } from 'primeng/api';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
  providers: [MessageService]
})
export class HomeComponent implements OnInit {

  currentUser: User | null = null;

  posts: Post[] = [];

  selectedPost: Post | undefined;

  FavoritesPostRequest: FavoritesPostRequest = <FavoritesPostRequest>{};

  constructor(
    private apiService: ApiService,
    private authService: AuthService,
    private messageService: MessageService
  ) { }

  favorite(id: number, entity: FavoritesPostRequest) {
    this.apiService.getEntityById<Post>(id, Post).then(post => {
      this.selectedPost = post?.data;
      this.FavoritesPostRequest.user_id = this.currentUser?.id || 0;
      this.FavoritesPostRequest.post_id = this.selectedPost?.id || 0;
      this.createEntity<FavoritesPostRequest>(entity, 'FavoritesPost').then(response => {
        if (response?.status == ResponseStatus.Ok) {
          this.messageService.add({ severity: 'success', summary: 'Başarılı', detail: 'Gönderi favorilere eklendi' });
        }
      })
    })
  }

  createEntity<TEntity>(entity: TEntity, entityType: string) {
    return this.apiService.createEntity<TEntity>(entity, entityType);
  }


  refresh() {
    this.authService.currentUser.subscribe(user => {
      this.currentUser = user;
      if (!user) {
        this.currentUser = null;
      }
    })
    this.apiService.getAllEntities(Post).subscribe(response => {
      this.posts = response.data;
    })
  }
  ngOnInit() {
    this.refresh();
  }
}
