import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';

@Component({
  selector: 'app-list-products',
  templateUrl: './list-products.component.html',
  styleUrls: ['./list-products.component.css'],
})
export class ListProductsComponent {
  AllProducts!: any[];
  WomanFashion: any[] = [];
  constructor(private __HttpClient: HttpClient) {
    this.__HttpClient
      .get('https://ecommerce.routemisr.com/api/v1/products')
      .subscribe((data: any) => {
        console.log(data.data);
        this.AllProducts = data.data;
        data.data.forEach((element: any) => {
          if (element.category._id == '6439d58a0049ad0b52b9003f') {
            this.WomanFashion.push(element);
            console.log(this.WomanFashion);
          }
        });
      });
  }
}
