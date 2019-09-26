import { Component, OnInit } from '@angular/core';
import { IonSlides, NavController } from '@ionic/angular';
import { UsuarioService } from 'src/app/services/usuario.service';
import { InAppBrowser } from '@ionic-native/in-app-browser/ngx';
import { AjustesService } from 'src/app/services/ajustes.service';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-usuario',
  templateUrl: './usuario.page.html',
  styleUrls: ['./usuario.page.scss'],
})
export class UsuarioPage implements OnInit {

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
  avatarActual = "av-1.png";
  constructor(private _us: UsuarioService,
    private iab: InAppBrowser,
    private _as: AjustesService) {
  }

  async ngOnInit() {
    this.usuario = await this._us.getUsuario();
    console.log(this.usuario);
  }


  logout() {
    this._us.logout();
  }



  async actualizar(fActualizar: NgForm) {
    if (fActualizar.invalid) { return; }
    const actualizado = await this._us.actualizarUsuario(this.usuario);
    if (actualizado) {
      this._as.presentToast('Registro actualizado');
    } else {
      this._as.presentToast('No se pudo actualizar');
    }

  }

  abrirWeb(url:string, target:string){
		this.iab.create(url, target);
	}



}
