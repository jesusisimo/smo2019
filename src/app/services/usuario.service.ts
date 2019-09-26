import { Injectable } from '@angular/core';
import { Storage } from '@ionic/storage';
import { HttpClient } from '@angular/common/http';
import { URL_SERVICIOS } from "../config/url.servicios";
import { AjustesService } from './ajustes.service';
import { NavController } from '@ionic/angular';

@Injectable({
  providedIn: 'root'
})
export class UsuarioService {
  token: string = null;
  private usuario: IUsuario = {};

  constructor(
    private storage: Storage,
    private http: HttpClient,
    private _as: AjustesService,
    private navCtrl: NavController
  ) {

  }

  login(email: string, password: string) {
    const data = { email, password };
    let url = URL_SERVICIOS + "/login.php";
    return new Promise(resolve => {
      this.http.post(url, data).subscribe(
        resp => {
          console.log(resp);
          if (!resp['error']) {
            this.guardarToken(resp['token']);
            resolve(true);
          } else {
            this.token = null;
            this.storage.remove('token');
            resolve(false);
          }
        }
      )
    });
  }

  registro(usuario: IUsuario) {
    let url = URL_SERVICIOS + "/registro.php";
    return new Promise(resolve => {
      this.http.post(url, usuario).subscribe(
        resp => {
          console.log(resp);
          if (!resp['error']) {
            this.guardarToken(resp['token']);
            resolve(true);
          } else {
            this._as.presentAlert(resp['mensaje']);
            this.token = null;
            this.storage.remove('token');
            resolve(false);
          }
        }
      )
    });
  }



  async getUsuario() {
      await this.validaToken();
    return await { ...this.usuario };
  }

  async guardarToken(token: string) {
    this.token = token;
    await this.storage.set('token', token);
  }

  async cargarToken() {
    this.token = await this.storage.get('token') || null;
  }

  async existeToken(): Promise<boolean> {
    await this.cargarToken();
    if (!this.token) {
      console.log("No existe token");
      return Promise.resolve(false);
    } else {
      console.log("Si existe token");
      return Promise.resolve(true);
    }
  }

  async tienePermiso(): Promise<boolean> {
    await this.cargarToken();
    if (!this.token) {
      //this._as.presentAlert("Ir a mi perfil para registrarme");
      return Promise.resolve(false);
    } else {
      console.log("Si existe token");
      return Promise.resolve(true);
    }
  }


  async validaToken(): Promise<boolean> {

    await this.cargarToken();

    if (!this.token) {
      this.navCtrl.navigateRoot('/tabs/login');
      return Promise.resolve(false);
    }


    return new Promise<boolean>(resolve => {
      let url = URL_SERVICIOS + "/usuario.php";
      const data = { token: this.token };
      this.http.post(url, data)
        .subscribe(resp => {
          if (resp['id']) {
            this.usuario = resp;
            resolve(true);
          } else {
            this.navCtrl.navigateRoot('/tabs/login');
            resolve(false);
          }
        });
    });

  }


  logout() {
    this.token = null;
    this.usuario = null;
    this.storage.remove('token');
    this.navCtrl.navigateRoot('/tabs/login', { animated: true });
  }


  actualizarUsuario(usuario: IUsuario) {

    return new Promise(resolve => {
      let url = URL_SERVICIOS + "/updateuser.php";
      this.http.post(url, usuario)
        .subscribe(resp => {
          if (resp['success']) {
            resolve(true);
          } else {
            resolve(false);
          }

        });

    });



  }
}
