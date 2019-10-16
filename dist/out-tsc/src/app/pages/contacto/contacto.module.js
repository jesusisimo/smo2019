import * as tslib_1 from "tslib";
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { IonicModule } from '@ionic/angular';
import { ContactoPage } from './contacto.page';
var routes = [
    {
        path: '',
        component: ContactoPage
    }
];
var ContactoPageModule = /** @class */ (function () {
    function ContactoPageModule() {
    }
    ContactoPageModule = tslib_1.__decorate([
        NgModule({
            imports: [
                CommonModule,
                FormsModule,
                IonicModule,
                RouterModule.forChild(routes)
            ],
            declarations: [ContactoPage]
        })
    ], ContactoPageModule);
    return ContactoPageModule;
}());
export { ContactoPageModule };
//# sourceMappingURL=contacto.module.js.map