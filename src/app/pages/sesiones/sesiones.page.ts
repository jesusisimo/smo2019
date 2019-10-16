import { Component, OnInit } from '@angular/core';
import { Sesion } from 'src/app/interfaces/sesiones';
import { SesionesService } from 'src/app/services/sesiones.service';
import { InAppBrowser } from '@ionic-native/in-app-browser/ngx';

@Component({
  selector: 'app-sesiones',
  templateUrl: './sesiones.page.html',
  styleUrls: ['./sesiones.page.scss'],
})
export class SesionesPage implements OnInit {
  sesiones: Sesion[];
  constructor(private sesion:SesionesService,
    private iab: InAppBrowser,
    ) {
    this.cargarSesiones();
   }
  async cargarSesiones(){
    this.sesiones= await this.sesion.cargar_todos();
  }
  ngOnInit() {
  }
  abrirWeb(url: string, target: string){
		this.iab.create(url, target);
	}
}
