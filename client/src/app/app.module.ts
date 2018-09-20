import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';

import { AppComponent } from './app.component';
import { RegistrationComponent } from './registration/registration.component';
import { SignInComponent } from './sign-in/sign-in.component';

@NgModule({
  declarations: [
    AppComponent,
    RegistrationComponent,
    SignInComponent
  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot([
      {path: 'registration', component: RegistrationComponent}
      {path: 'signIn', component: SignInComponent}
    ])
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
