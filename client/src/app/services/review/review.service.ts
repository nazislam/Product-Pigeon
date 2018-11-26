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
    return this.http.get('http://localhost:3000/getproduct/:id', { headers: headers });
  }

  postReview(review) {
    let headers = new HttpHeaders();
    headers.append('Content-Type', 'application/json');
    return this.http.post('http://localhost:3000/api/post/review', review, { headers: headers });
  }

  postProduct(post) {
    let headers = new HttpHeaders();
    headers.append('Content-Type', 'application/json');
    return this.http.post('http://localhost:3000/api/post/product', post, { headers: headers });
  }

}
