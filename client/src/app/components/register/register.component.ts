import { Component, OnInit } from '@angular/core';
import { User } from '../../models/user.model';
import { RegisterService } from '../../services/register/register.service';
import { Router }  from '@angular/router';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {
  email: String;
  password: String;

  constructor(private registerService: RegisterService,
              private router: Router
  ) { }

  ngOnInit() {
  }

  onRegisterSubmit() {
    console.log('123');
    console.log(this.email);
    console.log(this.password);
    const user = {
      email: this.email,
      password: this.password
    };
    this.registerService.registerUser(user)
      .subscribe(
        (data) => console.log(data),
        (err) => console.log(err)
      );
    this.router.navigate(['profile']);
  }

    /*
  saveUser(formValues: any): void {
    let newUser: User = <User>formValues;
    console.log(newUser);

    this.registerService.postUser(newUser)
      .subscribe(
        (data: User) => console.log(data),
        (err: any) => console.log(err)
      );
  }
     */

}
