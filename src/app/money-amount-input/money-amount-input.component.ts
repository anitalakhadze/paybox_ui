import { Component, OnInit } from '@angular/core';
import { FormControl } from '@angular/forms';

@Component({
  selector: 'app-money-amount-input',
  templateUrl: './money-amount-input.component.html',
  styleUrls: ['./money-amount-input.component.css']
})
export class MoneyAmountInputComponent implements OnInit {
  moneyAmountControl = new FormControl('');

  constructor() { }

  ngOnInit(): void {
  }

}
