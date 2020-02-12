import { Injectable } from '@angular/core';
import { URL_SERVICIOS } from "../config/url.servicios";
import { AjustesService } from './ajustes.service';
import 'rxjs/add/operator/map';
import { HttpClient } from '@angular/common/http';
import { ICasos, Caso} from '../interfaces/casos';
import { IComentarios, Comentario} from '../interfaces/comentarios';
import { async } from '@angular/core/testing';

@Injectable({
  providedIn: 'root'
})
export class CasosService {
  casos: Caso[];
  comentarios: Comentario[];

  constructor(
    private http: HttpClient,
    private _as:AjustesService
  ) { }
  async cargar_todos() {
      
    let url = URL_SERVICIOS + "/casosC.php";
    let promesa = await this.http.get<ICasos>(url)
      .toPromise()
      .then(data => {
        this.casos =  data.casos;
        return this.casos;
      })
      .catch(error => {
        this._as.loading.dismiss();
        return Promise.reject(error);
      });
    return promesa;
  
}
async getCaso(id:any) {
      
  let url = URL_SERVICIOS + "/casosC.php?id="+id;
  let promesa = await this.http.get<ICasos>(url)
    .toPromise()
    .then(data => {
      this.casos =  data.casos;
      return this.casos;
    })
    .catch(error => {
      this._as.loading.dismiss();
      return Promise.reject(error);
    });
  return promesa;

}


async setComentario(socio_id: number, caso_id: number, comentario:string ) {

  return new Promise(resolve => {
    let url = URL_SERVICIOS + "/setComentario.php";
    this.http.post(url, {'socio_id':socio_id, 'caso_id':caso_id,'comentario':comentario})
      .subscribe(resp => {
        if (!resp['error']) {
          resolve(true);
        } else {
          resolve(false);
        }

      });
  });
}
  async getComentarios(caso:any){
          
  let url = URL_SERVICIOS + "/comentarios.php?caso="+caso;
  let promesa = await this.http.get<IComentarios>(url)
    .toPromise()
    .then(data => {
      this.comentarios =  data.comentarios;
      return this.comentarios;
    })
    .catch(error => {
      this._as.loading.dismiss();
      return Promise.reject(error);
    });
  return promesa;
  }
}
