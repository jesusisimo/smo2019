import * as tslib_1 from "tslib";
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { IonicModule } from '@ionic/angular';
import { ActividadPage } from './actividad.page';
var routes = [
    {
        path: '',
        component: ActividadPage
    }
];
var ActividadPageModule = /** @class */ (function () {
    function ActividadPageModule() {
    }
    ActividadPageModule = tslib_1.__decorate([
        NgModule({
            imports: [
                CommonModule,
                FormsModule,
                IonicModule,
                RouterModule.forChild(routes)
            ],
            declarations: [ActividadPage]
        })
    ], ActividadPageModule);
    return ActividadPageModule;
}());
export { ActividadPageModule };
//# sourceMappingURL=actividad.module.js.map