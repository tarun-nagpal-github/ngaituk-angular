import { BrowserModule } from "@angular/platform-browser";
import { NgModule } from "@angular/core";

import { AppComponent } from "./app.component";
import { CollapseModule } from "ngx-bootstrap/collapse";
import { DashboardComponent } from "./dashboard/dashboard.component";

import { AppRoutingModule } from "./app-routing/app-routing.module";
import { JobListingComponent } from "./job-listing/job-listing.component";

import { Ng2SmartTableModule } from "ng2-smart-table";
import { DataTableModule } from "angular2-datatable";
import { ContractorsComponent } from "./contractors/contractors.component";
import { WorkersComponent } from "./workers/workers.component";
import { ComingSoonComponent } from "./coming-soon/coming-soon.component";
import { HttpClientModule } from "@angular/common/http";
import { AddWorkerComponent } from "./workers/add-worker/add-worker.component";
import { FormsModule } from "@angular/forms";

import { ReactiveFormsModule } from "@angular/forms";
import { LoaderComponent } from "./ui/loader/loader.component";
import { JobsComponent } from './jobs/jobs.component';
import { AddJobComponent } from './jobs/add-job/add-job.component';

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
    AddJobComponent
  ],
  imports: [
    BrowserModule,
    CollapseModule.forRoot(),
    AppRoutingModule,
    Ng2SmartTableModule,
    DataTableModule,
    HttpClientModule,
    ReactiveFormsModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {}
