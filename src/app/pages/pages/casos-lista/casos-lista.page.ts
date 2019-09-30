import { Component, OnInit } from '@angular/core';
import { UsuarioService } from 'src/app/services/usuario.service';
import { AjustesService } from 'src/app/services/ajustes.service';
import { File } from '@ionic-native/file/ngx';
import { FileTransfer } from '@ionic-native/file-transfer/ngx';
import { NavController } from '@ionic/angular';

@Component({
  selector: 'app-casos-lista',
  templateUrl: './casos-lista.page.html',
  styleUrls: ['./casos-lista.page.scss'],
})
export class CasosListaPage implements OnInit {

  constructor(
    public navCtrl: NavController,
    private _us:UsuarioService,
    private _as:AjustesService,
    ) { }

    avatars = [
      {
        img: 'av-1.png',
        seleccionado: true
      },
      {
        img: 'av-2.png',
        seleccionado: false
      },
      {
        img: 'av-3.png',
        seleccionado: false
      },
      {
        img: 'av-4.png',
        seleccionado: false
      },
      {
        img: 'av-5.png',
        seleccionado: false
      },
      {
        img: 'av-6.png',
        seleccionado: false
      },
      {
        img: 'av-7.png',
        seleccionado: false
      },
      {
        img: 'av-8.png',
        seleccionado: false
      },
    ];

    avatarSlide = {
      slidesPerView: 3.5
    };
    usuario: IUsuario = {};
    avatarActual = 'av-1.png';

    async ngOnInit() {
      this.usuario = await this._us.getUsuario();
      console.log(this.usuario);
    }

    async casoImagen(pagina:any){
      console.log(pagina);
         this.navCtrl.navigateForward('/tabs/principal/' + pagina);
      }


}
