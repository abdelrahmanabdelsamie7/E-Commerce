import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { User } from 'src/app/Model/user';

@Component({
  selector: 'app-signin',
  templateUrl: './signin.component.html',
  styleUrls: ['./signin.component.css'],
})
export class SigninComponent {
  msg = '';
  user = new User();
  constructor(private __HttpClient: HttpClient, private __Router: Router) {}
  submit() {
    this.__HttpClient
      .post('https://ecommerce.routemisr.com/api/v1/auth/signin', this.user)
      .subscribe((data: any) => {
        console.log(data);
        localStorage.setItem('token', data.token);
        localStorage.setItem('email', data.user.email);
        localStorage.setItem('name', data.user.name);
        this.msg = 'Signin Successfuly !';
        this.__Router.navigateByUrl('/User');
      });
  }
}
