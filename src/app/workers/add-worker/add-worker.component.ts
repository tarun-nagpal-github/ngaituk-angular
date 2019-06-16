import { Component, OnInit } from "@angular/core";
import { Router } from "@angular/router";

import { Worker } from "./Worker";
import { ApiService } from "./../../services/api.service";
import { getTodayDate } from "../../utils/HelperFunctions";

// import { FormsModule } from '@angular/forms';

@Component({
  selector: "app-add-worker",
  templateUrl: "./add-worker.component.html",
  styleUrls: ["./add-worker.component.css"]
})
export class AddWorkerComponent implements OnInit {
  contractors = ["Hradie Hort", "Pasla Ltd", "Pukemapu Services"];
  visaType = ["Work Visa", "Student Visa", "PR"];
  //prettier-ignore
  model = new Worker('', '', this.contractors[0], '', this.visaType[0], getTodayDate(), getTodayDate());
  constructor(private apiService: ApiService, private router: Router) {}
  ngOnInit() {}

  onSubmit() {
    // TODO: Use EventEmitter with form value
    // this.apiService.addWorker(this.model);
    console.warn("Form Submittted");
    this.apiService.addWorker(this.model).subscribe(
      res => {
        // alert("Record Added Successfully");
        // this.router.navigate(["/workers"]);
        console.log("Response");
        console.log(res);
      },
      error => {
        console.log("error");
        console.log(error);
        alert("Record Added Successfully");
        this.router.navigate(["/workers"]);
      }
    );
    // console.log(this.model);
  }
}
