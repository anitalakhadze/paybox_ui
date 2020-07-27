import { Component, OnInit } from '@angular/core';
import { FormControl } from '@angular/forms';

@Component({
  selector: 'app-id-number-input',
  templateUrl: './id-number-input.component.html',
  styleUrls: ['./id-number-input.component.css']
})
export class IdNumberInputComponent implements OnInit {
  idNumberControl = new FormControl('')

  constructor() { }

  ngOnInit(): void {
  }

}
