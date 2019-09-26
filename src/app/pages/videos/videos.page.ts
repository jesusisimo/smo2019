import { Component, OnInit } from '@angular/core';
import { ModalController } from '@ionic/angular';
import { VideosService } from 'src/app/services/videos.service';
import { InAppBrowser } from '@ionic-native/in-app-browser/ngx';

@Component({
  selector: 'app-videos',
  templateUrl: './videos.page.html',
  styleUrls: ['./videos.page.scss'],
})
export class VideosPage implements OnInit {
  variable: string = "";
  constructor(
    public modalCtrl: ModalController,
    public _vs: VideosService,
    private iab: InAppBrowser
  ) { }

  ngOnInit() {
    this._vs.pagina = 0;
    this._vs.videos = [];
    this._vs.cargar_todos();
  }


  detalles(url: string) {
    let link = url;
    this.iab.create(link, '_system');
  }

  buscar(texto: any) {
    this.variable = texto.target.value;
    this._vs.buscar(this.variable);
  }

  siguiente_pagina(event) {
    this._vs.siguiente_pagina()
      .then(() => {
        event.target.complete();
        event.target.disabled = false;
      })
  }

  recargar(event) {
    this._vs.recargar(this.variable)
      .then(() => {
        event.target.complete();
        event.target.disabled = false;
      })

  }

}
