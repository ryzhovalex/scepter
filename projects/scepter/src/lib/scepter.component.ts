import { Component, Input, OnInit, ViewEncapsulation } from "@angular/core";
import { ScepterContent } from "./content";
import { ScepterConfig } from "./config";

@Component({
  selector: "slimebones-scepter",
  templateUrl: "./scepter.component.html",
  styleUrls: ["./tailwind.css"],
  encapsulation: ViewEncapsulation.None
})
export class ScepterComponent implements OnInit
{
  @Input() public content: ScepterContent;
  @Input() public config: ScepterConfig | undefined;

  public ngOnInit(): void
  {
    console.debug("hello!");
  }
}
