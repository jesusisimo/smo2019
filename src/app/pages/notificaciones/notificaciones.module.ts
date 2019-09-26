import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Routes, RouterModule } from '@angular/router';

import { IonicModule } from '@ionic/angular';

import { NotificacionesPage } from './notificaciones.page';
import { NotificacionPage } from '../notificacion/notificacion.page';
import { NotificacionPageModule } from '../notificacion/notificacion.module';

const routes: Routes = [
  {
    path: '',
    component: NotificacionesPage
  }
];

@NgModule({
  entryComponents: [
    NotificacionPage
  ],
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    NotificacionPageModule,
    RouterModule.forChild(routes)
  ],
  declarations: [NotificacionesPage]
})
export class NotificacionesPageModule { }
