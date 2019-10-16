import { Injectable, EventEmitter } from '@angular/core';
import { OneSignal, OSNotification, OSNotificationPayload } from '@ionic-native/onesignal/ngx';
import { Storage } from '@ionic/storage';
import { AjustesService } from './ajustes.service';
import { HttpClient } from '@angular/common/http';
import { DatosService } from './datos.service';
import { URL_SERVICIOS } from "../config/url.servicios";
import { INotificacion, INotificaciones } from "../interfaces/notificaciones";
@Injectable({
  providedIn: 'root'
})
export class PushService {
  mensajes: OSNotificationPayload[] = [];
  userID: string;
  pushListener = new EventEmitter<OSNotificationPayload>();

  constructor(
    private oneSignal: OneSignal,
    private http: HttpClient,
    private _as: AjustesService,
    private _ds: DatosService,
    private storage: Storage) {
    //this.cargarMensajes();
  }
  configuracionInicial() {
    this.oneSignal.startInit('e49feceb-8899-4622-ac31-fa008c07f1cc', '349906773709');

    this.oneSignal.inFocusDisplaying(this.oneSignal.OSInFocusDisplayOption.Notification);

    this.oneSignal.handleNotificationReceived().subscribe((noti) => {
      console.log("notificacion recibida: ", noti);
      this.notificacionRecibida(noti);
    });

    this.oneSignal.handleNotificationOpened().subscribe(async (noti) => {
      console.log("notificacion abierta: ", noti);
      await this.notificacionRecibida(noti.notification);
    });
    this.oneSignal.getIds().then(info => {
      this.userID = info.userId;
      console.log(this.userID);
    });
    this.oneSignal.endInit();
  }

  async notificacionRecibida(notificacion: OSNotification) {
    await this.cargarMensajes();
    const payload = notificacion.payload;
    const existePush = this.mensajes.find(mensaje => mensaje.notificationID === payload.notificationID);
    if (existePush) {
      return;
    } else {
      this.mensajes.unshift(payload);
      this.pushListener.emit(payload);
      await this.guardarMensajes();
    }
    this._as.sinleer= await this.getNoVistos();
       
  }

  guardarMensajes() {
    this.storage.set("notificaciones", this.mensajes);
  }

  async cargarMensajes() {
    this.mensajes = await this.storage.get("notificaciones") || [];
    return this.mensajes;
  }

  async getMensajes() {
    await this.cargarMensajes();
    return [...this.mensajes];
  }

  async borrarMensajes() {
    await this.storage.remove('notificaciones');
    this.mensajes = [];
    await this.guardarMensajes();
  }



  pagina: number = 0;
  notificaciones: INotificacion[];



  async cargar_todos() {
    if (!this._as.online) {
      let promise = await this._ds.getNotificaciones()
        .then(
          data => {
            console.log(data.notificaciones);
            this.notificaciones = data;
            this.pagina = 100;
           //this._as.loading.dismiss();
            return data.notificaciones;
          }
        );
    } else {
      this._as.presentLoading("Cargando...");
      let url = URL_SERVICIOS + "/notificaciones.php?accion=get&pagina=" + this.pagina+"&uuid="+this._as.uuid;
      let promesa = await this.http.get<INotificaciones>(url)
        .toPromise()
        .then(data => {
          console.log(data.notificaciones);
          this.notificaciones =  data.notificaciones;
          //this.pagina = this.pagina += 1;
          this._as.loading.dismiss();
          return data.notificaciones;
        })
        .catch(error => {
          this._as.loading.dismiss();
          return Promise.reject(error);
        });
      return promesa;
    }
  }


  async getNoVistos() {
      let url = URL_SERVICIOS + "/notificaciones.php?accion=countNovisto&uuid="+this._as.uuid;
      console.log(url);
      let promesa = await this.http.get<INotificaciones>(url)
        .toPromise()
        .then(data => {
          console.log(data.novistos);
          return data.novistos;
        })
        .catch(error => {
          return Promise.reject(error);
        });
      return promesa;
    
  }



  async siguiente_pagina() {
    if (!this._as.online) {
      return false;
    }
    let url = URL_SERVICIOS + "/notificaciones.php?accion=get&pagina=" + this.pagina+"&uuid="+this._as.uuid;
    let promesa = await this.http.get<INotificaciones>(url)
      .toPromise()
      .then(data => {
        if (data.notificaciones.length > 0) {
          this.notificaciones.push(...data.notificaciones);
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



  async recargar(variable: string) {
    if (!this._as.online) {
      this.cargar_todos();
      return true;
    } else {
      this.pagina = 0;
      this._as.presentLoading("Recargando...");
      let url = URL_SERVICIOS + "/notificaciones.php?accion=get&pagina=" + this.pagina+"&uuid="+this._as.uuid;
      let promesa = await this.http.get<INotificaciones>(url)
        .toPromise()
        .then(data => {
          if (data.notificaciones.length > 0) {
            this.notificaciones = data.notificaciones;
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


  marcar_visto(id){
    let url = URL_SERVICIOS + "/notificaciones.php?accion=setvisto&" +"uuid="+this._as.uuid+"&notificacion="+id;
      let promesa =  this.http.get<INotificaciones>(url)
        .toPromise()
        .then(data => {
          return promesa;
        })
        .catch(error => {
          this._as.loading.dismiss();
          return Promise.reject(error);
        });
      return promesa;
	}
}


