import { BrowserModule } from "@angular/platform-browser";
import { NgModule } from "@angular/core";

import { AppComponent } from "./app.component";
import { CollapseModule } from "ngx-bootstrap/collapse";

@NgModule({
  declarations: [AppComponent],
  imports: [BrowserModule, CollapseModule.forRoot()],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {}
