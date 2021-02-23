import { Component, OnInit, Input } from '@angular/core';
import { ModalController } from '@ionic/angular';
import { InAppBrowser } from '@ionic-native/in-app-browser/ngx';

@Component({
  selector: 'app-notificacion',
  templateUrl: './notificacion.page.html',
  styleUrls: ['./notificacion.page.scss'],
})
export class NotificacionPage implements OnInit {
  @Input() notificacion; 

  constructor(private modalCtrl: ModalController,private iab: InAppBrowser) { }

  ngOnInit() {
    console.log(this.notificacion);
  }
  salir() {
    this.modalCtrl.dismiss();
  }
  abrirWeb(url:string, target:string){
		this.iab.create(url, target);
  }
}
