(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["videos-videos-module"],{

/***/ "./src/app/pages/videos/videos.module.ts":
/*!***********************************************!*\
  !*** ./src/app/pages/videos/videos.module.ts ***!
  \***********************************************/
/*! exports provided: VideosPageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "VideosPageModule", function() { return VideosPageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");
/* harmony import */ var _videos_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./videos.page */ "./src/app/pages/videos/videos.page.ts");







var routes = [
    {
        path: '',
        component: _videos_page__WEBPACK_IMPORTED_MODULE_6__["VideosPage"]
    }
];
var VideosPageModule = /** @class */ (function () {
    function VideosPageModule() {
    }
    VideosPageModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            imports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
                _ionic_angular__WEBPACK_IMPORTED_MODULE_5__["IonicModule"],
                _angular_router__WEBPACK_IMPORTED_MODULE_4__["RouterModule"].forChild(routes)
            ],
            declarations: [_videos_page__WEBPACK_IMPORTED_MODULE_6__["VideosPage"]]
        })
    ], VideosPageModule);
    return VideosPageModule;
}());



/***/ }),

/***/ "./src/app/pages/videos/videos.page.html":
/*!***********************************************!*\
  !*** ./src/app/pages/videos/videos.page.html ***!
  \***********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<ion-header>\n  <ion-toolbar color=\"primary\">\n    <ion-buttons slot=\"start\">\n      <ion-menu-button></ion-menu-button>\n      <ion-back-button color=\"light\" text=\"Atras\"></ion-back-button>\n    </ion-buttons>\n    <ion-title>Videos</ion-title>\n  </ion-toolbar>\n  <ion-toolbar color=\"primary\" class=\"buscadores\">\n    <ion-searchbar class=\"buscador\" debounce=\"550\" animated placeholder=\"Buscar video, autor, especialidad...\" (ionChange)=\"buscar($event)\" color=\"light\"  showCancelButton cancelButtonText=\"OK\" ></ion-searchbar>\n  </ion-toolbar>\n</ion-header>\n\n<ion-content ion-padding=\"ion-padding\">\n  <ion-refresher    (ionRefresh)=\"recargar($event)\">\n    <ion-refresher-content></ion-refresher-content>\n  </ion-refresher>\n    <ion-list>\n        <ion-item *ngFor=\"let video of _vs.videos\"  color=\"{{video.color}}\" (click)=\"detalles(video.url)\"  href=\"javascript:;\">\n          <ion-label style=\"white-space: normal;\">\n            <p>{{video.id}}.- {{ video.titulo }}</p>\n           \n            <h3>A. {{ video.autores }}</h3>\n             <p>Especialidad: {{ video.especialidad }}</p>\n          </ion-label>\n        </ion-item>\n      </ion-list>\n      <ion-infinite-scroll  (ionInfinite)=\"siguiente_pagina($event)\">\n          <ion-infinite-scroll-content loadingText=\"Cargando mas información…\"></ion-infinite-scroll-content>\n      </ion-infinite-scroll>\n</ion-content>"

/***/ }),

/***/ "./src/app/pages/videos/videos.page.scss":
/*!***********************************************!*\
  !*** ./src/app/pages/videos/videos.page.scss ***!
  \***********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".buscadores {\n  --padding-top: 0px;\n  --padding-bottom: 0px;\n  --padding-start: 0px;\n  --padding-end: 0px; }\n\n.buscador {\n  padding-top: 0px;\n  padding-bottom: 0px;\n  height: 0px; }\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9qY2lubm92YXRpb24vSkMgSW5ub3ZhdGlvbiBEcm9wYm94L0plc3XMgXMgQ3VldmFzL01pIE1hYyAoTWFjQm9vay1Qcm8tZGUtSkMtSW5ub3ZhdGlvbi5sb2NhbCkvRG9jdW1lbnRzL0dpdEh1Yi9zbW8yMDE5L3NyYy9hcHAvcGFnZXMvdmlkZW9zL3ZpZGVvcy5wYWdlLnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDSSxrQkFBYztFQUNsQixxQkFBaUI7RUFDakIsb0JBQWdCO0VBQ2hCLGtCQUFjLEVBQUE7O0FBR2Q7RUFDSSxnQkFBZ0I7RUFDcEIsbUJBQW1CO0VBQ25CLFdBQVcsRUFBQSIsImZpbGUiOiJzcmMvYXBwL3BhZ2VzL3ZpZGVvcy92aWRlb3MucGFnZS5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLmJ1c2NhZG9yZXN7XG4gICAgLS1wYWRkaW5nLXRvcDogMHB4O1xuLS1wYWRkaW5nLWJvdHRvbTogMHB4O1xuLS1wYWRkaW5nLXN0YXJ0OiAwcHg7XG4tLXBhZGRpbmctZW5kOiAwcHg7XG59XG5cbi5idXNjYWRvcntcbiAgICBwYWRkaW5nLXRvcDogMHB4O1xucGFkZGluZy1ib3R0b206IDBweDtcbmhlaWdodDogMHB4O1xufSJdfQ== */"

/***/ }),

/***/ "./src/app/pages/videos/videos.page.ts":
/*!*********************************************!*\
  !*** ./src/app/pages/videos/videos.page.ts ***!
  \*********************************************/
/*! exports provided: VideosPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "VideosPage", function() { return VideosPage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");
/* harmony import */ var src_app_services_videos_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/app/services/videos.service */ "./src/app/services/videos.service.ts");
/* harmony import */ var _ionic_native_in_app_browser_ngx__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ionic-native/in-app-browser/ngx */ "./node_modules/@ionic-native/in-app-browser/ngx/index.js");





var VideosPage = /** @class */ (function () {
    function VideosPage(modalCtrl, _vs, iab) {
        this.modalCtrl = modalCtrl;
        this._vs = _vs;
        this.iab = iab;
        this.variable = "";
    }
    VideosPage.prototype.ngOnInit = function () {
        this._vs.pagina = 0;
        this._vs.videos = [];
        this._vs.cargar_todos();
    };
    VideosPage.prototype.detalles = function (url) {
        var link = url;
        this.iab.create(link, '_system');
    };
    VideosPage.prototype.buscar = function (texto) {
        this.variable = texto.target.value;
        this._vs.buscar(this.variable);
    };
    VideosPage.prototype.siguiente_pagina = function (event) {
        this._vs.siguiente_pagina()
            .then(function () {
            event.target.complete();
            event.target.disabled = false;
        });
    };
    VideosPage.prototype.recargar = function (event) {
        this._vs.recargar(this.variable)
            .then(function () {
            event.target.complete();
            event.target.disabled = false;
        });
    };
    VideosPage = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-videos',
            template: __webpack_require__(/*! ./videos.page.html */ "./src/app/pages/videos/videos.page.html"),
            styles: [__webpack_require__(/*! ./videos.page.scss */ "./src/app/pages/videos/videos.page.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_ionic_angular__WEBPACK_IMPORTED_MODULE_2__["ModalController"],
            src_app_services_videos_service__WEBPACK_IMPORTED_MODULE_3__["VideosService"],
            _ionic_native_in_app_browser_ngx__WEBPACK_IMPORTED_MODULE_4__["InAppBrowser"]])
    ], VideosPage);
    return VideosPage;
}());



/***/ }),

/***/ "./src/app/services/videos.service.ts":
/*!********************************************!*\
  !*** ./src/app/services/videos.service.ts ***!
  \********************************************/
/*! exports provided: VideosService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "VideosService", function() { return VideosService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var _config_url_servicios__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../config/url.servicios */ "./src/app/config/url.servicios.ts");
/* harmony import */ var _ajustes_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./ajustes.service */ "./src/app/services/ajustes.service.ts");
/* harmony import */ var _datos_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./datos.service */ "./src/app/services/datos.service.ts");
/* harmony import */ var rxjs_add_operator_map__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! rxjs/add/operator/map */ "./node_modules/rxjs-compat/_esm5/add/operator/map.js");







var VideosService = /** @class */ (function () {
    function VideosService(http, _as, _ds) {
        this.http = http;
        this._as = _as;
        this._ds = _ds;
        this.pagina = 0;
    }
    VideosService.prototype.getDetalles = function (id) {
        var _this = this;
        if (!this._as.online) {
            return false;
        }
        this._as.presentLoading("Cargando...");
        var url = _config_url_servicios__WEBPACK_IMPORTED_MODULE_3__["URL_SERVICIOS"] + "/videos.php?id=" + id;
        var promesa = this.http.get(url)
            .toPromise()
            .then(function (data) {
            _this.videos = data.resultados;
            _this._as.loading.dismiss();
            return data;
        })
            .catch(function (error) {
            _this._as.loading.dismiss();
            return Promise.reject(error);
        });
        return promesa;
    };
    VideosService.prototype.cargar_todos = function () {
        var _this = this;
        if (!this._as.online) {
            var promise = this._ds.getVideos()
                .then(function (data) {
                _this.videos = data;
                _this.pagina = 100;
                _this._as.loading.dismiss();
                return data;
            });
        }
        else {
            this._as.presentLoading("Cargando...");
            var url = _config_url_servicios__WEBPACK_IMPORTED_MODULE_3__["URL_SERVICIOS"] + "/videos.php?todos&pagina=" + this.pagina;
            var promesa = this.http.get(url)
                .toPromise()
                .then(function (data) {
                _this.videos = data.resultados;
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
    VideosService.prototype.siguiente_pagina = function () {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function () {
            var url, promesa;
            var _this = this;
            return tslib__WEBPACK_IMPORTED_MODULE_0__["__generator"](this, function (_a) {
                switch (_a.label) {
                    case 0:
                        if (!this._as.online) {
                            return [2 /*return*/, false];
                        }
                        url = _config_url_servicios__WEBPACK_IMPORTED_MODULE_3__["URL_SERVICIOS"] + "/videos.php?todos&pagina=" + this.pagina;
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
    VideosService.prototype.buscar = function (variable) {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function () {
            var promise_1, url, promesa_1;
            var _this = this;
            return tslib__WEBPACK_IMPORTED_MODULE_0__["__generator"](this, function (_a) {
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
                        url = _config_url_servicios__WEBPACK_IMPORTED_MODULE_3__["URL_SERVICIOS"] + "/videos.php?search=" + variable;
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
    VideosService.prototype.recargar = function (variable) {
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
                        url = _config_url_servicios__WEBPACK_IMPORTED_MODULE_3__["URL_SERVICIOS"] + "/videos.php?todos&pagina=" + this.pagina + "&search=" + variable;
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
    VideosService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
            providedIn: 'root'
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"],
            _ajustes_service__WEBPACK_IMPORTED_MODULE_4__["AjustesService"],
            _datos_service__WEBPACK_IMPORTED_MODULE_5__["DatosService"]])
    ], VideosService);
    return VideosService;
}());



/***/ })

}]);
//# sourceMappingURL=videos-videos-module.js.map