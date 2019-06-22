import { Component, OnInit } from "@angular/core";
import { Router } from "@angular/router";

import { Worker } from "./Worker";
import { ApiService } from "./../../services/api.service";
import { getTodayDate } from "../../utils/HelperFunctions";
import { ActivatedRoute } from "@angular/router";

// import { FormsModule } from '@angular/forms';

@Component({
  selector: "app-add-worker",
  templateUrl: "./add-worker.component.html",
  styleUrls: ["./add-worker.component.css"]
})
export class AddWorkerComponent implements OnInit {
  contractors = ["Hradie Hort", "Pasla Ltd", "Pukemapu Services"];
  visaType = ["Work Visa", "Student Visa", "PR"];
  showLoader = false;
  //prettier-ignore
  model = new Worker('', '', this.contractors[0], '', this.visaType[0], '', getTodayDate());
  constructor(
    private apiService: ApiService,
    private router: Router,
    private route: ActivatedRoute
  ) {}
  ngOnInit() {
    this.route.queryParams.subscribe(params => {
      if (params.id) {
        this.apiService.getWorkers(params.id).subscribe(res => {
          console.log(res);
          console.log("RESPONSE FROM SERVER");
          // this.workers = res;
        });
      }
    });
  }

  isPRVisa() {
    if (this.model.visaType != "PR") {
      return true;
    }
    return false;
  }
  onSubmit() {
    this.showLoader = true;
    console.warn("Form Submittted");
    this.apiService.addWorker(this.model).subscribe(
      res => {
        this.showLoader = false;
        // alert("Record Added Successfully");
        this.router.navigate(["/workers"]);
        console.log("Response");
        console.log(res);
      },
      error => {
        console.log("error Logged");
        console.log(error);
      }
    );
  }
}
