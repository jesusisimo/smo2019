import * as tslib_1 from "tslib";
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { IonicModule } from '@ionic/angular';
import { EsquemaPage } from './esquema.page';
var routes = [
    {
        path: '',
        component: EsquemaPage
    }
];
var EsquemaPageModule = /** @class */ (function () {
    function EsquemaPageModule() {
    }
    EsquemaPageModule = tslib_1.__decorate([
        NgModule({
            imports: [
                CommonModule,
                FormsModule,
                IonicModule,
                RouterModule.forChild(routes)
            ],
            declarations: [EsquemaPage]
        })
    ], EsquemaPageModule);
    return EsquemaPageModule;
}());
export { EsquemaPageModule };
//# sourceMappingURL=esquema.module.js.map