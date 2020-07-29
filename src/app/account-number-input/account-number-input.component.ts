import { Component, OnInit } from '@angular/core';
import { FormControl, Validators } from '@angular/forms';

@Component({
  selector: 'app-account-number-input',
  templateUrl: './account-number-input.component.html',
  styleUrls: ['./account-number-input.component.css']
})
export class AccountNumberInputComponent implements OnInit {

  value = {
    accountNumber: ""
  }

  accountNumberControl = new FormControl(
    this.value.accountNumber, [Validators.required,
    Validators.pattern("^GE[0-9]{2}[A-Z]{2}[0-9]{16}"),
    Validators.minLength(22), Validators.maxLength(22)]
  );

  constructor() { }

  ngOnInit(): void {
  }

  get accountNumber() {
    return this.accountNumberControl.get('accountNumber')
  }

}
