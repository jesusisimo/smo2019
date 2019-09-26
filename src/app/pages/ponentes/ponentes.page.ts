import { Component, OnInit } from '@angular/core';
import { ModalController, NavController } from '@ionic/angular';
import { PonentesService } from 'src/app/services/ponentes.service';

@Component({
  selector: 'app-ponentes',
  templateUrl: './ponentes.page.html',
  styleUrls: ['./ponentes.page.scss'],
})
export class PonentesPage implements OnInit {

  variable: string = "";
  constructor(
    public modalCtrl:ModalController,
    public _ps: PonentesService,
    private navCtrl:NavController
      ) { }

  ngOnInit() {
    this._ps.pagina = 0;
    this._ps.ponentes = [];
    this._ps.cargar_todos();
  }

  verDetalles(id: any){
    this.navCtrl.navigateForward(`/tabs/principal/ponentes/ponente/${id}`);
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
