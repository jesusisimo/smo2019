import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { URL_SERVICIOS } from "../config/url.servicios";
import { AjustesService } from './ajustes.service';
import { DatosService } from './datos.service';
import 'rxjs/add/operator/map';


@Injectable({
  providedIn: 'root'
})
export class ActividadesService {
  pagina: number = 0;
  dia_actual: string;
  dias: IDia[];
  actividad: IActividad;
  actsPonente: IActividad[];
  constructor(
    private http: HttpClient,
    private _as: AjustesService,
    private _ds: DatosService,
  ) {
    this.dia_actual = "";
    this.dias = [];
    this.actividad = null;
  }



  async cargar_todos() {
    if (!this._as.online) {
      this._as.presentLoading("Cargando...", 0.5);
      let promesa = this._ds.getActividades()
        .then(
          data => {
            this.dias = data.dias;
            this.dia_actual = data.diaactual;
            this.pagina = 100;
            this._as.loading.dismiss();
            return promesa;
          })
        .catch(error => {
          this._as.loading.dismiss();
          return Promise.reject(error);
        });

    } else {
      this._as.presentLoading("Cargando...", 2.5);
      let url = await URL_SERVICIOS + "/minutoxminuto.php?todos&pagina=" + this.pagina;
      let promesa = this.http.get<InterfaceActividades>(url)
        .toPromise()
        .then(data => {
          this.dias = data.dias;
          this.dia_actual = data.diaactual;
          this.pagina = this.pagina += 1;
          this._as.loading.dismiss();
          return promesa;
        })
        .catch(error => {
          this._as.loading.dismiss();
          return Promise.reject(error);
        });
    }
  }

  async getDetalles(id: any) {
    this._as.presentLoading("Cargando...", 0.5);
    if (!this._as.online) {
      let promesa = this._ds.getActividad(id)
        .then(
          data => {
            this.actividad = data;
            this._as.loading.dismiss();
            return promesa;
          })
        .catch(error => {
          this._as.loading.dismiss();
          return Promise.reject(error);
        });
      return promesa;
    } else {
      let url = await URL_SERVICIOS + "/actividad.php?id=" + id;
      let promesa = await this.http.get<IActividad>(url)
        .toPromise()
        .then(data => {
          this.actividad = data[0];
          this._as.loading.dismiss();
          return promesa;
        })
        .catch(error => {
          this._as.loading.dismiss();
          return Promise.reject(error);
        });
      return promesa;
    }
  }



  async buscar(variable: string) {
    if (!this._as.online) {
      variable = variable.toUpperCase();
      this._as.presentLoading("Cargando...", 1.5);
      let promesa = this._ds.getActividades()
        .then(
          data => {
            this.dias = [];
            this.dia_actual = data.diaactual;
            this.pagina = 0;

            let dia_fecinido = false;
            let nuevosdia: IDia[] = [];
            let list: IDia[] = [];
            list = data.dias;
            list.forEach(
              dia => {

                let nuevasactividades: IActividad[] = [];
                let hay_actividades_endia = false;
                let listaactividades: IActividad[] = [];
                listaactividades = dia.actividades;
                listaactividades.forEach(
                  actividad => {
                    if (actividad.actividad.toUpperCase().indexOf(variable) >= 0 || actividad.descripcion.toUpperCase().indexOf(variable) >= 0 || actividad.temario.toUpperCase().indexOf(variable) >= 0 || actividad.categoria.toUpperCase().indexOf(variable) >= 0 || actividad.clave.toUpperCase().indexOf(variable) >= 0 || actividad.profesor.toUpperCase().indexOf(variable) >= 0) {
                      nuevasactividades.push(actividad);
                      hay_actividades_endia = true;
                      if (!dia_fecinido) {
                        dia_fecinido = true;
                        this.dia_actual = dia.clave_dia;
                      }
                    }
                  });
                let ndia: IDia;
                if (hay_actividades_endia) {
                  let ndia: IDia={
                    'actividades':nuevasactividades,
                    'clave_dia':dia.clave_dia,
                    'dia' : dia.dia
                  }
                  nuevosdia.push(ndia);
                }
              });

              this.dias=nuevosdia;



            this._as.loading.dismiss();
            return promesa;
          })
        .catch(error => {
          this._as.loading.dismiss();
          return Promise.reject(error);
        });
    } else {
      let url = await URL_SERVICIOS + "/minutoxminuto.php?search=" + variable;
      let promesa = this.http.get<InterfaceActividades>(url)
        .toPromise()
        .then(data => {
          this.dias = data.dias;
          this.dia_actual = data.diaactual;
          this.pagina = 0;
          for (let d of this.dias) {
            this.dia_actual = d.clave_dia;
            break;
          }
          return promesa;
        })
        .catch(error => {
          return Promise.reject(error);
        });
    }
  }

  async actividadesPonente(ponente: string) {
    if (!this._as.online) {
      this._as.presentLoading("Cargando...", 2);
      ponente = ponente.toUpperCase();
      let promise = await this._ds.getActividades()
        .then(
          data => {
            this.actsPonente = [];
            let list: IDia[] = [];
            list = data.dias;
            list.forEach(
              dia => {
                let listaactividades: IActividad[] = [];
                listaactividades = dia.actividades;
                listaactividades.forEach(
                  actividad => {
                    let listaproresores: IProfesor[] = [];
                    listaproresores = actividad.profesores;
                    listaproresores.forEach(
                      profesor => {
                        if (profesor.profesor_id == ponente) {
                          this.actsPonente.push(actividad);
                        }
                      });
                  });
              });
            return promise;
          }
        );

    } else {
      let url = await URL_SERVICIOS + "/actividadesprofesor.php?profesor=" + ponente;
      let promesa = this.http.get<IDia>(url)
        .toPromise()
        .then(data => {
          console.log(data);
          this.actsPonente = data.actividades;
          return promesa;
        })
        .catch(error => {
          return Promise.reject(error);
        });
    }
  }






}
