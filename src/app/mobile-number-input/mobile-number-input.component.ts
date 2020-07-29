import { Component, OnInit } from '@angular/core';
import { FormControl, Validators } from '@angular/forms';

@Component({
  selector: 'app-mobile-number-input',
  templateUrl: './mobile-number-input.component.html',
  styleUrls: ['./mobile-number-input.component.css']
})
export class MobileNumberInputComponent implements OnInit {

  value = {
    mobileNumber: ""
  }

  mobileNumberControl = new FormControl(
    this.value.mobileNumber, [Validators.required,
    Validators.pattern("^5[0-9]{8}$"),
    Validators.minLength(9), Validators.maxLength(9)]
  );

  constructor() { }

  ngOnInit(): void {
  }

  get mobileNumber(){
    return this.mobileNumberControl.get('mobileNumber')
  }

}
