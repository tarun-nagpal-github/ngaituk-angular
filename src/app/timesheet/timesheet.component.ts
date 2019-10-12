import { Component, OnInit } from "@angular/core";
import { ApiService } from "./../services/api.service";
import { ActivatedRoute, Router } from "@angular/router";

@Component({
  selector: "app-timesheet",
  templateUrl: "./timesheet.component.html",
  styleUrls: ["./timesheet.component.css"]
})
export class TimesheetComponent implements OnInit {
  constructor(private apiService: ApiService, private router: Router) {}
  timesheet: any[];
  showLoader: false;
  ngOnInit() {
    this.getRecords();
  }

  getRecords = () => {
    this.apiService.getTimesheet().subscribe(res => {
      console.log(res);
      this.showLoader = false;
      this.timesheet = res;
    });
  };
}
