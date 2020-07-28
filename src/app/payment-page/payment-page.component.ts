import { Component, OnInit, Input, 
  ViewChild, ViewContainerRef, ComponentFactoryResolver,
  ComponentRef , ComponentFactory, TemplateRef,
   ViewChildren, Type } from '@angular/core';

import { MobileNumberInputComponent } from '../mobile-number-input/mobile-number-input.component'
import { ActivatedRoute } from '@angular/router';
import {REQUIRED_INPUTS} from './requred-inputs'

@Component({
  selector: 'app-payment-page',
  templateUrl: './payment-page.component.html',
  styleUrls: ['./payment-page.component.css']
})
export class PaymentPageComponent implements OnInit {
  payment_id: string;
  required_inputs: Type<unknown>[];
  @ViewChild(TemplateRef, { read: ViewContainerRef }) inputs;

  constructor(
    private route: ActivatedRoute,
    private resolver: ComponentFactoryResolver
  ) { }

  ngOnInit(): void {
    this.route.params.subscribe( params => 
      {
        this.payment_id = params['payment_id']
        this.required_inputs = REQUIRED_INPUTS[this.payment_id]
      }
    );

    setTimeout(() => {
      this.required_inputs.forEach(input_component => {
        const factory = this.resolver.resolveComponentFactory(input_component);
        const componentRef = this.inputs.createComponent(factory);
      });
    }, 0);
  }
}
