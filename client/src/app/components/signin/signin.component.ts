import { Component, OnInit } from '@angular/core';
import { RegisterService } from '../../services/register/register.service';
import { Router }  from '@angular/router';

@Component({
  selector: 'app-signin',
  templateUrl: './signin.component.html',
  styleUrls: ['./signin.component.css']
})
export class SigninComponent implements OnInit {
  panelOpenState = false;

  email:string;
  password:string;

  constructor(
    private registerService:RegisterService,
    private router:Router
  ) { }

  ngOnInit() {
  }

  onSigninSubmit() {
    let user = {
      email: this.email,
      password: this.password
    };
    console.log('candidate User:', user);
    this.registerService.loginUser(user)
      .subscribe((result) => {
        let r = JSON.stringify(result);
        console.log('got some result...');
        console.log(result);
        this.registerService.storeUserData(result['user']);
        console.log('usertype:---', this.registerService.getUserType());
        if (this.registerService.getUserType() === 'advertiser') {
          this.router.navigate(['profile-advertiser']);
        } else {
          this.router.navigate(['profile-user']);
        }
      });
  }

}
