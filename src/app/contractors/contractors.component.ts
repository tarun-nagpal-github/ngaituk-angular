import { Component, OnInit } from "@angular/core";
import { ApiService } from "./../services/api.service";
import { ActivatedRoute, Router } from "@angular/router";

@Component({
  selector: "app-contractors",
  templateUrl: "./contractors.component.html",
  styleUrls: ["./contractors.component.css"]
})
export class ContractorsComponent implements OnInit {
  settings: any;
  data: any;
  contractors: any[];
  showLoader = false;
  // isRecords = 0;

  constructor(private apiService: ApiService, private router: Router) {}

  ngOnInit() {
    this.getRecords();
    // this.isRecords = this.contractors.length;
  }

  getRecords = () => {
    this.apiService.geContractors().subscribe(res => {
      console.log("res");
      console.log(res);
      console.log("res");
      debugger;
      this.showLoader = false;
      this.contractors = res.data;
    });
  };

  deleteRecord = (id = null) => {
    if (confirm("Are you sure to you want to delete ?")) {
      this.apiService.deleteContractor(id).subscribe(
        res => {
          console.log(res);
          this.showLoader = false;
          this.contractors = res;
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
