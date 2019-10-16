import { Component, OnInit } from '@angular/core';
import { TransmisionService } from 'src/app/services/transmision.service';
import { Transmision } from 'src/app/interfaces/transmisiones';

@Component({
  selector: 'app-transm-lista',
  templateUrl: './transm-lista.page.html',
  styleUrls: ['./transm-lista.page.scss'],
})
export class TransmListaPage implements OnInit {
  url: string="https://smo.org.mx";
  transmisiones:Transmision[];
  constructor(private tr:TransmisionService) {

    this.cargarSesiones();
   }

  ngOnInit() {
  }
  async cargarSesiones(){
    this.transmisiones= await this.tr.cargar_transmisiones();
    this.url=this.tr.url_video;
    console.log(this.url);
  }
}
