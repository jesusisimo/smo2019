import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { URL_SERVICIOS } from "../config/url.servicios";
import { AjustesService } from './ajustes.service';
import 'rxjs/add/operator/map';

@Injectable({
  providedIn: 'root'
})
export class BuscadorService {
  tipos:ITipo[];
  tipo_actual:string;
  constructor(
    private http: HttpClient,
    private _as: AjustesService,
  ) { 
    this.tipos=[];
    this.tipo_actual="1";
  }

  async buscar(variable: string) {
    this.tipos=[];
    if (!this._as.online) {
      
    } else {
      let url = URL_SERVICIOS + "/buscador.php?search=" + variable;
      let promesa = this.http.get<InterfaceBuscador>(url)
        .toPromise()
        .then(data => {
          this.tipos=data.tipos;
          this.tipo_actual=data.tipo_actual;
          return promesa;
        })
        .catch(error => {
          this._as.presentToast("Ocurrio un error");
          return Promise.reject(error);
        });
      return promesa;
    }
  }



}
