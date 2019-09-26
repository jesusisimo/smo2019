import { Injectable, EventEmitter } from '@angular/core';
import { OneSignal, OSNotification, OSNotificationPayload } from '@ionic-native/onesignal/ngx';
import { Storage } from '@ionic/storage';

@Injectable({
  providedIn: 'root'
})
export class PushService {
  mensajes: OSNotificationPayload[] = [];
  userID: string;
  pushListener = new EventEmitter<OSNotificationPayload>();

  constructor(
    private oneSignal: OneSignal,
    private storage: Storage) {
    this.cargarMensajes();
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
}
