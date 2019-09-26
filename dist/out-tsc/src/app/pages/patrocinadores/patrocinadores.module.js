import * as tslib_1 from "tslib";
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { IonicModule } from '@ionic/angular';
import { PatrocinadoresPage } from './patrocinadores.page';
var routes = [
    {
        path: '',
        component: PatrocinadoresPage
    }
];
var PatrocinadoresPageModule = /** @class */ (function () {
    function PatrocinadoresPageModule() {
    }
    PatrocinadoresPageModule = tslib_1.__decorate([
        NgModule({
            imports: [
                CommonModule,
                FormsModule,
                IonicModule,
                RouterModule.forChild(routes)
            ],
            declarations: [PatrocinadoresPage]
        })
    ], PatrocinadoresPageModule);
    return PatrocinadoresPageModule;
}());
export { PatrocinadoresPageModule };
//# sourceMappingURL=patrocinadores.module.js.map