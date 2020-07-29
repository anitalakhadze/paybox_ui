import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppRoutingModule } from './app-routing.module'; 

import { AppComponent } from './app.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { CategoryButtonComponent } from './category-button/category-button.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { CategoriesDisplayComponent } from './categories-display/categories-display.component';
import { PaymentPageComponent } from './payment-page/payment-page.component';
import { HttpClientModule } from '@angular/common/http';

@NgModule({
  declarations: [
    AppComponent,
    CategoryButtonComponent,
    CategoriesDisplayComponent,
    PaymentPageComponent,
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    NgbModule,
    FormsModule,
    ReactiveFormsModule,
    AppRoutingModule,
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule { }
