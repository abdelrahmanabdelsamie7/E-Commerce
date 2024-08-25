import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-show-sub-categoey',
  templateUrl: './show-sub-categoey.component.html',
  styleUrls: ['./show-sub-categoey.component.css'],
})
export class ShowSubCategoeyComponent {
  id!: any;
  SubCategory!: any;
  AllCategories!: any[];
  constructor(
    private __HttpClient: HttpClient,
    private __ActivatedRoute: ActivatedRoute
  ) {
    this.id = this.__ActivatedRoute.snapshot.params?.['id'];
    this.__HttpClient
      .get(`https://ecommerce.routemisr.com/api/v1/subcategories/${this.id}`)
      .subscribe((data: any) => {
        console.log(data.data);
        this.SubCategory = data.data;
      });

  }
}
