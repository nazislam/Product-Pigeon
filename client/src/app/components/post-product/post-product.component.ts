import { Component, OnInit } from '@angular/core';
import { Router }  from '@angular/router';
import { ReviewService } from '../../services/review/review.service';
import { RegisterService } from '../../services/register/register.service';

@Component({
  selector: 'app-post-product',
  templateUrl: './post-product.component.html',
  styleUrls: ['./post-product.component.css']
})
export class PostProductComponent implements OnInit {
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

  ngOnInit() {
  }

  onProductSubmit() {
    const userId = this.registerService.getUserId();
    let post = {
      userId: userId,
      title: this.title,
      product: this.product,
      description: this.description
    };
    console.log('PRODUDCT POST:', post);
    this.reviewService.postProduct(post)
      .subscribe(
        (data) => console.log(data),
        (err) => console.log(err)
      );
    this.router.navigate(['/profile-productOwner']);
  }


}
