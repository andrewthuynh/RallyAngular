import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { OverviewComponent } from '../app/overview/overview.component';
import { AccountComponent } from '../app/account/account.component';
import { BillComponent } from '../app/bill/bill.component';
import { BudgetComponent } from '../app/budget/budget.component';
import { SettingsComponent } from '../app/settings/settings.component';

const routes: Routes = [
  {path: 'overview', component: OverviewComponent},
  {path: 'accounts', component: AccountComponent},
  {path: 'bills', component: BillComponent},
  {path: 'budgets', component: BudgetComponent},
  {path: 'settings', component: SettingsComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
