import { Component } from "@angular/core";
import {
  InAppBrowser,
  InAppBrowserOptions,
} from "@ionic-native/in-app-browser/ngx";
@Component({
  selector: "app-tab1",
  templateUrl: "tab1.page.html",
  styleUrls: ["tab1.page.scss"],
})
export class Tab1Page {
  openSonio() {
    throw new Error("Method not implemented.");
  }

  constructor(private iab: InAppBrowser) {}
}
