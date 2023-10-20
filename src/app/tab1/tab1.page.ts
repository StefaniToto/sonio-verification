import { Component } from "@angular/core";
import { Browser } from "@capacitor/browser";
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
  url = "https://staging.id.sonio-group.com/";

  async openSonio() {
    let defaultOptions: InAppBrowserOptions = {
      clearsessioncache: "yes",
      allowInlineMediaPlayback: "yes",
      enableViewportScale: "no",
      hidenavigationbuttons: "yes",
      disallowoverscroll: "no",
      usewkwebview: "yes",
      presentationstyle: "fullscreen",
      fullscreen: "yes",
      zoom: "no",
      location: "no",
      toolbar: "no",
    };

    console.log("open sonio");
    const browser = this.iab.create(this.url, "_blank", defaultOptions);
  }

  constructor(private iab: InAppBrowser) {}
}
