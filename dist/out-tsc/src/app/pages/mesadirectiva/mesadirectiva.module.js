import * as tslib_1 from "tslib";
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { IonicModule } from '@ionic/angular';
import { MesadirectivaPage } from './mesadirectiva.page';
var routes = [
    {
        path: '',
        component: MesadirectivaPage
    }
];
var MesadirectivaPageModule = /** @class */ (function () {
    function MesadirectivaPageModule() {
    }
    MesadirectivaPageModule = tslib_1.__decorate([
        NgModule({
            imports: [
                CommonModule,
                FormsModule,
                IonicModule,
                RouterModule.forChild(routes)
            ],
            declarations: [MesadirectivaPage]
        })
    ], MesadirectivaPageModule);
    return MesadirectivaPageModule;
}());
export { MesadirectivaPageModule };
//# sourceMappingURL=mesadirectiva.module.js.map