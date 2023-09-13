import { Component, OnInit } from "@angular/core";
import { ScepterContent } from "scepter";

@Component({
  selector: "app-root",
  templateUrl: "./app.component.html"
})
export class AppComponent implements OnInit
{
  public content: ScepterContent;

  public ngOnInit(): void
  {
    this.content = {
      title: "TestGround",
      logoURL: "assets/logo.png",
      defaultRoute: "/r1",
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
