import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { URL_SERVICIOS } from "../config/url.servicios";
import { AjustesService } from './ajustes.service';
import { DatosService } from './datos.service';
import 'rxjs/add/operator/map';
import { InterfacePatrocinadores, IPatrocinador } from '../interfaces/patrocinadores';

@Injectable({
  providedIn: 'root'
})
export class PatrocinadoresService {
  pagina: number = 0;
  patrocinadores: IPatrocinador[];

  constructor(
    private http: HttpClient,
    private _as: AjustesService,
    private _ds: DatosService,
  ) { }

  getDetalles(id: string) {
    if (!this._as.online) {
      return false;
    }
    this._as.presentLoading("Cargando...");
    let url = URL_SERVICIOS + "/patrocinadores.php?id=" + id
    let promesa = this.http.get<InterfacePatrocinadores>(url)
      .toPromise()
      .then(data => {
        this.patrocinadores = data.resultados;
        this._as.loading.dismiss();
        return data;
      })
      .catch(error => {
        this._as.loading.dismiss();
        return Promise.reject(error);
      });
    return promesa;
  }

  cargar_todos() {
    if (!this._as.online) {
      let promise = this._ds.getPatrocinadores()
        .then(
          data => {
            this.patrocinadores = data;
            this.pagina = 100;
            this._as.loading.dismiss();
            return data;
          }
        );
    } else {
      this._as.presentLoading("Cargando...");
      let url = URL_SERVICIOS + "/patrocinadores.php?todos&pagina=" + this.pagina;
      let promesa = this.http.get<InterfacePatrocinadores>(url)
        .toPromise()
        .then(data => {
          this.patrocinadores = data.resultados;
          this.pagina = this.pagina += 1;
          this._as.loading.dismiss();
          return data;
        })
        .catch(error => {
          this._as.loading.dismiss();
          return Promise.reject(error);
        });
      return promesa;
    }
  }



  async siguiente_pagina() {
    if (!this._as.online) {
      return false;
    }
    let url = URL_SERVICIOS + "/patrocinadores.php?todos&pagina=" + this.pagina;
    let promesa = await this.http.get<InterfacePatrocinadores>(url)
      .toPromise()
      .then(data => {
        if (data.resultados.length > 0) {
          this.patrocinadores.push(...data.resultados);
          this.pagina = this.pagina += 1;
        } else {
          this._as.presentToast("No hay mas información");
        }
        return promesa;
      })
      .catch(error => {
        this._as.presentToast("Ocurrio un error");
        return Promise.reject(error);
      });
    return promesa;
  }


  async buscar(variable: string) {
    if (!this._as.online) {
      variable = variable.toUpperCase();
      let promise = await this._ds.getPatrocinadores()
        .then(
          data => {
            this.patrocinadores = [];
            let list: IPatrocinador[] = [];
            list = data;
            list.forEach(
              patrocinador => {
                if (patrocinador.patrocinador.toUpperCase().indexOf(variable) >= 0) {
                  this.patrocinadores.push(patrocinador);
                }
              });
            return promise;
          }
        );
    } else {
      let url = URL_SERVICIOS + "/patrocinadores.php?search=" + variable;
      let promesa = await this.http.get<InterfacePatrocinadores>(url)
        .toPromise()
        .then(data => {
          this.patrocinadores = null;
          this.patrocinadores = data.resultados;
          this.pagina = 1;
          return promesa;
        })
        .catch(error => {
          this._as.presentToast("Ocurrio un error");
          return Promise.reject(error);
        });
      return promesa;
    }
  }


  async recargar(variable: string) {
    if (!this._as.online) {
      this.cargar_todos();
      return true;
    } else {
      this.pagina = 0;
      this._as.presentLoading("Recargando...");
      let url = URL_SERVICIOS + "/patrocinadores.php?todos&pagina=" + this.pagina + "&search=" + variable;
      let promesa = await this.http.get<InterfacePatrocinadores>(url)
        .toPromise()
        .then(data => {
          if (data.resultados.length > 0) {
            this.patrocinadores = data.resultados;
            this.pagina = 1;
          } else {
            this._as.presentToast("No hay mas información");
          }
          this._as.loading.dismiss();
          return promesa;
        })
        .catch(error => {
          this._as.loading.dismiss();
          return Promise.reject(error);
        });
      return promesa;
    }
  }

}
