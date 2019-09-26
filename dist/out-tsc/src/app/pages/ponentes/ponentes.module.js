import * as tslib_1 from "tslib";
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { IonicModule } from '@ionic/angular';
import { PonentesPage } from './ponentes.page';
var routes = [
    {
        path: '',
        component: PonentesPage
    }
];
var PonentesPageModule = /** @class */ (function () {
    function PonentesPageModule() {
    }
    PonentesPageModule = tslib_1.__decorate([
        NgModule({
            imports: [
                CommonModule,
                FormsModule,
                IonicModule,
                RouterModule.forChild(routes)
            ],
            declarations: [PonentesPage]
        })
    ], PonentesPageModule);
    return PonentesPageModule;
}());
export { PonentesPageModule };
//# sourceMappingURL=ponentes.module.js.map