import * as tslib_1 from "tslib";
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { IonicModule } from '@ionic/angular';
import { CasosPage } from './casos.page';
var routes = [
    {
        path: '',
        component: CasosPage
    }
];
var CasosPageModule = /** @class */ (function () {
    function CasosPageModule() {
    }
    CasosPageModule = tslib_1.__decorate([
        NgModule({
            imports: [
                CommonModule,
                FormsModule,
                IonicModule,
                RouterModule.forChild(routes)
            ],
            declarations: [CasosPage]
        })
    ], CasosPageModule);
    return CasosPageModule;
}());
export { CasosPageModule };
//# sourceMappingURL=casos.module.js.map