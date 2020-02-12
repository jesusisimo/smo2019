import { Component } from '@angular/core';
import { InAppBrowser } from '@ionic-native/in-app-browser/ngx';
import { UsuarioService } from 'src/app/services/usuario.service';
import { NavController } from '@ionic/angular';
import { AjustesService } from 'src/app/services/ajustes.service';
@Component({
  selector: 'app-tabs',
  templateUrl: 'tabs.page.html',
  styleUrls: ['tabs.page.scss']
})

export class TabsPage {
  slideOpts = {
		effect: 'cube',
    speed: 1100,
    autoplay:false,
		loop:true
    };
  notificaciones:number=0;
  constructor(
    private iab: InAppBrowser,
    private _us:UsuarioService,
    public _as:AjustesService,
    private navCtrl: NavController){
      this.notificaciones=this._as.sinleer;
  }
  abrirWeb(url:string){
    const browser = this.iab.create(url,'_system');
  }
  async validarVista(){		
    let existe=await this._us.existeToken();
		if( existe ){
      console.log("dirigir a user");
      this.navCtrl.navigateRoot('/tabs/login/usuario');
		}else{
      console.log("dirigir a log");
			this.navCtrl.navigateRoot('/tabs/login');
		}
		
	}
}
