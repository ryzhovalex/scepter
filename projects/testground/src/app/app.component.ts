import { Component, OnInit } from "@angular/core";
import { ScepterConfig, ScepterContent } from "scepter";

@Component({
  selector: "app-root",
  templateUrl: "./app.component.html"
})
export class AppComponent implements OnInit
{
  public content: ScepterContent;
  public config: ScepterConfig;

  public ngOnInit(): void
  {
    this.content = {
      title: "TestGround",
      logoURL: "assets/logo.png",
      headers: [
        {
          title: "Hello, World!",
          sections: [
            {
              title: "Introduction",
              iconURL: "assets/chili.svg",
              route: "/r1"
            },
            {
              title: "Credits",
              iconURL: "assets/hands-pray.svg",
              route: "/r2"
            },
          ]
        }
      ]
    };
  }
}
