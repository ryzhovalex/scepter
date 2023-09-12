import { Component, ContentChild, Input, OnChanges, OnInit, SimpleChanges, TemplateRef } from "@angular/core";
import { SectionHeader } from "./models";
import { ScepterConfig } from "./config";

@Component({
  selector: "slimebones-scepter",
  templateUrl: "./scepter.component.html"
})
export class ScepterComponent implements OnInit
{
  @Input() public headers: SectionHeader[];
  @Input() public config: ScepterConfig = {};

  public ngOnInit(): void
  {
    console.debug("hello");
  }
}
