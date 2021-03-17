import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { BudgetItem } from 'src/shared/models/budget-item.model';


@Component({
  selector: 'app-item-list-card',
  templateUrl: './item-list-card.component.html',
  styleUrls: ['./item-list-card.component.css']
})
export class ItemListCardComponent implements OnInit {
  @Input() item:BudgetItem; 
  @Output() deleteButtonClick= new EventEmitter<any>();
  @Output() cardClick= new EventEmitter<any>();
  constructor() { }

  ngOnInit(): void {
  }

  onDeleteButtonClick(){
    //emit an event to the parent element
    this.deleteButtonClick.emit();
  }
  onCardClick() {
    this.cardClick.emit()
  }
  

}
