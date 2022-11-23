import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { FormsModule } from '@angular/forms';

import { BrowserModule } from '@angular/platform-browser';
import { AppComponent } from './app.component';
import { ExpensesComponent } from './components/expenses/expenses.component';
import { EnterExpenseComponent } from './components/expenses/enter-expense/enter-expense.component';
import { ListExpenseComponent } from './components/expenses/list-expense/list-expense.component';
import { EnterBudgetComponent } from './components/enter-budget/enter-budget.component';

@NgModule({
  declarations:[
    AppComponent,
    ExpensesComponent,
    EnterExpenseComponent,
    ListExpenseComponent,
    EnterBudgetComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
