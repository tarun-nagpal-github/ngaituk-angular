import { Component, OnInit } from "@angular/core";

@Component({
  selector: "app-contractors",
  templateUrl: "./contractors.component.html",
  styleUrls: ["./contractors.component.css"]
})
export class ContractorsComponent implements OnInit {
  settings: any;
  data: any;
  constructor() {}

  ngOnInit() {
    this.settings = {
      columns: {
        id: {
          title: "ID"
        },
        name: {
          title: "Name"
        },
        address: {
          title: "Address"
        }
      }
    };

    this.data = [
      { id: "1", name: "Pasla Ltd", address: "Tauranga" },
      { id: "2", name: "Pukemapu Services", address: "Tauranga" },
      { id: "3", name: "Hradie Hort", address: "Te Puke" },
      { id: "4", name: "aaa", address: "aaa" }
    ];
  }
}
