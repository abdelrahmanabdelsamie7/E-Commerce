import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { User } from 'src/app/Model/user';

@Component({
  selector: 'app-reset-password',
  templateUrl: './reset-password.component.html',
  styleUrls: ['./reset-password.component.css'],
})
export class ResetPasswordComponent {
  user = new User();
  email!: any;
  newPassword!: any;
  token = localStorage.getItem('token');

  constructor(private __HttpClient: HttpClient, private __Router: Router) {
    console.log(this.token);
  }
  submitNewPassword() {
    this.__HttpClient
      .put(
        'https://ecommerce.routemisr.com/api/v1/auth/resetPassword',
        {
          email: this.email,
          newPassword: this.newPassword,
        },
        { headers: { Authorization: 'Bearer ' + this.token } }
      )
      .subscribe((data: any) => {
        console.log(data);
        localStorage.removeItem('token');
        localStorage.setItem('token', data.token);
        this.__Router.navigateByUrl('/User');
      });
  }
}
