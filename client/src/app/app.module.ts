import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';

import { AppComponent } from './app.component';
import { RegisterComponent } from './components/register/register.component';
import { SigninComponent } from './components/signin/signin.component';
import { NavigationComponent } from './components/navigation/navigation.component';

const routes = [
  {path: 'register', component: RegisterComponent},
  {path: 'signin', component: SigninComponent},
]

@NgModule({
  declarations: [
    AppComponent,
    RegisterComponent,
    SigninComponent,
    NavigationComponent
  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot(routes)
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
