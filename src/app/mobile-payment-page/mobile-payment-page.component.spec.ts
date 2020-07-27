import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MobilePaymentPageComponent } from './mobile-payment-page.component';

describe('MobilePaymentPageComponent', () => {
  let component: MobilePaymentPageComponent;
  let fixture: ComponentFixture<MobilePaymentPageComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MobilePaymentPageComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MobilePaymentPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
