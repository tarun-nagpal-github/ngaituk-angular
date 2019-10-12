import { Component, OnInit } from "@angular/core";
import { Contractor } from "./contractor";
import { ApiService } from "./../../services/api.service";
import { Router, ActivatedRoute } from "@angular/router";

@Component({
  selector: "app-add-contractor",
  templateUrl: "./add-contractor.component.html",
  styleUrls: ["./add-contractor.component.css"]
})
export class AddContractorComponent implements OnInit {
  model = new Contractor("", "");
  showLoader = false;
  constructor(
    private apiService: ApiService,
    private router: Router,
    private route: ActivatedRoute
  ) {}

  ngOnInit() {}

  onSubmit() {
    this.showLoader = true;
    console.log(this.model);
    console.log("SUBMIT ");
    debugger;

    this.apiService.addContractor(this.model).subscribe(
      res => {
        this.showLoader = false;
        // alert("Record Added Successfully");
        this.router.navigate(["/contractors"]);
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
