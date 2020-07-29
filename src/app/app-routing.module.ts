import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router'; // CLI imports router
import { PaymentPageComponent } from './payment-page/payment-page.component';
import { CategoriesDisplayComponent } from './categories-display/categories-display.component';


const routes: Routes = [
  {
    path: '',
    component: CategoriesDisplayComponent,
  },
  {
    path: 'payments/:payment_id',
    component: PaymentPageComponent,
  },
]; // sets up routes constant where you define your routes

// configures NgModule imports and exports
@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
