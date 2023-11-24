import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { FileOpener } from '@awesome-cordova-plugins/file-opener/ngx';
import {
  File as IonicFile,
  FileEntry,
} from '@awesome-cordova-plugins/file/ngx';
import { Observable, map } from 'rxjs';
@Injectable({
  providedIn: 'root',
})
export class SonioService {
  constructor(
    private readonly fileOpener: FileOpener,
    private readonly ionicFile: IonicFile,
    private http: HttpClient
  ) {}

  public async downloadPeriodicStatement() {
    const blob =  await this
        .getPeriodicStatement()
        .toPromise();
    await this.openFile(blob, `transaction-${0}`).catch(() =>
        this.openBlob(blob)
    );
    // return this.getPeriodicStatement().pipe(
    //   map((x) => {
    //     console.log(x);
    //     this.openFile(x, `transaction-${0}`).catch(() => this.openBlob(x));
    //   })
    // );

    // this.openFile(blob, `transaction-${0}`).catch(() => this.openBlob(blob));
  }

  public getPeriodicStatement(): Observable<any> {
    return this.http.get(`/assets/doc.pdf`, {
      observe: 'response',
      responseType: 'blob',
    }).pipe(
        map(x =>  {
          return x;
        })
    );
  }

  private async openFile(blob: Blob, filename: string): Promise<any> {
    const save = await this.saveFile(blob, filename);
    const target = save.url;
    return await this.fileOpener.open(target, 'application/pdf');
  }

  private openBlob(blob: Blob): void {
    // console.log(blob)
    // var file = new Blob([blob], {type: 'application/pdf'});
    // var fileURL = URL.createObjectURL(file);
    // window.open(fileURL);
    window.open(URL.createObjectURL(blob), 'blank');
  }

  private async saveFile(blob: Blob, filename: string): Promise<any> {
    const entry = (await this.ionicFile.writeFile(
      this.ionicFile.cacheDirectory,
      `${filename}.pdf`,
      blob,
      { replace: true }
    )) as FileEntry;
    return {
      entry,
      fullPath: entry?.fullPath,
      nativeURL: entry?.nativeURL,
      internalURL: entry?.toInternalURL(),
      url: entry?.toURL(),
    };
  }
}
