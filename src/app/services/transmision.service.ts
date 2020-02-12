import { Injectable } from '@angular/core';
import { URL_SERVICIOS } from "../config/url.servicios";
import { AjustesService } from './ajustes.service';
import 'rxjs/add/operator/map';
import { HttpClient } from '@angular/common/http';
import { Transmision, ITransmisiones } from '../interfaces/transmisiones';

@Injectable({
  providedIn: 'root'
})
export class TransmisionService {
  transmision: Transmision;
  transmisiones: Transmision[];
  url_video:string;
  icono:string;
  tema:string;
  fecha:string;
  constructor(
    private tr:TransmisionService,
    private http: HttpClient,
    private _as:AjustesService
  ) { 


  }
  
  async cargar_transmisiones() {
      
    let url = URL_SERVICIOS + "/transmision.php";
    let promesa = await this.http.get<ITransmisiones>(url)
      .toPromise()
      .then(data => {
        this.url_video=data.url;
        this.icono=data.icono;
        this.tema=data.tema;
        this.fecha=data.fecha;
        this.transmisiones =  data.transmision;
        return this.transmisiones;
      })
      .catch(error => {
        this._as.loading.dismiss();
        return Promise.reject(error);
      });
    return promesa;
  
}
}
