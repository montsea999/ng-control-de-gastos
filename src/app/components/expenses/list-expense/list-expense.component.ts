import { BudgetService } from 'src/app/services/budget.service';
import { Component, OnDestroy, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-list-expense',
  templateUrl: './list-expense.component.html',
  styleUrls: ['./list-expense.component.css']
})
export class ListExpenseComponent implements OnInit, OnDestroy {

subscription!: Subscription;
budget: number=0;
leftover: number=0;
listBudget: any[]=[];

//creo una lista donde almacenar los gastos
  constructor(private _budgetService:BudgetService) { }

  ngOnInit(): void {
    this.budget = this._budgetService.budget;
    this.leftover = this._budgetService.leftover;

    this.subscription = this._budgetService.getExpense().subscribe(data=>{
      this.leftover = this._budgetService.leftover ; //ok
      this.listBudget.push(data);
    })

  }

  ngOnDestroy(): void {
    this.subscription.unsubscribe();
  }

  insertClass(){
    if(this.leftover>=this.budget/2){
      return 'alert alert-success'
    }else if(this.leftover>=this.budget/4){
      return 'alert alert-warning'
    }else{
      return 'alert alert-danger'
    }

  }

}
