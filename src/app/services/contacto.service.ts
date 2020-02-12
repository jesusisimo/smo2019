import { Injectable } from '@angular/core';
import { URL_SERVICIOS } from "../config/url.servicios";
import { AjustesService } from './ajustes.service';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class ContactoService {

  constructor(
    private _as:AjustesService,
    private http:HttpClient
  ) { }


async sendMensaje(email:string, nombre:string, comentario:string, telefono:string) {

  return new Promise(resolve => {
    let url = URL_SERVICIOS + "/formpost.php";
    this.http.post(url, {'email':email, 'nombre':nombre,'telefono':telefono, 'comentario':comentario})
      .subscribe(resp => {
        if (!resp['error']) {
          resolve(true);
          this._as.presentAlert("Mensaje enviado correctamente");
        } else {
          resolve(false);
          this._as.presentAlert("No se pudo enviar el mensaje");
        }

      });
  });
}
}
