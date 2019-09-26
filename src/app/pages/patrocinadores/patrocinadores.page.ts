import { Component, OnInit } from '@angular/core';
import { ModalController } from '@ionic/angular';
import { PatrocinadoresService } from 'src/app/services/patrocinadores.service';
import { InAppBrowser } from '@ionic-native/in-app-browser/ngx';

@Component({
  selector: 'app-patrocinadores',
  templateUrl: './patrocinadores.page.html',
  styleUrls: ['./patrocinadores.page.scss'],
})
export class PatrocinadoresPage implements OnInit {
  variable: string = "";

  constructor(
    public modalCtrl: ModalController,
    public _ps: PatrocinadoresService,
    private iab: InAppBrowser
  ) { }

  ngOnInit() {
    this._ps.pagina = 0;
    this._ps.patrocinadores = [];
    this._ps.cargar_todos();
  }

  abrirWeb(url: string){
    this.iab.create(url, '_system');
  }
  
  buscar(texto: any) {
    this.variable = texto.target.value;
    this._ps.buscar(this.variable);
  }

  siguiente_pagina(event) {
    this._ps.siguiente_pagina()
      .then(() => {
        event.target.complete();
        event.target.disabled = false;
      })
  }

  recargar(event) {
    this._ps.recargar(this.variable)
      .then(() => {
        event.target.complete();
        event.target.disabled = false;
      })
  }

}
