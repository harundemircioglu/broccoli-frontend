import { Component, OnInit } from '@angular/core';
import { AuthService } from 'src/core/services/auth/auth.service';
import { User } from 'src/core/models/user.model';
import { Router } from '@angular/router';
import { ApiService } from 'src/core/services/api/api.service';
import { FavoritesPost } from 'src/core/models/favoritesPost.model';
import { ResponseStatus } from 'src/core/models/response/base-response.model';
import { MessageService } from 'primeng/api';
@Component({
  selector: 'app-favorite-post',
  templateUrl: './favorite-post.component.html',
  styleUrls: ['./favorite-post.component.scss'],
  providers: [MessageService]
})
export class FavoritePostComponent implements OnInit {
  currentUser: User | null = null;

  favoritesPost: FavoritesPost[] = [];

  constructor(
    private authService: AuthService,
    private router: Router,
    private apiService: ApiService,
    private messageService: MessageService
  ) { }

  unfavorit(id: number) {
    this.delete(id).then(response => {
      if (response?.status == ResponseStatus.Ok) {
        this.messageService.add({ severity: 'success', summary: 'Başarılı', detail: 'Gönderi favorilerden kaldırıldı' });
        this.refresh();
      }
    })
  }

  delete(id: number) {
    return this.apiService.deleteEntity(id, FavoritesPost);
  }

  refresh() {
    this.authService.currentUser.subscribe(user => {
      this.currentUser = user;
      if (!user) {
        this.router.navigate(['/']);
      }
      if (this.currentUser) {
        this.apiService.getEntityByUserId<FavoritesPost>(this.currentUser.id, FavoritesPost).then(response => {
          if (response?.status == ResponseStatus.Ok) {
            this.favoritesPost = response.data;
          }
        })
      }
    })
  }

  ngOnInit() {
    this.refresh();
  }
}
