import { Component, Input, OnInit, Output,EventEmitter } from '@angular/core';
import { NgForm } from '@angular/forms';
import { BudgetItem } from 'src/shared/models/budget-item.model';

@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.css']
})
export class FormComponent implements OnInit {
  //we can set a initial value here like this;
@Input() item:BudgetItem = new BudgetItem("", null)
@Output() formSubmit= new EventEmitter<BudgetItem>();
  constructor() { }

  ngOnInit(): void {
  }

  onSubmit(form:NgForm) {
    this.formSubmit.emit(form.value)
    form.reset();
  }
}
