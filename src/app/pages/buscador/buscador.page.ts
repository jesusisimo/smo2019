import { Component, OnInit } from '@angular/core';
import { BuscadorService } from 'src/app/services/buscador.service';
import { InAppBrowser } from '@ionic-native/in-app-browser/ngx';
import { NavController } from '@ionic/angular';
import { AjustesService } from 'src/app/services/ajustes.service';

@Component({
  selector: 'app-buscador',
  templateUrl: './buscador.page.html',
  styleUrls: ['./buscador.page.scss'],
})
export class BuscadorPage implements OnInit {
  variable: string;
  constructor(
    public _bs: BuscadorService,
    private iab: InAppBrowser,
    private navCtrl: NavController,
    private _as: AjustesService
  ) {
    this.variable = "";
    this._bs.tipo_actual = "1";
    this._bs.tipos = [];
  }

  ngOnInit() {
    this._as.checkConexion();
  }
  buscar(texto: any) {
    if (!this._as.online) {
      this._as.presentAlert("Esta sección solo funciona con conexión a internet, vuelve al menú y realiza las busquedas en programa general, videos, carteles o ponentes según lo requieras.");
    } else {
      this._bs.tipos = [];
      this.variable = texto.target.value;
      if (this.variable.length > 3) {
        this._bs.buscar(this.variable);
      }
    }

  }

  detalles(resultado: IResultado) {
    if (resultado.clase == "video" || resultado.clase == "cartel") {
      this.iab.create(resultado.extra, '_system');
    } else {
      this.navCtrl.navigateForward(`/tabs/principal/programa/actividad/${resultado.id}`);
    }
  }
}
