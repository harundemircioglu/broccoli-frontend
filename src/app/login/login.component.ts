import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { LoginRequest } from 'src/core/models/request/login-request.model';
import { RegisterRequest } from 'src/core/models/request/register-request.model';
import { AuthService } from 'src/core/services/auth/auth.service';
import { ResponseStatus } from 'src/core/models/response/base-response.model';
import { User } from 'src/core/models/user.model';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  loginRequest: LoginRequest = <LoginRequest>{};

  currentUser: User | null = null;

  constructor(
    private router: Router,
    private authService: AuthService
  ) { }

  async login() {
    const status = await this.authService.login(this.loginRequest);
    if (status == ResponseStatus.Ok) {

      //kullanıcı tipine göre rota işlemleri
      this.authService.currentUser.subscribe(user => {
        this.currentUser = user;
        if (this.currentUser?.userType === 0) {
          this.router.navigate(['admin/dashboard']);
        }
        else {
          this.router.navigate(['/']);
        }
      })
    }
  }


  //GOTO REGISTER PAGE
  register() {
    this.router.navigate(['/register']);
  }

  ngOnInit() {
    const container = document.getElementById('container') as HTMLElement | null;
    container?.classList.remove("right-panel-active");
  }
}
