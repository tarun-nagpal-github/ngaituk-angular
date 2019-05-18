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
        phone: {
          title: "Phone"
        },
        email: {
          title: "Email Address"
        },
        address: {
          title: "Address"
        }
      }
    };

    this.data = [
      {
        id: "1",
        name: "Pasla Ltd",
        address: "Tauranga",
        phone: "9876543210",
        email: "john.doe@gmail.com"
      },
      {
        id: "2",
        name: "Pukemapu Services",
        address: "Tauranga",
        phone: "9876543210",
        email: "john.doe@gmail.com"
      },
      {
        id: "3",
        name: "Hradie Hort",
        address: "Te Puke",
        phone: "9876543210",
        email: "john.doe@gmail.com"
      },
      {
        id: "4",
        name: "aaa",
        address: "aaa",
        phone: "9876543210",
        email: "john.doe@gmail.com"
      }
    ];
  }
}
