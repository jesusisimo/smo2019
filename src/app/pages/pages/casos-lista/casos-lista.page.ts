import { Component, OnInit } from '@angular/core';
import { UsuarioService } from 'src/app/services/usuario.service';
import { AjustesService } from 'src/app/services/ajustes.service';
import { File } from '@ionic-native/file/ngx';
import { FileTransfer } from '@ionic-native/file-transfer/ngx';
import { NavController, NavParams } from '@ionic/angular';
import { Caso } from 'src/app/interfaces/casos';
import { CasosService } from 'src/app/services/casos.service';

@Component({
  selector: 'app-casos-lista',
  templateUrl: './casos-lista.page.html',
  styleUrls: ['./casos-lista.page.scss'],
})
export class CasosListaPage implements OnInit {
  casos: Caso[];
  usuario: IUsuario = {};
  constructor(
    public navCtrl: NavController,
    private _us:UsuarioService,
    private _cs:CasosService,
    ) {
      this.cargarCasos();
     }

    async ngOnInit() {
      this.usuario = await this._us.getUsuario();
      console.log(this.usuario);
    }

    async casoImagen(id:any){
         this.navCtrl.navigateForward(`/tabs/principal/casos/${id}`);

      }


      async cargarCasos(){
        this.casos= await this._cs.cargar_todos();
      }

}
