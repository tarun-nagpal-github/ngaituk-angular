import { Component, OnInit } from "@angular/core";
import { Contractor } from "./contractor";

@Component({
  selector: "app-add-contractor",
  templateUrl: "./add-contractor.component.html",
  styleUrls: ["./add-contractor.component.css"]
})
export class AddContractorComponent implements OnInit {
  model = new Contractor("Pasla Ltd", "Tauranga");
  constructor() {}

  ngOnInit() {}
}
