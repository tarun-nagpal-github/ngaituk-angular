import { Component, OnInit } from "@angular/core";
import { ApiService } from "./../services/api.service";
import { AddWorkerComponent } from "./add-worker/add-worker.component";
import { ActivatedRoute } from "@angular/router";

import Swal from "sweetalert2";
declare var swal: any;
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
  showLoader = true;
  constructor(private apiService: ApiService, private route: ActivatedRoute) {}

  ngOnInit() {
    this.getRecords();
  }

  getRecords = () => {
    this.apiService.getWorkers().subscribe(res => {
      console.log(res);
      this.showLoader = false;
      this.workers = res;
    });
  };

  editRecord = (id = null) => {};
  deleteRecord = (id = null) => {
    Swal.fire({
      title: "Are you sure?",
      text: "You will not be able to recover the record!",
      type: "warning",
      showCancelButton: true,
      confirmButtonText: "Yes, delete it!",
      cancelButtonText: "No, keep it"
    }).then(result => {
      if (result.value) {
        this.apiService.deleteWorker(id).subscribe(
          res => {
            console.log(res);
            this.showLoader = false;
            this.workers = res;
            Swal.fire("Deleted!", "Your record has been deleted.", "success");
            this.getRecords();
          },
          error => {
            console.log(error);
            Swal.fire("Oops!", "There is an Server Error!", "error");
          }
        );
      } else if (result.dismiss === Swal.DismissReason.cancel) {
        Swal.fire("Cancelled", "Your record is safe :)", "error");
      }
    });
  };
}
