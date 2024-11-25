import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { CheckoutFormComponent } from './checkout-form/checkout-form.component';


const routes: Routes = [
  {path:'', redirectTo:'checkout', pathMatch:'full'},
  {path:'checkout', component: CheckoutFormComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
