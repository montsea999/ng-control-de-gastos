import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { EnterBudgetComponent } from './components/enter-budget/enter-budget.component';
import { ExpensesComponent } from './components/expenses/expenses.component';

const routes: Routes = [
  {path:'provision-de-fondos', component:EnterBudgetComponent},
  {path:'gastos', component:ExpensesComponent},
  {path:'', redirectTo:'provision-de-fondos', pathMatch:'full'},
  {path:'**', redirectTo:'provision-de-fondos', pathMatch:'full'}



];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
