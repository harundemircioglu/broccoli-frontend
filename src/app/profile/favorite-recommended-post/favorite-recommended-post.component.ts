import { Component, OnInit } from '@angular/core';
import { AuthService } from 'src/core/services/auth/auth.service';
import { User } from 'src/core/models/user.model';
import { Router } from '@angular/router';
@Component({
  selector: 'app-favorite-recommended-post',
  templateUrl: './favorite-recommended-post.component.html',
  styleUrls: ['./favorite-recommended-post.component.scss']
})
export class FavoriteRecommendedPostComponent implements OnInit {
  currentUser: User | null = null;

  constructor(
    private authService: AuthService,
    public router: Router
  ) { }

  refresh() {
    this.authService.currentUser.subscribe(user => {
      this.currentUser = user;
      if (!user) {
        this.router.navigate(['/']);
      }
    })
  }

  ngOnInit() {
    this.refresh();
  }
}
