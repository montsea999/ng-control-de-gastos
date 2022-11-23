import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { BudgetService } from 'src/app/services/budget.service';

@Component({
  selector: 'app-enter-budget',
  templateUrl: './enter-budget.component.html',
  styleUrls: ['./enter-budget.component.css']
})
export class EnterBudgetComponent implements OnInit {
  total:number;
  leftover:number;
  totalKO:boolean;

  constructor(private _budgetService:BudgetService, private router:Router) {
    this.total = 0;
    this.leftover = 0;
    this.totalKO = false;
  }

  ngOnInit(): void {
    if(this.total === 0){
      this.totalKO = true;
    }
   }
  input(){
    if(this.total>0){
      this.totalKO = false;

      this._budgetService.budget = this.total;
      this._budgetService.leftover = this.total;
      this.router.navigate(['gastos']);

    }else{
      this.totalKO=true;
    }
  }
}
