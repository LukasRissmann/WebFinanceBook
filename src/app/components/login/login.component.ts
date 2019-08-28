import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

import { AuthService } from 'src/app/_service/auth.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  username:string = '';
  password:string = '';
  invalidLogin:boolean = false;
  
  constructor(private router: Router,
    private loginservice: AuthService) {  }

  ngOnInit() {
  }

  checkLogin() {
    if (this.loginservice.authenticate(this.username, this.password) ) {
      this.router.navigate(['/dashboard']);
      this.invalidLogin = false;
    } else
      this.invalidLogin = true;
  }
}
