import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MoneyAmountInputComponent } from './money-amount-input.component';

describe('MoneyAmountInputComponent', () => {
  let component: MoneyAmountInputComponent;
  let fixture: ComponentFixture<MoneyAmountInputComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MoneyAmountInputComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MoneyAmountInputComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
