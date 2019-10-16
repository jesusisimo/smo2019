import * as tslib_1 from "tslib";
import { Component } from '@angular/core';
import { UsuarioService } from 'src/app/services/usuario.service';
import { AjustesService } from 'src/app/services/ajustes.service';
import { NavController } from '@ionic/angular';
var CasosListaPage = /** @class */ (function () {
    function CasosListaPage(navCtrl, _us, _as) {
        this.navCtrl = navCtrl;
        this._us = _us;
        this._as = _as;
        this.avatars = [
            {
                img: 'av-1.png',
                seleccionado: true
            },
            {
                img: 'av-2.png',
                seleccionado: false
            },
            {
                img: 'av-3.png',
                seleccionado: false
            },
            {
                img: 'av-4.png',
                seleccionado: false
            },
            {
                img: 'av-5.png',
                seleccionado: false
            },
            {
                img: 'av-6.png',
                seleccionado: false
            },
            {
                img: 'av-7.png',
                seleccionado: false
            },
            {
                img: 'av-8.png',
                seleccionado: false
            },
        ];
        this.avatarSlide = {
            slidesPerView: 3.5
        };
        this.usuario = {};
        this.avatarActual = 'av-1.png';
    }
    CasosListaPage.prototype.ngOnInit = function () {
        return tslib_1.__awaiter(this, void 0, void 0, function () {
            var _a;
            return tslib_1.__generator(this, function (_b) {
                switch (_b.label) {
                    case 0:
                        _a = this;
                        return [4 /*yield*/, this._us.getUsuario()];
                    case 1:
                        _a.usuario = _b.sent();
                        console.log(this.usuario);
                        return [2 /*return*/];
                }
            });
        });
    };
    CasosListaPage.prototype.casoImagen = function (pagina) {
        return tslib_1.__awaiter(this, void 0, void 0, function () {
            return tslib_1.__generator(this, function (_a) {
                console.log(pagina);
                this.navCtrl.navigateForward('/tabs/principal/' + pagina);
                return [2 /*return*/];
            });
        });
    };
    CasosListaPage = tslib_1.__decorate([
        Component({
            selector: 'app-casos-lista',
            templateUrl: './casos-lista.page.html',
            styleUrls: ['./casos-lista.page.scss'],
        }),
        tslib_1.__metadata("design:paramtypes", [NavController,
            UsuarioService,
            AjustesService])
    ], CasosListaPage);
    return CasosListaPage;
}());
export { CasosListaPage };
//# sourceMappingURL=casos-lista.page.js.map