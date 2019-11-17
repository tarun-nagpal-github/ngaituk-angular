import { Component, OnInit } from '@angular/core';
import { AddTimeSheet } from "./AddTimeSheet";

@Component({
  selector: 'app-add-timesheet',
  templateUrl: './add-timesheet.component.html',
  styleUrls: ['./add-timesheet.component.css']
})
export class AddTimesheetComponent implements OnInit {
  model = new AddTimeSheet({ year: 2010, month: 1, day: 1 }, '1', '3', '4');
  foo = "Bar";
  title = 'Tour of Heroes';


  constructor() {


  }

  ngOnInit() {

  }

  onDateSelect = (selectedDate = null) => {
    this.model.date = selectedDate;
  }
}
