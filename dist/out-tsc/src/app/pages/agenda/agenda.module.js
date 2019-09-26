import * as tslib_1 from "tslib";
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { IonicModule } from '@ionic/angular';
import { AgendaPage } from './agenda.page';
var routes = [
    {
        path: '',
        component: AgendaPage
    }
];
var AgendaPageModule = /** @class */ (function () {
    function AgendaPageModule() {
    }
    AgendaPageModule = tslib_1.__decorate([
        NgModule({
            imports: [
                CommonModule,
                FormsModule,
                IonicModule,
                RouterModule.forChild(routes)
            ],
            declarations: [AgendaPage]
        })
    ], AgendaPageModule);
    return AgendaPageModule;
}());
export { AgendaPageModule };
//# sourceMappingURL=agenda.module.js.map