import * as tslib_1 from "tslib";
import { Component } from '@angular/core';
import { InAppBrowser } from '@ionic-native/in-app-browser/ngx';
import { UsuarioService } from 'src/app/services/usuario.service';
import { NavController } from '@ionic/angular';
var TabsPage = /** @class */ (function () {
    function TabsPage(iab, _us, navCtrl) {
        this.iab = iab;
        this._us = _us;
        this.navCtrl = navCtrl;
        this.slideOpts = {
            effect: 'cube',
            speed: 1100,
            autoplay: false,
            loop: true
        };
    }
    TabsPage.prototype.abrirWeb = function (url) {
        var browser = this.iab.create(url, '_system');
    };
    TabsPage.prototype.validarVista = function () {
        return tslib_1.__awaiter(this, void 0, void 0, function () {
            var existe;
            return tslib_1.__generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this._us.existeToken()];
                    case 1:
                        existe = _a.sent();
                        if (existe) {
                            console.log("dirigir a user");
                            this.navCtrl.navigateRoot('/tabs/login/usuario');
                        }
                        else {
                            console.log("dirigir a log");
                            this.navCtrl.navigateRoot('/tabs/login');
                        }
                        return [2 /*return*/];
                }
            });
        });
    };
    TabsPage = tslib_1.__decorate([
        Component({
            selector: 'app-tabs',
            templateUrl: 'tabs.page.html',
            styleUrls: ['tabs.page.scss']
        }),
        tslib_1.__metadata("design:paramtypes", [InAppBrowser,
            UsuarioService,
            NavController])
    ], TabsPage);
    return TabsPage;
}());
export { TabsPage };
//# sourceMappingURL=tabs.page.js.map