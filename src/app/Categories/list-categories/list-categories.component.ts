import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-list-categories',
  templateUrl: './list-categories.component.html',
  styleUrls: ['./list-categories.component.css'],
})
export class ListCategoriesComponent {

  AllCategories!: any[];

  constructor(
    private __HttpClient: HttpClient,
    private __ActivatedRoute: ActivatedRoute
  ) {
    this.__HttpClient
      .get('https://ecommerce.routemisr.com/api/v1/categories')
      .subscribe((data: any) => {
        // console.log(data.data);
        this.AllCategories = data.data;
      });
  }
}
