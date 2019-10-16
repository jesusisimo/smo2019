import * as tslib_1 from "tslib";
import { Injectable, EventEmitter } from '@angular/core';
import { OneSignal } from '@ionic-native/onesignal/ngx';
import { Storage } from '@ionic/storage';
import { AjustesService } from './ajustes.service';
import { HttpClient } from '@angular/common/http';
import { DatosService } from './datos.service';
import { URL_SERVICIOS } from "../config/url.servicios";
var PushService = /** @class */ (function () {
    function PushService(oneSignal, http, _as, _ds, storage) {
        this.oneSignal = oneSignal;
        this.http = http;
        this._as = _as;
        this._ds = _ds;
        this.storage = storage;
        this.mensajes = [];
        this.pushListener = new EventEmitter();
        this.pagina = 0;
        this.cargarMensajes();
    }
    PushService.prototype.configuracionInicial = function () {
        var _this = this;
        this.oneSignal.startInit('e49feceb-8899-4622-ac31-fa008c07f1cc', '349906773709');
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
    PushService.prototype.cargar_todos = function () {
        var _this = this;
        if (!this._as.online) {
            var promise = this._ds.getVideos()
                .then(function (data) {
                _this.notificaciones = data;
                _this.pagina = 100;
                _this._as.loading.dismiss();
                return data;
            });
        }
        else {
            this._as.presentLoading("Cargando...");
            var url = URL_SERVICIOS + "/notificaciones.php?todos&pagina=" + this.pagina;
            var promesa = this.http.get(url)
                .toPromise()
                .then(function (data) {
                _this.notificaciones = data.notificaciones;
                _this.pagina = _this.pagina += 1;
                _this._as.loading.dismiss();
                return data;
            })
                .catch(function (error) {
                _this._as.loading.dismiss();
                return Promise.reject(error);
            });
            return promesa;
        }
    };
    PushService.prototype.siguiente_pagina = function () {
        return tslib_1.__awaiter(this, void 0, void 0, function () {
            var url, promesa;
            var _this = this;
            return tslib_1.__generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        if (!this._as.online) {
                            return [2 /*return*/, false];
                        }
                        url = URL_SERVICIOS + "/videos.php?todos&pagina=" + this.pagina;
                        return [4 /*yield*/, this.http.get(url)
                                .toPromise()
                                .then(function (data) {
                                var _a;
                                if (data.resultados.length > 0) {
                                    (_a = _this.videos).push.apply(_a, data.resultados);
                                    _this.pagina = _this.pagina += 1;
                                }
                                else {
                                    _this._as.presentToast("No hay mas información");
                                }
                                return promesa;
                            })
                                .catch(function (error) {
                                _this._as.presentToast("Ocurrio un error");
                                return Promise.reject(error);
                            })];
                    case 1:
                        promesa = _a.sent();
                        return [2 /*return*/, promesa];
                }
            });
        });
    };
    PushService.prototype.buscar = function (variable) {
        return tslib_1.__awaiter(this, void 0, void 0, function () {
            var promise_1, url, promesa_1;
            var _this = this;
            return tslib_1.__generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        if (!!this._as.online) return [3 /*break*/, 2];
                        variable = variable.toUpperCase();
                        return [4 /*yield*/, this._ds.getVideos()
                                .then(function (data) {
                                _this.videos = [];
                                var list = [];
                                list = data;
                                list.forEach(function (video) {
                                    if (video.titulo.toUpperCase().indexOf(variable) >= 0 || video.especialidad.toUpperCase().indexOf(variable) >= 0 || video.autores.toUpperCase().indexOf(variable) >= 0) {
                                        _this.videos.push(video);
                                    }
                                });
                                return promise_1;
                            })];
                    case 1:
                        promise_1 = _a.sent();
                        return [3 /*break*/, 4];
                    case 2:
                        url = URL_SERVICIOS + "/videos.php?search=" + variable;
                        return [4 /*yield*/, this.http.get(url)
                                .toPromise()
                                .then(function (data) {
                                _this.videos = null;
                                _this.videos = data.resultados;
                                _this.pagina = 1;
                                return promesa_1;
                            })
                                .catch(function (error) {
                                _this._as.presentToast("Ocurrio un error");
                                return Promise.reject(error);
                            })];
                    case 3:
                        promesa_1 = _a.sent();
                        return [2 /*return*/, promesa_1];
                    case 4: return [2 /*return*/];
                }
            });
        });
    };
    PushService.prototype.recargar = function (variable) {
        return tslib_1.__awaiter(this, void 0, void 0, function () {
            var url, promesa_2;
            var _this = this;
            return tslib_1.__generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        if (!!this._as.online) return [3 /*break*/, 1];
                        this.cargar_todos();
                        return [2 /*return*/, true];
                    case 1:
                        this.pagina = 0;
                        this._as.presentLoading("Recargando...");
                        url = URL_SERVICIOS + "/videos.php?todos&pagina=" + this.pagina + "&search=" + variable;
                        return [4 /*yield*/, this.http.get(url)
                                .toPromise()
                                .then(function (data) {
                                if (data.resultados.length > 0) {
                                    _this.videos = data.resultados;
                                    _this.pagina = 1;
                                }
                                else {
                                    _this._as.presentToast("No hay mas información");
                                }
                                _this._as.loading.dismiss();
                                return promesa_2;
                            })
                                .catch(function (error) {
                                _this._as.loading.dismiss();
                                return Promise.reject(error);
                            })];
                    case 2:
                        promesa_2 = _a.sent();
                        return [2 /*return*/, promesa_2];
                }
            });
        });
    };
    PushService = tslib_1.__decorate([
        Injectable({
            providedIn: 'root'
        }),
        tslib_1.__metadata("design:paramtypes", [OneSignal,
            HttpClient,
            AjustesService,
            DatosService,
            Storage])
    ], PushService);
    return PushService;
}());
export { PushService };
//# sourceMappingURL=push.service.js.map