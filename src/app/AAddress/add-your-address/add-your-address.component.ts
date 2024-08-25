import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { Address } from 'src/app/Model/address';

@Component({
  selector: 'app-add-your-address',
  templateUrl: './add-your-address.component.html',
  styleUrls: ['./add-your-address.component.css'],
})
export class AddYourAddressComponent {
  address = new Address();
  constructor(private __HttpClient: HttpClient, private __Router: Router) {}
  submitInfo() {
    this.__HttpClient
      .post('https://ecommerce.routemisr.com/api/v1/addresses', this.address, {
        headers: { token: `${localStorage.getItem('token')}` },
      })
      .subscribe((data: any) => {
        console.log(data);
        this.__Router.navigateByUrl('/MyAddresses');
      });
  }
}
