import * as tslib_1 from "tslib";
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { IonicModule } from '@ionic/angular';
import { CartelesPage } from './carteles.page';
var routes = [
    {
        path: '',
        component: CartelesPage
    }
];
var CartelesPageModule = /** @class */ (function () {
    function CartelesPageModule() {
    }
    CartelesPageModule = tslib_1.__decorate([
        NgModule({
            imports: [
                CommonModule,
                FormsModule,
                IonicModule,
                RouterModule.forChild(routes)
            ],
            declarations: [CartelesPage]
        })
    ], CartelesPageModule);
    return CartelesPageModule;
}());
export { CartelesPageModule };
//# sourceMappingURL=carteles.module.js.map