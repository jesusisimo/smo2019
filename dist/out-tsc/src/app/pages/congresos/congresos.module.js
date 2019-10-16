import * as tslib_1 from "tslib";
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { IonicModule } from '@ionic/angular';
import { CongresosPage } from './congresos.page';
var routes = [
    {
        path: '',
        component: CongresosPage
    }
];
var CongresosPageModule = /** @class */ (function () {
    function CongresosPageModule() {
    }
    CongresosPageModule = tslib_1.__decorate([
        NgModule({
            imports: [
                CommonModule,
                FormsModule,
                IonicModule,
                RouterModule.forChild(routes)
            ],
            declarations: [CongresosPage]
        })
    ], CongresosPageModule);
    return CongresosPageModule;
}());
export { CongresosPageModule };
//# sourceMappingURL=congresos.module.js.map