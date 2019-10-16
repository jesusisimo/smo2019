import { Injectable } from '@angular/core';
import { Sesion, ISesiones } from '../interfaces/sesiones';
import { URL_SERVICIOS } from "../config/url.servicios";
import { AjustesService } from './ajustes.service';
import 'rxjs/add/operator/map';
import { HttpClient } from '@angular/common/http';
@Injectable({
  providedIn: 'root'
})
export class SesionesService {
  sesiones: Sesion[];
  constructor(
    private http: HttpClient,
    private _as:AjustesService
  ) { }



  async cargar_todos() {
      
    let url = URL_SERVICIOS + "/sesiones.php";
    let promesa = await this.http.get<ISesiones>(url)
      .toPromise()
      .then(data => {
        console.log(data.sesiones);
        this.sesiones =  data.sesiones;
        return this.sesiones;
      })
      .catch(error => {
        this._as.loading.dismiss();
        return Promise.reject(error);
      });
    return promesa;
  
}
}
