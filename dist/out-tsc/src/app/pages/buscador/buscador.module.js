import * as tslib_1 from "tslib";
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { IonicModule } from '@ionic/angular';
import { BuscadorPage } from './buscador.page';
var routes = [
    {
        path: '',
        component: BuscadorPage
    }
];
var BuscadorPageModule = /** @class */ (function () {
    function BuscadorPageModule() {
    }
    BuscadorPageModule = tslib_1.__decorate([
        NgModule({
            imports: [
                CommonModule,
                FormsModule,
                IonicModule,
                RouterModule.forChild(routes)
            ],
            declarations: [BuscadorPage]
        })
    ], BuscadorPageModule);
    return BuscadorPageModule;
}());
export { BuscadorPageModule };
//# sourceMappingURL=buscador.module.js.map