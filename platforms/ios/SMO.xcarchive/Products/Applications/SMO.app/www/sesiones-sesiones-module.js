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

module.exports = "<ion-header>\n    <ion-toolbar color=\"primary\">\n      <ion-buttons slot=\"start\">\n        <ion-menu-button></ion-menu-button>\n        <ion-back-button color=\"light\" text=\"Volver\"></ion-back-button>\n      </ion-buttons>\n      <ion-title>Sesiones</ion-title>\n    </ion-toolbar>\n  </ion-header>\n  \n  <ion-content>\n      <ion-item>\n          <ion-label class=\"ion-text-wrap\">     \n            <ion-row>\n              <ion-col size=\"4\">\n                  <ion-avatar>\n                      <img class=\"logoSmall\" src=\"../../assets/img/oculoplastica.png\">\n                    </ion-avatar>\n              </ion-col>\n              <ion-col size=\"8\">               \n            <ion-text color=\"secondary\">\n                <ion-text color=\"primary\">         \n                    <h3>Asociación Mexicana de cirugía de orbita, parpados y vías lagrimales</h3>\n                  </ion-text>\n            </ion-text>\n            <p>27 de julio 8:30 am.</p>\n          </ion-col>\n        </ion-row>  \n          </ion-label>\n        </ion-item>\n\n  </ion-content>\n  "

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


var SesionesPage = /** @class */ (function () {
    function SesionesPage() {
    }
    SesionesPage.prototype.ngOnInit = function () {
    };
    SesionesPage = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-sesiones',
            template: __webpack_require__(/*! ./sesiones.page.html */ "./src/app/pages/sesiones/sesiones.page.html"),
            styles: [__webpack_require__(/*! ./sesiones.page.scss */ "./src/app/pages/sesiones/sesiones.page.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
    ], SesionesPage);
    return SesionesPage;
}());



/***/ })

}]);
//# sourceMappingURL=sesiones-sesiones-module.js.map