import * as tslib_1 from "tslib";
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { IonicModule } from '@ionic/angular';
import { CongresistasPage } from './congresistas.page';
var routes = [
    {
        path: '',
        component: CongresistasPage
    }
];
var CongresistasPageModule = /** @class */ (function () {
    function CongresistasPageModule() {
    }
    CongresistasPageModule = tslib_1.__decorate([
        NgModule({
            imports: [
                CommonModule,
                FormsModule,
                IonicModule,
                RouterModule.forChild(routes)
            ],
            declarations: [CongresistasPage]
        })
    ], CongresistasPageModule);
    return CongresistasPageModule;
}());
export { CongresistasPageModule };
//# sourceMappingURL=congresistas.module.js.map