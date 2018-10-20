import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {MatInputModule} from '@angular/material';
import { MaterialModule } from './material';

import { AppComponent } from './app.component';
import { RegisterComponent } from './components/register/register.component';
import { SigninComponent } from './components/signin/signin.component';
import { NavigationComponent } from './components/navigation/navigation.component';
import { IntroComponent } from './components/intro/intro.component';
import { HomepageComponent } from './components/homepage/homepage.component';
import { FeedComponent } from './components/feed/feed.component';

import { RegisterService } from './services/register/register.service';
import { ProfileComponent } from './components/profile/profile.component';

const routes = [
  {path: 'register', component: RegisterComponent},
  {path: 'signin', component: SigninComponent},
  {path: 'profile', component: ProfileComponent}
]

@NgModule({
  declarations: [
    AppComponent,
    RegisterComponent,
    SigninComponent,
    NavigationComponent,
    IntroComponent,
    HomepageComponent,
    FeedComponent,
    ProfileComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpClientModule,
    BrowserAnimationsModule,
    MaterialModule,
    MatInputModule,
    RouterModule.forRoot(routes)
  ],
  providers: [RegisterService],
  bootstrap: [AppComponent]
})
export class AppModule { }
