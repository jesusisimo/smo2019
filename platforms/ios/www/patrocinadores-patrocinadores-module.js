(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["patrocinadores-patrocinadores-module"],{

/***/ "./src/app/pages/patrocinadores/patrocinadores.module.ts":
/*!***************************************************************!*\
  !*** ./src/app/pages/patrocinadores/patrocinadores.module.ts ***!
  \***************************************************************/
/*! exports provided: PatrocinadoresPageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PatrocinadoresPageModule", function() { return PatrocinadoresPageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");
/* harmony import */ var _patrocinadores_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./patrocinadores.page */ "./src/app/pages/patrocinadores/patrocinadores.page.ts");







var routes = [
    {
        path: '',
        component: _patrocinadores_page__WEBPACK_IMPORTED_MODULE_6__["PatrocinadoresPage"]
    }
];
var PatrocinadoresPageModule = /** @class */ (function () {
    function PatrocinadoresPageModule() {
    }
    PatrocinadoresPageModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            imports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
                _ionic_angular__WEBPACK_IMPORTED_MODULE_5__["IonicModule"],
                _angular_router__WEBPACK_IMPORTED_MODULE_4__["RouterModule"].forChild(routes)
            ],
            declarations: [_patrocinadores_page__WEBPACK_IMPORTED_MODULE_6__["PatrocinadoresPage"]]
        })
    ], PatrocinadoresPageModule);
    return PatrocinadoresPageModule;
}());



/***/ }),

/***/ "./src/app/pages/patrocinadores/patrocinadores.page.html":
/*!***************************************************************!*\
  !*** ./src/app/pages/patrocinadores/patrocinadores.page.html ***!
  \***************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<ion-header>\n  <ion-toolbar color=\"primary\">\n    <ion-buttons slot=\"start\">\n      <ion-menu-button></ion-menu-button>\n      <ion-back-button color=\"light\" text=\"Atras\"></ion-back-button>\n    </ion-buttons>\n    <ion-title>Patrocinadores</ion-title>\n  </ion-toolbar>\n  <ion-toolbar color=\"primary\" class=\"buscadores\">\n    <ion-searchbar class=\"buscador\" debounce=\"550\" animated placeholder=\"Buscar patrocinador...\"\n      (ionChange)=\"buscar($event)\" color=\"light\" showCancelButton cancelButtonText=\"OK\"></ion-searchbar>\n  </ion-toolbar>\n</ion-header>\n\n<ion-content ion-padding=\"ion-padding\">\n  <ion-refresher  (ionRefresh)=\"recargar($event)\">\n    <ion-refresher-content></ion-refresher-content>\n  </ion-refresher>\n  \n  <ion-list>\n    <ion-item ion-item *ngFor=\"let patrocinador of _ps.patrocinadores\">\n          <ion-card color=\"light\">\n              <img src=\"{{ patrocinador.logo }}\">\n              \n                <h3 text-center [innerHTML]=\"patrocinador.patrocinador\"></h3>\n            \n            \n              <ion-card-content text-justify>\n                  <p text-justify [innerHTML]=\"patrocinador.descripcion\"></p>\n              </ion-card-content>\n              <h5 text-right>\n              <ion-button text-center color=\"primary\" (click)=\"abrirWeb(patrocinador.pagina)\" *ngIf=\"patrocinador.pagina!=''\">\n                  <ion-icon name=\"link\" ></ion-icon>\n                  Visitar página\n              </ion-button>\n            </h5>\n            </ion-card>\n    </ion-item>\n\n\n  </ion-list>\n  <ion-infinite-scroll  (ionInfinite)=\"siguiente_pagina($event)\">\n    <ion-infinite-scroll-content loadingText=\"Cargando mas información…\"></ion-infinite-scroll-content>\n  </ion-infinite-scroll>\n\n\n</ion-content>"

/***/ }),

/***/ "./src/app/pages/patrocinadores/patrocinadores.page.scss":
/*!***************************************************************!*\
  !*** ./src/app/pages/patrocinadores/patrocinadores.page.scss ***!
  \***************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ":host ion-item {\n  --background:none;\n  background-color: #dbdbdb; }\n\n:host ion-content {\n  --background:none;\n  background-color: #dbdbdb; }\n\n:host ion-card {\n  -webkit-margin-start: 0px;\n  margin-inline-start: 0px;\n  -webkit-margin-end: 0px;\n  margin-inline-end: 0px; }\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9icmIvRG9jdW1lbnRzL0dpdEh1Yi9BUFBfU01PL3Ntby9zcmMvYXBwL3BhZ2VzL3BhdHJvY2luYWRvcmVzL3BhdHJvY2luYWRvcmVzLnBhZ2Uuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUVRLGlCQUFhO0VBQ2YseUJBQXlCLEVBQUE7O0FBSC9CO0VBTVEsaUJBQWE7RUFDZix5QkFBeUIsRUFBQTs7QUFQL0I7RUFZUSx5QkFBeUI7RUFDekIsd0JBQXdCO0VBQ3hCLHVCQUF1QjtFQUN2QixzQkFBc0IsRUFBQSIsImZpbGUiOiJzcmMvYXBwL3BhZ2VzL3BhdHJvY2luYWRvcmVzL3BhdHJvY2luYWRvcmVzLnBhZ2Uuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIjpob3N0IHtcbiAgICBpb24taXRlbSB7XG4gICAgICAgIC0tYmFja2dyb3VuZDpub25lO1xuICAgICAgYmFja2dyb3VuZC1jb2xvcjogI2RiZGJkYjtcbiAgICB9XG4gICAgaW9uLWNvbnRlbnQge1xuICAgICAgICAtLWJhY2tncm91bmQ6bm9uZTtcbiAgICAgIGJhY2tncm91bmQtY29sb3I6ICNkYmRiZGI7XG4gICAgfVxuXG4gICAgaW9uLWNhcmR7XG4gICAgICBcbiAgICAgICAgLXdlYmtpdC1tYXJnaW4tc3RhcnQ6IDBweDtcbiAgICAgICAgbWFyZ2luLWlubGluZS1zdGFydDogMHB4O1xuICAgICAgICAtd2Via2l0LW1hcmdpbi1lbmQ6IDBweDtcbiAgICAgICAgbWFyZ2luLWlubGluZS1lbmQ6IDBweDtcbiAgICBcbiAgICB9XG59XG5cbiJdfQ== */"

/***/ }),

/***/ "./src/app/pages/patrocinadores/patrocinadores.page.ts":
/*!*************************************************************!*\
  !*** ./src/app/pages/patrocinadores/patrocinadores.page.ts ***!
  \*************************************************************/
/*! exports provided: PatrocinadoresPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PatrocinadoresPage", function() { return PatrocinadoresPage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");
/* harmony import */ var src_app_services_patrocinadores_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/app/services/patrocinadores.service */ "./src/app/services/patrocinadores.service.ts");
/* harmony import */ var _ionic_native_in_app_browser_ngx__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ionic-native/in-app-browser/ngx */ "./node_modules/@ionic-native/in-app-browser/ngx/index.js");





var PatrocinadoresPage = /** @class */ (function () {
    function PatrocinadoresPage(modalCtrl, _ps, iab) {
        this.modalCtrl = modalCtrl;
        this._ps = _ps;
        this.iab = iab;
        this.variable = "";
    }
    PatrocinadoresPage.prototype.ngOnInit = function () {
        this._ps.pagina = 0;
        this._ps.patrocinadores = [];
        this._ps.cargar_todos();
    };
    PatrocinadoresPage.prototype.abrirWeb = function (url) {
        this.iab.create(url, '_system');
    };
    PatrocinadoresPage.prototype.buscar = function (texto) {
        this.variable = texto.target.value;
        this._ps.buscar(this.variable);
    };
    PatrocinadoresPage.prototype.siguiente_pagina = function (event) {
        this._ps.siguiente_pagina()
            .then(function () {
            event.target.complete();
            event.target.disabled = false;
        });
    };
    PatrocinadoresPage.prototype.recargar = function (event) {
        this._ps.recargar(this.variable)
            .then(function () {
            event.target.complete();
            event.target.disabled = false;
        });
    };
    PatrocinadoresPage = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-patrocinadores',
            template: __webpack_require__(/*! ./patrocinadores.page.html */ "./src/app/pages/patrocinadores/patrocinadores.page.html"),
            styles: [__webpack_require__(/*! ./patrocinadores.page.scss */ "./src/app/pages/patrocinadores/patrocinadores.page.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_ionic_angular__WEBPACK_IMPORTED_MODULE_2__["ModalController"],
            src_app_services_patrocinadores_service__WEBPACK_IMPORTED_MODULE_3__["PatrocinadoresService"],
            _ionic_native_in_app_browser_ngx__WEBPACK_IMPORTED_MODULE_4__["InAppBrowser"]])
    ], PatrocinadoresPage);
    return PatrocinadoresPage;
}());



/***/ }),

/***/ "./src/app/services/patrocinadores.service.ts":
/*!****************************************************!*\
  !*** ./src/app/services/patrocinadores.service.ts ***!
  \****************************************************/
/*! exports provided: PatrocinadoresService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PatrocinadoresService", function() { return PatrocinadoresService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var _config_url_servicios__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../config/url.servicios */ "./src/app/config/url.servicios.ts");
/* harmony import */ var _ajustes_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./ajustes.service */ "./src/app/services/ajustes.service.ts");
/* harmony import */ var _datos_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./datos.service */ "./src/app/services/datos.service.ts");
/* harmony import */ var rxjs_add_operator_map__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! rxjs/add/operator/map */ "./node_modules/rxjs-compat/_esm5/add/operator/map.js");







var PatrocinadoresService = /** @class */ (function () {
    function PatrocinadoresService(http, _as, _ds) {
        this.http = http;
        this._as = _as;
        this._ds = _ds;
        this.pagina = 0;
    }
    PatrocinadoresService.prototype.getDetalles = function (id) {
        var _this = this;
        if (!this._as.online) {
            return false;
        }
        this._as.presentLoading("Cargando...");
        var url = _config_url_servicios__WEBPACK_IMPORTED_MODULE_3__["URL_SERVICIOS"] + "/patrocinadores.php?id=" + id;
        var promesa = this.http.get(url)
            .toPromise()
            .then(function (data) {
            _this.patrocinadores = data.resultados;
            _this._as.loading.dismiss();
            return data;
        })
            .catch(function (error) {
            _this._as.loading.dismiss();
            return Promise.reject(error);
        });
        return promesa;
    };
    PatrocinadoresService.prototype.cargar_todos = function () {
        var _this = this;
        if (!this._as.online) {
            var promise = this._ds.getPatrocinadores()
                .then(function (data) {
                _this.patrocinadores = data;
                _this.pagina = 100;
                _this._as.loading.dismiss();
                return data;
            });
        }
        else {
            this._as.presentLoading("Cargando...");
            var url = _config_url_servicios__WEBPACK_IMPORTED_MODULE_3__["URL_SERVICIOS"] + "/patrocinadores.php?todos&pagina=" + this.pagina;
            var promesa = this.http.get(url)
                .toPromise()
                .then(function (data) {
                _this.patrocinadores = data.resultados;
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
    PatrocinadoresService.prototype.siguiente_pagina = function () {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function () {
            var url, promesa;
            var _this = this;
            return tslib__WEBPACK_IMPORTED_MODULE_0__["__generator"](this, function (_a) {
                switch (_a.label) {
                    case 0:
                        if (!this._as.online) {
                            return [2 /*return*/, false];
                        }
                        url = _config_url_servicios__WEBPACK_IMPORTED_MODULE_3__["URL_SERVICIOS"] + "/patrocinadores.php?todos&pagina=" + this.pagina;
                        return [4 /*yield*/, this.http.get(url)
                                .toPromise()
                                .then(function (data) {
                                var _a;
                                if (data.resultados.length > 0) {
                                    (_a = _this.patrocinadores).push.apply(_a, data.resultados);
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
    PatrocinadoresService.prototype.buscar = function (variable) {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function () {
            var promise_1, url, promesa_1;
            var _this = this;
            return tslib__WEBPACK_IMPORTED_MODULE_0__["__generator"](this, function (_a) {
                switch (_a.label) {
                    case 0:
                        if (!!this._as.online) return [3 /*break*/, 2];
                        variable = variable.toUpperCase();
                        return [4 /*yield*/, this._ds.getPatrocinadores()
                                .then(function (data) {
                                _this.patrocinadores = [];
                                var list = [];
                                list = data;
                                list.forEach(function (patrocinador) {
                                    if (patrocinador.patrocinador.toUpperCase().indexOf(variable) >= 0) {
                                        _this.patrocinadores.push(patrocinador);
                                    }
                                });
                                return promise_1;
                            })];
                    case 1:
                        promise_1 = _a.sent();
                        return [3 /*break*/, 4];
                    case 2:
                        url = _config_url_servicios__WEBPACK_IMPORTED_MODULE_3__["URL_SERVICIOS"] + "/patrocinadores.php?search=" + variable;
                        return [4 /*yield*/, this.http.get(url)
                                .toPromise()
                                .then(function (data) {
                                _this.patrocinadores = null;
                                _this.patrocinadores = data.resultados;
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
    PatrocinadoresService.prototype.recargar = function (variable) {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function () {
            var url, promesa_2;
            var _this = this;
            return tslib__WEBPACK_IMPORTED_MODULE_0__["__generator"](this, function (_a) {
                switch (_a.label) {
                    case 0:
                        if (!!this._as.online) return [3 /*break*/, 1];
                        this.cargar_todos();
                        return [2 /*return*/, true];
                    case 1:
                        this.pagina = 0;
                        this._as.presentLoading("Recargando...");
                        url = _config_url_servicios__WEBPACK_IMPORTED_MODULE_3__["URL_SERVICIOS"] + "/patrocinadores.php?todos&pagina=" + this.pagina + "&search=" + variable;
                        return [4 /*yield*/, this.http.get(url)
                                .toPromise()
                                .then(function (data) {
                                if (data.resultados.length > 0) {
                                    _this.patrocinadores = data.resultados;
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
    PatrocinadoresService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
            providedIn: 'root'
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"],
            _ajustes_service__WEBPACK_IMPORTED_MODULE_4__["AjustesService"],
            _datos_service__WEBPACK_IMPORTED_MODULE_5__["DatosService"]])
    ], PatrocinadoresService);
    return PatrocinadoresService;
}());



/***/ })

}]);
//# sourceMappingURL=patrocinadores-patrocinadores-module.js.map