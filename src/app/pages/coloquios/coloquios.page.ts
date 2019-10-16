import { Component, OnInit } from '@angular/core';
import { InAppBrowser } from '@ionic-native/in-app-browser/ngx';
import { ColoquiosService } from 'src/app/services/coloquios.service';
import { IColoquios, Coloquio } from 'src/app/interfaces/coloquios';

@Component({
  selector: 'app-coloquios',
  templateUrl: './coloquios.page.html',
  styleUrls: ['./coloquios.page.scss'],
})
export class ColoquiosPage implements OnInit {
  coloquios: Coloquio[];
  constructor(private iab: InAppBrowser,
    private coloquio:ColoquiosService) {
     
this.cargarColoquios();
     }

  abrirWeb(url: string, target: string){
		this.iab.create(url, target);
	}
async cargarColoquios(){
  this.coloquios= await this.coloquio.cargar_todos();
}
  ngOnInit() {
  }

  

}
