import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ReviewService } from '../../services/review/review.service';
import { RegisterService } from '../../services/register/register.service';
import { Router }  from '@angular/router';

@Component({
  selector: 'app-comment',
  templateUrl: './comment.component.html',
  styleUrls: ['./comment.component.css']
})
export class CommentComponent implements OnInit {
  private routeSub:any;
  reviewId: string;
  userId: string;
  description: string;

  constructor(
    private route: ActivatedRoute,
    private reviewService: ReviewService,
    private registerService: RegisterService,
    private router: Router
  ) { }

  ngOnInit() {
    this.routeSub = this.route.params.subscribe(params => {
      console.log(params);
      this.reviewId = params['reviewId']; 
      this.userId = params['userId']; 
      console.log(this.reviewId);
      console.log(this.userId);
    });
  }

  onPostComment() {
    let comment = {
      userId: parseInt(this.registerService.getUserId()),
      reviewId: this.reviewId,
      description: this.description,
    };
    console.log(comment);
  
  }

}
