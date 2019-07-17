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

  constructor(private apiService: ApiService, private router: Router) {}

  ngOnInit() {
    this.getRecords();
  }

  getRecords = () => {
    this.apiService.geContractors().subscribe(res => {
      console.log(res);
      this.showLoader = false;
      this.contractors = res;
    });
  };
}
