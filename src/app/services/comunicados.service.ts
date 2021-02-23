import { Injectable } from '@angular/core';
import { URL_SERVICIOS } from "../config/url.servicios";
import { AjustesService } from './ajustes.service';
import 'rxjs/add/operator/map';
import { InterfaceComunicados, IComunicado} from '../interfaces/comunicados';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class ComunicadosService {
  comunicados: IComunicado[];
  constructor(
    private http: HttpClient,
    private _as:AjustesService) { 

    }


  async cargar_todos() {
      
      let url = URL_SERVICIOS + "/comunicados.php";
      let promesa = await this.http.get<InterfaceComunicados>(url)
        .toPromise()
        .then(data => {
          console.log(data.comunicados);
          this.comunicados =  data.comunicados;
          return this.comunicados;
        })
        .catch(error => {
          this._as.loading.dismiss();
          return Promise.reject(error);
        });
      return promesa;
    
  }
}
