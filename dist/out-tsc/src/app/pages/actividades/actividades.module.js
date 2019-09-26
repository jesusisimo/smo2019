import * as tslib_1 from "tslib";
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { IonicModule } from '@ionic/angular';
import { ActividadesPage } from './actividades.page';
var routes = [
    {
        path: '',
        component: ActividadesPage
    }
];
var ActividadesPageModule = /** @class */ (function () {
    function ActividadesPageModule() {
    }
    ActividadesPageModule = tslib_1.__decorate([
        NgModule({
            imports: [
                CommonModule,
                FormsModule,
                IonicModule,
                RouterModule.forChild(routes)
            ],
            declarations: [ActividadesPage]
        })
    ], ActividadesPageModule);
    return ActividadesPageModule;
}());
export { ActividadesPageModule };
//# sourceMappingURL=actividades.module.js.map