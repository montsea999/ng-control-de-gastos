import { Injectable } from '@angular/core';
import { Observable, Subject } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class BudgetService {
  budget: number;
  leftover: number;

  private subjects$ = new Subject<any>();

  constructor() {
    this.budget = 0;
    this.leftover = 0;
  }

  addExpense(expense: any) {

    this.leftover = this.leftover - expense.quantity;
    //console.log(`leftoverdelservicio:${this.leftover}`);
    //console.log(`budgetdelservicio:${this.budget}`);
    this.subjects$.next(expense);
  }

  getExpense(): Observable<any> {
    return this.subjects$.asObservable(); //devolverá un observable al q el c una vez inyecte el s en el constructor, dentro del constructor, llamará a este método y se ha de suscribir

  }
}
