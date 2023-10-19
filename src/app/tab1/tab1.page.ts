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
      url: "https://staging.id.sonio-group.com/start/en/647efca334a855cf37cf58c3?session=652f9278b180801d2d11d708&flowid=647efd9734a855cf37cf58c5",
    });
  }

  constructor() {}
}
