import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AccountNumberInputComponent } from './account-number-input.component';

describe('AccountNumberInputComponent', () => {
  let component: AccountNumberInputComponent;
  let fixture: ComponentFixture<AccountNumberInputComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AccountNumberInputComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AccountNumberInputComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
