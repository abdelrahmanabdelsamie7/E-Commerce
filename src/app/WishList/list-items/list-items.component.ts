import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';

@Component({
  selector: 'app-list-items',
  templateUrl: './list-items.component.html',
  styleUrls: ['./list-items.component.css'],
})
export class ListItemsComponent {
  WishListOfItems!: any[];
  itemCount!: any;
  constructor(private __HttpClient: HttpClient) {
    this.__HttpClient
      .get('https://ecommerce.routemisr.com/api/v1/wishlist', {
        headers: { token: `${localStorage.getItem('token')}` },
      })
      .subscribe((data: any) => {
        console.log(data.data);
        this.WishListOfItems = data.data;
        this.itemCount = data.count;
      });
  }
  removeItem(id: any) {
    this.__HttpClient
      .delete(`https://ecommerce.routemisr.com/api/v1/wishlist/${id}`, {
        headers: { token: `${localStorage.getItem('token')}` }
      })
      .subscribe((data: any) => {
        console.log(data);
      });
    setTimeout(() => {
      window.location.replace('http://localhost:4200/WishList');
    }, 500);
  }
}
