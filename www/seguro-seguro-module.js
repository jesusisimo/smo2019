(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["seguro-seguro-module"],{

/***/ "./src/app/pages/seguro/seguro.module.ts":
/*!***********************************************!*\
  !*** ./src/app/pages/seguro/seguro.module.ts ***!
  \***********************************************/
/*! exports provided: SeguroPageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SeguroPageModule", function() { return SeguroPageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");
/* harmony import */ var _seguro_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./seguro.page */ "./src/app/pages/seguro/seguro.page.ts");







var routes = [
    {
        path: '',
        component: _seguro_page__WEBPACK_IMPORTED_MODULE_6__["SeguroPage"]
    }
];
var SeguroPageModule = /** @class */ (function () {
    function SeguroPageModule() {
    }
    SeguroPageModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            imports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
                _ionic_angular__WEBPACK_IMPORTED_MODULE_5__["IonicModule"],
                _angular_router__WEBPACK_IMPORTED_MODULE_4__["RouterModule"].forChild(routes)
            ],
            declarations: [_seguro_page__WEBPACK_IMPORTED_MODULE_6__["SeguroPage"]]
        })
    ], SeguroPageModule);
    return SeguroPageModule;
}());



/***/ }),

/***/ "./src/app/pages/seguro/seguro.page.html":
/*!***********************************************!*\
  !*** ./src/app/pages/seguro/seguro.page.html ***!
  \***********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<ion-header>\n  <ion-toolbar color=\"primary\">\n    <ion-buttons slot=\"start\">\n      <ion-menu-button></ion-menu-button>\n      <ion-back-button color=\"light\" text=\"Volver\"></ion-back-button>\n    </ion-buttons>\n    <ion-title>Actualización de datos</ion-title>\n  </ion-toolbar>\n</ion-header>\n\n<ion-content>\n    <ion-card>\n      <ion-card-header>\n        <ion-card-title class=\"ion-text-center\" color=\"primary\">Actualización Datos Seguro de Vida        </ion-card-title>\n      </ion-card-header>\n      <img   src=\"../../assets/seguro.jpg\" (click)=\"abrirWeb('https://www.asegurados.com.mx/smo/','_system')\" >\n      <ion-item color=\"primary\" (click)=\"abrirWeb('https://www.asegurados.com.mx/smo/','_system')\">\n        <ion-buttons expand=\"full\" class=\"text-center\">\n        <p>https://www.asegurados.com.mx/smo/</p>\n      </ion-buttons>\n      </ion-item>\n      </ion-card>\n</ion-content>\n"

/***/ }),

/***/ "./src/app/pages/seguro/seguro.page.scss":
/*!***********************************************!*\
  !*** ./src/app/pages/seguro/seguro.page.scss ***!
  \***********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3BhZ2VzL3NlZ3Vyby9zZWd1cm8ucGFnZS5zY3NzIn0= */"

/***/ }),

/***/ "./src/app/pages/seguro/seguro.page.ts":
/*!*********************************************!*\
  !*** ./src/app/pages/seguro/seguro.page.ts ***!
  \*********************************************/
/*! exports provided: SeguroPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SeguroPage", function() { return SeguroPage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _ionic_native_in_app_browser_ngx__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @ionic-native/in-app-browser/ngx */ "./node_modules/@ionic-native/in-app-browser/ngx/index.js");



var SeguroPage = /** @class */ (function () {
    function SeguroPage(iab) {
        this.iab = iab;
    }
    SeguroPage.prototype.ngOnInit = function () {
    };
    SeguroPage.prototype.abrirWeb = function (url, target) {
        this.iab.create(url, target);
    };
    SeguroPage = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-seguro',
            template: __webpack_require__(/*! ./seguro.page.html */ "./src/app/pages/seguro/seguro.page.html"),
            styles: [__webpack_require__(/*! ./seguro.page.scss */ "./src/app/pages/seguro/seguro.page.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_ionic_native_in_app_browser_ngx__WEBPACK_IMPORTED_MODULE_2__["InAppBrowser"]])
    ], SeguroPage);
    return SeguroPage;
}());



/***/ })

}]);
//# sourceMappingURL=seguro-seguro-module.js.map