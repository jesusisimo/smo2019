import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { URL_SERVICIOS } from "../config/url.servicios";
import { AjustesService } from './ajustes.service';
import { DatosService } from './datos.service';
import 'rxjs/add/operator/map';
import { InterfaceVideos, IVideo } from '../interfaces/videos';

@Injectable({
  providedIn: 'root'
})
export class VideosService {

  constructor(
    private http: HttpClient,
    private _as: AjustesService,
    private _ds: DatosService,
  ) { }

  pagina: number = 0;
  videos: IVideo[];

  getDetalles(id: string) {
    if (!this._as.online) {
      return false;
    }
    this._as.presentLoading("Cargando...");
    let url = URL_SERVICIOS + "/videos.php?id=" + id
    let promesa = this.http.get<InterfaceVideos>(url)
      .toPromise()
      .then(data => {
        this.videos = data.resultados;
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
      let promise = this._ds.getVideos()
        .then(
          data => {
            this.videos = data;
            this.pagina = 100;
            this._as.loading.dismiss();
            return data;
          }
        );
    } else {
      this._as.presentLoading("Cargando...");
      let url = URL_SERVICIOS + "/videos.php?todos&pagina=" + this.pagina;
      let promesa = this.http.get<InterfaceVideos>(url)
        .toPromise()
        .then(data => {
          this.videos = data.resultados;
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
    let url = URL_SERVICIOS + "/videos.php?todos&pagina=" + this.pagina;
    let promesa = await this.http.get<InterfaceVideos>(url)
      .toPromise()
      .then(data => {
        if (data.resultados.length > 0) {
          this.videos.push(...data.resultados);
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
      let promise = await this._ds.getVideos()
        .then(
          data => {
            this.videos = [];
            let list: IVideo[] = [];
            list = data;
            list.forEach(
              video => {
                if (video.titulo.toUpperCase().indexOf(variable) >= 0 || video.especialidad.toUpperCase().indexOf(variable) >= 0 || video.autores.toUpperCase().indexOf(variable) >= 0) {
                  this.videos.push(video);
                }
              });
            return promise;
          }
        );
    } else {
      let url = URL_SERVICIOS + "/videos.php?search=" + variable;
      let promesa = await this.http.get<InterfaceVideos>(url)
        .toPromise()
        .then(data => {
          this.videos = null;
          this.videos = data.resultados;
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
      let url = URL_SERVICIOS + "/videos.php?todos&pagina=" + this.pagina + "&search=" + variable;
      let promesa = await this.http.get<InterfaceVideos>(url)
        .toPromise()
        .then(data => {
          if (data.resultados.length > 0) {
            this.videos = data.resultados;
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
