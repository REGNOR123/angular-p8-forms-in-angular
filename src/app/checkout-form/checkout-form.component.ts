import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, FormBuilder } from '@angular/forms'; // STEP-3 : Import all the methods of forms
@Component({
  selector: 'app-checkout-form',
  templateUrl: './checkout-form.component.html',
  styleUrls: ['./checkout-form.component.css'],
})
export class CheckoutFormComponent implements OnInit {
  checkoutForm: FormGroup; // providing the formgroup name
  constructor(private formBuilder: FormBuilder) {
    //FormBuilder help us to build the form
    this.checkoutForm = formBuilder.group({
      //building the form using formbuilder
      emailFiled: new FormControl(), //in the formbuilder - we are creating a group of form elements
      passwordField: new FormControl(), //these should be exactly same as your form
      checkBoxField: new FormControl(),
    });
  }

  ngOnInit(): void {
    this.checkoutForm.setValue({        // set value for all the fields in one go
      emailFiled: 'akr009020@gmail.com',
      passwordField: '12345678',
      checkBoxField: true,
    });

    // this.checkoutForm.patchValue({        // set value for individual fields
    //   emailFiled: 'akr009020@gmail.com',
    //   checkBoxField: true,
    // });

    //this.checkoutForm.reset();    // reset all the values
  }

  handleSubmit() {
    console.log(this.checkoutForm); // getting fields value in console
    console.log(this.checkoutForm.value.emailFiled);
    console.log(this.checkoutForm.value.passwordField);
    console.log(this.checkoutForm.value.checkBoxField);

    this.checkoutForm.reset();
  }
  handleCancel(){
    this.checkoutForm.reset();
  }
}
