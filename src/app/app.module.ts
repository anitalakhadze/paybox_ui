import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { CategoryButtonComponent } from './category-button/category-button.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { CategoriesDisplayComponent } from './categories-display/categories-display.component';
import { MobileNumberInputComponent } from './mobile-number-input/mobile-number-input.component';
import { MoneyAmountInputComponent } from './money-amount-input/money-amount-input.component';
import { IdNumberInputComponent } from './id-number-input/id-number-input.component';
import { AccountNumberInputComponent } from './account-number-input/account-number-input.component'

@NgModule({
  declarations: [
    AppComponent,
    CategoryButtonComponent,
    CategoriesDisplayComponent,
    MobileNumberInputComponent,
    MoneyAmountInputComponent,
    IdNumberInputComponent,
    AccountNumberInputComponent
  ],
  imports: [
    BrowserModule,
    NgbModule,
    FormsModule,
    ReactiveFormsModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
