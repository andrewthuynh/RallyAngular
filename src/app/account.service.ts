import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class AccountService {

  accounts = [
    {
      id: 0,
      title: 'Checkings',
      subtitle: '• • • • • • 4 2 3 4',
      amount: 2321.62,
      color: '#4ec19e'
    },
    {
      id: 1,
      title: 'Home Savings',
      subtitle: '• • • • • • 1 1 8 3',
      amount: 1321.55,
      color: '#10613b'
    },
    {
      id: 2,
      title: 'Car Savings',
      subtitle: '• • • • • • 5 2 3 3',
      amount: 502.12,
      color: '#56adff'
    }
  ];

  totalAmount = '4,234.21';

  getAccounts() {
    return this.accounts;
  }

  getTotal() {
    return this.totalAmount;
  }

  constructor() { }
}
