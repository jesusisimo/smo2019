import { Component, OnInit, ApplicationRef } from '@angular/core';
import { PushService } from 'src/app/services/push.service';
import { OSNotificationPayload } from '@ionic-native/onesignal/ngx';
import { AlertController, ModalController } from '@ionic/angular';
import { NotificacionPage } from '../notificacion/notificacion.page';
import { INotificacion, INotificaciones } from 'src/app/interfaces/notificaciones';
import { AjustesService } from 'src/app/services/ajustes.service';
@Component({
  selector: 'app-notificaciones',
  templateUrl: './notificaciones.page.html',
  styleUrls: ['./notificaciones.page.scss'],
})
export class NotificacionesPage implements OnInit {
  mensajes: INotificacion[];
  notificaciones: INotificacion[];
  msgs = [
    {
      title: 'Titulo de la push',
      body: 'Este es el body de la push',
      date: 'Jueves 3:30pm'
    }
  ];
  existen:boolean=false;
  constructor(
    private pushService: PushService,
    private applicationRef: ApplicationRef,
    private alertCtrl: AlertController,
    private modalCtrl: ModalController,
    private _as:AjustesService
  ) {
   // this.pushService.cargar_todos();
   }


  ngOnInit() {
    this.pushService.pushListener.subscribe(
      notificacion => {
        this.mensajes.unshift(notificacion);
        //this.applicationRef.tick();
        if(this.mensajes.length>0){
          console.log("no hay");
          this.existen=true;
        }else{
          this.existen=false;
          console.log("si hay");
        }
      }
    );
  }

  async ionViewWillEnter() {
    this.mensajes=[];
    this.mensajes = await this.pushService.cargar_todos();
    if(this.mensajes.length>0){
      console.log("si hay will");
      this.existen=true;
    }else{
      console.log("no hay will");
      this.existen=false;
    }
  }



  async borrarMensajes() {
    const alert = await this.alertCtrl.create({
      header: 'Borrar noticiaciones',
      message: '¿Seguro que desea borrar todas las noticifaciones?',
      buttons: [
        {
          text: 'Cancelar',
          role: 'cancel',
          cssClass: 'secondary',
          handler: (blah) => {
            console.log('Confirm Cancel: blah');
          }
        }, {
          text: 'Borrar',
          handler: () => {
            this.mensajes = [];
            this.existen=false;
            this.pushService.borrarMensajes();
          }
        }
      ]
    });

    await alert.present();
  }


  async verNotificacion(notificacion:any) {
    const modal = await this.modalCtrl.create({
      component: NotificacionPage,
      componentProps: { 
        'notificacion': notificacion
       }
    });
    if(this._as.sinleer>0){
      this._as.sinleer=this._as.sinleer-1;
    }
    
    this.pushService.marcar_visto(notificacion.id);
    return await modal.present();


  }
  

}
