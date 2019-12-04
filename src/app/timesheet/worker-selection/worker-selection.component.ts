import { Component, OnInit } from "@angular/core";
import { ApiService } from "./../../services/api.service";
import { ApiContractorService } from ".././../services/api.contractors.service";
import { ActivatedRoute, Router } from "@angular/router";

@Component({
  selector: "app-worker-selection",
  templateUrl: "./worker-selection.component.html",
  styleUrls: ["./worker-selection.component.css"]
})
export class WorkerSelectionComponent implements OnInit {
  data: any;
  foo: any;
  workers: any[];
  workersOld: any[];
  showLoader = true;
  day = "";
  month = "";
  year = "";
  crewNum = "";
  jobCode = "";
  contractor = "";
  date = "";
  constructor(
    private apiService: ApiService,
    private apiContractor: ApiContractorService,
    private router: Router
  ) {}

  ngOnInit() {
    this.getRecords();
    this.getDataFromLocal();
  }

  getTimeSheetDate = () => {    
    this.day = window.localStorage.getItem('day');
    this.month = window.localStorage.getItem('month');
    this.year = window.localStorage.getItem('year');
    return this.year + "-" + this.month + "-" + this.day;    
  }

  getDataFromLocal = () => {  
    this.crewNum = window.localStorage.getItem('crew-num');
    this.jobCode = window.localStorage.getItem('timesheet-data-job');
    this.contractor = window.localStorage.getItem('timesheet-data-contractor');
    this.date = this.getTimeSheetDate();
  }

  getRecords = () => {
    this.apiService.getWorkersByContractor().subscribe(res => {
      console.log("getWorkersByContractor");
      console.log(res);
      console.log("getWorkersByContractor");
      this.showLoader = false;
      this.workers = res;
    });
  };

  goBack = () => {
    window.history.back();
  };

  goToFinalTimeSheet = () => {
    console.log("WORKERS DATA");
    console.log(this.workers);
    console.log("WORKERS DATA");
    debugger;
    this.router.navigate(["/final-timesheet"]);
  };

  addWorker = ($event = null) => {
    this.workers.forEach(item => {
      if (item.id == $event.target.value) {
        if ($event.target.checked) {
          item.isTimeSheet = true;
        } else {
          item.isTimeSheet = false;
        }
        item.date = this.getTimeSheetDate();
        item.crewNum = this.crewNum;
        item.jobCode = this.jobCode;        
      }
    });
  };
}
