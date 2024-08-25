import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';

@Component({
  selector: 'app-list-address',
  templateUrl: './list-address.component.html',
  styleUrls: ['./list-address.component.css'],
})
export class ListAddressComponent {
  results!: any;
  Addresses!: any[];
  details!: any;
  phone!: any;
  city!: any;
  constructor(private __HttpClient: HttpClient) {
    this.__HttpClient
      .get('https://ecommerce.routemisr.com/api/v1/addresses', {
        headers: { token: `${localStorage.getItem('token')}` },
      })
      .subscribe((data: any) => {
        console.log(data.data);
        this.results = data.results;
        this.Addresses = data.data;
      });
  }
  removeAddress(id: any) {
    this.__HttpClient
      .delete(`https://ecommerce.routemisr.com/api/v1/addresses/${id}`, {
        headers: { token: `${localStorage.getItem('token')}` },
      })
      .subscribe((data: any) => {
        console.log(data);
      });
    setTimeout(() => {
      window.location.replace('http://localhost:4200/MyAddresses');
    }, 500);
  }
}
