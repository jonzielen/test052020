import { Component, ViewEncapsulation, OnInit } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  encapsulation: ViewEncapsulation.None, // removes the _ngcontent-vom added to css styling
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  title = 'Welcome to my test page!!!';
  year;

  constructor() {}

  ngOnInit() {
    const date = new Date();
    this.year = date.getFullYear();
  }
}
