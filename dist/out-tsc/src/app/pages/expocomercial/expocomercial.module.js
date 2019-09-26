import * as tslib_1 from "tslib";
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { IonicModule } from '@ionic/angular';
import { ExpocomercialPage } from './expocomercial.page';
var routes = [
    {
        path: '',
        component: ExpocomercialPage
    }
];
var ExpocomercialPageModule = /** @class */ (function () {
    function ExpocomercialPageModule() {
    }
    ExpocomercialPageModule = tslib_1.__decorate([
        NgModule({
            imports: [
                CommonModule,
                FormsModule,
                IonicModule,
                RouterModule.forChild(routes)
            ],
            declarations: [ExpocomercialPage]
        })
    ], ExpocomercialPageModule);
    return ExpocomercialPageModule;
}());
export { ExpocomercialPageModule };
//# sourceMappingURL=expocomercial.module.js.map