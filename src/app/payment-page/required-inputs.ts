

export const GET_REQUIRED_INPUTS = {
    'mobile_payment' : [
        'mobileNumber',
        'moneyAmount'
    ],
    'charity_payment':[
      'mobileNumber',
      'moneyAmount',
      'idNumber',
    ],
    'communal_payment':[
      'mobileNumber',
      'moneyAmount',
      'idNumber',
    ],
    'financial_payment':[
      'mobileNumber',
      'moneyAmount',
      'idNumber',
      "accountNumber"
    ]
}
