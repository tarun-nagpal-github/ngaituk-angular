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
  constructor(
    private apiService: ApiService,
    private apiContractor: ApiContractorService,
    private router: Router
  ) {}

  ngOnInit() {
    this.getRecords();
  }

  getRecords = () => {
    this.apiService.getWorkersByContractor().subscribe(res => {
      console.log("res --00 ");
      console.log(res);
      console.log("res --00 ");
      this.showLoader = false;
      this.workers = res;
    });
  };

  goBack = () => {
    window.history.back();
  };

  goToFinalTimeSheet = () => {
    console.log("FINAL TIMSHEET CLICKED");
    this.router.navigate(["/final-timesheet"]);
  };

  addWorker = ($event = null) => {
    // console.log("EVENET");
    console.log($event);
    // console.log(this.workers);
    // console.log("EVENET");
    // debugger;

    this.workers.forEach(item => {
      if (item.id == $event.target.value) {
        if ($event.target.checked) {
          item.isTimeSheet = true;
        } else {
          item.isTimeSheet = false;
        }
      }
    });
  };
}
