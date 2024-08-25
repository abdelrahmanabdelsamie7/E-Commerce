import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';

@Component({
  selector: 'app-list-sub-categories',
  templateUrl: './list-sub-categories.component.html',
  styleUrls: ['./list-sub-categories.component.css'],
})
export class ListSubCategoriesComponent {
  AllSubCategories!: any[];
  AllCategories!: any[];
  // Category!: any;
  constructor(private __HttpClient: HttpClient) {
    this.__HttpClient
      .get('https://ecommerce.routemisr.com/api/v1/subcategories')
      .subscribe((data: any) => {
        console.log(data.data);
        this.AllSubCategories = data.data;
      });
  }
}
