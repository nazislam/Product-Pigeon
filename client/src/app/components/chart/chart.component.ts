import { Component, OnInit } from '@angular/core';
import { ReviewService } from '../../services/review/review.service';
import { RegisterService } from '../../services/register/register.service';

@Component({
  selector: 'app-chart',
  templateUrl: './chart.component.html',
  styleUrls: ['./chart.component.css']
})
export class ChartComponent implements OnInit {
  userId: any;
  reviewList=[] ;
  timestamp = [];

  constructor(
    private reviewService:ReviewService,
    private registerService:RegisterService
  ) { }

  ngOnInit() {
    this.userId = this.registerService.getUserId();
    console.log(this.userId);
    this.reviewService.getReviewByUserId(this.userId)
      .subscribe(
        (result) => {
            let q = result['message'];
            for (let i = 0; i < q.length; i++) {
              this.timestamp.push(q[i].timestamp);
            }
            console.log('Array:', this.timestamp);
            console.log('singleitem:', this.timestamp[2]);
            console.log('parsed month:', parseInt(this.timestamp[2].slice(5, 7)));
        }
      );
  }

}
