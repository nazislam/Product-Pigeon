import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class CommentService {

  constructor(
    private http: HttpClient
  ) { }

  submitComment(comment) {
    let headers = new HttpHeaders();
    headers.append('Content-Type', 'application/json');
    return this.http.post('http://localhost:3000/review/add/comment/' + comment.reviewId + '/' + comment.userId + '/' + comment.productId, comment, { headers: headers });
  }

  getCommentByProductId(productId) {
    let headers = new HttpHeaders();
    return this.http.get('http://localhost:3000/getcomment/'+ productId, { headers: headers });
  }

}
