import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { IdNumberInputComponent } from './id-number-input.component';

describe('IdNumberInputComponent', () => {
  let component: IdNumberInputComponent;
  let fixture: ComponentFixture<IdNumberInputComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ IdNumberInputComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(IdNumberInputComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
