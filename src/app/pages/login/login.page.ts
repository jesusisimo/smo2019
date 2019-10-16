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
  }
  async login(fLogin: NgForm) {
    if(fLogin.invalid){return false;}
    const valido = await this._us.login(this.loginUser.email, this.loginUser.password);
    if(valido){
      this._as.presentAlert("Bienvenido");
      this.navCtrl.navigateRoot('/tabs/login/usuario',{animated:true});
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
    this.registerUser.avatar=avatar.img;
  }

  mostrarRegistro(){
  }
  mostrarLogin(){
  }
}
