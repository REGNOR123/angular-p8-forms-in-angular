import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, FormBuilder } from '@angular/forms'; // STEP-3 : Import all the methods of forms
@Component({
  selector: 'app-checkout-form',
  templateUrl: './checkout-form.component.html',
  styleUrls: ['./checkout-form.component.css']
})
export class CheckoutFormComponent implements OnInit {
  checkoutForm: FormGroup; // providing the formgroup name
  constructor(private formBuilder: FormBuilder) {
    this.checkoutForm = formBuilder.group({      //building the form using formbuilder
      emailFiled: new FormControl(),   //in the formbuilder - we are creating a group of form elements
      passwordField: new FormControl(), //these should be exactly same as your form
      checkBoxField: new FormControl(),
    });
  } //FormBuilder help us to build the form

  ngOnInit(): void {}

  handleSubmit(){
    console.log(this.checkoutForm);                      //STEP-4 : getting the input fields value
    console.log(this.checkoutForm.value.emailFiled);
    console.log(this.checkoutForm.value.passwordField);
    console.log(this.checkoutForm.value.checkBoxField);
  }
}
