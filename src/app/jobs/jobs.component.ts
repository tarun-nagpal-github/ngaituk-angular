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
  constructor(private apiService: ApiService, private router: Router) { }

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

  // getEditRecord = () => {

  //   let id = this.route.snapshot.paramMap.get('id');
  //   if (id) {
  //     this.apiService.getWorkers(id).subscribe(res => {
  //       let result = res[0];
  //       this.model.contractor = result.contractor_id;
  //       this.model.dateOfBirth = result.d_o_b;
  //       this.model.workerId = result.e_id;
  //       this.model.firstName = result.f_name;
  //       this.model.lastName = result.l_name;
  //       this.model.visaExpiry = result.v_exp;
  //       this.model.visaType = result.v_type;
  //     });
  //   }

  // }


  editRecord = (id = null) => {
    this.router.navigate(['/add-job', id]);
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
