import { Component, OnInit } from '@angular/core';
import { AuthService } from 'src/core/services/auth/auth.service';
import { Router } from '@angular/router';
import { User } from 'src/core/models/user.model';


@Component({
  selector: 'app-footbar',
  templateUrl: './footbar.component.html',
  styleUrls: ['./footbar.component.scss']
})
export class FootbarComponent implements OnInit {

  IsLoggedIn: boolean = false;
  currentUser: User | null = null;

  constructor(
    private authService: AuthService,
    public router: Router
  ) { }

  home() {
    this.router.navigate(['/']);
  }

  newPost() {
    this.authService.currentUser.subscribe(user => {
      if (user) {
        this.currentUser = user;
        this.router.navigate(['/new-post'])
      } else {
        this.router.navigate(['/login']);
      }
    });
  }

  profile() {
    this.authService.currentUser.subscribe(user => {
      if (user) {
        this.currentUser = user;
        this.router.navigate(['/profile']);
      } else {
        this.router.navigate(['/login']);
      }
    });
  }

  logout() {
    this.authService.logOut();
    this.IsLoggedIn = false;
    this.router.navigate(['/']);
  }

  refresh() {
    this.authService.currentUser.subscribe(user => {
      this.IsLoggedIn = user !== null;
    });
  }

  ngOnInit() {
    this.refresh();
  }
}
