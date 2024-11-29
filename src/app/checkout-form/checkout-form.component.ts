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
  constructor(private formBuilder: FormBuilder) {
    this.checkoutForm = formBuilder.group({
      //building the form using formbuilder
      emailFiled: new FormControl(), //in the formbuilder - we are creating a group of form elements
      passwordField: new FormControl(), //these should be exactly same as your form
      checkBoxField: new FormControl(),
    });

    //FormBuilder help us to build the form
    this.checkoutForm = formBuilder.group({
      emailFiled: [
        '',
        [
          Validators.required, // implementing the validqation in the required fields
          Validators.minLength(5),
          Validators.email,
        ],
      ],
      passwordField: ['', [Validators.required, Validators.minLength(8)]],
      checkBoxField: ['', [Validators.requiredTrue]],

      items: this.formBuilder.array([  // Mutiple groups in a formArray
        this.formBuilder.group({
          itemId: ['1'],
          itemName: ['name1'],
          itemDesc: ['Desc1'],
          itemDone: ['', Validators.requiredTrue],
        }),
      ]),
    });
  }
  ngOnInit(): void {
    // this.checkoutForm.get('items').setValue({
    //   itemId: ['2'],
    //   itemName: ['name2'],
    //   itemDesc: ['Desc2'],
    //   itemDone: ['', Validators.requiredTrue],
    // }),
    console.log(this.checkoutForm.get('items').value.length);
    console.log(this.checkoutForm.get('items').value);
    
  }

  handleSubmit() {
    console.log(this.checkoutForm); //STEP-4 : getting the input fields value
    console.log(this.checkoutForm.value.emailFiled);
    console.log(this.checkoutForm.value.passwordField);
    console.log(this.checkoutForm.value.checkBoxField);
  }
}
