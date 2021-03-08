(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["comunicados-comunicados-module"],{

/***/ "./src/app/pages/comunicados/comunicados.module.ts":
/*!*********************************************************!*\
  !*** ./src/app/pages/comunicados/comunicados.module.ts ***!
  \*********************************************************/
/*! exports provided: ComunicadosPageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ComunicadosPageModule", function() { return ComunicadosPageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");
/* harmony import */ var _comunicados_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./comunicados.page */ "./src/app/pages/comunicados/comunicados.page.ts");







var routes = [
    {
        path: '',
        component: _comunicados_page__WEBPACK_IMPORTED_MODULE_6__["ComunicadosPage"]
    }
];
var ComunicadosPageModule = /** @class */ (function () {
    function ComunicadosPageModule() {
    }
    ComunicadosPageModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            imports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
                _ionic_angular__WEBPACK_IMPORTED_MODULE_5__["IonicModule"],
                _angular_router__WEBPACK_IMPORTED_MODULE_4__["RouterModule"].forChild(routes)
            ],
            declarations: [_comunicados_page__WEBPACK_IMPORTED_MODULE_6__["ComunicadosPage"]]
        })
    ], ComunicadosPageModule);
    return ComunicadosPageModule;
}());



/***/ }),

/***/ "./src/app/pages/comunicados/comunicados.page.html":
/*!*********************************************************!*\
  !*** ./src/app/pages/comunicados/comunicados.page.html ***!
  \*********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<ion-header>\n  <ion-toolbar color=\"primary\">\n    <ion-buttons slot=\"start\">\n      <ion-menu-button></ion-menu-button>\n      <ion-back-button color=\"light\" text=\"Volver\"></ion-back-button>\n    </ion-buttons>\n    <ion-title>Comunicados</ion-title>\n  </ion-toolbar>\n</ion-header>\n\n<ion-content>\n  <ion-list>\n    <ion-item  *ngFor=\"let comunicado of comunicados\" (click)=\"abrirWeb( comunicado.url,'_system')\" >\n        <ion-label class=\"ion-text-wrap\">     \n          <ion-row>\n            <ion-col size=\"4\">\n                \n                    <img class=\"logoSmall\" src=\"{{comunicado.ruta_icono}}\">\n                 \n            </ion-col>\n            <ion-col size=\"8\">               \n          <ion-text color=\"secondary\">\n              <ion-text color=\"primary\">         \n                  <h3>{{comunicado.titulo}}</h3>\n                  \n                </ion-text>\n\n          </ion-text>\n        </ion-col>\n      </ion-row>  \n        </ion-label>\n      </ion-item>\n      </ion-list>\n\n\n\n<!--ion-card>\n  <img src=\"../../assets/img/col1.png\" class=\"logoSmall\">\n</ion-card>\n<ion-card>\n  <img src=\"../../assets/img/col2.png\" class=\"logoSmall\">\n</ion-card>\n<ion-card>\n  <img src=\"../../assets/img/col3.png\" class=\"logoSmall\">\n</ion-card-->\n</ion-content>\n"

/***/ }),

/***/ "./src/app/pages/comunicados/comunicados.page.scss":
/*!*********************************************************!*\
  !*** ./src/app/pages/comunicados/comunicados.page.scss ***!
  \*********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3BhZ2VzL2NvbXVuaWNhZG9zL2NvbXVuaWNhZG9zLnBhZ2Uuc2NzcyJ9 */"

/***/ }),

/***/ "./src/app/pages/comunicados/comunicados.page.ts":
/*!*******************************************************!*\
  !*** ./src/app/pages/comunicados/comunicados.page.ts ***!
  \*******************************************************/
/*! exports provided: ComunicadosPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ComunicadosPage", function() { return ComunicadosPage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _ionic_native_in_app_browser_ngx__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @ionic-native/in-app-browser/ngx */ "./node_modules/@ionic-native/in-app-browser/ngx/index.js");
/* harmony import */ var src_app_services_comunicados_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/app/services/comunicados.service */ "./src/app/services/comunicados.service.ts");




var ComunicadosPage = /** @class */ (function () {
    function ComunicadosPage(iab, comunicado) {
        this.iab = iab;
        this.comunicado = comunicado;
        this.cargarComunicados();
    }
    ComunicadosPage.prototype.abrirWeb = function (url, target) {
        this.iab.create(url, target);
    };
    ComunicadosPage.prototype.cargarComunicados = function () {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function () {
            var _a;
            return tslib__WEBPACK_IMPORTED_MODULE_0__["__generator"](this, function (_b) {
                switch (_b.label) {
                    case 0:
                        _a = this;
                        return [4 /*yield*/, this.comunicado.cargar_todos()];
                    case 1:
                        _a.comunicados = _b.sent();
                        return [2 /*return*/];
                }
            });
        });
    };
    ComunicadosPage.prototype.ngOnInit = function () {
    };
    ComunicadosPage = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-comunicados',
            template: __webpack_require__(/*! ./comunicados.page.html */ "./src/app/pages/comunicados/comunicados.page.html"),
            styles: [__webpack_require__(/*! ./comunicados.page.scss */ "./src/app/pages/comunicados/comunicados.page.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_ionic_native_in_app_browser_ngx__WEBPACK_IMPORTED_MODULE_2__["InAppBrowser"],
            src_app_services_comunicados_service__WEBPACK_IMPORTED_MODULE_3__["ComunicadosService"]])
    ], ComunicadosPage);
    return ComunicadosPage;
}());



/***/ }),

/***/ "./src/app/services/comunicados.service.ts":
/*!*************************************************!*\
  !*** ./src/app/services/comunicados.service.ts ***!
  \*************************************************/
/*! exports provided: ComunicadosService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ComunicadosService", function() { return ComunicadosService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _config_url_servicios__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../config/url.servicios */ "./src/app/config/url.servicios.ts");
/* harmony import */ var _ajustes_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./ajustes.service */ "./src/app/services/ajustes.service.ts");
/* harmony import */ var rxjs_add_operator_map__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! rxjs/add/operator/map */ "./node_modules/rxjs-compat/_esm5/add/operator/map.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");






var ComunicadosService = /** @class */ (function () {
    function ComunicadosService(http, _as) {
        this.http = http;
        this._as = _as;
    }
    ComunicadosService.prototype.cargar_todos = function () {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function () {
            var url, promesa;
            var _this = this;
            return tslib__WEBPACK_IMPORTED_MODULE_0__["__generator"](this, function (_a) {
                switch (_a.label) {
                    case 0:
                        url = _config_url_servicios__WEBPACK_IMPORTED_MODULE_2__["URL_SERVICIOS"] + "/comunicados.php";
                        return [4 /*yield*/, this.http.get(url)
                                .toPromise()
                                .then(function (data) {
                                console.log(data.comunicados);
                                _this.comunicados = data.comunicados;
                                return _this.comunicados;
                            })
                                .catch(function (error) {
                                _this._as.loading.dismiss();
                                return Promise.reject(error);
                            })];
                    case 1:
                        promesa = _a.sent();
                        return [2 /*return*/, promesa];
                }
            });
        });
    };
    ComunicadosService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
            providedIn: 'root'
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_common_http__WEBPACK_IMPORTED_MODULE_5__["HttpClient"],
            _ajustes_service__WEBPACK_IMPORTED_MODULE_3__["AjustesService"]])
    ], ComunicadosService);
    return ComunicadosService;
}());



/***/ })

}]);
//# sourceMappingURL=comunicados-comunicados-module.js.map