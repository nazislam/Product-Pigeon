import { Component, OnInit } from '@angular/core';
import { ReviewService } from '../../services/review/review.service';
import { RegisterService } from '../../services/register/register.service';

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.css']
})
export class ProductsComponent implements OnInit {
  productList: any;
  productIds = [];
  userIsProductOwner = true;
  userId: string;


  constructor(
    private reviewService:ReviewService,
    private registerService:RegisterService
  ) { }

  ngOnInit() {
    this.userId = parseInt(this.registerService.getUserId());
    console.log('userid: ', this.userId);
    console.log('userid type: ', typeof this.userId);
    if (this.registerService.getUserType() === 'advertiser') {
      this.userIsProductOwner = false;
    }
    console.log('userIsProductOwner??', this.userIsProductOwner);
    this.reviewService.getProductByUserId(this.userId)
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
