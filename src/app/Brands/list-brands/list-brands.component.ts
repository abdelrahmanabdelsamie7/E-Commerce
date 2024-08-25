import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';

@Component({
  selector: 'app-list-brands',
  templateUrl: './list-brands.component.html',
  styleUrls: ['./list-brands.component.css'],
})
export class ListBrandsComponent {
  AllBrands!: any[];
  constructor(private __HttpClient: HttpClient) {
    this.__HttpClient
      .get('https://ecommerce.routemisr.com/api/v1/brands')
      .subscribe((data: any) => {
        // console.log(data.data);
        this.AllBrands = data.data;
      });
  }
}
