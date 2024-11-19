import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-sign-in',
  templateUrl: './sign-in.component.html',
  styleUrls: ['./sign-in.component.css']
})
export class SignInComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  handleSignUpForm(signupForm: NgForm){
    console.log(signupForm);
    console.log(signupForm.value.username);
    console.log(signupForm.value.email);
    console.log(signupForm.value.password);
    console.log(signupForm.value.confirm_password);
    console.log(signupForm.value.terms_and_condition);
  }

}
