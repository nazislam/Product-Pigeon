import { Component, OnInit } from '@angular/core';
import { RegisterService } from '../../services/register/register.service';

@Component({
  selector: 'app-navigation',
  templateUrl: './navigation.component.html',
  styleUrls: ['./navigation.component.css']
})

export class NavigationComponent implements OnInit {
  userId: number;

  constructor(
    private registerService:RegisterService
  ) { }

  ngOnInit() {
    this.userId = parseInt(this.registerService.getUserId());
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
