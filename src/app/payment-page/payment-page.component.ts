import { Component, OnInit, ViewChild } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { GET_REQUIRED_INPUTS } from './required-inputs'
import { FormBuilder, Validators, FormGroup, FormControl } from '@angular/forms';
import { PayApiService } from '../pay-api.service'

@Component({
  selector: 'app-payment-page',
  templateUrl: './payment-page.component.html',
  styleUrls: ['./payment-page.component.css'],
})
export class PaymentPageComponent implements OnInit {
  paymentId: string;
  requiredInputs: string[];
  @ViewChild('commission') commission;

  paymentForm: FormGroup;
  
  constructor(
    private route: ActivatedRoute,
    private formBuilder: FormBuilder,
    private payApiService: PayApiService
  ) {  }
  
  ngOnInit() {
    this.route.params.subscribe(params => {
      this.paymentId = params['payment_id']
      this.requiredInputs =  GET_REQUIRED_INPUTS[this.paymentId]
    })

    this.paymentForm = this.formBuilder.group({
      mobileNumber: [null, [
        Validators.required,
        Validators.pattern("^5[0-9]{8}$"),
        Validators.minLength(9), 
        Validators.maxLength(9)
      ]],
      moneyAmount: [null,[
        Validators.required,
        Validators.min(1), 
        Validators.max(100)
      ]],
      commission: 0,
      idNumber: [null, [
        Validators.required,
        Validators.pattern("^[0-9]{11}$"),
        Validators.minLength(11), 
        Validators.maxLength(11)
      ]],
      accountNumber: [null, [
        Validators.required,
        Validators.pattern("^GE[0-9]{2}[A-Z]{2}[0-9]{16}"),
        Validators.minLength(22), 
        Validators.maxLength(22)
      ]],
    });
  }

  get mobileNumber() { return this.paymentForm.get('mobileNumber'); }
  get moneyAmount() { return this.paymentForm.get('moneyAmount'); }
  get idNumber() { return this.paymentForm.get('idNumber'); }
  get accountNumber() { return this.paymentForm.get('accountNumber'); }

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
