import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class BillService {

  bills = [
    {
      id: 0,
      title: 'Discover Credit',
      subtitle: 'Due Sep 31',
      amount: 121.76,
      color: '#e64242'
    },
    {
      id: 1,
      title: 'Rent',
      subtitle: 'Due Oct 1',
      amount: '1000.00',
      color: '#f5ff66'
    },
    {
      id: 2,
      title: 'Internet',
      subtitle: 'Internet',
      amount: 64.99,
      color: '#ff7156'
    }
  ];

  totalAmount = '1252.31';

  getBills() {
    return this.bills;
  }

  getTotal() {
    return this.totalAmount;
  }

  constructor() { }
}
