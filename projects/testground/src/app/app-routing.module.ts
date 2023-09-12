import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";
import { R1Component } from "./r1/r1.component";
import { R2Component } from "./r2/r2.component";

const routes: Routes = [
  {
    path: "r1",
    component: R1Component
  },
  {
    path: "r2",
    component: R2Component
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {}
