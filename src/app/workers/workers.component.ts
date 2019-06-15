import { Component, OnInit } from "@angular/core";
import { ApiService } from "./../services/api.service";
@Component({
  selector: "app-workers",
  templateUrl: "./workers.component.html",
  styleUrls: ["./workers.component.css"]
})
export class WorkersComponent implements OnInit {
  data: any;
  foo: any;
  workers: any[];
  workersOld: any[];
  constructor(private apiService: ApiService) {
    this.foo = "Bar";
  }

  ngOnInit() {
    this.workers = [];
    this.apiService.getWorkers().subscribe(res => {
      console.log(res);
      this.workers = res;
    });
  }
}
