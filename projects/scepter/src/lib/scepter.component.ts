import { Component, ContentChild, Input, OnChanges, OnInit, SimpleChanges, TemplateRef } from "@angular/core";
import { ScepterContent, SectionHeader } from "./content";
import { ScepterConfig } from "./config";

@Component({
  selector: "slimebones-scepter",
  templateUrl: "./scepter.component.html"
})
export class ScepterComponent implements OnInit
{
  @Input() public content: ScepterContent;
  @Input() public config: ScepterConfig | null = null;

  public ngOnInit(): void
  {
    console.debug("hello");
  }
}
