import { Component, OnInit } from '@angular/core';
import { RegisterService } from '../../services/register/register.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-profile-edit',
  templateUrl: './profile-edit.component.html',
  styleUrls: ['./profile-edit.component.css']
})
export class ProfileEditComponent implements OnInit {
  a = 4;
  // email: string;
  // password: string;
  user = { email: "", password: "", userType: "" };

  constructor(
    private registerService:RegisterService,
    private router:Router
  ) { }

  ngOnInit() {
    let email = localStorage.getItem('email');
    let password = localStorage.getItem('password');
    let userType = localStorage.getItem('userType');
    this.user.email = email; this.user.password = password; this.user.userType = userType;
    console.log(this.user);
    console.log(this.user);
  }

  onProfileEdit() {
    let user = this.user;
    user.email = this.user.email; user.password= this.user.password;
    console.log(user);
    this.registerService.updateProfile(user)
      .subscribe(
        (data) => console.log(data),
        (err) => console.log(err)
      );
  }



}
