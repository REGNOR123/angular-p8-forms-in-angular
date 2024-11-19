import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-log-in',
  templateUrl: './log-in.component.html',
  styleUrls: ['./log-in.component.css']
})
export class LogInComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }
  handleLogInForm(logInForm: NgForm){
    console.log(logInForm);
    console.log(logInForm.value.username);
    console.log(logInForm.value.password);

  }
}
