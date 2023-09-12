import { NgModule } from "@angular/core";
import { BrowserModule } from "@angular/platform-browser";

import { AppRoutingModule } from "./app-routing.module";
import { AppComponent } from "./app.component";
import { ScepterModule } from "scepter";
import { R1Component } from './r1/r1.component';
import { R2Component } from './r2/r2.component';

@NgModule({
  declarations: [AppComponent, R1Component, R2Component],
  imports: [BrowserModule, AppRoutingModule, ScepterModule],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {}
