import { Component, OnInit } from '@angular/core';
import { loginModel } from './login.model';
import { LoginService } from './login.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss'],
  providers: [LoginService]
})

export class LoginComponent implements OnInit {
  loginData = new loginModel();

  constructor(
    private service: LoginService, 
    private router: Router) { }

  ngOnInit() {
  }

  submit(): void{
    console.log('login data', this.loginData);
    this.service.login(this.loginData)
      .subscribe(response => {
        if(response.auth){
          sessionStorage.setItem('authToken', response.token);
          this.router.navigate(['/home']);
          return
        }

        alert('login failed.')
      }, error => {
        console.log(error);
      });
  }

  goToRegister(): void {
    this.router.navigate(['/register']);
  }
}

