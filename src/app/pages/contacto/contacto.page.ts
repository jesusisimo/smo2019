import { Component, OnInit } from '@angular/core';
import { AjustesService } from 'src/app/services/ajustes.service';
import { ContactoService } from 'src/app/services/contacto.service';

@Component({
  selector: 'app-contacto',
  templateUrl: './contacto.page.html',
  styleUrls: ['./contacto.page.scss'],
})
export class ContactoPage implements OnInit {
  nombre:string="";
  email:string="";
  telefono:string="";
  comentario:string="";
  constructor(
    private _as:AjustesService,
    private _cs:ContactoService
  ) { }

  ngOnInit() {
  }

  async enviarMensaje(){
    if(this.comentario!="" && this.email!="" && this.nombre!=""){
    let respuesta=await this._cs.sendMensaje(this.email, this.nombre, this.comentario, this.telefono);
    this.comentario="";
    this.email="";
    this.telefono="";
    this.nombre="";
    }else{
      this._as.presentAlert("Por favor complete el formulario");
    }
    }
}
