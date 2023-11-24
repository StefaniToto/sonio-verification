import { IonicModule } from "@ionic/angular";
import { RouterModule } from "@angular/router";
import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { FormsModule } from "@angular/forms";
import { Tab2Page } from "./tab2.page";
import { ExploreContainerComponentModule } from "../explore-container/explore-container.module";
import { HttpClientModule } from "@angular/common/http";
import { FileOpener } from "@awesome-cordova-plugins/file-opener/ngx";
import { File } from "@awesome-cordova-plugins/file/ngx";
import {SonioService} from '../services/sonio.service';

@NgModule({
  imports: [
    IonicModule,
    CommonModule,
    FormsModule,
    HttpClientModule,
    ExploreContainerComponentModule,
    RouterModule.forChild([{ path: "", component: Tab2Page }]),
  ],
  declarations: [Tab2Page],
  providers: [FileOpener, File, SonioService],
})
export class Tab2PageModule {}
