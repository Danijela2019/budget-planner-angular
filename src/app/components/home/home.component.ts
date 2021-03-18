import { Component, OnInit } from '@angular/core';
import { BudgetItem } from 'src/shared/models/budget-item.model';

@Component({
  selector: 'homepage',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  budgetItems:BudgetItem[] = [];
  total=0;

  constructor() { }

  ngOnInit(): void {
  }
  addItem(newItem:BudgetItem) {
  this.budgetItems.push(newItem)
  this.total += newItem.amount
  }

  deleteItem(item:BudgetItem){
  let index = this.budgetItems.indexOf(item);
  this.budgetItems.splice(index,1);
  this.total -= item.amount
  }

}
