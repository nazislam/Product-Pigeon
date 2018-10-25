import { Component, OnInit } from '@angular/core';
import { ReviewService } from '../../services/review/review.service';

@Component({
  selector: 'app-feed',
  templateUrl: './feed.component.html',
  styleUrls: ['./feed.component.css']
})
export class FeedComponent implements OnInit {
  reviewList: any;

  constructor(
    private reviewService:ReviewService
  ) { }

  ngOnInit() {
    this.reviewService.getReview()
      .subscribe((result) => {
        this.reviewList = result['message'];
        console.log(this.reviewList);
      });
  }

}

/*


import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-feed',
  templateUrl: './feed.component.html',
  styleUrls: ['./feed.component.css']
})
export class FeedComponent implements OnInit {
  reviewList: any;

  constructor()
    private reviewService:ReviewService
  { }


  ngOnInit() {
    this.reviewService.getReview()
      .subscribe((result) => {
        this.reviewList = result['message'];
        console.log(this.reviewList);
      });
  }
}

*/
