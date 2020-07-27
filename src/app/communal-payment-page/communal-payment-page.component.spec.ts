import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CommunalPaymentPageComponent } from './communal-payment-page.component';

describe('CommunalPaymentPageComponent', () => {
  let component: CommunalPaymentPageComponent;
  let fixture: ComponentFixture<CommunalPaymentPageComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CommunalPaymentPageComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CommunalPaymentPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
