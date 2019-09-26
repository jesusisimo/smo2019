import { Component, OnInit } from '@angular/core';
import { ModalController, NavController } from '@ionic/angular';
import { CongresistasService } from 'src/app/services/congresistas.service';

@Component({
  selector: 'app-congresistas',
  templateUrl: './congresistas.page.html',
  styleUrls: ['./congresistas.page.scss'],
})
export class CongresistasPage implements OnInit {
  variable: string = "";
  constructor(
    public modalCtrl: ModalController,
    public _cs: CongresistasService,
    private navCtrl:NavController
      ) { }

  ngOnInit() {
    this._cs.pagina = 0;
    this._cs.congresistas = [];
    this._cs.cargar_todos();
  }

  verDetalles(id: any){
    this.navCtrl.navigateForward(`/tabs/principal/congresistas/congresista/${id}`);
	}

  buscar(texto: any) {
    this.variable = texto.target.value;
    this._cs.buscar(this.variable);
  }

  siguiente_pagina(event) {
    this._cs.siguiente_pagina()
      .then(() => {
        event.target.complete();
        event.target.disabled = false;
      })
  }

  recargar(event) {
    this._cs.recargar(this.variable)
      .then(() => {
        event.target.complete();
        event.target.disabled = false;
      })

  }


}
