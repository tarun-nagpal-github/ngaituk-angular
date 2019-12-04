import { Component, OnInit } from "@angular/core";
import { ApiService } from "./../../services/api.service";
import { ApiContractorService } from ".././../services/api.contractors.service";
import { ActivatedRoute, Router } from "@angular/router";

@Component({
  selector: 'app-final-timesheet',
  templateUrl: './final-timesheet.component.html',
  styleUrls: ['./final-timesheet.component.css']
})
export class FinalTimesheetComponent implements OnInit {
  data: any;
  foo: any;
  workers: any[];
  workersOld: any[];
  showLoader = true;  
  jobCode = localStorage.getItem("timesheet-data-job")
  constructor(
    private apiService: ApiService,
    private apiContractor: ApiContractorService,
    private router: Router
  ) {}

  ngOnInit() {
    this.getRecords();
  }

 
  startTime = ($event = null) => {
    console.log("EVENT CHANGE");
    console.log($event);
    console.log("EVENT CHANGE");
  }

  getRecords = () => {
    this.apiService.getWorkersByContractor().subscribe(res => {
      
      this.showLoader = false;
      this.workers = res;      
      // Add additional values
      this.workers.forEach(item => {
        item.hours = 8;
        item.startTime = "07:00";
        item.endTime = "16:00";
        item.jobCode = this.jobCode;
      }); 
      console.log("FINAL LIST");
      console.log(this.workers);
      console.log("FINAL LIST");
    });
  };

  goBack = () => {
    window.history.back();
  };

  noLunch = ($event = null) => {
    this.workers.forEach(item => {
      if (item.id == $event.target.value) {        
        if ($event.target.checked) {
          item.hours = 8.5;
        } else {
          item.hours = 8;
        }
      }
    });

    console.log(this.workers);
    debugger;
  };

  saveTimeSheet = () => {
    console.log(this.workers);
    debugger;
  }
}
