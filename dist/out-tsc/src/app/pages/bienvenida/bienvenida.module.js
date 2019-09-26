import * as tslib_1 from "tslib";
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { IonicModule } from '@ionic/angular';
import { BienvenidaPage } from './bienvenida.page';
var routes = [
    {
        path: '',
        component: BienvenidaPage
    }
];
var BienvenidaPageModule = /** @class */ (function () {
    function BienvenidaPageModule() {
    }
    BienvenidaPageModule = tslib_1.__decorate([
        NgModule({
            imports: [
                CommonModule,
                FormsModule,
                IonicModule,
                RouterModule.forChild(routes)
            ],
            declarations: [BienvenidaPage]
        })
    ], BienvenidaPageModule);
    return BienvenidaPageModule;
}());
export { BienvenidaPageModule };
//# sourceMappingURL=bienvenida.module.js.map