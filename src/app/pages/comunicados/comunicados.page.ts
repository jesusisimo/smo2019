
import { Component, OnInit } from '@angular/core';
import { InAppBrowser } from '@ionic-native/in-app-browser/ngx';
import { ComunicadosService } from 'src/app/services/comunicados.service';
import { InterfaceComunicados, IComunicado } from 'src/app/interfaces/comunicados';

@Component({
  selector: 'app-comunicados',
  templateUrl: './comunicados.page.html',
  styleUrls: ['./comunicados.page.scss'],
})
export class ComunicadosPage implements OnInit {

  comunicados: IComunicado[];
  constructor(private iab: InAppBrowser,
    private comunicado:ComunicadosService) {
     
this.cargarComunicados();
     }

  abrirWeb(url: string, target: string){
		this.iab.create(url, target);
	}
async cargarComunicados(){
  this.comunicados= await this.comunicado.cargar_todos();
}
  ngOnInit() {
  }

}
