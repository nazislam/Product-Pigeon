import { Component, OnInit } from '@angular/core';
import { RegisterService } from '../../services/register/register.service';
import { Router }  from '@angular/router';
import { SnackBarService } from '../../services/snackbar.service';
import {MatSnackBar} from '@angular/material';


@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {
  email: string;
  password: string;
  userType: string;

  constructor(private registerService: RegisterService,
    private router: Router,
    private snackBarService:SnackBarService
  ) { }

  ngOnInit() {
  }

  onRegisterSubmit() {
    const user = {
      email: this.email,
      password: this.password,
      userType: this.userType
    };
    console.log('new user:', user);
    if (this.userType === 'advertiser') {
      this.registerService.registerAdvertiser(user)
        .subscribe(
          (data) => console.log(data),
          (err) => console.log(err)
        );
    } else if (this.userType === 'productOwner') {
      this.registerService.registerProductOwner(user)
        .subscribe(
          (data) => console.log(data),
          (err) => console.log(err)
        );
    }
    this.snackBarService.openSnackBar('Congratch! Log in to access the app', '');
    this.router.navigate(['signin']);
  }
}
