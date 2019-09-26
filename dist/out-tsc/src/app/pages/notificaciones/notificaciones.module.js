import * as tslib_1 from "tslib";
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { IonicModule } from '@ionic/angular';
import { NotificacionesPage } from './notificaciones.page';
import { NotificacionPage } from '../notificacion/notificacion.page';
import { NotificacionPageModule } from '../notificacion/notificacion.module';
var routes = [
    {
        path: '',
        component: NotificacionesPage
    }
];
var NotificacionesPageModule = /** @class */ (function () {
    function NotificacionesPageModule() {
    }
    NotificacionesPageModule = tslib_1.__decorate([
        NgModule({
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
    ], NotificacionesPageModule);
    return NotificacionesPageModule;
}());
export { NotificacionesPageModule };
//# sourceMappingURL=notificaciones.module.js.map