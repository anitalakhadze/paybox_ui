import { Component, OnInit } from '@angular/core';
import { FormControl } from '@angular/forms';

@Component({
  selector: 'app-mobile-number-input',
  templateUrl: './mobile-number-input.component.html',
  styleUrls: ['./mobile-number-input.component.css']
})
export class MobileNumberInputComponent implements OnInit {
  mobileNumberControl = new FormControl('');
  constructor() { }

  ngOnInit(): void {

  }

}
