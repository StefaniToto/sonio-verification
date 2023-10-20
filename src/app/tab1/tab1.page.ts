import { Component } from "@angular/core";
import { Browser } from "@capacitor/browser";

@Component({
  selector: "app-tab1",
  templateUrl: "tab1.page.html",
  styleUrls: ["tab1.page.scss"],
})
export class Tab1Page {
  async openSonio() {
    console.log("open sonio");

    await Browser.open({
      url: "https://staging.id.sonio-group.com/",
    });
  }

  constructor() {}
}
