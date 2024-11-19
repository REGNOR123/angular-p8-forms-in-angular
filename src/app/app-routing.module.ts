import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { SignInComponent } from './sign-in/sign-in.component';
import { LogInComponent } from './log-in/log-in.component';


const routes: Routes = [
  {path:'', redirectTo: '/login', pathMatch:'full'},
  {path:'signup', component: SignInComponent},
  {path:'login', component: LogInComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
