import { Component, OnInit } from '@angular/core';
import { UsuarioService } from 'src/app/services/usuario.service';
import { AjustesService } from 'src/app/services/ajustes.service';
import { PostImagenComponent } from '../post-imagen/post-imagen.component';
import { ModalController } from '@ionic/angular';
import { ActivatedRoute } from '@angular/router';
import { Caso } from 'src/app/interfaces/casos';
import { CasosService } from 'src/app/services/casos.service';
import { Comentario } from 'src/app/interfaces/comentarios';
import { InAppBrowser } from '@ionic-native/in-app-browser/ngx';

@Component({
  selector: 'app-casos',
  templateUrl: './casos.page.html',
  styleUrls: ['./casos.page.scss'],
})
export class CasosPage implements OnInit {
  id = null;
  casos:Caso[]=null;
  comentarios:Comentario[]=null;
  comentario:string="";
  constructor(private _us: UsuarioService,
    private _as: AjustesService,
    private activeRoute: ActivatedRoute,
    public modalController: ModalController,
    private iab:InAppBrowser,
    public _cs: CasosService) {
     
  }

  usuario: IUsuario = {};

  async ngOnInit() {
    this.usuario = await this._us.getUsuario();
    this.id = await this.activeRoute.snapshot.paramMap.get('id');
    this.casos=await this._cs.getCaso(this.id);
    console.log(this.casos);
    this.cargarComentarios();
  }
  async verImagen(src: string, extension: string) {
    if(extension==".pdf" || extension==".doc" || extension==".docx"){
      this.abrirWeb(src, "_system");
    }else{
        const modal = await this.modalController.create({
      component: PostImagenComponent,
      componentProps: {
        imgLink: src
      },
   cssClass: 'modal-fullscreen',
   keyboardClose: true,
   showBackdrop: true
 });
 return await modal.present();
    }
}

abrirWeb(url: string, target: string){
  this.iab.create(url, target);
}

cerrarImagen() {
  this.modalController.dismiss();
}

async comentar(socio_id: string){
  let id_socio=parseInt(socio_id);
  console.log("socio: ",id_socio);
  if(id_socio){

  }else{
    await this._as.presentAlert("Por favor inicia sesión");
    return false;
  }
if(this.comentario!=""){

await this._cs.setComentario(id_socio, this.id, this.comentario );
this.comentario="";
await this._as.presentAlert("Su comentario fue enviado correctamente");
this.cargarComentarios();
}
}

async cargarComentarios(){
  this.comentarios= await this._cs.getComentarios(this.id);
}

}
