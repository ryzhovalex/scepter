import { Component, OnInit } from "@angular/core";

@Component({
  selector: "lib-scepter",
  template: " <p>scepter works!</p> ",
  styles: []
})
export class ScepterComponent implements OnInit
{
  public ngOnInit(): void
  {
    console.debug("hello");
  }
}
