import * as tslib_1 from "tslib";
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { IonicModule } from '@ionic/angular';
import { SesionesPage } from './sesiones.page';
var routes = [
    {
        path: '',
        component: SesionesPage
    }
];
var SesionesPageModule = /** @class */ (function () {
    function SesionesPageModule() {
    }
    SesionesPageModule = tslib_1.__decorate([
        NgModule({
            imports: [
                CommonModule,
                FormsModule,
                IonicModule,
                RouterModule.forChild(routes)
            ],
            declarations: [SesionesPage]
        })
    ], SesionesPageModule);
    return SesionesPageModule;
}());
export { SesionesPageModule };
//# sourceMappingURL=sesiones.module.js.map