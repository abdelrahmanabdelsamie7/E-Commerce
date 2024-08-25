import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Observable } from 'rxjs';
import { Cart } from 'src/app/Model/cart';

@Component({
  selector: 'app-show-product',
  templateUrl: './show-product.component.html',
  styleUrls: ['./show-product.component.css'],
})
export class ShowProductComponent {
  id!: any;
  Product!: any;
  token = localStorage.getItem('token');
  cart = new Cart();
  constructor(
    private __HttpClient: HttpClient,
    private __ActivatedRoute: ActivatedRoute,
    private __Router: Router
  ) {
    this.id = this.__ActivatedRoute.snapshot.params?.['id'];
    this.__HttpClient
      .get(`https://ecommerce.routemisr.com/api/v1/products/${this.id}`)
      .subscribe((data: any) => {
        // console.log(data.data);
        this.Product = data.data;
      });
  }
  AddToCart(id: any) {
    // console.log(JSON.stringify(this.token));

    this.__HttpClient
      .post(
        'https://ecommerce.routemisr.com/api/v1/cart',
        {
          productId: id,
        },
        { headers: { token: `${this.token}` } }
      )
      .subscribe((data: any) => {
        console.log(data);
      });
    this.__Router.navigateByUrl('/UserCart');
  }
  AddToWishList(id: any) {
    this.__HttpClient
      .post(
        'https://ecommerce.routemisr.com/api/v1/wishlist',
        {
          productId: id,
        },
        { headers: { token: `${this.token}` } }
      )
      .subscribe((data: any) => {
        console.log(data);
      });
    this.__Router.navigateByUrl('/WishList');
  }
}
