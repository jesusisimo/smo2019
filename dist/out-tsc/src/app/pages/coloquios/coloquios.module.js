import * as tslib_1 from "tslib";
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { IonicModule } from '@ionic/angular';
import { ColoquiosPage } from './coloquios.page';
var routes = [
    {
        path: '',
        component: ColoquiosPage
    }
];
var ColoquiosPageModule = /** @class */ (function () {
    function ColoquiosPageModule() {
    }
    ColoquiosPageModule = tslib_1.__decorate([
        NgModule({
            imports: [
                CommonModule,
                FormsModule,
                IonicModule,
                RouterModule.forChild(routes)
            ],
            declarations: [ColoquiosPage]
        })
    ], ColoquiosPageModule);
    return ColoquiosPageModule;
}());
export { ColoquiosPageModule };
//# sourceMappingURL=coloquios.module.js.map