import { Component, OnInit } from "@angular/core";

@Component({
  selector: "app-workers",
  templateUrl: "./workers.component.html",
  styleUrls: ["./workers.component.css"]
})
export class WorkersComponent implements OnInit {
  data: any;
  constructor() {
    this.data = [
      {
        id: "1",
        e_id: "PL0001",
        f_name: "Dilveer",
        l_name: "Singh",
        v_type: "Work Visa",
        v_exp: "2035-01-01",
        d_o_b: "1998-01-01"
      },
      {
        id: "2",
        e_id: "PL0002",
        f_name: "Simranjeet",
        l_name: "Kaur",
        v_type: "Work Visa",
        v_exp: "2027-01-04",
        d_o_b: "1983-01-01"
      },
      {
        id: "3",
        e_id: "PL0003",
        f_name: "Harjinder",
        l_name: "Kaur",
        v_type: "Resident",
        v_exp: "2032-01-01",
        d_o_b: "1999-01-01"
      },
      {
        id: "4",
        e_id: "PL0004",
        f_name: "Abhishek ",
        l_name: "Arora",
        v_type: "Work Visa",
        v_exp: "2032-01-01",
        d_o_b: "2001-01-01"
      },
      {
        id: "5",
        e_id: "PL0005",
        f_name: "Pardeep ",
        l_name: "Singh",
        v_type: "Work Visa",
        v_exp: "2030-01-01",
        d_o_b: "1999-08-01"
      },
      {
        id: "6",
        e_id: "PL0006",
        f_name: "Rupinder",
        l_name: "Singh",
        v_type: "Resident",
        v_exp: "2035-01-01",
        d_o_b: "1997-01-01"
      },
      {
        id: "7",
        e_id: "PL0007",
        f_name: "Manjot",
        l_name: "Singh",
        v_type: "Work Visa",
        v_exp: "2032-01-01",
        d_o_b: "1996-01-01"
      },
      {
        id: "8",
        e_id: "PL0008",
        f_name: "Harjit",
        l_name: "Singh",
        v_type: "Resident",
        v_exp: "2031-01-01",
        d_o_b: "2000-01-01"
      },
      {
        id: "9",
        e_id: "PL0009",
        f_name: "Mandeep",
        l_name: "Singh",
        v_type: "Work Visa",
        v_exp: "2038-01-01",
        d_o_b: "1995-01-01"
      },
      {
        id: "10",
        e_id: "PL0010",
        f_name: "Jagjot",
        l_name: "Singh",
        v_type: "Work Visa",
        v_exp: "2038-01-01",
        d_o_b: "1995-01-01"
      },
      {
        id: "11",
        e_id: "PL0011",
        f_name: "Sukhjeet",
        l_name: "Singh",
        v_type: "Work Visa",
        v_exp: "2037-01-01",
        d_o_b: "1991-01-01"
      },
      {
        id: "12",
        e_id: "PL0012",
        f_name: "Sukhjeet",
        l_name: "Singh",
        v_type: "Work Visa",
        v_exp: "2033-01-01",
        d_o_b: "2001-01-01"
      },
      {
        id: "13",
        e_id: "PL0013",
        f_name: "Yadwinder",
        l_name: "Singh",
        v_type: "Student Visa",
        v_exp: "2019-07-01",
        d_o_b: "1998-06-01"
      },
      {
        id: "14",
        e_id: "PL0014",
        f_name: "Surinder",
        l_name: "Singh",
        v_type: "Work Visa",
        v_exp: "2032-01-01",
        d_o_b: "1975-12-01"
      }
    ];
  }

  ngOnInit() {}
}
