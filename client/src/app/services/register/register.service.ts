import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { map, tap } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class RegisterService {
  user: any;

  constructor(
    private http: HttpClient
  ) { }

  registerProductOwner(user) {
    let headers = new HttpHeaders();
    headers.append('Content-Type', 'application/json');
    return this.http.post('http://localhost:3000/register/productOwner', user, { headers: headers });
  }

  registerAdvertiser(user) {
    let headers = new HttpHeaders();
    headers.append('Content-Type', 'application/json');
    return this.http.post('http://localhost:3000/register/advertiser', user, { headers: headers });
  }

  loginUser(user) {
    let headers = new HttpHeaders();
    headers.append('Content-Type', 'application/json');
    return this.http.post('http://localhost:3000/register/signin', user, { headers: headers });
  }

  storeUserData(user) {
    localStorage.setItem('id', user.id);
    localStorage.setItem('email', user.email);
    localStorage.setItem('password', user.password);
    localStorage.setItem('userType', user.userType);
  }

  getUserId() {
    return localStorage.getItem('id');
  }

  logout() {
    let headers = new HttpHeaders();
    headers.append('Content-Type', 'application/json');
    return this.http.get('http://localhost:3000/logout', { headers: headers });
  }

  updateProfile(user) {
    let headers = new HttpHeaders();
    headers.append('Content-Type', 'application/json');
    console.log('in updateProfile...')
    return this.http.post('http://localhost:3000/profile/edit', user, { headers: headers });
  }
}
