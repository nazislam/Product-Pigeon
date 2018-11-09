import { Component, OnInit } from '@angular/core';
import { RegisterService } from '../../services/register/register.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-profile-edit',
  templateUrl: './profile-edit.component.html',
  styleUrls: ['./profile-edit.component.css']
})
export class ProfileEditComponent implements OnInit {
  email: string;
  password: string;
  user = { email: "", password: "", userType: "", id: "" };

  constructor(
    private registerService:RegisterService,
    private router:Router
  ) { }

  ngOnInit() {
    let email = localStorage.getItem('email');
    let password = localStorage.getItem('password');
    let userType = localStorage.getItem('userType');
    let userId = localStorage.getItem('id');
    this.user.email = email; this.user.password = password; this.user.userType = userType;
    this.user.id = userId;
    console.log(this.user);
  }

  onProfileEdit() {
    this.user.email = this.email;
    this.user.password = this.password;
    console.log('this.user:--', this.user);
    let user = this.user;
    user.email = this.user.email; user.password= this.user.password;
    console.log('---');
    console.log(user);
    this.registerService.updateProfile(user)
      .subscribe(
        (data) => console.log(data),
        (err) => console.log(err)
      );
    this.router.navigate(['profile']);
  }

}
