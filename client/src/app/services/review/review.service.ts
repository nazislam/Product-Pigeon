import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})

export class ReviewService {

  constructor(
    private http: HttpClient
  ) { }

  getReview() {
    let headers = new HttpHeaders();
    return this.http.get('http://localhost:3000/getreview', { headers: headers });
  }

  getProduct() {
    let headers = new HttpHeaders();
    return this.http.get('http://localhost:3000/getproduct', { headers: headers });
  }

  getProductById(id) {
    let headers = new HttpHeaders();
    headers.append('Content-Type', 'application/json');
    return this.http.get('http://localhost:3000/getproduct/'+ id, { headers: headers });
  }

  getReviewByProductId(id) {
    let headers = new HttpHeaders();
    headers.append('Content-Type', 'application/json');
    return this.http.get('http://localhost:3000/getreview/product/'+ id, { headers: headers });
  }

  // for productOwner, need to change naming
  postReview(review) {
    let headers = new HttpHeaders();
    headers.append('Content-Type', 'application/json');
    return this.http.post('http://localhost:3000/api/post/review', review, { headers: headers });
  }

  // for advertisers
  submitReview(review) {
    let headers = new HttpHeaders();
    headers.append('Content-Type', 'application/json');
    return this.http.post('http://localhost:3000/review/submit', review, { headers: headers });
    // return this.http.post('http://localhost:3000/review/submit', review, { headers: headers });
  }

  postProduct(post) {
    let headers = new HttpHeaders();
    headers.append('Content-Type', 'application/json');
    return this.http.post('http://localhost:3000/api/post/product', post, { headers: headers });
  }

  incrementRating(id) {
    let headers = new HttpHeaders();
    return this.http.get('http://localhost:3000/review/rating/increment/' + id, { headers: headers });
  }

  decrementRating(id) {
    let headers = new HttpHeaders();
    return this.http.get('http://localhost:3000/review/rating/decrement/' + id, { headers: headers });
  }

}
