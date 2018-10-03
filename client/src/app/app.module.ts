import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { RegisterComponent } from './components/register/register.component';
import { SigninComponent } from './components/signin/signin.component';
import { NavigationComponent } from './components/navigation/navigation.component';
import { IntroComponent } from './components/intro/intro.component';
import { HomepageComponent } from './components/homepage/homepage.component';

const routes = [
  {path: 'register', component: RegisterComponent},
  {path: 'signin', component: SigninComponent},
]

@NgModule({
  declarations: [
    AppComponent,
    RegisterComponent,
    SigninComponent,
    NavigationComponent,
    IntroComponent,
    HomepageComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    RouterModule.forRoot(routes)
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
