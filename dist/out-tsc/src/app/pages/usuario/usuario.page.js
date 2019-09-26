import * as tslib_1 from "tslib";
import { Component } from '@angular/core';
import { UsuarioService } from 'src/app/services/usuario.service';
import { AjustesService } from 'src/app/services/ajustes.service';
var UsuarioPage = /** @class */ (function () {
    function UsuarioPage(_us, _as) {
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
        this.avatarActual = "av-1.png";
    }
    UsuarioPage.prototype.ngOnInit = function () {
        return tslib_1.__awaiter(this, void 0, void 0, function () {
            var _a, _i, _b, avatar;
            return tslib_1.__generator(this, function (_c) {
                switch (_c.label) {
                    case 0:
                        _a = this;
                        return [4 /*yield*/, this._us.getUsuario()];
                    case 1:
                        _a.usuario = _c.sent();
                        this.avatars.forEach(function (avatar) { return avatar.seleccionado = false; });
                        for (_i = 0, _b = this.avatars; _i < _b.length; _i++) {
                            avatar = _b[_i];
                            if (avatar.img === this.usuario.avatar) {
                                avatar.seleccionado = true;
                                break;
                            }
                        }
                        if (this.usuario.email_c == "1") {
                            this.usuario.email_c = "true";
                        }
                        else {
                            this.usuario.email_c = "false";
                        }
                        if (this.usuario.telefono_c == "1") {
                            this.usuario.telefono_c = "true";
                        }
                        else {
                            this.usuario.telefono_c = "false";
                        }
                        if (this.usuario.institucion_c == "1") {
                            this.usuario.institucion_c = "true";
                        }
                        else {
                            this.usuario.institucion_c = "false";
                        }
                        console.log(this.usuario);
                        return [2 /*return*/];
                }
            });
        });
    };
    UsuarioPage.prototype.seleccionarAvatar = function (avatar) {
        this.avatars.forEach(function (av) { return av.seleccionado = false; });
        avatar.seleccionado = true;
        this.usuario.avatar = avatar.img;
    };
    UsuarioPage.prototype.logout = function () {
        this._us.logout();
    };
    UsuarioPage.prototype.actualizar = function (fActualizar) {
        return tslib_1.__awaiter(this, void 0, void 0, function () {
            var actualizado;
            return tslib_1.__generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        if (fActualizar.invalid) {
                            return [2 /*return*/];
                        }
                        return [4 /*yield*/, this._us.actualizarUsuario(this.usuario)];
                    case 1:
                        actualizado = _a.sent();
                        if (actualizado) {
                            this._as.presentToast('Registro actualizado');
                        }
                        else {
                            this._as.presentToast('No se pudo actualizar');
                        }
                        return [2 /*return*/];
                }
            });
        });
    };
    UsuarioPage = tslib_1.__decorate([
        Component({
            selector: 'app-usuario',
            templateUrl: './usuario.page.html',
            styleUrls: ['./usuario.page.scss'],
        }),
        tslib_1.__metadata("design:paramtypes", [UsuarioService,
            AjustesService])
    ], UsuarioPage);
    return UsuarioPage;
}());
export { UsuarioPage };
//# sourceMappingURL=usuario.page.js.map