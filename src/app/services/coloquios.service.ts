import { Injectable } from '@angular/core';
import { URL_SERVICIOS } from "../config/url.servicios";
import { AjustesService } from './ajustes.service';
import 'rxjs/add/operator/map';
import { IColoquios, Coloquio} from '../interfaces/coloquios';
import { HttpClient } from '@angular/common/http';
import { AlertController, ModalController } from '@ionic/angular';

@Injectable({
  providedIn: 'root'
})
export class ColoquiosService {
  coloquios: Coloquio[];
  constructor(
    private http: HttpClient,
    private _as:AjustesService) { 

    }


  async cargar_todos() {
      
      let url = URL_SERVICIOS + "/coloquios.php";
      let promesa = await this.http.get<IColoquios>(url)
        .toPromise()
        .then(data => {
          console.log(data.coloquios);
          this.coloquios =  data.coloquios;
          return this.coloquios;
        })
        .catch(error => {
          this._as.loading.dismiss();
          return Promise.reject(error);
        });
      return promesa;
    
  }
}
