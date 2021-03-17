import { Component, OnInit, Inject } from '@angular/core';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';
import { BudgetItem } from 'src/shared/models/budget-item.model';

@Component({
  selector: 'app-edit-modal',
  templateUrl: './edit-modal.component.html',
  styleUrls: ['./edit-modal.component.css']
})
export class EditModalComponent implements OnInit {

  constructor(
    public dialogRef: MatDialogRef<EditModalComponent>,
    @Inject(MAT_DIALOG_DATA) public item: BudgetItem) { }

  ngOnInit(): void {
  }
  onSubmitData(updatedItem:BudgetItem){
   this.dialogRef.close(updatedItem);
  }

}


