import * as tslib_1 from "tslib";
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { IonicModule } from '@ionic/angular';
import { TransmListaPage } from './transm-lista.page';
var routes = [
    {
        path: '',
        component: TransmListaPage
    }
];
var TransmListaPageModule = /** @class */ (function () {
    function TransmListaPageModule() {
    }
    TransmListaPageModule = tslib_1.__decorate([
        NgModule({
            imports: [
                CommonModule,
                FormsModule,
                IonicModule,
                RouterModule.forChild(routes)
            ],
            declarations: [TransmListaPage]
        })
    ], TransmListaPageModule);
    return TransmListaPageModule;
}());
export { TransmListaPageModule };
//# sourceMappingURL=transm-lista.module.js.map