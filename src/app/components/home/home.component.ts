import { Component, OnInit } from '@angular/core';
import { BudgetItem } from 'src/shared/models/budget-item.model';
import { IUpdatedItemEvent } from '../item-list/item-list.component';

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

  updateItem(updatedEvent: IUpdatedItemEvent){
    const index = this.budgetItems.indexOf(updatedEvent.oldItem);
    this.budgetItems[index] = updatedEvent.newItem;
    this.total  -= updatedEvent.oldItem.amount
    this.total +=  updatedEvent.newItem.amount
  }

}
