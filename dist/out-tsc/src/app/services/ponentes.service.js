import * as tslib_1 from "tslib";
import { Injectable } from '@angular/core';
import { AjustesService } from './ajustes.service';
import { URL_SERVICIOS } from "../config/url.servicios";
import { HttpClient } from '@angular/common/http';
import { DatosService } from './datos.service';
var PonentesService = /** @class */ (function () {
    function PonentesService(http, _as, _ds) {
        this.http = http;
        this._as = _as;
        this._ds = _ds;
        this.pagina = 0;
    }
    PonentesService.prototype.getDetalles = function (id) {
        return tslib_1.__awaiter(this, void 0, void 0, function () {
            var url, promesa;
            var _this = this;
            return tslib_1.__generator(this, function (_a) {
                if (!this._as.online) {
                    return [2 /*return*/, false];
                }
                this._as.presentLoading("Cargando...");
                url = URL_SERVICIOS + "/profesores.php?id=" + id;
                promesa = this.http.get(url)
                    .toPromise()
                    .then(function (data) {
                    _this.ponentes = data.profesores;
                    _this._as.loading.dismiss();
                    return data;
                })
                    .catch(function (error) {
                    _this._as.loading.dismiss();
                    return Promise.reject(error);
                });
                return [2 /*return*/, promesa];
            });
        });
    };
    PonentesService.prototype.cargar_todos = function () {
        return tslib_1.__awaiter(this, void 0, void 0, function () {
            var promise, url, promesa;
            var _this = this;
            return tslib_1.__generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        if (!!this._as.online) return [3 /*break*/, 1];
                        promise = this._ds.getProfesores()
                            .then(function (data) {
                            _this.ponentes = data;
                            _this.pagina = 100;
                            _this._as.loading.dismiss();
                            return data;
                        });
                        return [3 /*break*/, 3];
                    case 1:
                        this._as.presentLoading("Cargando...");
                        url = URL_SERVICIOS + "/profesores.php?todos&pagina=" + this.pagina;
                        return [4 /*yield*/, this.http.get(url)
                                .toPromise()
                                .then(function (data) {
                                _this.ponentes = data.profesores;
                                _this.pagina = _this.pagina += 1;
                                _this._as.loading.dismiss();
                                return data;
                            })
                                .catch(function (error) {
                                _this._as.loading.dismiss();
                                return Promise.reject(error);
                            })];
                    case 2:
                        promesa = _a.sent();
                        return [2 /*return*/, promesa];
                    case 3: return [2 /*return*/];
                }
            });
        });
    };
    PonentesService.prototype.siguiente_pagina = function () {
        return tslib_1.__awaiter(this, void 0, void 0, function () {
            var url, promesa;
            var _this = this;
            return tslib_1.__generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        if (!this._as.online) {
                            return [2 /*return*/, false];
                        }
                        url = URL_SERVICIOS + "/profesores.php?todos&pagina=" + this.pagina;
                        return [4 /*yield*/, this.http.get(url)
                                .toPromise()
                                .then(function (data) {
                                var _a;
                                if (data.profesores.length > 0) {
                                    (_a = _this.ponentes).push.apply(_a, data.profesores);
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
    PonentesService.prototype.buscar = function (variable) {
        return tslib_1.__awaiter(this, void 0, void 0, function () {
            var promise_1, url, promesa_1;
            var _this = this;
            return tslib_1.__generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        if (!!this._as.online) return [3 /*break*/, 2];
                        console.log("No hay red");
                        variable = variable.toUpperCase();
                        return [4 /*yield*/, this._ds.getProfesores()
                                .then(function (data) {
                                console.log("Proresores obtennidos", data);
                                _this.ponentes = [];
                                var list = [];
                                list = data;
                                list.forEach(function (profesor) {
                                    if (profesor.nombre.toUpperCase().indexOf(variable) >= 0) {
                                        _this.ponentes.push(profesor);
                                    }
                                });
                                return promise_1;
                            })];
                    case 1:
                        promise_1 = _a.sent();
                        return [3 /*break*/, 4];
                    case 2:
                        console.log("En linea");
                        url = URL_SERVICIOS + "/profesores.php?search=" + variable;
                        return [4 /*yield*/, this.http.get(url)
                                .toPromise()
                                .then(function (data) {
                                _this.ponentes = null;
                                _this.ponentes = data.profesores;
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
    PonentesService.prototype.recargar = function (variable) {
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
                        url = URL_SERVICIOS + "/profesores.php?todos&pagina=" + this.pagina + "&search=" + variable;
                        return [4 /*yield*/, this.http.get(url)
                                .toPromise()
                                .then(function (data) {
                                if (data.profesores.length > 0) {
                                    _this.ponentes = data.profesores;
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
    PonentesService = tslib_1.__decorate([
        Injectable({
            providedIn: 'root'
        }),
        tslib_1.__metadata("design:paramtypes", [HttpClient,
            AjustesService,
            DatosService])
    ], PonentesService);
    return PonentesService;
}());
export { PonentesService };
//# sourceMappingURL=ponentes.service.js.map