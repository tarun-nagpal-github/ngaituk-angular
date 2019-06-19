import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";
import { DashboardComponent } from "../dashboard/dashboard.component";
import { JobListingComponent } from "../job-listing/job-listing.component";
import { ContractorsComponent } from "../contractors/contractors.component";
import { WorkersComponent } from "../workers/workers.component";
import { ComingSoonComponent } from "../coming-soon/coming-soon.component";
import { AddWorkerComponent } from "../workers/add-worker/add-worker.component";

const routes: Routes = [
  {
    path: "add-worker",
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
    path: "job-list",
    component: JobListingComponent
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
