import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router'; // CLI imports router
import { HomeComponent } from './home/home.component'
import { MobilePaymentComponent } from './mobile-payment/mobile-payment.component'
import { MobilePaymentPageComponent } from './mobile-payment-page/mobile-payment-page.component'

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
    component: MobilePaymentComponent,
  },
  {
    path: 'communal_payment',
    component: MobilePaymentComponent,
  },
  {
    path: 'financial_payment',
    component: MobilePaymentComponent,
  },
]; // sets up routes constant where you define your routes

// configures NgModule imports and exports
@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
