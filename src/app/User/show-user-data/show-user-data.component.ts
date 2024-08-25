import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-show-user-data',
  templateUrl: './show-user-data.component.html',
  styleUrls: ['./show-user-data.component.css'],
})
export class ShowUserDataComponent {
  token!: any;
  userName!: any;
  email!: any;
  constructor(private __HttpClient: HttpClient, private __Router: Router) {
    this.token = window.localStorage.getItem('token');
    console.log(this.token);
    this.userName = localStorage.getItem('name');
    this.email = localStorage.getItem('email');
  }
  signOut() {
    window.localStorage.clear();
    this.__Router.navigateByUrl('');
  }
}
