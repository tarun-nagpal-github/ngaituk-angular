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
    this.apiService.getWorkers().subscribe(res => {
      console.log(res);
      this.showLoader = false;
      this.workers = res;
    });
  };

  goBack = () => {
    window.history.back();
  }
}
