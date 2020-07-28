import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router'; // CLI imports router
import { HomeComponent } from './home/home.component'
import { MobilePaymentPageComponent } from './mobile-payment-page/mobile-payment-page.component'
import { CharityPaymentPageComponent } from './charity-payment-page/charity-payment-page.component'
import { CommunalPaymentPageComponent } from './communal-payment-page/communal-payment-page.component'
import { FinancialPaymentPageComponent } from './financial-payment-page/financial-payment-page.component'


const routes: Routes = [
  {
    path: '',
    component: HomeComponent,
  },
  {
    path: 'mobile_payment',
    component: MobilePaymentPageComponent,
  },
  {
    path: 'charity_payment',
    component: CharityPaymentPageComponent,
  },
  {
    path: 'communal_payment',
    component: CommunalPaymentPageComponent,
  },
  {
    path: 'financial_payment',
    component: FinancialPaymentPageComponent,
  },
]; // sets up routes constant where you define your routes

// configures NgModule imports and exports
@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
