import { Component, OnInit } from "@angular/core";
import { ApiService } from "../../services/api.service";
import { ActivatedRoute, Router } from "@angular/router";
import { AddTimeSheet } from "./AddTimeSheet";

@Component({
  selector: "app-add-timesheet",
  templateUrl: "./add-timesheet.component.html",
  styleUrls: ["./add-timesheet.component.css"]
})
export class AddTimesheetComponent implements OnInit {
  model = new AddTimeSheet(
    { year: 2010, month: 1, day: 1 },
    "1",
    "0",
    [],
    "0",
    []
  );
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

  selectWorkers = (id) => {
    console.log("MODAL VALUES");
    console.log(this.model);
    console.log("SELECT WORKERS");
    // debugger;
    localStorage.setItem('timesheet-data-job', this.model.job.s_no);
    localStorage.setItem('timesheet-data-contractor', this.model.contractor.s_no);
    this.router.navigate(['/select-workers']);
  };
}
