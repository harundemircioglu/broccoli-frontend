import { Component, OnInit } from '@angular/core';
import { Category } from 'src/core/models/category.model';
import { ApiService } from 'src/core/services/api/api.service';
import { AuthService } from 'src/core/services/auth/auth.service';
import { User } from 'src/core/models/user.model';
import { Router } from '@angular/router';

@Component({
  selector: 'app-new-post',
  templateUrl: './new-post.component.html',
  styleUrls: ['./new-post.component.scss']
})
export class NewPostComponent implements OnInit {

  currentUser: User | null = null;

  constructor(
    private apiService: ApiService,
    public authService: AuthService,
    private router: Router
  ) { }

  refresh() {
    this.authService.currentUser.subscribe(user => {
      this.currentUser = user;
      if (!user) {
        this.router.navigate(['/']);
      } else {

      }
    })
  }

  ngOnInit() {
    this.refresh();
  }
}
