import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-show-all-sub-categories',
  templateUrl: './show-all-sub-categories.component.html',
  styleUrls: ['./show-all-sub-categories.component.css'],
})
export class ShowAllSubCategoriesComponent {
  id!: any;
  AllSubCategories!: any[];
  constructor(
    private __HttpClient: HttpClient,
    private __ActivatedRoute: ActivatedRoute
  ) {
    this.id = this.__ActivatedRoute.snapshot.params?.['id'];
    this.__HttpClient
      .get(
        `https://ecommerce.routemisr.com/api/v1/categories/${this.id}/subcategories`
      )
      .subscribe((data: any) => {
        console.log(data.data);
        this.AllSubCategories = data.data;
      });
  }
}
