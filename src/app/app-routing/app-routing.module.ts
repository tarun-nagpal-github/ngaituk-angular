import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";
import { DashboardComponent } from "../dashboard/dashboard.component";
import { JobListingComponent } from "../job-listing/job-listing.component";
import { ContractorsComponent } from "../contractors/contractors.component";
import { WorkersComponent } from "../workers/workers.component";
import { ComingSoonComponent } from "../coming-soon/coming-soon.component";
import { AddWorkerComponent } from "../workers/add-worker/add-worker.component";
import { JobsComponent } from "../jobs/jobs.component";
import { AddJobComponent } from "../jobs/add-job/add-job.component";
import { AddContractorComponent } from "../contractors/add-contractor/add-contractor.component";
import { TimesheetComponent } from "../timesheet/timesheet.component";
import { AddTimesheetComponent } from "../timesheet/add-timesheet/add-timesheet.component";
import { WorkerSelectionComponent } from "../timesheet/worker-selection/worker-selection.component";
import { FinalTimesheetComponent } from "../timesheet/final-timesheet/final-timesheet.component";

const routes: Routes = [
  {
    path: "add-worker",
    component: AddWorkerComponent
  },
  {
    path: "add-worker/:id",
    component: AddWorkerComponent
  },

  {
    path: "workers",
    component: WorkersComponent
  },
  {
    path: "contractors",
    component: ContractorsComponent
  },
  {
    path: "add-job",
    component: AddJobComponent
  },

  {
    path: "add-job/:id",
    component: AddJobComponent
  },
  {
    path: "add-contractor",
    component: AddContractorComponent
  },
  {
    path: "add-timesheet",
    component: AddTimesheetComponent
  },
  {
    path: "jobs",
    component: JobsComponent
  },
  {
    path: "timesheet",
    component: TimesheetComponent
  },
  {
    path: "final-timesheet",
    component: FinalTimesheetComponent
  },
  {
    path: "select-workers",
    component: WorkerSelectionComponent
  },
  {
    path: "dashboard",
    component: DashboardComponent
  },
  {
    path: "coming-soon",
    component: ComingSoonComponent
  },
  {
    path: "",
    component: DashboardComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
  declarations: []
})
export class AppRoutingModule {}
