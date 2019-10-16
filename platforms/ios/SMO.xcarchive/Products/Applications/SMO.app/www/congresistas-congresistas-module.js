(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["congresistas-congresistas-module"],{

/***/ "./src/app/pages/congresistas/congresistas.module.ts":
/*!***********************************************************!*\
  !*** ./src/app/pages/congresistas/congresistas.module.ts ***!
  \***********************************************************/
/*! exports provided: CongresistasPageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CongresistasPageModule", function() { return CongresistasPageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");
/* harmony import */ var _congresistas_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./congresistas.page */ "./src/app/pages/congresistas/congresistas.page.ts");







var routes = [
    {
        path: '',
        component: _congresistas_page__WEBPACK_IMPORTED_MODULE_6__["CongresistasPage"]
    }
];
var CongresistasPageModule = /** @class */ (function () {
    function CongresistasPageModule() {
    }
    CongresistasPageModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            imports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
                _ionic_angular__WEBPACK_IMPORTED_MODULE_5__["IonicModule"],
                _angular_router__WEBPACK_IMPORTED_MODULE_4__["RouterModule"].forChild(routes)
            ],
            declarations: [_congresistas_page__WEBPACK_IMPORTED_MODULE_6__["CongresistasPage"]]
        })
    ], CongresistasPageModule);
    return CongresistasPageModule;
}());



/***/ }),

/***/ "./src/app/pages/congresistas/congresistas.page.html":
/*!***********************************************************!*\
  !*** ./src/app/pages/congresistas/congresistas.page.html ***!
  \***********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<ion-header>\n  <ion-toolbar color=\"primary\">\n    <ion-buttons slot=\"start\">\n      <ion-menu-button></ion-menu-button>\n      <ion-back-button color=\"light\" text=\"Atras\"></ion-back-button>\n    </ion-buttons>\n    <ion-title>Congresistas</ion-title>\n  </ion-toolbar>\n  <ion-toolbar color=\"primary\" class=\"buscadores\">\n    <ion-searchbar class=\"buscador\" debounce=\"550\" animated placeholder=\"Congresista...\" (ionChange)=\"buscar($event)\"\n      color=\"light\" showCancelButton cancelButtonText=\"OK\"></ion-searchbar>\n  </ion-toolbar>\n</ion-header>\n\n\n<ion-content>\n  <ion-refresher (ionRefresh)=\"recargar($event)\">\n    <ion-refresher-content></ion-refresher-content>\n  </ion-refresher>\n  <ion-list>\n    <ion-item *ngFor=\"let congresista of _cs.congresistas\" (click)=\"verDetalles(congresista.id)\" href=\"javascript:;\">\n      <ion-avatar slot=\"start\">\n        <img src=\"/assets/avatars/{{congresista.avatar}}\">\n      </ion-avatar>\n      <ion-label>\n        <h3>{{ congresista.nombre }} </h3>\n        <p>{{ congresista.apellidos }}</p>\n      </ion-label>\n    </ion-item>\n  </ion-list>\n  <ion-infinite-scroll  (ionInfinite)=\"siguiente_pagina($event)\">\n    <ion-infinite-scroll-content loadingText=\"Cargando mas información…\"></ion-infinite-scroll-content>\n  </ion-infinite-scroll>\n</ion-content>"

/***/ }),

/***/ "./src/app/pages/congresistas/congresistas.page.scss":
/*!***********************************************************!*\
  !*** ./src/app/pages/congresistas/congresistas.page.scss ***!
  \***********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3BhZ2VzL2NvbmdyZXNpc3Rhcy9jb25ncmVzaXN0YXMucGFnZS5zY3NzIn0= */"

/***/ }),

/***/ "./src/app/pages/congresistas/congresistas.page.ts":
/*!*********************************************************!*\
  !*** ./src/app/pages/congresistas/congresistas.page.ts ***!
  \*********************************************************/
/*! exports provided: CongresistasPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CongresistasPage", function() { return CongresistasPage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");
/* harmony import */ var src_app_services_congresistas_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/app/services/congresistas.service */ "./src/app/services/congresistas.service.ts");




var CongresistasPage = /** @class */ (function () {
    function CongresistasPage(modalCtrl, _cs, navCtrl) {
        this.modalCtrl = modalCtrl;
        this._cs = _cs;
        this.navCtrl = navCtrl;
        this.variable = "";
    }
    CongresistasPage.prototype.ngOnInit = function () {
        this._cs.pagina = 0;
        this._cs.congresistas = [];
        this._cs.cargar_todos();
    };
    CongresistasPage.prototype.verDetalles = function (id) {
        this.navCtrl.navigateForward("/tabs/principal/congresistas/congresista/" + id);
    };
    CongresistasPage.prototype.buscar = function (texto) {
        this.variable = texto.target.value;
        this._cs.buscar(this.variable);
    };
    CongresistasPage.prototype.siguiente_pagina = function (event) {
        this._cs.siguiente_pagina()
            .then(function () {
            event.target.complete();
            event.target.disabled = false;
        });
    };
    CongresistasPage.prototype.recargar = function (event) {
        this._cs.recargar(this.variable)
            .then(function () {
            event.target.complete();
            event.target.disabled = false;
        });
    };
    CongresistasPage = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-congresistas',
            template: __webpack_require__(/*! ./congresistas.page.html */ "./src/app/pages/congresistas/congresistas.page.html"),
            styles: [__webpack_require__(/*! ./congresistas.page.scss */ "./src/app/pages/congresistas/congresistas.page.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_ionic_angular__WEBPACK_IMPORTED_MODULE_2__["ModalController"],
            src_app_services_congresistas_service__WEBPACK_IMPORTED_MODULE_3__["CongresistasService"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["NavController"]])
    ], CongresistasPage);
    return CongresistasPage;
}());



/***/ })

}]);
//# sourceMappingURL=congresistas-congresistas-module.js.map