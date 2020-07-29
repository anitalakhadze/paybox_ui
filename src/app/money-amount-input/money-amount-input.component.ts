import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-money-amount-input',
  templateUrl: './money-amount-input.component.html',
  styleUrls: ['./money-amount-input.component.css']
})
export class MoneyAmountInputComponent implements OnInit {

  value = {
    amount: 0
  }

  amountControl = new FormControl(
    this.value.amount, [Validators.required,
    Validators.min(1), Validators.max(100)]
  )

  constructor() { }

  ngOnInit(): void {
  }

  get amount() {
    return this.amountControl.get('amount')
  }


}
