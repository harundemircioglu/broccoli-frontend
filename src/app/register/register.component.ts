import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { RegisterRequest } from 'src/core/models/request/register-request.model';
import { User } from 'src/core/models/user.model';
import { AuthService } from 'src/core/services/auth/auth.service';
import { ResponseStatus } from 'src/core/models/response/base-response.model';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss']
})
export class RegisterComponent implements OnInit {

  registerRequest: RegisterRequest = <RegisterRequest>{};

  currentUser: User | null = null;

  constructor(
    private router: Router,
    private authService: AuthService
  ) { }

  async register() {
    const status = await this.authService.register(this.registerRequest);

    if (status == ResponseStatus.Ok) {
      this.router.navigate(['/']);
    } else {
      console.log(ResponseStatus.Error);
    }
  }


  //GOTO LOGIN PAGE
  login() {
    this.router.navigate(['/login']);
  }

  ngOnInit() {
    const container = document.getElementById('container') as HTMLElement | null;
    container?.classList.add("right-panel-active");
  }
}
