import * as tslib_1 from "tslib";
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { URL_SERVICIOS } from "../config/url.servicios";
import { AjustesService } from './ajustes.service';
import { DatosService } from './datos.service';
import 'rxjs/add/operator/map';
var CartelesService = /** @class */ (function () {
    function CartelesService(http, _as, _ds) {
        this.http = http;
        this._as = _as;
        this._ds = _ds;
        this.pagina = 0;
    }
    CartelesService.prototype.getDetalles = function (id) {
        var _this = this;
        if (!this._as.online) {
            return false;
        }
        this._as.presentLoading("Cargando...");
        var url = URL_SERVICIOS + "/cartel.php?id=" + id;
        var promesa = this.http.get(url)
            .toPromise()
            .then(function (data) {
            _this.carteles = data.resultados;
            _this._as.loading.dismiss();
            return data;
        })
            .catch(function (error) {
            _this._as.loading.dismiss();
            return Promise.reject(error);
        });
        return promesa;
    };
    CartelesService.prototype.cargar_todos = function () {
        var _this = this;
        if (!this._as.online) {
            var promise = this._ds.getCarteles()
                .then(function (data) {
                _this.carteles = data;
                _this.pagina = 100;
                _this._as.loading.dismiss();
                return data;
            });
        }
        else {
            this._as.presentLoading("Cargando...");
            var url = URL_SERVICIOS + "/carteles.php?todos&pagina=" + this.pagina;
            var promesa = this.http.get(url)
                .toPromise()
                .then(function (data) {
                _this.carteles = data.resultados;
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
    CartelesService.prototype.siguiente_pagina = function () {
        return tslib_1.__awaiter(this, void 0, void 0, function () {
            var url, promesa;
            var _this = this;
            return tslib_1.__generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        if (!this._as.online) {
                            return [2 /*return*/, false];
                        }
                        url = URL_SERVICIOS + "/carteles.php?todos&pagina=" + this.pagina;
                        return [4 /*yield*/, this.http.get(url)
                                .toPromise()
                                .then(function (data) {
                                var _a;
                                if (data.resultados.length > 0) {
                                    (_a = _this.carteles).push.apply(_a, data.resultados);
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
    CartelesService.prototype.buscar = function (variable) {
        return tslib_1.__awaiter(this, void 0, void 0, function () {
            var promise_1, url, promesa_1;
            var _this = this;
            return tslib_1.__generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        if (!!this._as.online) return [3 /*break*/, 2];
                        variable = variable.toUpperCase();
                        return [4 /*yield*/, this._ds.getCarteles()
                                .then(function (data) {
                                _this.carteles = [];
                                var list = [];
                                list = data;
                                list.forEach(function (cartel) {
                                    if (cartel.titulo.toUpperCase().indexOf(variable) >= 0 || cartel.especialidad.toUpperCase().indexOf(variable) >= 0 || cartel.autores.toUpperCase().indexOf(variable) >= 0) {
                                        _this.carteles.push(cartel);
                                    }
                                });
                                return promise_1;
                            })];
                    case 1:
                        promise_1 = _a.sent();
                        return [3 /*break*/, 4];
                    case 2:
                        url = URL_SERVICIOS + "/carteles.php?search=" + variable;
                        return [4 /*yield*/, this.http.get(url)
                                .toPromise()
                                .then(function (data) {
                                _this.carteles = null;
                                _this.carteles = data.resultados;
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
    CartelesService.prototype.recargar = function (variable) {
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
                        url = URL_SERVICIOS + "/carteles.php?todos&pagina=" + this.pagina + "&search=" + variable;
                        return [4 /*yield*/, this.http.get(url)
                                .toPromise()
                                .then(function (data) {
                                if (data.resultados.length > 0) {
                                    _this.carteles = data.resultados;
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
    CartelesService = tslib_1.__decorate([
        Injectable({
            providedIn: 'root'
        }),
        tslib_1.__metadata("design:paramtypes", [HttpClient,
            AjustesService,
            DatosService])
    ], CartelesService);
    return CartelesService;
}());
export { CartelesService };
//# sourceMappingURL=carteles.service.js.map