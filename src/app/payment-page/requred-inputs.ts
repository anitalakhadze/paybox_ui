import { MobileNumberInputComponent } from '../mobile-number-input/mobile-number-input.component';
import { AccountNumberInputComponent } from '../account-number-input/account-number-input.component';
import { MoneyAmountInputComponent } from '../money-amount-input/money-amount-input.component';
import { IdNumberInputComponent } from '../id-number-input/id-number-input.component';


export const REQUIRED_INPUTS = {
    'mobile_payment' : [
        MobileNumberInputComponent,
        MoneyAmountInputComponent
    ],
    'charity_payment':[
        MobileNumberInputComponent,
        MoneyAmountInputComponent,
        IdNumberInputComponent,
    ],
    'communal_payment':[
        MobileNumberInputComponent,
        MoneyAmountInputComponent,
        IdNumberInputComponent,
    ],
    'financial_payment':[
        MobileNumberInputComponent,
        MoneyAmountInputComponent,
        IdNumberInputComponent,
        AccountNumberInputComponent,
    ]
}