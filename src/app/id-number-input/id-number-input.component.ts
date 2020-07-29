import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-id-number-input',
  templateUrl: './id-number-input.component.html',
  styleUrls: ['./id-number-input.component.css']
})
export class IdNumberInputComponent implements OnInit {
  value = {
    idNumber: ""
  }

  idNumberControl = new FormControl(
    this.value.idNumber, [Validators.required,
    Validators.pattern("^[0-9]{11}$"),
    Validators.minLength(11), Validators.maxLength(11)]
  );

  constructor() { }

  ngOnInit(): void {
  }

  get idNumber() {
    return this.idNumberControl.get('idNumber');
  }

}
