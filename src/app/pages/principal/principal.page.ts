import { Component, OnInit } from '@angular/core';
import { NavController, Platform, AlertController } from '@ionic/angular';
import { InAppBrowser } from '@ionic-native/in-app-browser/ngx';
import { UsuarioService } from 'src/app/services/usuario.service';
import { AjustesService } from 'src/app/services/ajustes.service';
import { FileOpener } from '@ionic-native/file-opener/ngx';
import { DocumentViewer, DocumentViewerOptions } from '@ionic-native/document-viewer/ngx';
import { File } from '@ionic-native/file/ngx';
import { Congreso } from '../../interfaces/congreso';

@Component({
  selector: 'app-principal',
  templateUrl: './principal.page.html',
  styleUrls: ['./principal.page.scss'],
})
export class PrincipalPage implements OnInit  {
	congreso: boolean = false;
	congresos: Congreso ;
	icono:string="https://www.wsbrb-services.com/appsmo/servicios/";
	constructor(
		public navCtrl: NavController,
		private iab: InAppBrowser,
		private _us:UsuarioService,
		private _as:AjustesService,
		private platform: Platform,
		private file: File,
		private fileOpener: FileOpener,
		private document: DocumentViewer,
		private alert:AlertController
		) {

  }

  async ngOnInit(){
	this.congreso=await this._as.congreso();
	if(this.congreso){
		this.congresos=await this._as.getCongreso();
		this.icono=this.congresos.icono;
	}

}


	async navegarPagina(pagina:any){
		console.log(pagina);
		if((pagina=="agenda" || pagina=="congresistas")&& !await this._us.tienePermiso()){
			this._as.presentAlert("Inicia sesión para ver esta sección");
			this.navCtrl.navigateRoot('/tabs/login');
		}else{
			 this.navCtrl.navigateForward('/tabs/principal/'+pagina);
		}
   
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

	abrirWeb(url:string, target:string){
		this.iab.create(url, target);
	}
	openLocalPdf() {
    let filePath = this.file.applicationDirectory + 'www/assets';
 
    if (this.platform.is('android')) {
      let fakeName = Date.now();
      this.file.copyFile(filePath, 'programa_final.pdf', this.file.dataDirectory, `${fakeName}.pdf`).then(result => {
        this.fileOpener.open(result.nativeURL, 'application/pdf')
          .then(() => console.log('File is opened'))
          .catch(e => console.log('Error opening file', e));
      })
    } else {
      // Use Document viewer for iOS for a better UI
      const options: DocumentViewerOptions = {
        title: 'Programa'
      }
      this.document.viewDocument(`${filePath}/programa_final.pdf`, 'application/pdf', options);
    }
	}
	
	downloadAndOpenPdf() {
		
	}

}
