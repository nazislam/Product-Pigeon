import { Component } from '@angular/core';
import { Router }  from '@angular/router';
import { ReviewService } from '../../services/review/review.service';
import { RegisterService } from '../../services/register/register.service';

@Component({
  selector: 'app-post',
  templateUrl: './post.component.html',
  styleUrls: ['./post.component.css']
})

export class PostComponent {
  userId: number;
  title: string;
  product: string;
  description: string;
  rating: number;
  // post: any;

  constructor(
    private router:Router,
    private reviewService:ReviewService,
    private registerService:RegisterService
  ) { }

  onReviewSubmit() {
    const userId = this.registerService.getUserId();
    console.log('userId:', userId);
    let post = {
      userId: userId,
      title: this.title,
      product: this.product,
      description: this.description,
      rating: this.rating
    };
    console.log('POST:', post);
    this.reviewService.postReview(post)
      .subscribe(
        (data) => console.log(data),
        (err) => console.log(err)
      );
    this.router.navigate(['/profile']);
  }

}
