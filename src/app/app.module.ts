import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CheckoutFormComponent } from './checkout-form/checkout-form.component';
import { ReactiveFormsModule } from '@angular/forms';

@NgModule({
  declarations: [
    AppComponent,
    CheckoutFormComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule             //Step-1 : import ReactiveFormModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
