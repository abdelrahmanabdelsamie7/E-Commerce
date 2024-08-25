import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-show-category',
  templateUrl: './show-category.component.html',
  styleUrls: ['./show-category.component.css'],
})
export class ShowCategoryComponent {
  id!: any;
  Category!: any;

  constructor(
    private __HttpClient: HttpClient,
    private __ActivatedRoute: ActivatedRoute
  ) {
    this.id = this.__ActivatedRoute.snapshot.params?.['id'];
    this.__HttpClient
      .get(`https://ecommerce.routemisr.com/api/v1/categories/${this.id}`)
      .subscribe((data: any) => {
        // console.log(data.data);
        this.Category = data.data;
      });
  }
}
