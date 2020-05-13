import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-page-three',
  templateUrl: './page-three.component.html',
  styleUrls: ['./page-three.component.scss']
})
export class PageThreeComponent implements OnInit {

  product;

  constructor(
    private route: ActivatedRoute
  ) { }

  ngOnInit(): void {
    console.log('this: ', this);

    this.route.paramMap.subscribe(params => {
      this.product = params.get('productId');
    });
    
  }

}
