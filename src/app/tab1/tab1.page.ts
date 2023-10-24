import { Component } from "@angular/core";
import { Camera, CameraResultType } from "@capacitor/camera";
// import { Browser } from "@capacitor/browser";
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
  url1 = "https://webcam-test.com/";
  openSonio() {
    console.log("open sonio");
    let defaultOptions: any = {
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
    const browser = this.iab.create(this.url, "_self", defaultOptions);
    // window.open(this.url);
    // this.iab.open({
    //   url: this.url,
    // });

    // browser.close();

    setTimeout(() => browser.close, 5000);
  }
  enableCamera() {
    // const image = await Camera.getPhoto({
    //   quality: 90,
    //   allowEditing: true,
    //   resultType: CameraResultType.Uri,
    // });

    // image.webPath will contain a path that can be set as an image src.
    // You can access the original file using image.path, which can be
    // passed to the Filesystem API to read the raw data of the image,
    // if desired (or pass resultType: CameraResultType.Base64 to getPhoto)
    // var imageUrl = image.webPath;
    Camera.requestPermissions();
    Camera.checkPermissions().then((x) =>
      console.log("chec  for permissions", x)
    );
  }
  constructor(private iab: InAppBrowser) {}
}
