import { Component, OnInit } from '@angular/core';
import { TransmisionService } from 'src/app/services/transmision.service';
import { Transmision } from 'src/app/interfaces/transmisiones';
import { InAppBrowser } from '@ionic-native/in-app-browser/ngx';

@Component({
  selector: 'app-transm-lista',
  templateUrl: './transm-lista.page.html',
  styleUrls: ['./transm-lista.page.scss'],
})
export class TransmListaPage implements OnInit {
  url: string="";
  icono:string="";
  tema:string="";
  fecha:string="";
  transmisiones:Transmision[];
  constructor(private tr:TransmisionService,
    private iab: InAppBrowser) {

    this.cargarSesiones();
   }

  ngOnInit() {
  }
  async cargarSesiones(){
    this.transmisiones= await this.tr.cargar_transmisiones();
    this.url=this.tr.url_video;
    this.icono=this.tr.icono;
    this.tema=this.tr.tema;
    this.fecha=this.tr.fecha;
    console.log(this.url, this.icono);
  }
  abrirWeb(url: string, target: string){
		this.iab.create(url, target);
	}
}
