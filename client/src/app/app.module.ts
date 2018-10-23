import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatInputModule } from '@angular/material';
import { MaterialModule } from './material';

import { AppComponent } from './app.component';
import { RegisterComponent } from './components/register/register.component';
import { SigninComponent } from './components/signin/signin.component';
import { NavigationComponent } from './components/navigation/navigation.component';
import { IntroComponent } from './components/intro/intro.component';
import { HomepageComponent } from './components/homepage/homepage.component';
import { FeedComponent } from './components/feed/feed.component';
import { FooterComponent } from './components/footer/footer.component';
import { ProfileComponent } from './components/profile/profile.component';
import { PostComponent } from './components/post/post.component';

import { RegisterService } from './services/register/register.service';
import { ReviewService } from './services/review/review.service';

const routes = [
  {path: 'register', component: RegisterComponent},
  {path: 'signin', component: SigninComponent},
  {path: 'profile', component: ProfileComponent},
  {path: 'post', component: PostComponent}
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
    ProfileComponent,
    FooterComponent,
    PostComponent
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
  providers: [RegisterService, ReviewService],
  bootstrap: [AppComponent]
})
export class AppModule { }
