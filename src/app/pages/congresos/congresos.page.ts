import { Component, OnInit } from '@angular/core';
import { PhotoViewer } from '@ionic-native/photo-viewer/ngx';
import { File } from '@ionic-native/file/ngx';
import { InAppBrowser } from '@ionic-native/in-app-browser/ngx';
@Component({
  selector: 'app-congresos',
  templateUrl: './congresos.page.html',
  styleUrls: ['./congresos.page.scss'],
})
export class CongresosPage implements OnInit {

  constructor(
    private photoViewer: PhotoViewer,
    private iab: InAppBrowser,
    private file: File) { }

  ngOnInit() {
  }
  viewPhoto(img:string) {
    let imageName = img;    
    this.photoViewer.show(this.file.applicationDirectory + "www/assets/img/"+imageName, "Esquema");

  }
  abrirWeb(url:string, target:string){
		this.iab.create(url, target);
	}
}
