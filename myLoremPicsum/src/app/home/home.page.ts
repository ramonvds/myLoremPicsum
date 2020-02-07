import { Component, OnInit } from '@angular/core';
import * as $ from 'jquery'
import Swal from 'sweetalert2';
import { Router } from '@angular/router';
import { HttpClient } from '@angular/common/http';
//import 'rxjs/add/operator/map';

@Component({
  selector: 'app-home',
  templateUrl: './home.page.html',
  styleUrls: ['./home.page.scss'],
})
export class HomePage implements OnInit {
  test: Date = new Date();
  images: any;

  constructor(public http: HttpClient) { }

  ngOnInit() {
    console.log(this.http.get('https://picsum.photos/v2/list?page=2&limit=100'));
  }
  
  

}
