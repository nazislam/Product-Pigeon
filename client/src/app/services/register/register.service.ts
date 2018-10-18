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

  loginUser(user) {
    let headers = new HttpHeaders();
    headers.append('Content-Type', 'application/json');
    console.log('in service file...')
    return this.http.post('http://localhost:3000/register/signin', user, { headers: headers });
  }

  storeUserData(user) {
    localStorage.setItem('id', user.id);
    localStorage.setItem('email', user.email);
    localStorage.setItem('password', user.password);
  }

  logout() {
    let headers = new HttpHeaders();
    headers.append('Content-Type', 'application/json');
    return this.http.get('http://localhost:3000/logout', { headers: headers });
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
