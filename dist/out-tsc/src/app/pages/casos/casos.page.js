import * as tslib_1 from "tslib";
import { Component } from '@angular/core';
import { UsuarioService } from 'src/app/services/usuario.service';
import { AjustesService } from 'src/app/services/ajustes.service';
import { PostImagenComponent } from '../post-imagen/post-imagen.component';
import { ModalController } from '@ionic/angular';
var CasosPage = /** @class */ (function () {
    function CasosPage(_us, _as, modalController) {
        this._us = _us;
        this._as = _as;
        this.modalController = modalController;
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
        this.imgLink = '../../assets/img/san_carlos.jpg';
        this.slideOpts = {
            centeredSlides: 'true'
        };
    }
    CasosPage.prototype.ngOnInit = function () {
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
    CasosPage.prototype.verImagen = function (src) {
        return tslib_1.__awaiter(this, void 0, void 0, function () {
            var modal;
            return tslib_1.__generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this.modalController.create({
                            component: PostImagenComponent,
                            componentProps: {
                                imgLink: src
                            },
                            cssClass: 'modal-fullscreen',
                            keyboardClose: true,
                            showBackdrop: true
                        })];
                    case 1:
                        modal = _a.sent();
                        return [4 /*yield*/, modal.present()];
                    case 2: return [2 /*return*/, _a.sent()];
                }
            });
        });
    };
    CasosPage.prototype.cerrarImagen = function () {
        this.modalController.dismiss();
    };
    CasosPage = tslib_1.__decorate([
        Component({
            selector: 'app-casos',
            templateUrl: './casos.page.html',
            styleUrls: ['./casos.page.scss'],
        }),
        tslib_1.__metadata("design:paramtypes", [UsuarioService,
            AjustesService,
            ModalController])
    ], CasosPage);
    return CasosPage;
}());
export { CasosPage };
//# sourceMappingURL=casos.page.js.map