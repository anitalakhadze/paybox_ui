import { Component, OnInit } from '@angular/core';
import { FormControl } from '@angular/forms';

@Component({
  selector: 'app-account-number-input',
  templateUrl: './account-number-input.component.html',
  styleUrls: ['./account-number-input.component.css']
})
export class AccountNumberInputComponent implements OnInit {

  accountNumberControl = new FormControl('');

  constructor() { }

  ngOnInit(): void {
  }

}
