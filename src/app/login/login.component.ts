import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {
  constructor(
    private router: Router
  ) { }

  email: string = "";
  password: string = "";

  login() {
    if (this.email == "harundemircioglu@gmail.com" && this.password == "harun123") {
      this.router.navigate(['/dashboard']);
    }
    else {
      alert("Hatalı kullanıcı adı veya şifre.");
    }
  }

  ngOnInit() {
    const signUpButton = document.getElementById('signUp') as HTMLElement | null;
    const signInButton = document.getElementById('signIn') as HTMLElement | null;
    const container = document.getElementById('container') as HTMLElement | null;

    signUpButton?.addEventListener('click', () => {
      container?.classList.add("right-panel-active");
    });

    signInButton?.addEventListener('click', () => {
      container?.classList.remove("right-panel-active");
    });
  }
}
