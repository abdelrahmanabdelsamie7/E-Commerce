import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';

@Component({
  selector: 'app-all-users',
  templateUrl: './all-users.component.html',
  styleUrls: ['./all-users.component.css'],
})
export class AllUsersComponent {
  AllUsers!: any[];
  constructor(private __HttpClient: HttpClient) {
    this.__HttpClient
      .get('https://ecommerce.routemisr.com/api/v1/users')
      .subscribe((data: any) => {
        // console.log(data.users);
        this.AllUsers = data.users;
      });
  }
}
