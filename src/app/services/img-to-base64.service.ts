import { Injectable } from '@angular/core';
import { DomSanitizer } from '@angular/platform-browser';


@Injectable({
  providedIn: 'root'
})
export class ImgToBase64Service {

  constructor(private sanitizer: DomSanitizer) { }

  getFile(imgFile: any)
  {
    if (imgFile) {
      let objectURL = 'data:image/jpeg;base64,' + imgFile;
      imgFile = this.sanitizer.bypassSecurityTrustUrl(objectURL);

      return imgFile;

    }
  }
}
