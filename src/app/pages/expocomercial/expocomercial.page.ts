import { Component, OnInit } from '@angular/core';
import { PhotoViewer } from '@ionic-native/photo-viewer/ngx';
import { File } from '@ionic-native/file/ngx';

@Component({
  selector: 'app-expocomercial',
  templateUrl: './expocomercial.page.html',
  styleUrls: ['./expocomercial.page.scss'],
})
export class ExpocomercialPage implements OnInit {

  constructor(
    private photoViewer: PhotoViewer,
    private file: File
  ) { }

  ngOnInit() {
  } 
  
  viewPhoto(img:string) {
    let imageName = img;    
    this.photoViewer.show(this.file.applicationDirectory + "www/assets/img/"+imageName, "Plano");

  }

}
