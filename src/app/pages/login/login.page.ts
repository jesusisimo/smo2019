import { Component, OnInit, ViewChild } from '@angular/core';
import { NgForm } from '@angular/forms';
import { IonSlides, NavController } from '@ionic/angular';
import { UsuarioService } from 'src/app/services/usuario.service';
import { AjustesService } from 'src/app/services/ajustes.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
})
export class LoginPage implements OnInit {
  @ViewChild('slidePrincipal') slides:IonSlides;
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
    slidesPerView:3.5
  };
  loginUser={
    email:"",
    password: ""
  }

  registerUser: IUsuario={
    email:"",
    password:"",
    nombre:"",
    apellidos:"",
    telefono:"",
    institucion:"",
    avatar:"av-1.png",
  }
  constructor(
    private _us:UsuarioService,
    private navCtrl: NavController,
    private _as:AjustesService) { 

  }

  ngOnInit() {
    this.slides.lockSwipes(true);
  }
  async login(fLogin: NgForm) {
    if(fLogin.invalid){return false;}
    const valido = await this._us.login(this.loginUser.email, this.loginUser.password);
    if(valido){
      this._as.presentAlert("Bienvenido");
      this.navCtrl.navigateRoot('/tabs/login/usuario',{animated:true});
    }else{
      this._as.presentAlert("Usuario o contraseña incorrectos");
    }
  }

  async registro(fRegistro: NgForm) {
    console.log(fRegistro);

    if(fRegistro.invalid){return false;}
    const registrado = await this._us.registro(this.registerUser);
    if(registrado){
      //navegar tabs
      this._as.presentAlert("Registro exitoso");
      this.navCtrl.navigateRoot('/tabs/login/usuario',{animated:true});
    }
  }

  seleccionarAvatar(avatar) {
    console.log(avatar.img);
    this.avatars.forEach(av => av.seleccionado = false);
    avatar.seleccionado = true;
    this.registerUser.avatar=avatar.img;
  }

  mostrarRegistro(){
    this.slides.lockSwipes(false);
    this.slides.slideTo(1);
    this.slides.lockSwipes(true);
  }
  mostrarLogin(){
    this.slides.lockSwipes(false);
    this.slides.slideTo(0);
    this.slides.lockSwipes(true);
  }
}
