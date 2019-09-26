import { Component, OnInit, Input } from '@angular/core';
import { CartelesService } from 'src/app/services/carteles.service';
import { ModalController } from '@ionic/angular';

@Component({
  selector: 'app-cartel',
  templateUrl: './cartel.component.html',
  styleUrls: ['./cartel.component.scss'],
})
export class CartelComponent implements OnInit {
@Input() id;
cartel: any;
  constructor(
    private _cs: CartelesService,
    private modalCtrl: ModalController
    ) { }


  ngOnInit() {
    //console.log("ID "+this.id);

    this.cartel=this._cs.getDetalles(this.id);

  }
  regresar(){
    this.modalCtrl.dismiss();
  }
}
