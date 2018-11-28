import { Component, OnInit } from '@angular/core';
import { RegisterService } from '../../services/register/register.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-profile-advertiser',
  templateUrl: './profile-advertiser.component.html',
  styleUrls: ['./profile-advertiser.component.css']
})
export class ProfileAdvertiserComponent implements OnInit {
  simpleStr = 'example';
  user = { email: "", password: "", userType: "" };

  constructor(
    private registerService:RegisterService,
    private router:Router
  ) { }

  ngOnInit() {
    console.log('on init of profile');
    console.log(this.user);
    let email = localStorage.getItem('email');
    let password = localStorage.getItem('password');
    let userType = localStorage.getItem('userType');
    this.user.email = email; this.user.password = password; this.user.userType = userType;
    console.log(this.user);
  }

  logOutUser() {
    this.registerService.logout()
      .subscribe(
        (result) => { 
          localStorage.clear();
          console.log(result);
        }
      );
    this.router.navigate(['/']);
  }


}
