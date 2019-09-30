import { Component, OnInit } from '@angular/core';
import { UsuarioService } from 'src/app/services/usuario.service';
import { AjustesService } from 'src/app/services/ajustes.service';
import { PostImagenComponent } from '../post-imagen/post-imagen.component';
import { ModalController } from '@ionic/angular';

@Component({
  selector: 'app-casos',
  templateUrl: './casos.page.html',
  styleUrls: ['./casos.page.scss'],
})
export class CasosPage implements OnInit {
  constructor(private _us: UsuarioService,
    private _as: AjustesService,
    public modalController: ModalController) {
     
  }

  avatars = [
    {
      img: 'av-1.png',
      seleccionado: true
    },
    {
      img: 'av-2.png',
      seleccionado: false
    },
    {
      img: 'av-3.png',
      seleccionado: false
    },
    {
      img: 'av-4.png',
      seleccionado: false
    },
    {
      img: 'av-5.png',
      seleccionado: false
    },
    {
      img: 'av-6.png',
      seleccionado: false
    },
    {
      img: 'av-7.png',
      seleccionado: false
    },
    {
      img: 'av-8.png',
      seleccionado: false
    },
  ];

  avatarSlide = {
    slidesPerView: 3.5
  };
  usuario: IUsuario = {};
  avatarActual = 'av-1.png';
 
  imgLink = '../../assets/img/san_carlos.jpg';

  slideOpts = {
    centeredSlides: 'true'
  };

  async ngOnInit() {
    this.usuario = await this._us.getUsuario();
    console.log(this.usuario);
  }

  async verImagen(src: string) {
    const modal = await this.modalController.create({
      component: PostImagenComponent,
      componentProps: {
        imgLink: src
      },
   cssClass: 'modal-fullscreen',
   keyboardClose: true,
   showBackdrop: true
 });

    return await modal.present();
}

cerrarImagen() {
  this.modalController.dismiss();
}

}
