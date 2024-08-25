import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';

@Component({
  selector: 'app-list-all-orders',
  templateUrl: './list-all-orders.component.html',
  styleUrls: ['./list-all-orders.component.css'],
})
export class ListAllOrdersComponent {
  AllOrders!: any[];
  constructor(private __HttpClient: HttpClient) {
    this.__HttpClient
      .get('https://ecommerce.routemisr.com/api/v1/orders', {
        headers: { token: `${localStorage.getItem('token')}` },
      })
      .subscribe((data: any) => {
        console.log(data.data);
        this.AllOrders = data.data;
      });
  }
}
