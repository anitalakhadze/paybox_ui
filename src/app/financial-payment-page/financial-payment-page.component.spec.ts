import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FinancialPaymentPageComponent } from './financial-payment-page.component';

describe('FinancialPaymentPageComponent', () => {
  let component: FinancialPaymentPageComponent;
  let fixture: ComponentFixture<FinancialPaymentPageComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FinancialPaymentPageComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FinancialPaymentPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
