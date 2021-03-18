import { Component, Input, OnInit, Output,EventEmitter} from '@angular/core';
import { BudgetItem } from 'src/shared/models/budget-item.model';


@Component({
  selector: 'app-item-list',
  templateUrl: './item-list.component.html',
  styleUrls: ['./item-list.component.css']
})

export class ItemListComponent implements OnInit {
  @Input() budgetItems: BudgetItem[];
  @Output() deleteThisItem = new EventEmitter<BudgetItem>();


  constructor() { }

  ngOnInit(): void {
  }
  deleteItem(item:BudgetItem){
  this.deleteThisItem.emit(item);
  }

}

