import * as tslib_1 from "tslib";
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { IonicModule } from '@ionic/angular';
import { CasosListaPage } from './casos-lista.page';
var routes = [
    {
        path: '',
        component: CasosListaPage
    }
];
var CasosListaPageModule = /** @class */ (function () {
    function CasosListaPageModule() {
    }
    CasosListaPageModule = tslib_1.__decorate([
        NgModule({
            imports: [
                CommonModule,
                FormsModule,
                IonicModule,
                RouterModule.forChild(routes)
            ],
            declarations: [CasosListaPage]
        })
    ], CasosListaPageModule);
    return CasosListaPageModule;
}());
export { CasosListaPageModule };
//# sourceMappingURL=casos-lista.module.js.map