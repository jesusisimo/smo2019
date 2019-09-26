import { Component, OnInit } from '@angular/core';
import { PhotoViewer } from '@ionic-native/photo-viewer/ngx';
import { File } from '@ionic-native/file/ngx';
@Component({
  selector: 'app-esquema',
  templateUrl: './esquema.page.html',
  styleUrls: ['./esquema.page.scss'],
})
export class EsquemaPage implements OnInit {

  constructor(
    private photoViewer: PhotoViewer,
    private file: File
  ) { }

  
  

  ngOnInit() {
  }
  viewPhoto(img:string) {
    let imageName = img;    
    this.photoViewer.show(this.file.applicationDirectory + "www/assets/img/esquemas/"+imageName, "Esquema");

  }
 
}
