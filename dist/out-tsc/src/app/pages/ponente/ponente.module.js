import * as tslib_1 from "tslib";
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { IonicModule } from '@ionic/angular';
import { PonentePage } from './ponente.page';
var routes = [
    {
        path: '',
        component: PonentePage
    }
];
var PonentePageModule = /** @class */ (function () {
    function PonentePageModule() {
    }
    PonentePageModule = tslib_1.__decorate([
        NgModule({
            imports: [
                CommonModule,
                FormsModule,
                IonicModule,
                RouterModule.forChild(routes)
            ],
            declarations: [PonentePage]
        })
    ], PonentePageModule);
    return PonentePageModule;
}());
export { PonentePageModule };
//# sourceMappingURL=ponente.module.js.map