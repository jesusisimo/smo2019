import { Injectable } from '@angular/core';
import { CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot, CanLoad } from '@angular/router';
import { Observable } from 'rxjs';
import { UsuarioService } from '../services/usuario.service';

@Injectable({
  providedIn: 'root'
})
export class UsuarioGuard implements  CanLoad{
  constructor(private _us:UsuarioService){

  }
  canLoad(): Observable<boolean> | Promise<boolean> | boolean{
    console.log("guard");
    return this._us.tienePermiso();
  } 

}
