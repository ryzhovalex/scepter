import { NgModule } from "@angular/core";
import { ScepterComponent } from "./scepter.component";
import { CommonModule } from "@angular/common";
import { RouterModule } from "@angular/router";

@NgModule({
  declarations: [ScepterComponent],
  imports: [CommonModule, RouterModule],
  exports: [ScepterComponent]
})
export class ScepterModule {}
