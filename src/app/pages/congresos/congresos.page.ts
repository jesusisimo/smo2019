import { Component, OnInit } from '@angular/core';
import { PhotoViewer } from '@ionic-native/photo-viewer/ngx';
import { File } from '@ionic-native/file/ngx';
import { InAppBrowser } from '@ionic-native/in-app-browser/ngx';
import { AjustesService } from 'src/app/services/ajustes.service';
import { Congreso } from 'src/app/interfaces/congreso';
@Component({
  selector: 'app-congresos',
  templateUrl: './congresos.page.html',
  styleUrls: ['./congresos.page.scss'],
})
export class CongresosPage implements OnInit {
  titulo: string = "Congreso";
  url: string = "";
  poster: string="";
  descripcion: string="";
  congreso: Congreso;

  constructor(
    private photoViewer: PhotoViewer,
    private iab: InAppBrowser,
    private file: File,
    private _as:AjustesService
    ) { }

    async ngOnInit(){
      this.congreso=await this._as.getCongreso();
      this.url=this.congreso.url;
      this.titulo=this.congreso.titulo;
      this.poster=this.congreso.imagen;
      this.descripcion=this.congreso.descripcion;
    }

  viewPhoto(img:string) {
    let imageName = img;    
    this.photoViewer.show(this.file.applicationDirectory + "www/assets/img/"+imageName, "Esquema");

  }
  abrirWeb(url:string, target:string){
		this.iab.create(url, target);
	}
}
