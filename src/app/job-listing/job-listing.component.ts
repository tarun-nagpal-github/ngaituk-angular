import { Component, OnInit } from "@angular/core";

@Component({
  selector: "app-job-listing",
  templateUrl: "./job-listing.component.html",
  styleUrls: ["./job-listing.component.css"]
})
export class JobListingComponent implements OnInit {
  settings: any;
  data: any;
  constructor() {}

  ngOnInit() {
    this.settings = {
      columns: {
        id: {
          title: "ID"
        },
        title: {
          title: "Title"
        },
        code: {
          title: "Job Code"
        }
      }
    };

    this.data = [
      { id: "1", title: "Harvesting G3 Strip", code: "HVG3ST" },
      { id: "2", title: "Harvesting G3 Select", code: "HVG3SL" },
      { id: "3", title: "Harvesting G3 Strip 2", code: "HVG3S2" },
      { id: "4", title: "Harvesting Hayward Strip", code: "HVHWST" },
      { id: "5", title: "Harvesting G11", code: "HVG11S" },
      { id: "7", title: "Nursery", code: "NURSRY" }
    ];
  }
}
