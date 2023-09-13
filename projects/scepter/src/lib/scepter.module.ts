import { NgModule } from "@angular/core";
import { ScepterComponent } from "./scepter.component";
import { CommonModule } from "@angular/common";
import { RouterModule } from "@angular/router";
import { HeaderComponent } from "./header/header.component";
import { DashboardComponent } from "./dashboard/dashboard.component";

@NgModule({
  declarations: [ScepterComponent, HeaderComponent, DashboardComponent],
  imports: [CommonModule, RouterModule],
  exports: [ScepterComponent]
})
export class ScepterModule {}
