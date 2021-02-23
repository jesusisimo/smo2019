import { Injectable } from '@angular/core';
import { URL_SERVICIOS } from "../config/url.servicios";
import { AjustesService } from './ajustes.service';
import 'rxjs/add/operator/map';
import { InterfaceWebinar, IWebinar} from '../interfaces/webinars';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class WebinarsService {
  webinars: IWebinar[];
  constructor(
    private http: HttpClient,
    private _as:AjustesService) { 

    }


  async cargar_todos() {
      
      let url = URL_SERVICIOS + "/webinars.php";
      let promesa = await this.http.get<InterfaceWebinar>(url)
        .toPromise()
        .then(data => {
          console.log(data.webinars);
          this.webinars =  data.webinars;
          return this.webinars;
        })
        .catch(error => {
          this._as.loading.dismiss();
          return Promise.reject(error);
        });
      return promesa;
    
  }
}
