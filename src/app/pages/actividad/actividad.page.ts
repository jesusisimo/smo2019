import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ActividadesService } from 'src/app/services/actividades.service';
import { DatosService } from '../../services/datos.service';


@Component({
  selector: 'app-actividad',
  templateUrl: './actividad.page.html',
  styleUrls: ['./actividad.page.scss'],
})
export class ActividadPage implements OnInit {
  id = null;
  seccion = "1";
  constructor(
    private activeRoute: ActivatedRoute,
    public _as: ActividadesService,
    public _ds: DatosService
  ) { }

  async ngOnInit() {
    this.id = await this.activeRoute.snapshot.paramMap.get('id');
   
    await this._as.getDetalles(this.id).then(
      result => {
        this.esFavorito();
      }
    );
    
  }
  guardarFavorito(favorito: any) {
    this._ds.guardarFavorito(favorito);
  }
 async esFavorito() {
    await this._ds.isFavorito(this.id);
  }
}
