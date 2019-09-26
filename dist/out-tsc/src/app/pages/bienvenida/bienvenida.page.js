import * as tslib_1 from "tslib";
import { Component } from '@angular/core';
import { DomSanitizer } from '@angular/platform-browser';
import { NavController } from '@ionic/angular';
var BienvenidaPage = /** @class */ (function () {
    function BienvenidaPage(navCtrl, domSanitizer) {
        this.navCtrl = navCtrl;
        this.domSanitizer = domSanitizer;
    }
    BienvenidaPage.prototype.ngOnInit = function () {
        this.trustedVideoUrl = this.domSanitizer.bypassSecurityTrustResourceUrl(this.vid_link);
    };
    BienvenidaPage = tslib_1.__decorate([
        Component({
            selector: 'app-bienvenida',
            templateUrl: './bienvenida.page.html',
            styleUrls: ['./bienvenida.page.scss'],
        }),
        tslib_1.__metadata("design:paramtypes", [NavController,
            DomSanitizer])
    ], BienvenidaPage);
    return BienvenidaPage;
}());
export { BienvenidaPage };
//# sourceMappingURL=bienvenida.page.js.map