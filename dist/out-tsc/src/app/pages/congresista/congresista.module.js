import * as tslib_1 from "tslib";
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { IonicModule } from '@ionic/angular';
import { CongresistaPage } from './congresista.page';
var routes = [
    {
        path: '',
        component: CongresistaPage
    }
];
var CongresistaPageModule = /** @class */ (function () {
    function CongresistaPageModule() {
    }
    CongresistaPageModule = tslib_1.__decorate([
        NgModule({
            imports: [
                CommonModule,
                FormsModule,
                IonicModule,
                RouterModule.forChild(routes)
            ],
            declarations: [CongresistaPage]
        })
    ], CongresistaPageModule);
    return CongresistaPageModule;
}());
export { CongresistaPageModule };
//# sourceMappingURL=congresista.module.js.map