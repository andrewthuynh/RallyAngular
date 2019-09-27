import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NgModule } from '@angular/core';
import { FlexLayoutModule } from '@angular/flex-layout';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ToolbarComponent } from './toolbar/toolbar.component';
import 'hammerjs';
import { AppMaterialModule } from './app.material.module';
import { RailnavComponent } from './railnav/railnav.component';
import { AlertComponent } from './alert/alert.component';
import { AccountComponent } from './account/account.component';
import { BillComponent } from './bill/bill.component';
import { BudgetComponent } from './budget/budget.component';

@NgModule({
  declarations: [
    AppComponent,
    ToolbarComponent,
    RailnavComponent,
    AlertComponent,
    AccountComponent,
    BillComponent,
    BudgetComponent,
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    AppRoutingModule,
    AppMaterialModule,
    FlexLayoutModule
  ],
  providers: [],
  bootstrap: [AppComponent],
  entryComponents: [],
})
export class AppModule { }
