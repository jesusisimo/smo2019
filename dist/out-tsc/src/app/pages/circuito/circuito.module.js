import * as tslib_1 from "tslib";
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { IonicModule } from '@ionic/angular';
import { CircuitoPage } from './circuito.page';
var routes = [
    {
        path: '',
        component: CircuitoPage
    }
];
var CircuitoPageModule = /** @class */ (function () {
    function CircuitoPageModule() {
    }
    CircuitoPageModule = tslib_1.__decorate([
        NgModule({
            imports: [
                CommonModule,
                FormsModule,
                IonicModule,
                RouterModule.forChild(routes)
            ],
            declarations: [CircuitoPage]
        })
    ], CircuitoPageModule);
    return CircuitoPageModule;
}());
export { CircuitoPageModule };
//# sourceMappingURL=circuito.module.js.map