import * as tslib_1 from "tslib";
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { IonicModule } from '@ionic/angular';
import { UsuarioPage } from './usuario.page';
var routes = [
    {
        path: '',
        component: UsuarioPage
    }
];
var UsuarioPageModule = /** @class */ (function () {
    function UsuarioPageModule() {
    }
    UsuarioPageModule = tslib_1.__decorate([
        NgModule({
            imports: [
                CommonModule,
                FormsModule,
                IonicModule,
                RouterModule.forChild(routes)
            ],
            declarations: [UsuarioPage]
        })
    ], UsuarioPageModule);
    return UsuarioPageModule;
}());
export { UsuarioPageModule };
//# sourceMappingURL=usuario.module.js.map