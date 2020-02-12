import { Injectable } from '@angular/core';
import { Mesa, IMesa } from '../interfaces/mesa';
import { URL_SERVICIOS } from "../config/url.servicios";
import { AjustesService } from './ajustes.service';
import 'rxjs/add/operator/map';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class MesaService {
  mesas: Mesa[];
  constructor(
    private http: HttpClient,
    private _as:AjustesService
  ) { }



  async cargar_todos() {
      
    let url = URL_SERVICIOS + "/mesaD.php";
    let promesa = await this.http.get<IMesa>(url)
      .toPromise()
      .then(data => {
        console.log(data.mesa);
        this.mesas =  data.mesa;
        return this.mesas;
      })
      .catch(error => {
        this._as.loading.dismiss();
        return Promise.reject(error);
      });
    return promesa;
  
}
}
