import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-reset-code',
  templateUrl: './reset-code.component.html',
  styleUrls: ['./reset-code.component.css'],
})
export class ResetCodeComponent {
  restcode!: any;
  constructor(private __HttpClient: HttpClient, private __Router: Router) {}
  resetCode() {
    this.__HttpClient
      .post(
        'https://ecommerce.routemisr.com/api/v1/auth/verifyResetCode',
        {
          resetCode: this.restcode,
        },
        { headers: { Authrization: 'Brear' + localStorage.getItem('token') } }
      )
      .subscribe((data: any) => {
        console.log(data);
        if (data.status == 'Success') {
          this.__Router.navigateByUrl('ResetPassword');
        }
      });
  }
}
