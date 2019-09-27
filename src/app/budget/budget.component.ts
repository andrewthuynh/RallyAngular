import { Component, OnInit } from '@angular/core';
import {BudgetService} from '../budget.service';

@Component({
  selector: 'app-budget',
  templateUrl: './budget.component.html',
  styleUrls: ['./budget.component.scss']
})
export class BudgetComponent implements OnInit {

  budgets;
  month;
  spent;
  total;

  constructor(private budgetService:BudgetService) { }

  ngOnInit() {
    this.budgets = this.budgetService.getBudgets();
    this.month = this.budgetService.getMonth();
    this.spent = this.budgetService.getSpent();
    this.total = this.budgetService.getTotal();
  }

}
