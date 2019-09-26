(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["default~actividad-actividad-module~ponente-ponente-module~programa-programa-module"],{

/***/ "./src/app/services/actividades.service.ts":
/*!*************************************************!*\
  !*** ./src/app/services/actividades.service.ts ***!
  \*************************************************/
/*! exports provided: ActividadesService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ActividadesService", function() { return ActividadesService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var _config_url_servicios__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../config/url.servicios */ "./src/app/config/url.servicios.ts");
/* harmony import */ var _ajustes_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./ajustes.service */ "./src/app/services/ajustes.service.ts");
/* harmony import */ var _datos_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./datos.service */ "./src/app/services/datos.service.ts");
/* harmony import */ var rxjs_add_operator_map__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! rxjs/add/operator/map */ "./node_modules/rxjs-compat/_esm5/add/operator/map.js");







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
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function () {
            var promesa_1, url, promesa_2;
            var _this = this;
            return tslib__WEBPACK_IMPORTED_MODULE_0__["__generator"](this, function (_a) {
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
                        return [4 /*yield*/, _config_url_servicios__WEBPACK_IMPORTED_MODULE_3__["URL_SERVICIOS"]];
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
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function () {
            var promesa_3, url, promesa_4;
            var _this = this;
            return tslib__WEBPACK_IMPORTED_MODULE_0__["__generator"](this, function (_a) {
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
                    case 1: return [4 /*yield*/, _config_url_servicios__WEBPACK_IMPORTED_MODULE_3__["URL_SERVICIOS"]];
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
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function () {
            var promesa_5, url, promesa_6;
            var _this = this;
            return tslib__WEBPACK_IMPORTED_MODULE_0__["__generator"](this, function (_a) {
                switch (_a.label) {
                    case 0:
                        if (!!this._as.online) return [3 /*break*/, 1];
                        variable = variable.toUpperCase();
                        this._as.presentLoading("Cargando...", 1.5);
                        promesa_5 = this._ds.getActividades()
                            .then(function (data) {
                            _this.dias = [];
                            _this.dia_actual = data.diaactual;
                            _this.pagina = 0;
                            var dia_fecinido = false;
                            var nuevosdia = [];
                            var list = [];
                            list = data.dias;
                            list.forEach(function (dia) {
                                var nuevasactividades = [];
                                var hay_actividades_endia = false;
                                var listaactividades = [];
                                listaactividades = dia.actividades;
                                listaactividades.forEach(function (actividad) {
                                    if (actividad.actividad.toUpperCase().indexOf(variable) >= 0 || actividad.descripcion.toUpperCase().indexOf(variable) >= 0 || actividad.temario.toUpperCase().indexOf(variable) >= 0 || actividad.categoria.toUpperCase().indexOf(variable) >= 0 || actividad.clave.toUpperCase().indexOf(variable) >= 0 || actividad.profesor.toUpperCase().indexOf(variable) >= 0) {
                                        nuevasactividades.push(actividad);
                                        hay_actividades_endia = true;
                                        if (!dia_fecinido) {
                                            dia_fecinido = true;
                                            _this.dia_actual = dia.clave_dia;
                                        }
                                    }
                                });
                                var ndia;
                                if (hay_actividades_endia) {
                                    var ndia_1 = {
                                        'actividades': nuevasactividades,
                                        'clave_dia': dia.clave_dia,
                                        'dia': dia.dia
                                    };
                                    nuevosdia.push(ndia_1);
                                }
                            });
                            _this.dias = nuevosdia;
                            _this._as.loading.dismiss();
                            return promesa_5;
                        })
                            .catch(function (error) {
                            _this._as.loading.dismiss();
                            return Promise.reject(error);
                        });
                        return [3 /*break*/, 3];
                    case 1: return [4 /*yield*/, _config_url_servicios__WEBPACK_IMPORTED_MODULE_3__["URL_SERVICIOS"]];
                    case 2:
                        url = (_a.sent()) + "/minutoxminuto.php?search=" + variable;
                        promesa_6 = this.http.get(url)
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
                            return promesa_6;
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
    ActividadesService.prototype.actividadesPonente = function (ponente) {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function () {
            var promise_1, url, promesa_7;
            var _this = this;
            return tslib__WEBPACK_IMPORTED_MODULE_0__["__generator"](this, function (_a) {
                switch (_a.label) {
                    case 0:
                        if (!!this._as.online) return [3 /*break*/, 2];
                        this._as.presentLoading("Cargando...", 2);
                        ponente = ponente.toUpperCase();
                        return [4 /*yield*/, this._ds.getActividades()
                                .then(function (data) {
                                _this.actsPonente = [];
                                var list = [];
                                list = data.dias;
                                list.forEach(function (dia) {
                                    var listaactividades = [];
                                    listaactividades = dia.actividades;
                                    listaactividades.forEach(function (actividad) {
                                        var listaproresores = [];
                                        listaproresores = actividad.profesores;
                                        listaproresores.forEach(function (profesor) {
                                            if (profesor.profesor_id == ponente) {
                                                _this.actsPonente.push(actividad);
                                            }
                                        });
                                    });
                                });
                                return promise_1;
                            })];
                    case 1:
                        promise_1 = _a.sent();
                        return [3 /*break*/, 4];
                    case 2: return [4 /*yield*/, _config_url_servicios__WEBPACK_IMPORTED_MODULE_3__["URL_SERVICIOS"]];
                    case 3:
                        url = (_a.sent()) + "/actividadesprofesor.php?profesor=" + ponente;
                        promesa_7 = this.http.get(url)
                            .toPromise()
                            .then(function (data) {
                            console.log(data);
                            _this.actsPonente = data.actividades;
                            return promesa_7;
                        })
                            .catch(function (error) {
                            return Promise.reject(error);
                        });
                        _a.label = 4;
                    case 4: return [2 /*return*/];
                }
            });
        });
    };
    ActividadesService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
            providedIn: 'root'
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"],
            _ajustes_service__WEBPACK_IMPORTED_MODULE_4__["AjustesService"],
            _datos_service__WEBPACK_IMPORTED_MODULE_5__["DatosService"]])
    ], ActividadesService);
    return ActividadesService;
}());



/***/ })

}]);
//# sourceMappingURL=default~actividad-actividad-module~ponente-ponente-module~programa-programa-module.js.map