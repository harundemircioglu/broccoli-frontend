import { Component, OnInit } from '@angular/core';
import { AuthService } from 'src/core/services/auth/auth.service';
import { User } from 'src/core/models/user.model';
import { ResponseStatus } from 'src/core/models/response/base-response.model';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss']
})
export class NavbarComponent implements OnInit {

  IsLoggedIn: boolean = false;

  constructor(
    private authService: AuthService,
  ) { }

  logout() {
    this.authService.logOut();
  }

  ngOnInit() {
    this.authService.currentUser.subscribe(user => {
      this.IsLoggedIn = user !== null;
    })
  }
}
