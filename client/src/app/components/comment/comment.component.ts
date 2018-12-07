import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ReviewService } from '../../services/review/review.service';
import { RegisterService } from '../../services/register/register.service';
import { CommentService } from '../../services/comment/comment.service';
import { Router }  from '@angular/router';

@Component({
  selector: 'app-comment',
  templateUrl: './comment.component.html',
  styleUrls: ['./comment.component.css']
})
export class CommentComponent implements OnInit {
  private routeSub:any;
  reviewId: string;
  productId: string;
  userId: string;
  description: string;

  constructor(
    private route: ActivatedRoute,
    private reviewService: ReviewService,
    private registerService: RegisterService,
    private commentService: CommentService,
    private router: Router
  ) { }

  ngOnInit() {
    this.routeSub = this.route.params.subscribe(params => {
      console.log(params);
      this.reviewId = params['reviewId']; 
      this.userId = params['userId']; 
      this.productId = params['productId']; 
      console.log(this.reviewId);
      console.log(this.userId);
      console.log(this.productId);
    });
  }

  onPostComment() {
    let comment = {
      userId: parseInt(this.registerService.getUserId()),
      reviewId: this.reviewId,
      productId: this.productId,
      description: this.description,
    };
    console.log(comment);
    this.commentService.submitComment(comment)
      .subscribe(
        (result) => {
          console.log(result);
        }
      );
    this.router.navigate(['profile-user']);
  
  }

}
