import { Component, OnInit, OnDestroy } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ReviewService } from '../../services/review/review.service';
import { RegisterService } from '../../services/register/register.service';
import { Router }  from '@angular/router';

@Component({
  selector: 'app-post-review',
  templateUrl: './post-review.component.html',
  styleUrls: ['./post-review.component.css']
})
export class PostReviewComponent implements OnInit {
  panelOpenState = false;
  reviewList = [];
  private routeSub:any;
  slug: string;
  singleProduct = {
      title: '',
      description: '',
      rating: 0,
      productId: '',
      userId: ''
  }
  title: string;
  description: string;
  rating: string;
  reviewrating: number;
  userId = this.registerService.getUserId();

  constructor(
    private route: ActivatedRoute,
    private reviewService: ReviewService,
    private registerService: RegisterService,
    private router: Router
  ) { }

  ngOnInit() {
    this.routeSub = this.route.params.subscribe(params => {
      console.log(params);
      this.slug = params['id']; // productId
    });
    this.reviewService.getProductById(this.slug)
      .subscribe(
        (result) => {
          this.singleProduct = result['message'][0];
          console.log('singleProduct result:', this.singleProduct);
        }
      )
    this.reviewService.getReviewByProductId(this.slug)
      .subscribe(
        (result) => {
          this.reviewList = result['message'];
          console.log('ReviewList:', this.reviewList);
        }
      )
  }

  onPostReview() {
    let review = {
      title: this.title,
      description: this.description,
      rating: parseInt(this.rating),
      productId: parseInt(this.slug),
      userId: parseInt(this.registerService.getUserId()),
      reviewrating: 0
      // timestamp: new Date()
    }
    console.log(review);
    this.reviewService.submitReview(review)
      .subscribe(
        (result) => {
          console.log(result);
        }
      );
    this.router.navigate(['profile-user']);
  }

  onLikeClicked(reviewId, userId) {
    this.reviewService.incrementRating(reviewId, userId).subscribe();
  }

  onDislikeClicked(reviewId, userId) {
    this.reviewService.decrementRating(reviewId, userId).subscribe();
  }

  onFlagClicked(reviewId, userId) {
    this.reviewService.markFlagged(reviewId, userId).subscribe();
  }

    /*
  ngOnDestroy() {
    this.routeSub.unsubscribe();
  }
     */

}
