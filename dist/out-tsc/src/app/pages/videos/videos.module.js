import * as tslib_1 from "tslib";
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { IonicModule } from '@ionic/angular';
import { VideosPage } from './videos.page';
var routes = [
    {
        path: '',
        component: VideosPage
    }
];
var VideosPageModule = /** @class */ (function () {
    function VideosPageModule() {
    }
    VideosPageModule = tslib_1.__decorate([
        NgModule({
            imports: [
                CommonModule,
                FormsModule,
                IonicModule,
                RouterModule.forChild(routes)
            ],
            declarations: [VideosPage]
        })
    ], VideosPageModule);
    return VideosPageModule;
}());
export { VideosPageModule };
//# sourceMappingURL=videos.module.js.map