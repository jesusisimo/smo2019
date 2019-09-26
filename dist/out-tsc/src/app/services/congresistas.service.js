import * as tslib_1 from "tslib";
import { Injectable } from '@angular/core';
import { AjustesService } from './ajustes.service';
import { URL_SERVICIOS } from "../config/url.servicios";
import { HttpClient } from '@angular/common/http';
var CongresistasService = /** @class */ (function () {
    function CongresistasService(http, _as) {
        this.http = http;
        this._as = _as;
        this.pagina = 0;
    }
    CongresistasService.prototype.getDetalles = function (id) {
        return tslib_1.__awaiter(this, void 0, void 0, function () {
            var url, promesa;
            var _this = this;
            return tslib_1.__generator(this, function (_a) {
                if (!this._as.online) {
                    return [2 /*return*/, false];
                }
                this._as.presentLoading("Cargando...");
                url = URL_SERVICIOS + "/usuarios.php?id=" + id;
                promesa = this.http.get(url)
                    .toPromise()
                    .then(function (data) {
                    _this.congresista = data.resultados[0];
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
    CongresistasService.prototype.cargar_todos = function () {
        var _this = this;
        this._as.presentLoading("Cargando...");
        var url = URL_SERVICIOS + "/usuarios.php?todos&pagina=" + this.pagina;
        var promesa = this.http.get(url)
            .toPromise()
            .then(function (data) {
            _this.congresistas = data.resultados;
            _this.pagina = _this.pagina += 1;
            _this._as.loading.dismiss();
            return data;
        })
            .catch(function (error) {
            _this._as.loading.dismiss();
            return Promise.reject(error);
        });
        return promesa;
    };
    CongresistasService.prototype.siguiente_pagina = function () {
        return tslib_1.__awaiter(this, void 0, void 0, function () {
            var url, promesa;
            var _this = this;
            return tslib_1.__generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        if (!this._as.online) {
                            return [2 /*return*/, false];
                        }
                        url = URL_SERVICIOS + "/usuarios.php?todos&pagina=" + this.pagina;
                        return [4 /*yield*/, this.http.get(url)
                                .toPromise()
                                .then(function (data) {
                                var _a;
                                if (data.resultados.length > 0) {
                                    (_a = _this.congresistas).push.apply(_a, data.resultados);
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
    CongresistasService.prototype.buscar = function (variable) {
        return tslib_1.__awaiter(this, void 0, void 0, function () {
            var url, promesa;
            var _this = this;
            return tslib_1.__generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        url = URL_SERVICIOS + "/usuarios.php?search=" + variable;
                        return [4 /*yield*/, this.http.get(url)
                                .toPromise()
                                .then(function (data) {
                                _this.congresistas = null;
                                _this.congresistas = data.resultados;
                                _this.pagina = 1;
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
    CongresistasService.prototype.recargar = function (variable) {
        return tslib_1.__awaiter(this, void 0, void 0, function () {
            var url, promesa_1;
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
                        url = URL_SERVICIOS + "/usuarios.php?todos&pagina=" + this.pagina + "&search=" + variable;
                        return [4 /*yield*/, this.http.get(url)
                                .toPromise()
                                .then(function (data) {
                                if (data.resultados.length > 0) {
                                    _this.congresistas = data.resultados;
                                    _this.pagina = 1;
                                }
                                else {
                                    _this._as.presentToast("No hay mas información");
                                }
                                _this._as.loading.dismiss();
                                return promesa_1;
                            })
                                .catch(function (error) {
                                _this._as.loading.dismiss();
                                return Promise.reject(error);
                            })];
                    case 2:
                        promesa_1 = _a.sent();
                        return [2 /*return*/, promesa_1];
                }
            });
        });
    };
    CongresistasService = tslib_1.__decorate([
        Injectable({
            providedIn: 'root'
        }),
        tslib_1.__metadata("design:paramtypes", [HttpClient,
            AjustesService])
    ], CongresistasService);
    return CongresistasService;
}());
export { CongresistasService };
//# sourceMappingURL=congresistas.service.js.map