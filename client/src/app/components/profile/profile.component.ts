import { Component, OnInit } from '@angular/core';
import { RegisterService } from '../../services/register/register.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css']
})
export class ProfileComponent implements OnInit {
  simpleStr = 'example';
  user = { email: "", password: "" };

  constructor(
    private registerService:RegisterService,
    private router:Router
  ) { }

  ngOnInit() {
    console.log(this.user);
    console.log('on init of profile');
    let email = localStorage.getItem('email');
    let password = localStorage.getItem('password');
    this.user.email = email; this.user.password = password;
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
