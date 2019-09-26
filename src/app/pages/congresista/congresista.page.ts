import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { CongresistasService } from 'src/app/services/congresistas.service';

@Component({
  selector: 'app-congresista',
  templateUrl: './congresista.page.html',
  styleUrls: ['./congresista.page.scss'],
})
export class CongresistaPage implements OnInit {
  id = null;
  congresista: ICongresista[] = null;
  email_c=false;
  telefono_c=false;
  institucion_c=false;
  constructor(
    private activeRoute: ActivatedRoute,
    public _cs: CongresistasService,
  ) { }

  async ngOnInit() {
    this.id = await this.activeRoute.snapshot.paramMap.get('id');
    await this._cs.getDetalles(this.id).then(
      result => {
        console.log(this._cs.congresista);
        if(this._cs.congresista.email_c=="1"){
          this.email_c=true;
        }
        if(this._cs.congresista.telefono_c=="1"){
          this.telefono_c=true;
        }
        if(this._cs.congresista.institucion_c=="1"){
          this.institucion_c=true;
        }
      }
    );
   
  }

}
