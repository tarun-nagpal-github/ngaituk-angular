import { Component, OnInit } from "@angular/core";
import { Router } from "@angular/router";

import { Worker } from "./Worker";
import { ApiService } from "./../../services/api.service";
import { ApiContractorService } from "./../../services/api-contractor.service";
import { getTodayDate } from "../../utils/HelperFunctions";
import { ActivatedRoute } from "@angular/router";

// import { FormsModule } from '@angular/forms';

@Component({
  selector: "app-add-worker",
  templateUrl: "./add-worker.component.html",
  styleUrls: ["./add-worker.component.css"]
})
export class AddWorkerComponent implements OnInit {
  contractors = ["1"];
  visaType = ["Work Visa", "Student Visa", "PR"];
  showLoader = false;
  //prettier-ignore
  model = new Worker('', '', this.contractors[0], '', this.visaType[0], '', getTodayDate());
  constructor(
    private apiService: ApiService,
    private apiContractorService: ApiContractorService,
    private router: Router,
    private route: ActivatedRoute
  ) { }
  ngOnInit() {
    this.getEditRecord();
    this.apiContractorService.getContarctors().subscribe(res => {
      this.contractors = res.data;
    })
  }

  getEditRecord = () => {

    let id = this.route.snapshot.paramMap.get('id');
    if (id) {
      this.apiService.getWorkers(id).subscribe(res => {
        let result = res[0];
        this.model.contractor = result.contractor_id;
        this.model.dateOfBirth = result.d_o_b;
        this.model.workerId = result.e_id;
        this.model.firstName = result.f_name;
        this.model.lastName = result.l_name;
        this.model.visaExpiry = result.v_exp;
        this.model.visaType = result.v_type;
      });
    }

  }

  isPRVisa() {
    if (this.model.visaType != "PR") {
      return true;
    }
    return false;
  }
  onSubmit() {
    this.showLoader = true; 
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

  compareFn(c1: any, c2: any): boolean {
    console.log("c1");
    console.log(c1);
    console.log("c2");
    console.log(c2);
    return true;
    // return c1 && c2 ? c1.id === c2.id : c1 === c2;
  }
}
