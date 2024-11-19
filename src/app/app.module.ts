import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { SignInComponent } from './sign-in/sign-in.component';
import { LogInComponent } from './log-in/log-in.component';
import { FormsModule } from '@angular/forms';               // Step-1 : Import the "FormModule" into the app.module.ts

@NgModule({
  declarations: [
    AppComponent,
    SignInComponent,
    LogInComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule               // Once imported, add the "FormModule" into the imports:[] array
  ], 
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
