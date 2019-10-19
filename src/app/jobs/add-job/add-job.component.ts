import { Component, OnInit } from "@angular/core";
import { Job } from "./job";
import { ApiService } from "./../../services/api.service";
import { getTodayDate } from "../../utils/HelperFunctions";
import { ActivatedRoute } from "@angular/router";
import { Router } from "@angular/router";

@Component({
  selector: "app-add-job",
  templateUrl: "./add-job.component.html",
  styleUrls: ["./add-job.component.css"]
})
export class AddJobComponent implements OnInit {
  //prettier-ignore
  model = new Job('Harvest', 'HV0023');
  showLoader = false;
  constructor(
    private apiService: ApiService,
    private router: Router,
    private route: ActivatedRoute
  ) { }

  ngOnInit() {
    this.getEditRecord();
  }

  getEditRecord = () => {

    let id = this.route.snapshot.paramMap.get('id');
    if (id) {
      this.apiService.getJobs(id).subscribe(res => {
        let result = res[0];
        this.model.title = result.j_title;
        this.model.jobCode = result.j_code;
      });
    }

  }

  onSubmit() {
    this.showLoader = true;
    this.apiService.addJob(this.model).subscribe(
      res => {
        this.showLoader = false;
        // alert("Record Added Successfully");
        this.router.navigate(["/jobs"]);
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
