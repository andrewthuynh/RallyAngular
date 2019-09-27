import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class BudgetService {

  month = "September";
  tspent = '552.31'
  total = '1210.00';

  budgets = [
    {
      id: 0,
      title: 'Groceries',
      spent: 121.76,
      max: 200.00,
      color: 'primary',
      left: 39
    },
    {
      id: 1,
      title: 'Restaurants',
      spent: 31.32,
      max: 100.00,
      color: 'accent',
      left: 69
    },
    {
      id: 2,
      title: 'Coffee',
      spent: 21.33,
      max: 60.00,
      color: 'warn',
      left: 64
    }
  ]

  getMonth(){
    return this.month;
  }

  getBudgets(){
    return this.budgets;
  }
  
  getTotal(){
    return this.total;
  }

  getSpent(){
    return this.tspent;
  }

  constructor() { }
}
