import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { map, tap } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})

export class ReviewService {
  // reviewList: any;

  constructor(
    private http: HttpClient
  ) { }


  getReview() {
    let headers = new HttpHeaders();
    headers.append('Content-Type', 'application/json');
    return this.http.get('http://localhost:3000/getreview', { headers: headers });
  }


}
