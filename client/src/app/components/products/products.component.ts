import { Component, OnInit } from '@angular/core';
import { ReviewService } from '../../services/review/review.service';

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.css']
})
export class ProductsComponent implements OnInit {
  productList: any;

  constructor(
    private reviewService:ReviewService
  ) { }

  ngOnInit() {
    this.reviewService.getProduct()
      .subscribe((result) => {
        this.productList = result['message'];
        console.log(this.productList);
      });
  }

}
