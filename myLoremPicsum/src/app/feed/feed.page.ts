import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
@Component({
  selector: 'app-feed',
  templateUrl: './feed.page.html',
  styleUrls: ['./feed.page.scss'],
})
export class FeedPage implements OnInit {
  test: Date = new Date();
  constructor(public http: HttpClient) { }

  ngOnInit() {
    console.log(this.http.get('https://picsum.photos/v2/list?page=2&limit=100'));
  }

}
