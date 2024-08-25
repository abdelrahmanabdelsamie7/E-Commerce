import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { User } from 'src/app/Model/user';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css'],
})
export class SignupComponent {
  msg = '';
  user = new User();
  constructor(private __HttpClient: HttpClient, private __Router: Router) {}
  submit() {
    this.__HttpClient
      .post('https://ecommerce.routemisr.com/api/v1/auth/signup', this.user)
      .subscribe((data: any) => {
        console.log(data);
        this.msg = 'SignUp Successfuly !';
        this.__Router.navigateByUrl('/SignIn');
      });
  }
}
