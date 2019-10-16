(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["transm-lista-transm-lista-module"],{

/***/ "./src/app/pages/transm-lista/transm-lista.module.ts":
/*!***********************************************************!*\
  !*** ./src/app/pages/transm-lista/transm-lista.module.ts ***!
  \***********************************************************/
/*! exports provided: TransmListaPageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TransmListaPageModule", function() { return TransmListaPageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");
/* harmony import */ var _transm_lista_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./transm-lista.page */ "./src/app/pages/transm-lista/transm-lista.page.ts");







var routes = [
    {
        path: '',
        component: _transm_lista_page__WEBPACK_IMPORTED_MODULE_6__["TransmListaPage"]
    }
];
var TransmListaPageModule = /** @class */ (function () {
    function TransmListaPageModule() {
    }
    TransmListaPageModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            imports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
                _ionic_angular__WEBPACK_IMPORTED_MODULE_5__["IonicModule"],
                _angular_router__WEBPACK_IMPORTED_MODULE_4__["RouterModule"].forChild(routes)
            ],
            declarations: [_transm_lista_page__WEBPACK_IMPORTED_MODULE_6__["TransmListaPage"]]
        })
    ], TransmListaPageModule);
    return TransmListaPageModule;
}());



/***/ }),

/***/ "./src/app/pages/transm-lista/transm-lista.page.html":
/*!***********************************************************!*\
  !*** ./src/app/pages/transm-lista/transm-lista.page.html ***!
  \***********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<ion-header>\n    <ion-toolbar color=\"primary\">\n      <ion-buttons slot=\"start\">\n        <ion-menu-button></ion-menu-button>\n        <ion-back-button color=\"light\" text=\"Volver\"></ion-back-button>\n      </ion-buttons>\n      <ion-title>Transmisión en Vivo</ion-title>\n    </ion-toolbar>\n  </ion-header>\n\n<ion-content>\n\n  <ion-card class=\"centerCard\">\n    <iframe class=\"centerObjeto\" src=\"https://www.youtube.com/watch?v=TRZ08-9Cb_0\"> </iframe>\n  </ion-card>\n\n  <h3 class=\"center\">Próximas Transmisiones</h3><br>\n    <ion-item >\n        <ion-label class=\"ion-text-wrap\">     \n          <ion-row>\n            <ion-col size=\"3\">\n                \n                    <img class=\"perfil\" src=\"../../assets/img/col1.png\">\n                  \n            </ion-col>\n            <ion-col size=\"9\">               \n          <ion-text color=\"secondary\">\n              <ion-text color=\"primary\">         \n                  <h3>Transmisión Diplomado en Enfermería Quirúrgica oftálmica<</h3>\n                </ion-text>\n                <p>Septiembre 2019</p>\n          </ion-text>\n        </ion-col>\n      </ion-row>  \n        </ion-label>\n      </ion-item>\n      <ion-item (click)=\"casoImagen('casos')\">\n          <ion-label class=\"ion-text-wrap\">     \n            <ion-row>\n              <ion-col size=\"3\">\n                  \n                      <img class=\"perfil\" src=\"../../assets/img/col2.png\">\n                    \n              </ion-col>\n              <ion-col size=\"9\">               \n            <ion-text color=\"secondary\">\n                <ion-text color=\"primary\">         \n                    <h3>Transmisión Trabajos por la Discapacidad Visual</h3>\n                  </ion-text>\n                  <p>Septiembre 2019</p>\n            </ion-text>\n          </ion-col>\n        </ion-row>  \n          </ion-label>\n        </ion-item>\n      \n</ion-content>\n"

/***/ }),

/***/ "./src/app/pages/transm-lista/transm-lista.page.scss":
/*!***********************************************************!*\
  !*** ./src/app/pages/transm-lista/transm-lista.page.scss ***!
  \***********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".center {\n  text-align: center; }\n\n.centerCard {\n  padding: 0 1rem;\n  margin: 1rem; }\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9icmIvRG9jdW1lbnRzL0dpdEh1Yi9zbW8yMDE5L3NyYy9hcHAvcGFnZXMvdHJhbnNtLWxpc3RhL3RyYW5zbS1saXN0YS5wYWdlLnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDSSxrQkFBa0IsRUFBQTs7QUFJdEI7RUFDSSxlQUFlO0VBQ2pCLFlBQVksRUFBQSIsImZpbGUiOiJzcmMvYXBwL3BhZ2VzL3RyYW5zbS1saXN0YS90cmFuc20tbGlzdGEucGFnZS5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLmNlbnRlcntcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XG59XG5cblxuLmNlbnRlckNhcmR7XG4gICAgcGFkZGluZzogMCAxcmVtO1xuICBtYXJnaW46IDFyZW07XG59Il19 */"

/***/ }),

/***/ "./src/app/pages/transm-lista/transm-lista.page.ts":
/*!*********************************************************!*\
  !*** ./src/app/pages/transm-lista/transm-lista.page.ts ***!
  \*********************************************************/
/*! exports provided: TransmListaPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TransmListaPage", function() { return TransmListaPage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


var TransmListaPage = /** @class */ (function () {
    function TransmListaPage() {
    }
    TransmListaPage.prototype.ngOnInit = function () {
    };
    TransmListaPage = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-transm-lista',
            template: __webpack_require__(/*! ./transm-lista.page.html */ "./src/app/pages/transm-lista/transm-lista.page.html"),
            styles: [__webpack_require__(/*! ./transm-lista.page.scss */ "./src/app/pages/transm-lista/transm-lista.page.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
    ], TransmListaPage);
    return TransmListaPage;
}());



/***/ })

}]);
//# sourceMappingURL=transm-lista-transm-lista-module.js.map