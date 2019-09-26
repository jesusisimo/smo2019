import { Component, OnInit } from '@angular/core';
import { ActividadesService } from 'src/app/services/actividades.service';
import { ActivatedRoute } from '@angular/router';
import { NavController } from '@ionic/angular';

@Component({
  selector: 'app-ponente',
  templateUrl: './ponente.page.html',
  styleUrls: ['./ponente.page.scss'],
})
export class PonentePage implements OnInit {
  id = null;
  actividades: IActividad[] = null;
  constructor(
    public _as: ActividadesService,
    private activeRoute: ActivatedRoute,
    private navCtrl: NavController
  ) { }

  ngOnInit() {
    this.id = this.activeRoute.snapshot.paramMap.get('id');
    this._as.actividadesPonente(this.id).then(
      result => {
      }
    );
  }

  verDetalles(id: any){
    this.navCtrl.navigateForward(`/tabs/principal/programa/actividad/${id}`);
	}


}
