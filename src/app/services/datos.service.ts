import { Injectable } from '@angular/core';
import { Storage } from '@ionic/storage';
import { URL_SERVICIOS } from '../config/url.servicios';
import { HttpClient } from '@angular/common/http';
import 'rxjs/add/operator/map';
import { AjustesService } from './ajustes.service';
import { InterfaceCarteles, ICartel } from '../interfaces/carteles';
import { InterfaceVideos, IVideo } from '../interfaces/videos';
import { IPatrocinador } from '../interfaces/patrocinadores';

@Injectable({
  providedIn: 'root'
})
export class DatosService {
  carteles: ICartel[];
  profesores: IPonente[];
  actividad: IActividad[] = [];
  is_favorito = "ligth";
  videos: IVideo[];
  favoritos: IActividad[] = [];
  patrocinadores: IPatrocinador[];
  actividades: InterfaceActividades[];
  constructor(
    private storage: Storage,
    private http: HttpClient,
    private _as: AjustesService,
  ) { }

  actualizaciones() {
    if (this._as.online) {
      this.guardarCarteles();
      this.guardarActividades();
      this.guardarVideos();
      this.guardarPatrocinadores();
      this.guardarProfesores();
      // this.storage.get('carteles').then((valores) => {
      //   if (!valores) {
      //     this.guardarCarteles();
      //   }
      // });

      // this.storage.get('actividades').then((valores) => {
      //   if (!valores) {
      //     this.guardarActividades();
      //   }
      // });

      // this.storage.get('videos').then((valores) => {
      //   if (!valores) {
      //     this.guardarVideos();
      //   }
      // });

      // this.storage.get('patrocinadores').then((valores) => {
      //   if (!valores) {
      //     this.guardarPatrocinadores();
      //   }
      // });

    }
  }
  //CARTELES
  guardarCarteles() {
    let url = URL_SERVICIOS + "/carteles.php?getall";
    let promesa = this.http.get<InterfaceCarteles>(url)
      .toPromise()
      .then(data => {
        if (data.resultados.length > 0) {
          this.storage.set('carteles', data.resultados);
          //this._as.presentToast("Carteles guardados en dispositivo");
        }
        return promesa;
      })
      .catch(error => {
        return Promise.reject(error);
      });
    return promesa;
  }

  async getCarteles() {
    let promesa = await this.storage.get('carteles').then((valores) => {
      this.carteles = valores;
      return valores;
    });
    return promesa;
  }

  //PROFESORES
  async getProfesores() {
    let promesa = await this.storage.get('profesores').then((valores) => {
      this.profesores = valores;
      return valores;
    });
    return promesa;
  }
  guardarProfesores() {
    let url = URL_SERVICIOS + "/profesores.php?getall";
    let promesa = this.http.get<InterfacePonentes>(url)
      .toPromise()
      .then(data => {
        if (data.profesores.length > 0) {
          this.storage.set('profesores', data.profesores);
        }
        return promesa;
      })
      .catch(error => {
        return Promise.reject(error);
      });
    return promesa;
  }
  //VIDEOS
  guardarVideos() {
    let url = URL_SERVICIOS + "/videos.php?getall";
    let promesa = this.http.get<InterfaceVideos>(url)
      .toPromise()
      .then(data => {
        if (data.resultados.length > 0) {
          this.storage.set('videos', data.resultados);
          //this._as.presentToast("Videos guardados en dispositivo");
        }
        return promesa;
      })
      .catch(error => {
        return Promise.reject(error);
      });
    return promesa;
  }

  async getVideos() {
    let promesa = await this.storage.get('videos').then((valores) => {
      this.videos = valores;
      return valores;
    });
    return promesa;
  }

  async getFavoritos() {
    let promesa = await this.storage.get('favoritos').then((valores) => {
      this.favoritos = valores;

      return promesa;
    });
    return promesa;
  }


  //Actividades
  guardarActividades() {
    let url = URL_SERVICIOS + "/minutoxminuto.php?getall";
    let promesa = this.http.get<InterfaceActividades>(url)
      .toPromise()
      .then(data => {
        if (data.dias.length > 0) {
          this.storage.set('actividades', data);
          // this._as.presentToast("Actividades save");
        }
        return promesa;
      })
      .catch(error => {
        return Promise.reject(error);
      });
    return promesa;
  }

  async getActividades() {
    let promesa = await this.storage.get('actividades').then((valores) => {
      this.actividades = valores;
      return valores;
    });
    return promesa;
  }

  async getActividad(id) {
    let promesa = await this.storage.get('actividades').then((valores) => {
      if (valores) {
        for (const dia of valores.dias) {
          for (const actividad of dia.actividades) {
            if (actividad.id == id) {
              return actividad;
              break;
            }
          }
        }
      }
      // this.actividades = valores;
      return valores;
    });
    return promesa;
  }

  //PATROCINADORES
  guardarPatrocinadores() {
    let url = URL_SERVICIOS + "/patrocinadores.php?getall";
    let promesa = this.http.get<InterfaceVideos>(url)
      .toPromise()
      .then(data => {
        if (data.resultados.length > 0) {
          this.storage.set('patrocinadores', data.resultados);
          //this._as.presentToast("Patrocinadores guardados en dispositivo");
        }
        return promesa;
      })
      .catch(error => {
        return Promise.reject(error);
      });
    return promesa;
  }

  async getPatrocinadores() {
    let promesa = await this.storage.get('patrocinadores').then((valores) => {
      this.patrocinadores = valores;
      return valores;
    });
    return promesa;
  }

  //PATROCINADORES
  async guardarFavorito(favorito: IActividad) {
    let existe = false;
    let mensaje = "";
    let promesa = this.storage.get('favoritos').then((valores) => {
      if (valores) {
        this.favoritos = valores;

        for (const act of this.favoritos) {
          if (act.id == favorito.id) {
            existe = true;
            break;
          }
        }
      }
      if (existe) {
        this.favoritos = this.favoritos.filter(act => act.id !== favorito.id);
        mensaje = "Borrado de favoritos";
        this.is_favorito = "ligth";
      } else {
        this.favoritos.push(favorito);
        this.is_favorito = "danger";
        mensaje = "Agregado a favoritos";
      }

      this.storage.set('favoritos', this.favoritos).then(
        result => {
          this._as.presentToast(mensaje);
          return promesa;
        }
      );

    });
    return promesa;
  }




  async isFavorito(id: any) {
    let mensaje = "";
    this.is_favorito = "ligth";
    console.log("BUSCANDO EN FAVORITOS");
    await this.storage.get('favoritos').then((valores) => {
      for (const act of valores) {
        if (act.id == id) {
          console.log("EXISTE");
          this.is_favorito = "danger";
          break;
        }
      }
      
    });

  }

}
