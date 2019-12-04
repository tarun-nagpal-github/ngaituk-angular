import { Component, OnInit } from "@angular/core";
import { ApiService } from "../../services/api.service";
import { ActivatedRoute, Router } from "@angular/router";
import { AddTimeSheet } from "./AddTimeSheet";
import { getTodaysDate } from "./../../utils/HelperFunctions";
@Component({
  selector: "app-add-timesheet",
  templateUrl: "./add-timesheet.component.html",
  styleUrls: ["./add-timesheet.component.css"]
})
export class AddTimesheetComponent implements OnInit {
  today = getTodaysDate();

  model = new AddTimeSheet(this.today, "1", "0", [], "0", []);
  foo = "Bar";
  title = "Tour of Heroes";

  constructor(private apiService: ApiService, private router: Router) {}

  ngOnInit() {
    this.geContractors();
    this.getJobs();

    // this.isRecords = this.contractors.length;
  }

  geContractors = () => {
    this.apiService.geContractors().subscribe(res => {
      this.model.contractors = res.data;
    });
  };

  getJobs = () => {
    this.apiService.getJobs().subscribe(res => {
      this.model.jobs = res;
    });
  };

  onDateSelect = (selectedDate = null) => {
    this.model.date = selectedDate;
  };

  selectWorkers = id => {    
    localStorage.setItem("day", this.model.date.day);
    localStorage.setItem("month", this.model.date.month);
    localStorage.setItem("year", this.model.date.year);
    localStorage.setItem("crew-num", this.model.crewNum);
    localStorage.setItem("timesheet-data-job", this.model.job);
    localStorage.setItem("timesheet-data-contractor", this.model.contractor);
    this.router.navigate(["/select-workers"]);
  };
}
