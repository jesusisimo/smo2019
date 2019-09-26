import * as tslib_1 from "tslib";
import { Component, ApplicationRef } from '@angular/core';
import { PushService } from 'src/app/services/push.service';
import { AlertController, ModalController } from '@ionic/angular';
import { NotificacionPage } from '../notificacion/notificacion.page';
var NotificacionesPage = /** @class */ (function () {
    function NotificacionesPage(pushService, applicationRef, alertCtrl, modalCtrl) {
        this.pushService = pushService;
        this.applicationRef = applicationRef;
        this.alertCtrl = alertCtrl;
        this.modalCtrl = modalCtrl;
        this.mensajes = [];
        this.msgs = [
            {
                title: 'Titulo de la push',
                body: 'Este es el body de la push',
                date: 'Jueves 3:30pm'
            }
        ];
        this.existen = false;
    }
    NotificacionesPage.prototype.ngOnInit = function () {
        var _this = this;
        this.pushService.pushListener.subscribe(function (notificacion) {
            _this.mensajes.unshift(notificacion);
            //this.applicationRef.tick();
            if (_this.mensajes.length > 0) {
                console.log("no hay");
                _this.existen = true;
            }
            else {
                _this.existen = false;
                console.log("si hay");
            }
        });
    };
    NotificacionesPage.prototype.ionViewWillEnter = function () {
        return tslib_1.__awaiter(this, void 0, void 0, function () {
            var _a;
            return tslib_1.__generator(this, function (_b) {
                switch (_b.label) {
                    case 0:
                        this.mensajes = [];
                        _a = this;
                        return [4 /*yield*/, this.pushService.getMensajes()];
                    case 1:
                        _a.mensajes = _b.sent();
                        if (this.mensajes.length > 0) {
                            console.log("si hay will");
                            this.existen = true;
                        }
                        else {
                            console.log("no hay will");
                            this.existen = false;
                        }
                        return [2 /*return*/];
                }
            });
        });
    };
    NotificacionesPage.prototype.borrarMensajes = function () {
        return tslib_1.__awaiter(this, void 0, void 0, function () {
            var alert;
            var _this = this;
            return tslib_1.__generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this.alertCtrl.create({
                            header: 'Borrar noticiaciones',
                            message: '¿Seguro que desea borrar todas las noticifaciones?',
                            buttons: [
                                {
                                    text: 'Cancelar',
                                    role: 'cancel',
                                    cssClass: 'secondary',
                                    handler: function (blah) {
                                        console.log('Confirm Cancel: blah');
                                    }
                                }, {
                                    text: 'Borrar',
                                    handler: function () {
                                        _this.mensajes = [];
                                        _this.existen = false;
                                        _this.pushService.borrarMensajes();
                                    }
                                }
                            ]
                        })];
                    case 1:
                        alert = _a.sent();
                        return [4 /*yield*/, alert.present()];
                    case 2:
                        _a.sent();
                        return [2 /*return*/];
                }
            });
        });
    };
    NotificacionesPage.prototype.verNotificacion = function (notificacion) {
        return tslib_1.__awaiter(this, void 0, void 0, function () {
            var modal;
            return tslib_1.__generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this.modalCtrl.create({
                            component: NotificacionPage,
                            componentProps: {
                                'notificacion': notificacion
                            }
                        })];
                    case 1:
                        modal = _a.sent();
                        return [4 /*yield*/, modal.present()];
                    case 2: return [2 /*return*/, _a.sent()];
                }
            });
        });
    };
    NotificacionesPage = tslib_1.__decorate([
        Component({
            selector: 'app-notificaciones',
            templateUrl: './notificaciones.page.html',
            styleUrls: ['./notificaciones.page.scss'],
        }),
        tslib_1.__metadata("design:paramtypes", [PushService,
            ApplicationRef,
            AlertController,
            ModalController])
    ], NotificacionesPage);
    return NotificacionesPage;
}());
export { NotificacionesPage };
//# sourceMappingURL=notificaciones.page.js.map