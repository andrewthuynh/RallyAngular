import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AlertService {

  alerts = [
    {
      id: 0,
      category: 'budget',
      body: "Heads up, you've used up 90% of your Shopping budget for this month.",
      icon: 'subject'
    },
    {
      id: 1,
      category: 'fee',
      body: "Careful, you've used $24 in ATM fees this month.",
      icon: 'local_atm'
    },
    {
      id: 2,
      category: 'payment',
      body: "You have an unpaid credit card balance of $121.76 with 5 days left in the month.",
      icon: 'credit_card'
    }
  ];

  getAlerts() {
    return this.alerts;
  }

  constructor() { }
}
