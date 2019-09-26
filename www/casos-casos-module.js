(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["casos-casos-module"],{

/***/ "./src/app/pages/casos/casos.module.ts":
/*!*********************************************!*\
  !*** ./src/app/pages/casos/casos.module.ts ***!
  \*********************************************/
/*! exports provided: CasosPageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CasosPageModule", function() { return CasosPageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");
/* harmony import */ var _casos_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./casos.page */ "./src/app/pages/casos/casos.page.ts");







var routes = [
    {
        path: '',
        component: _casos_page__WEBPACK_IMPORTED_MODULE_6__["CasosPage"]
    }
];
var CasosPageModule = /** @class */ (function () {
    function CasosPageModule() {
    }
    CasosPageModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            imports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
                _ionic_angular__WEBPACK_IMPORTED_MODULE_5__["IonicModule"],
                _angular_router__WEBPACK_IMPORTED_MODULE_4__["RouterModule"].forChild(routes)
            ],
            declarations: [_casos_page__WEBPACK_IMPORTED_MODULE_6__["CasosPage"]]
        })
    ], CasosPageModule);
    return CasosPageModule;
}());



/***/ }),

/***/ "./src/app/pages/casos/casos.page.html":
/*!*********************************************!*\
  !*** ./src/app/pages/casos/casos.page.html ***!
  \*********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<ion-header>\n    <ion-toolbar color=\"primary\">\n      <ion-buttons slot=\"start\">\n        <ion-menu-button></ion-menu-button>\n        <ion-back-button color=\"light\" text=\"Volver\"></ion-back-button>\n      </ion-buttons>\n      <ion-title>Casos Clínicos</ion-title>\n    </ion-toolbar>\n  </ion-header>\n  \n  <ion-content>\n  <ion-card>\n    <img src=\"../../assets/img/col1.png\" class=\"logoSmall\">\n  </ion-card>\n  <ion-card>\n    <img src=\"../../assets/img/col2.png\" class=\"logoSmall\">\n  </ion-card>\n  <ion-card>\n    <img src=\"../../assets/img/col3.png\" class=\"logoSmall\">\n  </ion-card>\n  </ion-content>\n  "

/***/ }),

/***/ "./src/app/pages/casos/casos.page.scss":
/*!*********************************************!*\
  !*** ./src/app/pages/casos/casos.page.scss ***!
  \*********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3BhZ2VzL2Nhc29zL2Nhc29zLnBhZ2Uuc2NzcyJ9 */"

/***/ }),

/***/ "./src/app/pages/casos/casos.page.ts":
/*!*******************************************!*\
  !*** ./src/app/pages/casos/casos.page.ts ***!
  \*******************************************/
/*! exports provided: CasosPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CasosPage", function() { return CasosPage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


var CasosPage = /** @class */ (function () {
    function CasosPage() {
    }
    CasosPage.prototype.ngOnInit = function () {
    };
    CasosPage = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-casos',
            template: __webpack_require__(/*! ./casos.page.html */ "./src/app/pages/casos/casos.page.html"),
            styles: [__webpack_require__(/*! ./casos.page.scss */ "./src/app/pages/casos/casos.page.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
    ], CasosPage);
    return CasosPage;
}());



/***/ })

}]);
//# sourceMappingURL=casos-casos-module.js.map