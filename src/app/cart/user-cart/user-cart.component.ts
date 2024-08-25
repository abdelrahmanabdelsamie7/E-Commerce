import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
@Component({
  selector: 'app-user-cart',
  templateUrl: './user-cart.component.html',
  styleUrls: ['./user-cart.component.css'],
})
export class UserCartComponent {
  numOfCartItems!: any;
  totalCartPrice!: any;
  productQuantity!: any;
  cartItems!: any[];
  numbers: number[] = [];
  newCount!: any;
  CartId!: any;

  constructor(private __HttpClient: HttpClient, private __Router: Router) {
    this.__HttpClient
      .get('https://ecommerce.routemisr.com/api/v1/cart', {
        headers: { token: `${localStorage.getItem('token')}` },
      })
      .subscribe((data: any) => {
        // console.log(data.data._id);
        this.CartId = data.data._id;
        // window.location.reload();
        this.totalCartPrice = data.data.totalCartPrice;
        this.cartItems = data.data.products;
        this.numOfCartItems = data.numOfCartItems;

        this.cartItems.forEach((element) => {
          // console.log(element.product.quantity);

          this.productQuantity = element.product.quantity;
          for (let i = 1; i <= this.productQuantity; i++) {
            this.numbers.push(i);
          }
        });
      });
  }

  removeItem(id: any) {
    console.log(id);
    this.__HttpClient
      .delete(`https://ecommerce.routemisr.com/api/v1/cart/${id}`, {
        headers: { token: `${localStorage.getItem('token')}` },
      })
      .subscribe((data: any) => {
        console.log(data);
        // this.__Router.navigateByUrl('ListProducts');
        setTimeout(() => {
          window.location.replace('http://localhost:4200/UserCart');
        }, 1000);
      });
  }
  removeAllItems() {
    this.__HttpClient
      .delete('https://ecommerce.routemisr.com/api/v1/cart', {
        headers: { token: `${localStorage.getItem('token')}` },
      })
      .subscribe((data: any) => {
        console.log(data);
      });
    setTimeout(() => {
      window.location.replace('http://localhost:4200/UserCart');
    }, 1000);
  }
  updateItem(id: any) {
    this.__HttpClient
      .put(
        `https://ecommerce.routemisr.com/api/v1/cart/${id}`,
        {
          count: this.newCount,
        },
        { headers: { token: `${localStorage.getItem('token')}` } }
      )
      .subscribe((data: any) => {
        console.log(data);
      });
    setTimeout(() => {
      window.location.replace('http://localhost:4200/UserCart');
    }, 500);
  }
}
