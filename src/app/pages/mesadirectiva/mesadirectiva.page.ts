import { Component, OnInit } from '@angular/core';
import { Mesa } from 'src/app/interfaces/mesa';
import { MesaService } from 'src/app/services/mesa.service';
@Component({
  selector: 'app-mesadirectiva',
  templateUrl: './mesadirectiva.page.html',
  styleUrls: ['./mesadirectiva.page.scss'],
})
export class MesadirectivaPage  {

  mesas: Mesa[];
  constructor(private mesa:MesaService
    ) {
    this.cargarMesas();
   }
  async cargarMesas(){
    this.mesas= await this.mesa.cargar_todos();
  }

}
