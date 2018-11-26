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
import { ProfileProductOwnerComponent } from './components/profile-productOwner/profile-productOwner.component';
import { PostComponent } from './components/post/post.component';
import { ProfileEditComponent } from './components/profile-edit/profile-edit.component';
import { PostProductComponent } from './components/post-product/post-product.component';
import { ProductsComponent } from './components/products/products.component';

import { RegisterService } from './services/register/register.service';
import { ReviewService } from './services/review/review.service';
import { SnackBarService } from './services/snackbar.service';

const routes = [
  {path: '', redirectTo: 'home', pathMatch: 'full' },
  {path: 'home', component: HomepageComponent},
  {path: 'register', component: RegisterComponent},
  {path: 'signin', component: SigninComponent},
  {path: 'profile-productOwner', component: ProfileProductOwnerComponent},
  {path: 'post-product', component: PostProductComponent},
  {path: 'post', component: PostComponent},
  {path: 'profile/edit', component: ProfileEditComponent }
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
    ProfileProductOwnerComponent,
    FooterComponent,
    PostComponent,
    ProfileEditComponent,
    PostProductComponent,
    ProductsComponent
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
  providers: [RegisterService, ReviewService, SnackBarService],
  bootstrap: [AppComponent]
})
export class AppModule { }
