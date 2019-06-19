import { Component, OnInit } from "@angular/core";
import { ApiService } from "./../services/api.service";
import { AddWorkerComponent } from "./add-worker/add-worker.component";
import { ActivatedRoute } from "@angular/router";

@Component({
  selector: "app-workers",
  templateUrl: "./workers.component.html",
  styleUrls: ["./workers.component.css"]
})
export class WorkersComponent implements OnInit {
  data: any;
  foo: any;
  workers: any[];
  workersOld: any[];
  showLoader = true;
  constructor(private apiService: ApiService, private route: ActivatedRoute) {}

  ngOnInit() {
    this.workers = [];
    this.apiService.getWorkers().subscribe(res => {
      console.log(res);
      this.showLoader = false;
      this.workers = res;
    });
  }
}
