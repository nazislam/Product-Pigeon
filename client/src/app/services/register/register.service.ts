import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { map, tap } from 'rxjs/operators';
// import { Observable } from 'rxjs/Observable';
// import { User } from '../../models/user.model';

@Injectable({
  providedIn: 'root'
})
export class RegisterService {
  user: any;

  constructor(
    private http: HttpClient
  ) { }

  registerUser(user) {
    let headers = new HttpHeaders();
    headers.append('Content-Type', 'application/json');
    return this.http.post('http://localhost:3000/register', user, { headers: headers });
  }

    /*
  postUser(newUser: User): Observable<User> {
    return this.http.post<User>('http://localhost:3000/register/', newUser, {
      headers: new HttpHeaders({
        'Content-Type': 'application/json'
      })
    });
  }
     */

}
