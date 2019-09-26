import { Component, OnInit } from '@angular/core';
import { PhotoViewer } from '@ionic-native/photo-viewer/ngx';
import { File } from '@ionic-native/file/ngx';

@Component({
  selector: 'app-circuito',
  templateUrl: './circuito.page.html',
  styleUrls: ['./circuito.page.scss'],
})
export class CircuitoPage implements OnInit {

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
