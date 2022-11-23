import { BudgetService } from 'src/app/services/budget.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-enter-expense',
  templateUrl: './enter-expense.component.html',
  styleUrls: ['./enter-expense.component.css'],
})
export class EnterExpenseComponent implements OnInit {
  expenseName: string;
  expenseImport: number;
  formKO: boolean;
  msjKO: string;

  constructor(public _budgetService: BudgetService) {
    this.expenseName = '';
    this.expenseImport = 0;
    this.formKO = false;
    this.msjKO = '';
  }

  ngOnInit(): void {}

  addExpense() {
    if (this.expenseImport > this._budgetService.leftover) {
      this.formKO = true;
      this.msjKO = 'El gasto introducido es superior al sobrante';
      return;
    }
    if (this.expenseName === '' || this.expenseImport <= 0) {
      this.formKO = true;
      this.msjKO = 'Expense name or expense total is wrong';
    } else {
      //creo el objeto (CONSTANTE)
      const EXPENSE = {
        name: this.expenseName,
        quantity: this.expenseImport,
      };

      // lo envío al servicio llamando a la función addExpense()
      this._budgetService.addExpense(EXPENSE);

      //reseteo form
      this.formKO = false;
      this.expenseName = '';
      this.expenseImport = 0;
    }
  }
}
