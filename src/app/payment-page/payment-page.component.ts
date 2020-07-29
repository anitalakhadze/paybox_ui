import { Component, OnInit, Type, ViewChild } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { GET_REQUIRED_INPUTS } from './required-inputs'
import { FormBuilder, Validators, FormGroup, FormControl } from '@angular/forms';
import {PayApiService} from '../pay-api.service'

@Component({
  selector: 'app-payment-page',
  templateUrl: './payment-page.component.html',
  styleUrls: ['./payment-page.component.css'],
})
export class PaymentPageComponent implements OnInit {
  amount: number;
  paymentId: string;
  requiredInputs: string[];
  @ViewChild('commission') commission;

  mobileNumberCtrl: FormControl;
  moneyAmountCtrl: FormControl;
  idNumberCtrl: FormControl;
  accountNumberCtrl: FormControl;

  paymentForm: FormGroup;
  
  constructor(
    private route: ActivatedRoute,
    private formBuilder: FormBuilder,
    private payApiService: PayApiService
  ) {
    this.mobileNumberCtrl = this.formBuilder
      .control(null,
      [
        // Validators.,
        Validators.pattern("^5[0-9]{8}$"),
        Validators.minLength(9), 
        Validators.maxLength(9)
      ]);
    this.moneyAmountCtrl = this.formBuilder
      .control(null,
      [
        // Validators.required,
        Validators.min(1), 
        Validators.max(100)
      ]);
    this.idNumberCtrl = this.formBuilder
      .control(null, 
      [
        // Validators.required,
        Validators.pattern("^[0-9]{11}$"),
        Validators.minLength(11), 
        Validators.maxLength(11)
      ]);
    this.accountNumberCtrl = this.formBuilder
    .control(null, 
    [
      // Validators.required,
      Validators.pattern("^GE[0-9]{2}[A-Z]{2}[0-9]{16}"),
      Validators.minLength(22), 
      Validators.maxLength(22)
    ]);

    this.paymentForm = this.formBuilder.group({
      mobileNumber: this.mobileNumberCtrl,
      moneyAmount: this.moneyAmountCtrl,
      commission: 0,
      accountNumber: this.accountNumberCtrl,
      idNumber: this.idNumberCtrl,
    });
  }
  
  ngOnInit() {
    this.route.params.subscribe(params => {
      this.paymentId = params['payment_id']
      this.requiredInputs =  GET_REQUIRED_INPUTS[this.paymentId]
    })
  }

  onSubmit(paymentData) {
    if (this.paymentForm.valid) {
    console.warn('Your order has been submitted', paymentData);
      this.paymentForm.reset();
      this.payApiService
        .addTransaction(
          this.paymentId,
          paymentData
      ).subscribe(data => console.log(data))
    }
  }

  updateCommission(){
    console.log(this.paymentForm)

    this.paymentForm.value.commission =
       Math.max(.5, this.paymentForm.value.moneyAmount * .01);
    this.commission.nativeElement.innerHTML =
       this.paymentForm.value.commission;
  }
}
