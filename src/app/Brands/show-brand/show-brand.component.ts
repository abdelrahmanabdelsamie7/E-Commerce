import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-show-brand',
  templateUrl: './show-brand.component.html',
  styleUrls: ['./show-brand.component.css'],
})
export class ShowBrandComponent {
  id!: any;
  Brand!: any;
  constructor(
    private __HttpClient: HttpClient,
    private __ActivatedRoute: ActivatedRoute
  ) {
    this.id = this.__ActivatedRoute.snapshot.params?.['id'];
    this.__HttpClient
      .get(`https://ecommerce.routemisr.com/api/v1/brands/${this.id}`)
      .subscribe((data: any) => {
        console.log(data.data);
        this.Brand = data.data;
      });
  }
}
