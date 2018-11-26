import { Component, OnInit } from '@angular/core';
import { ReviewService } from '../../services/review/review.service';

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.css']
})
export class ProductsComponent implements OnInit {
  productList: any;
  productIds = [];


  constructor(
    private reviewService:ReviewService
  ) { }

  ngOnInit() {
    this.reviewService.getProduct()
      .subscribe((result) => {
        this.productList = result['message'];

        for (let i = 0; i < this.productList.length; i++) {
          this.productIds.push(this.productList[i].id);
        }

        console.log(this.productList);
        console.log(this.productIds);
      });
  }

}
