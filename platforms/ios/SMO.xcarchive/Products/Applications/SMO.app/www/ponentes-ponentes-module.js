(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["ponentes-ponentes-module"],{

/***/ "./src/app/pages/ponentes/ponentes.module.ts":
/*!***************************************************!*\
  !*** ./src/app/pages/ponentes/ponentes.module.ts ***!
  \***************************************************/
/*! exports provided: PonentesPageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PonentesPageModule", function() { return PonentesPageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");
/* harmony import */ var _ponentes_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./ponentes.page */ "./src/app/pages/ponentes/ponentes.page.ts");







var routes = [
    {
        path: '',
        component: _ponentes_page__WEBPACK_IMPORTED_MODULE_6__["PonentesPage"]
    }
];
var PonentesPageModule = /** @class */ (function () {
    function PonentesPageModule() {
    }
    PonentesPageModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            imports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
                _ionic_angular__WEBPACK_IMPORTED_MODULE_5__["IonicModule"],
                _angular_router__WEBPACK_IMPORTED_MODULE_4__["RouterModule"].forChild(routes)
            ],
            declarations: [_ponentes_page__WEBPACK_IMPORTED_MODULE_6__["PonentesPage"]]
        })
    ], PonentesPageModule);
    return PonentesPageModule;
}());



/***/ }),

/***/ "./src/app/pages/ponentes/ponentes.page.html":
/*!***************************************************!*\
  !*** ./src/app/pages/ponentes/ponentes.page.html ***!
  \***************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<ion-header>\n    <ion-toolbar color=\"primary\">\n      <ion-buttons slot=\"start\">\n        <ion-menu-button></ion-menu-button>\n        <ion-back-button color=\"light\" text=\"Atras\"></ion-back-button>\n      </ion-buttons>\n      <ion-title>Ponentes</ion-title>\n    </ion-toolbar>\n    <ion-toolbar color=\"primary\" class=\"buscadores\">\n      <ion-searchbar class=\"buscador\" debounce=\"550\" animated placeholder=\"Ponentes...\" (ionChange)=\"buscar($event)\"\n        color=\"light\" showCancelButton cancelButtonText=\"OK\"></ion-searchbar>\n    </ion-toolbar>\n  </ion-header>\n  \n  \n  <ion-content>\n    <ion-refresher  (ionRefresh)=\"recargar($event)\">\n      <ion-refresher-content></ion-refresher-content>\n    </ion-refresher>\n    <ion-list>\n      <ion-item *ngFor=\"let ponente of _ps.ponentes\" (click)=\"verDetalles(ponente.id)\" href=\"javascript:;\">\n        <ion-avatar slot=\"start\">\n          <img src=\"{{ponente.foto}}\">\n        </ion-avatar>\n        <ion-label>\n          <h2>{{ ponente.nombre }} </h2>\n          <!-- <p>Descripción</p> -->\n        </ion-label>\n      </ion-item>\n    </ion-list>\n    <ion-infinite-scroll  (ionInfinite)=\"siguiente_pagina($event)\">\n      <ion-infinite-scroll-content loadingText=\"Cargando mas información…\"></ion-infinite-scroll-content>\n    </ion-infinite-scroll>\n  </ion-content>"

/***/ }),

/***/ "./src/app/pages/ponentes/ponentes.page.scss":
/*!***************************************************!*\
  !*** ./src/app/pages/ponentes/ponentes.page.scss ***!
  \***************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3BhZ2VzL3BvbmVudGVzL3BvbmVudGVzLnBhZ2Uuc2NzcyJ9 */"

/***/ }),

/***/ "./src/app/pages/ponentes/ponentes.page.ts":
/*!*************************************************!*\
  !*** ./src/app/pages/ponentes/ponentes.page.ts ***!
  \*************************************************/
/*! exports provided: PonentesPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PonentesPage", function() { return PonentesPage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");
/* harmony import */ var src_app_services_ponentes_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/app/services/ponentes.service */ "./src/app/services/ponentes.service.ts");




var PonentesPage = /** @class */ (function () {
    function PonentesPage(modalCtrl, _ps, navCtrl) {
        this.modalCtrl = modalCtrl;
        this._ps = _ps;
        this.navCtrl = navCtrl;
        this.variable = "";
    }
    PonentesPage.prototype.ngOnInit = function () {
        this._ps.pagina = 0;
        this._ps.ponentes = [];
        this._ps.cargar_todos();
    };
    PonentesPage.prototype.verDetalles = function (id) {
        this.navCtrl.navigateForward("/tabs/principal/ponentes/ponente/" + id);
    };
    PonentesPage.prototype.buscar = function (texto) {
        this.variable = texto.target.value;
        this._ps.buscar(this.variable);
    };
    PonentesPage.prototype.siguiente_pagina = function (event) {
        this._ps.siguiente_pagina()
            .then(function () {
            event.target.complete();
            event.target.disabled = false;
        });
    };
    PonentesPage.prototype.recargar = function (event) {
        this._ps.recargar(this.variable)
            .then(function () {
            event.target.complete();
            event.target.disabled = false;
        });
    };
    PonentesPage = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-ponentes',
            template: __webpack_require__(/*! ./ponentes.page.html */ "./src/app/pages/ponentes/ponentes.page.html"),
            styles: [__webpack_require__(/*! ./ponentes.page.scss */ "./src/app/pages/ponentes/ponentes.page.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_ionic_angular__WEBPACK_IMPORTED_MODULE_2__["ModalController"],
            src_app_services_ponentes_service__WEBPACK_IMPORTED_MODULE_3__["PonentesService"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["NavController"]])
    ], PonentesPage);
    return PonentesPage;
}());



/***/ }),

/***/ "./src/app/services/ponentes.service.ts":
/*!**********************************************!*\
  !*** ./src/app/services/ponentes.service.ts ***!
  \**********************************************/
/*! exports provided: PonentesService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PonentesService", function() { return PonentesService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _ajustes_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./ajustes.service */ "./src/app/services/ajustes.service.ts");
/* harmony import */ var _config_url_servicios__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../config/url.servicios */ "./src/app/config/url.servicios.ts");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var _datos_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./datos.service */ "./src/app/services/datos.service.ts");






var PonentesService = /** @class */ (function () {
    function PonentesService(http, _as, _ds) {
        this.http = http;
        this._as = _as;
        this._ds = _ds;
        this.pagina = 0;
    }
    PonentesService.prototype.getDetalles = function (id) {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function () {
            var url, promesa;
            var _this = this;
            return tslib__WEBPACK_IMPORTED_MODULE_0__["__generator"](this, function (_a) {
                if (!this._as.online) {
                    return [2 /*return*/, false];
                }
                this._as.presentLoading("Cargando...");
                url = _config_url_servicios__WEBPACK_IMPORTED_MODULE_3__["URL_SERVICIOS"] + "/profesores.php?id=" + id;
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
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function () {
            var promise, url, promesa;
            var _this = this;
            return tslib__WEBPACK_IMPORTED_MODULE_0__["__generator"](this, function (_a) {
                switch (_a.label) {
                    case 0:
                        if (!!this._as.online) return [3 /*break*/, 1];
                        this._as.presentLoading("Cargando...", 3);
                        promise = this._ds.getProfesores()
                            .then(function (data) {
                            _this.ponentes = data;
                            _this.pagina = 100;
                            _this._as.loading.dismiss();
                            return data;
                        });
                        return [3 /*break*/, 3];
                    case 1:
                        this._as.presentLoading("Cargando...", 1);
                        url = _config_url_servicios__WEBPACK_IMPORTED_MODULE_3__["URL_SERVICIOS"] + "/profesores.php?todos&pagina=" + this.pagina;
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
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function () {
            var url, promesa;
            var _this = this;
            return tslib__WEBPACK_IMPORTED_MODULE_0__["__generator"](this, function (_a) {
                switch (_a.label) {
                    case 0:
                        if (!this._as.online) {
                            return [2 /*return*/, false];
                        }
                        url = _config_url_servicios__WEBPACK_IMPORTED_MODULE_3__["URL_SERVICIOS"] + "/profesores.php?todos&pagina=" + this.pagina;
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
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function () {
            var promise_1, url, promesa_1;
            var _this = this;
            return tslib__WEBPACK_IMPORTED_MODULE_0__["__generator"](this, function (_a) {
                switch (_a.label) {
                    case 0:
                        if (!!this._as.online) return [3 /*break*/, 2];
                        variable = variable.toUpperCase();
                        return [4 /*yield*/, this._ds.getProfesores()
                                .then(function (data) {
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
                        url = _config_url_servicios__WEBPACK_IMPORTED_MODULE_3__["URL_SERVICIOS"] + "/profesores.php?search=" + variable;
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
                        url = _config_url_servicios__WEBPACK_IMPORTED_MODULE_3__["URL_SERVICIOS"] + "/profesores.php?todos&pagina=" + this.pagina + "&search=" + variable;
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
    PonentesService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
            providedIn: 'root'
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_common_http__WEBPACK_IMPORTED_MODULE_4__["HttpClient"],
            _ajustes_service__WEBPACK_IMPORTED_MODULE_2__["AjustesService"],
            _datos_service__WEBPACK_IMPORTED_MODULE_5__["DatosService"]])
    ], PonentesService);
    return PonentesService;
}());



/***/ })

}]);
//# sourceMappingURL=ponentes-ponentes-module.js.map