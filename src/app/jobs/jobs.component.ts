import { Component, OnInit } from "@angular/core";
import { ApiService } from "./../services/api.service";
import { ActivatedRoute, Router } from "@angular/router";

@Component({
  selector: "app-jobs",
  templateUrl: "./jobs.component.html",
  styleUrls: ["./jobs.component.css"]
})
export class JobsComponent implements OnInit {
  showLoader = false;

  jobs: any[];
  constructor(private apiService: ApiService, private router: Router) {}

  ngOnInit() {
    this.getRecords();
  }

  getRecords = () => {
    this.apiService.getJobs().subscribe(res => {
      console.log(res);
      this.showLoader = false;
      this.jobs = res;
    });
  };

  editRecord = (id = null) => {
    this.router.navigate(["/add-job"]);
  };

  deleteRecord = (id = null) => {
    if (confirm("Are you sure to you want to delete ?")) {
      this.apiService.deleteJob(id).subscribe(
        res => {
          console.log(res);
          this.showLoader = false;
          this.jobs = res;
          alert("Your record has been deleted.");
          this.getRecords();
        },
        error => {
          console.log(error);
          alert("There is an Server Error!");
        }
      );
    }
  };
}
