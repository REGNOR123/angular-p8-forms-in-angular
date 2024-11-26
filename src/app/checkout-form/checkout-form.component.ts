import { Component, OnInit } from '@angular/core';
import {
  FormGroup,
  FormControl,
  FormBuilder,
  Validators,
} from '@angular/forms'; // STEP-3 : Import all the methods of forms
@Component({
  selector: 'app-checkout-form',
  templateUrl: './checkout-form.component.html',
  styleUrls: ['./checkout-form.component.css'],
})
export class CheckoutFormComponent implements OnInit {
  checkoutForm: FormGroup; // providing the formgroup name
  constructor(private formBuilder: FormBuilder) {  //FormBuilder help us to build the form
    this.checkoutForm = formBuilder.group({
      //building the form using formbuilder
      emailFiled: new FormControl(), //in the formbuilder - we are creating a group of form elements
      passwordField: new FormControl(), //these should be exactly same as your form
      checkBoxField: new FormControl(),
    });
    this.checkoutForm = formBuilder.group({
      emailFiled: ['', [Validators.required, Validators.email]], // implementing the validqation in the required fields
      passwordField: [
        '',
        [
          Validators.required,
          Validators.minLength(8),
        ],
      ],
    });
  }  

  ngOnInit(): void { 
    // this.checkoutForm.setValue({        // setting up the form values all the fields at once
    //   emailFiled: 'akr009020@gmail.com',
    //   passwordField: '123456@##',
    //   checkBoxField: true
    // })

     this.checkoutForm.patchValue({        // setting up the form values for individual fields
      emailFiled: 'akr009020@gmail.com',
      checkBoxField: true
    })
  }

  handleSubmit() {
    console.log(this.checkoutForm); //: getting the input fields value
    console.log(this.checkoutForm.value.emailFiled);
    console.log(this.checkoutForm.value.passwordField);
    console.log(this.checkoutForm.value.checkBoxField);
  }
}
