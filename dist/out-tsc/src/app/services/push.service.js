import * as tslib_1 from "tslib";
import { Injectable, EventEmitter } from '@angular/core';
import { OneSignal } from '@ionic-native/onesignal/ngx';
import { Storage } from '@ionic/storage';
var PushService = /** @class */ (function () {
    function PushService(oneSignal, storage) {
        this.oneSignal = oneSignal;
        this.storage = storage;
        this.mensajes = [];
        this.pushListener = new EventEmitter();
        this.cargarMensajes();
    }
    PushService.prototype.configuracionInicial = function () {
        var _this = this;
        this.oneSignal.startInit('280cae76-ac83-409f-b736-40010dbb8f2e', '155647256951');
        this.oneSignal.inFocusDisplaying(this.oneSignal.OSInFocusDisplayOption.Notification);
        this.oneSignal.handleNotificationReceived().subscribe(function (noti) {
            console.log("notificacion recibida: ", noti);
            _this.notificacionRecibida(noti);
        });
        this.oneSignal.handleNotificationOpened().subscribe(function (noti) { return tslib_1.__awaiter(_this, void 0, void 0, function () {
            return tslib_1.__generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        console.log("notificacion abierta: ", noti);
                        return [4 /*yield*/, this.notificacionRecibida(noti.notification)];
                    case 1:
                        _a.sent();
                        return [2 /*return*/];
                }
            });
        }); });
        this.oneSignal.getIds().then(function (info) {
            _this.userID = info.userId;
            console.log(_this.userID);
        });
        this.oneSignal.endInit();
    };
    PushService.prototype.notificacionRecibida = function (notificacion) {
        return tslib_1.__awaiter(this, void 0, void 0, function () {
            var payload, existePush;
            return tslib_1.__generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this.cargarMensajes()];
                    case 1:
                        _a.sent();
                        payload = notificacion.payload;
                        existePush = this.mensajes.find(function (mensaje) { return mensaje.notificationID === payload.notificationID; });
                        if (!existePush) return [3 /*break*/, 2];
                        return [2 /*return*/];
                    case 2:
                        this.mensajes.unshift(payload);
                        this.pushListener.emit(payload);
                        return [4 /*yield*/, this.guardarMensajes()];
                    case 3:
                        _a.sent();
                        _a.label = 4;
                    case 4: return [2 /*return*/];
                }
            });
        });
    };
    PushService.prototype.guardarMensajes = function () {
        this.storage.set("notificaciones", this.mensajes);
    };
    PushService.prototype.cargarMensajes = function () {
        return tslib_1.__awaiter(this, void 0, void 0, function () {
            var _a;
            return tslib_1.__generator(this, function (_b) {
                switch (_b.label) {
                    case 0:
                        _a = this;
                        return [4 /*yield*/, this.storage.get("notificaciones")];
                    case 1:
                        _a.mensajes = (_b.sent()) || [];
                        return [2 /*return*/, this.mensajes];
                }
            });
        });
    };
    PushService.prototype.getMensajes = function () {
        return tslib_1.__awaiter(this, void 0, void 0, function () {
            return tslib_1.__generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this.cargarMensajes()];
                    case 1:
                        _a.sent();
                        return [2 /*return*/, this.mensajes.slice()];
                }
            });
        });
    };
    PushService.prototype.borrarMensajes = function () {
        return tslib_1.__awaiter(this, void 0, void 0, function () {
            return tslib_1.__generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this.storage.remove('notificaciones')];
                    case 1:
                        _a.sent();
                        this.mensajes = [];
                        return [4 /*yield*/, this.guardarMensajes()];
                    case 2:
                        _a.sent();
                        return [2 /*return*/];
                }
            });
        });
    };
    PushService = tslib_1.__decorate([
        Injectable({
            providedIn: 'root'
        }),
        tslib_1.__metadata("design:paramtypes", [OneSignal,
            Storage])
    ], PushService);
    return PushService;
}());
export { PushService };
//# sourceMappingURL=push.service.js.map