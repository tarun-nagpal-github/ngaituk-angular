import { BrowserModule } from "@angular/platform-browser";
import { NgModule } from "@angular/core";

import { AppComponent } from "./app.component";

import { DashboardComponent } from "./dashboard/dashboard.component";

import { AppRoutingModule } from "./app-routing/app-routing.module";
import { JobListingComponent } from "./job-listing/job-listing.component";

import { ContractorsComponent } from "./contractors/contractors.component";
import { WorkersComponent } from "./workers/workers.component";
import { ComingSoonComponent } from "./coming-soon/coming-soon.component";
import { HttpClientModule } from "@angular/common/http";
import { AddWorkerComponent } from "./workers/add-worker/add-worker.component";
import { FormsModule } from "@angular/forms";

import { ReactiveFormsModule } from "@angular/forms";
import { LoaderComponent } from "./ui/loader/loader.component";
import { JobsComponent } from "./jobs/jobs.component";
import { AddJobComponent } from "./jobs/add-job/add-job.component";
import { AddContractorComponent } from "./contractors/add-contractor/add-contractor.component";
import { TimesheetComponent } from "./timesheet/timesheet.component";
import { AddTimesheetComponent } from "./timesheet/add-timesheet/add-timesheet.component";
import { NgbModule } from "@ng-bootstrap/ng-bootstrap";

@NgModule({
  declarations: [
    AppComponent,
    DashboardComponent,
    JobListingComponent,
    ContractorsComponent,
    WorkersComponent,
    ComingSoonComponent,
    AddWorkerComponent,
    LoaderComponent,
    JobsComponent,
    AddJobComponent,
    AddContractorComponent,
    TimesheetComponent,
    AddTimesheetComponent
  ],
  imports: [
    BrowserModule,
    // CollapseModule.forRoot(),
    AppRoutingModule,
    // Ng2SmartTableModule,
    // DataTableModule,
    HttpClientModule,
    ReactiveFormsModule,
    FormsModule,
    NgbModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {}
