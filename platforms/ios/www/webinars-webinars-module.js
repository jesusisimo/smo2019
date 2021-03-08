(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["webinars-webinars-module"],{

/***/ "./src/app/pages/webinars/webinars.module.ts":
/*!***************************************************!*\
  !*** ./src/app/pages/webinars/webinars.module.ts ***!
  \***************************************************/
/*! exports provided: WebinarsPageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "WebinarsPageModule", function() { return WebinarsPageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");
/* harmony import */ var _webinars_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./webinars.page */ "./src/app/pages/webinars/webinars.page.ts");







var routes = [
    {
        path: '',
        component: _webinars_page__WEBPACK_IMPORTED_MODULE_6__["WebinarsPage"]
    }
];
var WebinarsPageModule = /** @class */ (function () {
    function WebinarsPageModule() {
    }
    WebinarsPageModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            imports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
                _ionic_angular__WEBPACK_IMPORTED_MODULE_5__["IonicModule"],
                _angular_router__WEBPACK_IMPORTED_MODULE_4__["RouterModule"].forChild(routes)
            ],
            declarations: [_webinars_page__WEBPACK_IMPORTED_MODULE_6__["WebinarsPage"]]
        })
    ], WebinarsPageModule);
    return WebinarsPageModule;
}());



/***/ }),

/***/ "./src/app/pages/webinars/webinars.page.html":
/*!***************************************************!*\
  !*** ./src/app/pages/webinars/webinars.page.html ***!
  \***************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<ion-header>\n  <ion-toolbar color=\"primary\">\n    <ion-buttons slot=\"start\">\n      <ion-menu-button></ion-menu-button>\n      <ion-back-button color=\"light\" text=\"Volver\"></ion-back-button>\n    </ion-buttons>\n    <ion-title>Webinars</ion-title>\n  </ion-toolbar>\n</ion-header>\n\n<ion-content>\n  <ion-list>\n    <ion-item  *ngFor=\"let webinar of webinars\" (click)=\"abrirWeb( webinar.url,'_system')\" >\n        <ion-label class=\"ion-text-wrap\">     \n          <ion-row>\n            <ion-col size=\"4\">\n                \n                    <img class=\"logoSmall\" src=\"{{webinar.ruta_icono}}\">\n                 \n            </ion-col>\n            <ion-col size=\"8\">               \n          <ion-text color=\"secondary\">\n              <ion-text color=\"primary\">         \n                  <h3>{{webinar.titulo}}</h3>\n                  \n                </ion-text>\n\n          </ion-text>\n          <p>{{webinar.fecha}}</p>\n        </ion-col>\n      </ion-row>  \n      <p color=\"danger\">{{webinar.url}}</p>\n        </ion-label>\n      </ion-item>\n      </ion-list>\n\n\n\n<!--ion-card>\n  <img src=\"../../assets/img/col1.png\" class=\"logoSmall\">\n</ion-card>\n<ion-card>\n  <img src=\"../../assets/img/col2.png\" class=\"logoSmall\">\n</ion-card>\n<ion-card>\n  <img src=\"../../assets/img/col3.png\" class=\"logoSmall\">\n</ion-card-->\n</ion-content>\n"

/***/ }),

/***/ "./src/app/pages/webinars/webinars.page.scss":
/*!***************************************************!*\
  !*** ./src/app/pages/webinars/webinars.page.scss ***!
  \***************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3BhZ2VzL3dlYmluYXJzL3dlYmluYXJzLnBhZ2Uuc2NzcyJ9 */"

/***/ }),

/***/ "./src/app/pages/webinars/webinars.page.ts":
/*!*************************************************!*\
  !*** ./src/app/pages/webinars/webinars.page.ts ***!
  \*************************************************/
/*! exports provided: WebinarsPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "WebinarsPage", function() { return WebinarsPage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _ionic_native_in_app_browser_ngx__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @ionic-native/in-app-browser/ngx */ "./node_modules/@ionic-native/in-app-browser/ngx/index.js");
/* harmony import */ var src_app_services_webinars_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/app/services/webinars.service */ "./src/app/services/webinars.service.ts");




var WebinarsPage = /** @class */ (function () {
    function WebinarsPage(iab, webinar) {
        this.iab = iab;
        this.webinar = webinar;
        this.cargarWebinars();
    }
    WebinarsPage.prototype.abrirWeb = function (url, target) {
        this.iab.create(url, target);
    };
    WebinarsPage.prototype.cargarWebinars = function () {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function () {
            var _a;
            return tslib__WEBPACK_IMPORTED_MODULE_0__["__generator"](this, function (_b) {
                switch (_b.label) {
                    case 0:
                        _a = this;
                        return [4 /*yield*/, this.webinar.cargar_todos()];
                    case 1:
                        _a.webinars = _b.sent();
                        return [2 /*return*/];
                }
            });
        });
    };
    WebinarsPage.prototype.ngOnInit = function () {
    };
    WebinarsPage = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-webinars',
            template: __webpack_require__(/*! ./webinars.page.html */ "./src/app/pages/webinars/webinars.page.html"),
            styles: [__webpack_require__(/*! ./webinars.page.scss */ "./src/app/pages/webinars/webinars.page.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_ionic_native_in_app_browser_ngx__WEBPACK_IMPORTED_MODULE_2__["InAppBrowser"],
            src_app_services_webinars_service__WEBPACK_IMPORTED_MODULE_3__["WebinarsService"]])
    ], WebinarsPage);
    return WebinarsPage;
}());



/***/ }),

/***/ "./src/app/services/webinars.service.ts":
/*!**********************************************!*\
  !*** ./src/app/services/webinars.service.ts ***!
  \**********************************************/
/*! exports provided: WebinarsService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "WebinarsService", function() { return WebinarsService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _config_url_servicios__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../config/url.servicios */ "./src/app/config/url.servicios.ts");
/* harmony import */ var _ajustes_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./ajustes.service */ "./src/app/services/ajustes.service.ts");
/* harmony import */ var rxjs_add_operator_map__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! rxjs/add/operator/map */ "./node_modules/rxjs-compat/_esm5/add/operator/map.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");






var WebinarsService = /** @class */ (function () {
    function WebinarsService(http, _as) {
        this.http = http;
        this._as = _as;
    }
    WebinarsService.prototype.cargar_todos = function () {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function () {
            var url, promesa;
            var _this = this;
            return tslib__WEBPACK_IMPORTED_MODULE_0__["__generator"](this, function (_a) {
                switch (_a.label) {
                    case 0:
                        url = _config_url_servicios__WEBPACK_IMPORTED_MODULE_2__["URL_SERVICIOS"] + "/webinars.php";
                        return [4 /*yield*/, this.http.get(url)
                                .toPromise()
                                .then(function (data) {
                                console.log(data.webinars);
                                _this.webinars = data.webinars;
                                return _this.webinars;
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
    WebinarsService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
            providedIn: 'root'
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_common_http__WEBPACK_IMPORTED_MODULE_5__["HttpClient"],
            _ajustes_service__WEBPACK_IMPORTED_MODULE_3__["AjustesService"]])
    ], WebinarsService);
    return WebinarsService;
}());



/***/ })

}]);
//# sourceMappingURL=webinars-webinars-module.js.map