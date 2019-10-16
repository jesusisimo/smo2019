(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["sesiones-sesiones-module"],{

/***/ "./src/app/pages/sesiones/sesiones.module.ts":
/*!***************************************************!*\
  !*** ./src/app/pages/sesiones/sesiones.module.ts ***!
  \***************************************************/
/*! exports provided: SesionesPageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SesionesPageModule", function() { return SesionesPageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");
/* harmony import */ var _sesiones_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./sesiones.page */ "./src/app/pages/sesiones/sesiones.page.ts");







var routes = [
    {
        path: '',
        component: _sesiones_page__WEBPACK_IMPORTED_MODULE_6__["SesionesPage"]
    }
];
var SesionesPageModule = /** @class */ (function () {
    function SesionesPageModule() {
    }
    SesionesPageModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            imports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
                _ionic_angular__WEBPACK_IMPORTED_MODULE_5__["IonicModule"],
                _angular_router__WEBPACK_IMPORTED_MODULE_4__["RouterModule"].forChild(routes)
            ],
            declarations: [_sesiones_page__WEBPACK_IMPORTED_MODULE_6__["SesionesPage"]]
        })
    ], SesionesPageModule);
    return SesionesPageModule;
}());



/***/ }),

/***/ "./src/app/pages/sesiones/sesiones.page.html":
/*!***************************************************!*\
  !*** ./src/app/pages/sesiones/sesiones.page.html ***!
  \***************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<ion-header>\n    <ion-toolbar color=\"primary\">\n      <ion-buttons slot=\"start\">\n        <ion-menu-button></ion-menu-button>\n        <ion-back-button color=\"light\" text=\"Volver\"></ion-back-button>\n      </ion-buttons>\n      <ion-title>Sesiones</ion-title>\n    </ion-toolbar>\n  </ion-header>\n  \n  <ion-content>\n    <ion-list>\n      <ion-item *ngFor=\"let sesion of sesiones\" (click)=\"abrirWeb( sesion.url,'_system')\" >\n          <ion-label class=\"ion-text-wrap\">     \n            <ion-row>\n              <ion-col size=\"4\">\n                  <ion-avatar>\n                      <img class=\"logoSmall\" src=\"{{sesion.ruta_ico}}\">\n                    </ion-avatar>\n              </ion-col>\n              <ion-col size=\"8\">               \n            <ion-text color=\"secondary\">\n                <ion-text color=\"primary\">         \n                    <h3>{{sesion.titulo}} - {{sesion.tema}}</h3>\n                  </ion-text>\n            </ion-text>\n            <p>{{sesion.fecha}}</p>\n          </ion-col>\n        </ion-row>  \n          </ion-label>\n        </ion-item>\n      </ion-list>\n  </ion-content>\n  "

/***/ }),

/***/ "./src/app/pages/sesiones/sesiones.page.scss":
/*!***************************************************!*\
  !*** ./src/app/pages/sesiones/sesiones.page.scss ***!
  \***************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3BhZ2VzL3Nlc2lvbmVzL3Nlc2lvbmVzLnBhZ2Uuc2NzcyJ9 */"

/***/ }),

/***/ "./src/app/pages/sesiones/sesiones.page.ts":
/*!*************************************************!*\
  !*** ./src/app/pages/sesiones/sesiones.page.ts ***!
  \*************************************************/
/*! exports provided: SesionesPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SesionesPage", function() { return SesionesPage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var src_app_services_sesiones_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/services/sesiones.service */ "./src/app/services/sesiones.service.ts");
/* harmony import */ var _ionic_native_in_app_browser_ngx__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @ionic-native/in-app-browser/ngx */ "./node_modules/@ionic-native/in-app-browser/ngx/index.js");




var SesionesPage = /** @class */ (function () {
    function SesionesPage(sesion, iab) {
        this.sesion = sesion;
        this.iab = iab;
        this.cargarSesiones();
    }
    SesionesPage.prototype.cargarSesiones = function () {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function () {
            var _a;
            return tslib__WEBPACK_IMPORTED_MODULE_0__["__generator"](this, function (_b) {
                switch (_b.label) {
                    case 0:
                        _a = this;
                        return [4 /*yield*/, this.sesion.cargar_todos()];
                    case 1:
                        _a.sesiones = _b.sent();
                        return [2 /*return*/];
                }
            });
        });
    };
    SesionesPage.prototype.ngOnInit = function () {
    };
    SesionesPage.prototype.abrirWeb = function (url, target) {
        this.iab.create(url, target);
    };
    SesionesPage = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-sesiones',
            template: __webpack_require__(/*! ./sesiones.page.html */ "./src/app/pages/sesiones/sesiones.page.html"),
            styles: [__webpack_require__(/*! ./sesiones.page.scss */ "./src/app/pages/sesiones/sesiones.page.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [src_app_services_sesiones_service__WEBPACK_IMPORTED_MODULE_2__["SesionesService"],
            _ionic_native_in_app_browser_ngx__WEBPACK_IMPORTED_MODULE_3__["InAppBrowser"]])
    ], SesionesPage);
    return SesionesPage;
}());



/***/ }),

/***/ "./src/app/services/sesiones.service.ts":
/*!**********************************************!*\
  !*** ./src/app/services/sesiones.service.ts ***!
  \**********************************************/
/*! exports provided: SesionesService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SesionesService", function() { return SesionesService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _config_url_servicios__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../config/url.servicios */ "./src/app/config/url.servicios.ts");
/* harmony import */ var _ajustes_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./ajustes.service */ "./src/app/services/ajustes.service.ts");
/* harmony import */ var rxjs_add_operator_map__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! rxjs/add/operator/map */ "./node_modules/rxjs-compat/_esm5/add/operator/map.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");






var SesionesService = /** @class */ (function () {
    function SesionesService(http, _as) {
        this.http = http;
        this._as = _as;
    }
    SesionesService.prototype.cargar_todos = function () {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function () {
            var url, promesa;
            var _this = this;
            return tslib__WEBPACK_IMPORTED_MODULE_0__["__generator"](this, function (_a) {
                switch (_a.label) {
                    case 0:
                        url = _config_url_servicios__WEBPACK_IMPORTED_MODULE_2__["URL_SERVICIOS"] + "/sesiones.php";
                        return [4 /*yield*/, this.http.get(url)
                                .toPromise()
                                .then(function (data) {
                                console.log(data.sesiones);
                                _this.sesiones = data.sesiones;
                                return _this.sesiones;
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
    SesionesService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
            providedIn: 'root'
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_common_http__WEBPACK_IMPORTED_MODULE_5__["HttpClient"],
            _ajustes_service__WEBPACK_IMPORTED_MODULE_3__["AjustesService"]])
    ], SesionesService);
    return SesionesService;
}());



/***/ })

}]);
//# sourceMappingURL=sesiones-sesiones-module.js.map