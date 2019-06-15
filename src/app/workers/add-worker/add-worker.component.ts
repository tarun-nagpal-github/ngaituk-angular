import { Component, OnInit } from "@angular/core";
import {
  FormControl,
  FormGroup,
  FormBuilder,
  Validators
} from "@angular/forms";
import { Worker } from "./Worker";

// import { FormsModule } from '@angular/forms';

@Component({
  selector: "app-add-worker",
  templateUrl: "./add-worker.component.html",
  styleUrls: ["./add-worker.component.css"]
})
export class AddWorkerComponent implements OnInit {
  contractors = [
    "Really Smart",
    "Super Flexible",
    "Super Hot",
    "Weather Changer"
  ];
  visaType = ["Really Smart", "Super Flexible", "Super Hot", "Weather Changer"];
  //prettier-ignore
  model = new Worker('', '', this.contractors[0], '', this.visaType[0], '1983-01-01', '1983-01-01');
  constructor(private fb: FormBuilder) {}
  ngOnInit() {}

  onSubmit() {
    // TODO: Use EventEmitter with form value
    console.log(this.model);
    console.warn("Form Submittted");
  }
}
