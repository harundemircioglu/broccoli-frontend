import { Component, OnInit } from '@angular/core';
import { AuthService } from 'src/core/services/auth/auth.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss']
})
export class NavbarComponent implements OnInit {

  IsLoggedIn: boolean = false;

  constructor(
    private authService: AuthService,
    public router: Router
  ) { }

  logout() {
    this.authService.logOut();
    this.IsLoggedIn = false;
    this.router.navigate(['/']);
  }

  ngOnInit() {
    this.authService.currentUser.subscribe(user => {
      this.IsLoggedIn = user !== null;
    })
  }
}
