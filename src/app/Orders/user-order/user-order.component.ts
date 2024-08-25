import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';

@Component({
  selector: 'app-user-order',
  templateUrl: './user-order.component.html',
  styleUrls: ['./user-order.component.css'],
})
export class UserOrderComponent {
  MyOrders!: any[];
  constructor(private __HttpClient: HttpClient) {
    this.__HttpClient
      .get(
        `https://ecommerce.routemisr.com/api/v1/orders/user/${localStorage.getItem(
          'userId'
        )}`,
        { headers: { token: `${localStorage.getItem('token')}` } }
      )
      .subscribe((data: any) => {
        console.log(data);
        this.MyOrders = data;
      });
  }
}
