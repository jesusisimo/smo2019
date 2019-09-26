import * as tslib_1 from "tslib";
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { URL_SERVICIOS } from "../config/url.servicios";
import { AjustesService } from './ajustes.service';
import { DatosService } from './datos.service';
import 'rxjs/add/operator/map';
var ActividadesService = /** @class */ (function () {
    function ActividadesService(http, _as, _ds) {
        this.http = http;
        this._as = _as;
        this._ds = _ds;
        this.pagina = 0;
        this.dia_actual = "";
        this.dias = [];
        this.actividad = null;
    }
    ActividadesService.prototype.cargar_todos = function () {
        return tslib_1.__awaiter(this, void 0, void 0, function () {
            var promesa_1, url, promesa_2;
            var _this = this;
            return tslib_1.__generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        if (!!this._as.online) return [3 /*break*/, 1];
                        this._as.presentLoading("Cargando...", 0.5);
                        promesa_1 = this._ds.getActividades()
                            .then(function (data) {
                            _this.dias = data.dias;
                            _this.dia_actual = data.diaactual;
                            _this.pagina = 100;
                            _this._as.loading.dismiss();
                            return promesa_1;
                        })
                            .catch(function (error) {
                            _this._as.loading.dismiss();
                            return Promise.reject(error);
                        });
                        return [3 /*break*/, 3];
                    case 1:
                        this._as.presentLoading("Cargando...", 2.5);
                        return [4 /*yield*/, URL_SERVICIOS];
                    case 2:
                        url = (_a.sent()) + "/minutoxminuto.php?todos&pagina=" + this.pagina;
                        promesa_2 = this.http.get(url)
                            .toPromise()
                            .then(function (data) {
                            _this.dias = data.dias;
                            _this.dia_actual = data.diaactual;
                            _this.pagina = _this.pagina += 1;
                            _this._as.loading.dismiss();
                            return promesa_2;
                        })
                            .catch(function (error) {
                            _this._as.loading.dismiss();
                            return Promise.reject(error);
                        });
                        _a.label = 3;
                    case 3: return [2 /*return*/];
                }
            });
        });
    };
    ActividadesService.prototype.getDetalles = function (id) {
        return tslib_1.__awaiter(this, void 0, void 0, function () {
            var promesa_3, url, promesa_4;
            var _this = this;
            return tslib_1.__generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        this._as.presentLoading("Cargando...", 0.5);
                        if (!!this._as.online) return [3 /*break*/, 1];
                        promesa_3 = this._ds.getActividad(id)
                            .then(function (data) {
                            _this.actividad = data;
                            _this._as.loading.dismiss();
                            return promesa_3;
                        })
                            .catch(function (error) {
                            _this._as.loading.dismiss();
                            return Promise.reject(error);
                        });
                        return [2 /*return*/, promesa_3];
                    case 1: return [4 /*yield*/, URL_SERVICIOS];
                    case 2:
                        url = (_a.sent()) + "/actividad.php?id=" + id;
                        return [4 /*yield*/, this.http.get(url)
                                .toPromise()
                                .then(function (data) {
                                _this.actividad = data[0];
                                _this._as.loading.dismiss();
                                return promesa_4;
                            })
                                .catch(function (error) {
                                _this._as.loading.dismiss();
                                return Promise.reject(error);
                            })];
                    case 3:
                        promesa_4 = _a.sent();
                        return [2 /*return*/, promesa_4];
                }
            });
        });
    };
    ActividadesService.prototype.buscar = function (variable) {
        return tslib_1.__awaiter(this, void 0, void 0, function () {
            var url, promesa;
            var _this = this;
            return tslib_1.__generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, URL_SERVICIOS];
                    case 1:
                        url = (_a.sent()) + "/minutoxminuto.php?search=" + variable;
                        promesa = this.http.get(url)
                            .toPromise()
                            .then(function (data) {
                            _this.dias = data.dias;
                            _this.dia_actual = data.diaactual;
                            _this.pagina = 0;
                            for (var _i = 0, _a = _this.dias; _i < _a.length; _i++) {
                                var d = _a[_i];
                                _this.dia_actual = d.clave_dia;
                                break;
                            }
                            return promesa;
                        })
                            .catch(function (error) {
                            return Promise.reject(error);
                        });
                        return [2 /*return*/];
                }
            });
        });
    };
    ActividadesService.prototype.actividadesPonente = function (ponente) {
        return tslib_1.__awaiter(this, void 0, void 0, function () {
            var url, promesa_5;
            var _this = this;
            return tslib_1.__generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        if (!!this._as.online) return [3 /*break*/, 1];
                        return [3 /*break*/, 3];
                    case 1: return [4 /*yield*/, URL_SERVICIOS];
                    case 2:
                        url = (_a.sent()) + "/actividadesprofesor.php?profesor=" + ponente;
                        promesa_5 = this.http.get(url)
                            .toPromise()
                            .then(function (data) {
                            console.log(data);
                            _this.actsPonente = data.actividades;
                            return promesa_5;
                        })
                            .catch(function (error) {
                            return Promise.reject(error);
                        });
                        _a.label = 3;
                    case 3: return [2 /*return*/];
                }
            });
        });
    };
    ActividadesService = tslib_1.__decorate([
        Injectable({
            providedIn: 'root'
        }),
        tslib_1.__metadata("design:paramtypes", [HttpClient,
            AjustesService,
            DatosService])
    ], ActividadesService);
    return ActividadesService;
}());
export { ActividadesService };
//# sourceMappingURL=actividades.service.js.map