import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { User } from 'src/app/Model/user';

@Component({
  selector: 'app-forget-password',
  templateUrl: './forget-password.component.html',
  styleUrls: ['./forget-password.component.css'],
})
export class ForgetPasswordComponent {
  user = new User();
  token = localStorage.getItem('token');

  constructor(private __HttpClient: HttpClient, private __Router: Router) {
    console.log(this.token);
  }
  sendCode() {
    this.__HttpClient
      .post(
        'https://ecommerce.routemisr.com/api/v1/auth/forgotPasswords',
        this.user,
        { headers: { Authorization: 'Bearer ' + this.token } }
      )
      .subscribe((data: any) => {
        console.log(data);
      });
      this.__Router.navigateByUrl("/ResetCode")
  }
}
