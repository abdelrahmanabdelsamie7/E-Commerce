import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-make-order',
  templateUrl: './make-order.component.html',
  styleUrls: ['./make-order.component.css'],
})
export class MakeOrderComponent {
  id!: any;
  details!: any;
  phone!: any;
  city!: any;
  userId!: any;
  constructor(
    private __HttpClient: HttpClient,
    private __ActivatedRoute: ActivatedRoute,
    private __Router: Router
  ) {
    this.id = this.__ActivatedRoute.snapshot.params?.['id'];
    console.log(this.id);
  }

  confirmOrder() {
    console.log(this.id);
    this.__HttpClient
      .post(
        `https://ecommerce.routemisr.com/api/v1/orders/${this.id}`,
        {
          shippingAddress: {
            details: this.details,
            phone: this.phone,
            city: this.city,
          },
        },
        { headers: { token: `${localStorage.getItem('token')}` } }
      )
      .subscribe((data: any) => {
        console.log(data);
        this.userId = data.data.user;
        console.log(this.userId);
        localStorage.setItem('userId', this.userId);
      });
    this.__Router.navigateByUrl(`/MyOrders`);
  }
  checkOut(){
    
  }
}
