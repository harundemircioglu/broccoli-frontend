import { Component, OnInit } from '@angular/core';
import { AuthService } from 'src/core/services/auth/auth.service';
import { User } from 'src/core/models/user.model';
import { Router } from '@angular/router';
import { ApiService } from 'src/core/services/api/api.service';
import { Post } from 'src/core/models/post.model';
import { ResponseStatus } from 'src/core/models/response/base-response.model';
import { ConfirmationService, MessageService } from 'primeng/api';

@Component({
  selector: 'app-user-post',
  templateUrl: './user-post.component.html',
  styleUrls: ['./user-post.component.scss'],
  providers: [ConfirmationService, MessageService]
})
export class UserPostComponent implements OnInit {

  currentUser: User | null = null;

  myPosts: Post[] = [];

  constructor(
    private authService: AuthService,
    private router: Router,
    private apiService: ApiService,
    private confirmationService: ConfirmationService,
    private messageService: MessageService
  ) { }

  refresh() {
    this.authService.currentUser.subscribe(user => {
      this.currentUser = user;
      if (!user) {
        this.router.navigate(['/']);
      }
      if (this.currentUser) {
        this.apiService.getEntityByUserId(this.currentUser.id, Post).then(response => {
          if (response?.status == ResponseStatus.Ok) {
            this.myPosts = response.data;
          }
        })
      }
    })
  }

  ngOnInit() {
    this.refresh();
  }
}
