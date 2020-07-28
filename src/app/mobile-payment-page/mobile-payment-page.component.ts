import { Component, OnInit, Input } from '@angular/core';
import { FormGroup } from '@angular/forms';

@Component({
  selector: 'app-mobile-payment-page',
  templateUrl: './mobile-payment-page.component.html',
  styleUrls: ['./mobile-payment-page.component.css']
})
export class MobilePaymentPageComponent implements OnInit {
  mobilePayment = new FormGroup({

  })

  callingFunction() {

  }
  
  constructor() { }

  ngOnInit(): void {
  }

}
