import { Component, OnInit, Input } from '@angular/core';
import { ModalController } from '@ionic/angular';

@Component({
  selector: 'app-notificacion',
  templateUrl: './notificacion.page.html',
  styleUrls: ['./notificacion.page.scss'],
})
export class NotificacionPage implements OnInit {
  @Input() notificacion; 

  constructor(private modalCtrl: ModalController) { }

  ngOnInit() {
    console.log(this.notificacion);
  }
  salir() {
    this.modalCtrl.dismiss();
  }
}
