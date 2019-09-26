import { Component, OnInit } from '@angular/core';
import { NavController } from '@ionic/angular';
import { DatosService } from '../../services/datos.service';

@Component({
  selector: 'app-agenda',
  templateUrl: './agenda.page.html',
  styleUrls: ['./agenda.page.scss'],
})
export class AgendaPage implements OnInit {
favoritos:IActividad[]=[];
  constructor(private _ds:DatosService,
    public navCtrl: NavController) { }

  ngOnInit() {
    this.getFavoritos();
  }

  
  getFavoritos(){
    let promise = this._ds.getFavoritos()
        .then(
          data => {
            this.favoritos = this._ds.favoritos;
            return data;
          }
        );
  }
  verDetalles(id: any){
    this.navCtrl.navigateForward(`/tabs/principal/programa/actividad/${id}`);
	}

  ionViewWillEnter(){
    this.getFavoritos();
  }
}