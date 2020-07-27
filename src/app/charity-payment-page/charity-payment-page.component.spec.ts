import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CharityPaymentPageComponent } from './charity-payment-page.component';

describe('CharityPaymentPageComponent', () => {
  let component: CharityPaymentPageComponent;
  let fixture: ComponentFixture<CharityPaymentPageComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CharityPaymentPageComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CharityPaymentPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
