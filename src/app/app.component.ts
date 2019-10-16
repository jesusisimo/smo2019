import { Component } from '@angular/core';

import { Platform } from '@ionic/angular';
import { SplashScreen } from '@ionic-native/splash-screen/ngx';
import { StatusBar } from '@ionic-native/status-bar/ngx';
import { DatosService } from './services/datos.service';
import { PushService } from './services/push.service';
import { AjustesService } from './services/ajustes.service';
@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html'
})
export class AppComponent {
  constructor(
    private platform: Platform,
    private splashScreen: SplashScreen,
    private statusBar: StatusBar,
    private _ds: DatosService,
    private _as: AjustesService,
    private noti: PushService
  ) {
    this.initializeApp();
  }

  initializeApp() {
    this.platform.ready().then(() => {
      this.statusBar.styleDefault();
///      this.statusBar.styleLightContent(); color light

      setTimeout(async () => {
        this.splashScreen.hide();
        this.noti.configuracionInicial();
        await this._as.getDevice();
        this._as.sinleer= await this.noti.getNoVistos();
        
        //this._ds.actualizaciones();
      }, 3000)
    });
  }
}
