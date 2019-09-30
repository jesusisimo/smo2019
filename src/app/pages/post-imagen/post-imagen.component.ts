import { Component, OnInit, Input } from '@angular/core';
import { ModalController } from '@ionic/angular';

@Component({
  selector: 'app-post-imagen',
  templateUrl: './post-imagen.component.html',
  styleUrls: ['./post-imagen.component.scss'],
})
export class PostImagenComponent implements OnInit {

  @Input() imgLink = '../../assets/avatars/av-4.png';

  slideOpts = {
    centeredSlides: 'true'
  };


  constructor(private modalController: ModalController) { }

  ngOnInit() {}

  cerrarImagen() {
    this.modalController.dismiss();
  }

}
