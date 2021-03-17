import { Component, Input, OnInit, Output,EventEmitter,Inject } from '@angular/core';
import { BudgetItem } from 'src/shared/models/budget-item.model';
import {MatDialog} from '@angular/material/dialog';
import { EditModalComponent } from '../edit-modal/edit-modal.component';


export interface IUpdatedItemEvent{
  oldItem: BudgetItem,
  newItem: BudgetItem
  } 

@Component({
  selector: 'app-item-list',
  templateUrl: './item-list.component.html',
  styleUrls: ['./item-list.component.css']
})

export class ItemListComponent implements OnInit {
  @Input() budgetItems: BudgetItem[];
  @Output() deleteThisItem = new EventEmitter<BudgetItem>();
  @Output() updateThisItem = new EventEmitter<IUpdatedItemEvent>()


  constructor(public dialog: MatDialog) { }

  ngOnInit(): void {
  }
  deleteItem(item:BudgetItem){
  this.deleteThisItem.emit(item);
  }

  cardClicked(item:BudgetItem){
    const dialogRef= this.dialog.open(EditModalComponent, {
      width: '50%',
      data: item
    });
    dialogRef.afterClosed().subscribe(result => {
      if(result){
        this.updateThisItem.emit(
          {
            oldItem:item,
            newItem: result
          }
        )
      }
    });
  }
    

}

