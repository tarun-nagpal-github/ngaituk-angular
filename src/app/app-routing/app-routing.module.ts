import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";
import { DashboardComponent } from "../dashboard/dashboard.component";
import { JobListingComponent } from "../job-listing/job-listing.component";

const routes: Routes = [
  {
    path: "job-list",
    component: JobListingComponent
  },
  {
    path: "",
    // component: DashboardComponent
    component: JobListingComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
  declarations: []
})
export class AppRoutingModule {}
