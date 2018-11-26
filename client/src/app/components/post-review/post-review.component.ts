import { Component, OnInit, OnDestroy } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ReviewService } from '../../services/review/review.service';

@Component({
  selector: 'app-post-review',
  templateUrl: './post-review.component.html',
  styleUrls: ['./post-review.component.css']
})
export class PostReviewComponent implements OnInit {
  private routeSub:any;
  slug: string;
  singleProduct: any;
  constructor(
    private route: ActivatedRoute,
    private reviewService: ReviewService
  ) { }

  ngOnInit() {
    this.routeSub = this.route.params.subscribe(params => {
      console.log(params);
      this.slug = params['id'];
    });
    this.reviewService.getProductById(this.slug)
      .subscribe(
        (result) => { 
          console.log('result:', result);
          this.singleProduct = result;
        }
      );
  }

  ngOnDestroy() {
    this.routeSub.unsubscribe();
  }

}
