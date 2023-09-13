import { Component, Input } from "@angular/core";

@Component({
  selector: "slimebones-scepter-dashboard",
  templateUrl: "./dashboard.component.html",
})
export class DashboardComponent
{
  @Input() public title: string | undefined;
  @Input() public logoURL: string | undefined;
}
