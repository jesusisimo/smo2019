import * as tslib_1 from "tslib";
import { Component } from '@angular/core';
import { InAppBrowser } from '@ionic-native/in-app-browser/ngx';
var ColoquiosPage = /** @class */ (function () {
    function ColoquiosPage(iab) {
        this.iab = iab;
    }
    ColoquiosPage.prototype.abrirWeb = function (url, target) {
        this.iab.create(url, target);
    };
    ColoquiosPage.prototype.ngOnInit = function () {
    };
    ColoquiosPage = tslib_1.__decorate([
        Component({
            selector: 'app-coloquios',
            templateUrl: './coloquios.page.html',
            styleUrls: ['./coloquios.page.scss'],
        }),
        tslib_1.__metadata("design:paramtypes", [InAppBrowser])
    ], ColoquiosPage);
    return ColoquiosPage;
}());
export { ColoquiosPage };
//# sourceMappingURL=coloquios.page.js.map