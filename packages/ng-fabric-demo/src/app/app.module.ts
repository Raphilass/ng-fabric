import { BrowserModule } from "@angular/platform-browser";
import { NgModule } from "@angular/core";

import { AppComponent } from "./app.component";
import { NgFabricModule } from "../../../ng-fabric/src/public_api";
import { FormsModule } from "@angular/forms";
import { CommonModule } from "@angular/common";
import { AppRoutingModule } from "./app-routing.module";

@NgModule({
  declarations: [AppComponent],
  imports: [BrowserModule, CommonModule, FormsModule, /* AppRoutingModule, */ NgFabricModule],
  providers: [],
  bootstrap: [AppComponent],
  exports: []
})
export class AppModule {}
