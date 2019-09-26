(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["ponente-ponente-module"],{

/***/ "./src/app/pages/ponente/ponente.module.ts":
/*!*************************************************!*\
  !*** ./src/app/pages/ponente/ponente.module.ts ***!
  \*************************************************/
/*! exports provided: PonentePageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PonentePageModule", function() { return PonentePageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");
/* harmony import */ var _ponente_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./ponente.page */ "./src/app/pages/ponente/ponente.page.ts");







var routes = [
    {
        path: '',
        component: _ponente_page__WEBPACK_IMPORTED_MODULE_6__["PonentePage"]
    }
];
var PonentePageModule = /** @class */ (function () {
    function PonentePageModule() {
    }
    PonentePageModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            imports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
                _ionic_angular__WEBPACK_IMPORTED_MODULE_5__["IonicModule"],
                _angular_router__WEBPACK_IMPORTED_MODULE_4__["RouterModule"].forChild(routes)
            ],
            declarations: [_ponente_page__WEBPACK_IMPORTED_MODULE_6__["PonentePage"]]
        })
    ], PonentePageModule);
    return PonentePageModule;
}());



/***/ }),

/***/ "./src/app/pages/ponente/ponente.page.html":
/*!*************************************************!*\
  !*** ./src/app/pages/ponente/ponente.page.html ***!
  \*************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<ion-header>\n    <ion-toolbar color=\"primary\">\n      <ion-buttons slot=\"start\">\n        <ion-menu-button></ion-menu-button>\n        <ion-back-button color=\"light\" text=\"Atras\"></ion-back-button>\n      </ion-buttons>\n      <ion-title>Participaciones</ion-title>\n    </ion-toolbar>\n  </ion-header>\n  \n  \n  <ion-content>\n      <ion-list>\n          <ion-list-header>\n            Actividades en las que participa\n          </ion-list-header>\n          <ion-item *ngFor=\"let actividad of _as.actsPonente\" href=\"javascript:;\" (click)=\"verDetalles(actividad.id)\">\n            <ion-label style=\"white-space: normal;\">\n              <p>\n                  <ion-icon name=\"clock\" color=\"primary\"></ion-icon> {{actividad.horario}}\n                <!-- <ion-badge color=\"{{actividad.color}}\"> {{actividad.categoria}} </ion-badge> -->\n              </p>\n              <h2>{{actividad.actividad}}</h2>\n              <p>\n                 <ion-icon name=\"pin\"\n                  color=\"danger\"></ion-icon> {{actividad.salon}}\n              </p>\n            </ion-label>\n          </ion-item> \n        </ion-list>\n  \n  \n  </ion-content>"

/***/ }),

/***/ "./src/app/pages/ponente/ponente.page.scss":
/*!*************************************************!*\
  !*** ./src/app/pages/ponente/ponente.page.scss ***!
  \*************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3BhZ2VzL3BvbmVudGUvcG9uZW50ZS5wYWdlLnNjc3MifQ== */"

/***/ }),

/***/ "./src/app/pages/ponente/ponente.page.ts":
/*!***********************************************!*\
  !*** ./src/app/pages/ponente/ponente.page.ts ***!
  \***********************************************/
/*! exports provided: PonentePage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PonentePage", function() { return PonentePage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var src_app_services_actividades_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/services/actividades.service */ "./src/app/services/actividades.service.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");





var PonentePage = /** @class */ (function () {
    function PonentePage(_as, activeRoute, navCtrl) {
        this._as = _as;
        this.activeRoute = activeRoute;
        this.navCtrl = navCtrl;
        this.id = null;
        this.actividades = null;
    }
    PonentePage.prototype.ngOnInit = function () {
        this.id = this.activeRoute.snapshot.paramMap.get('id');
        this._as.actividadesPonente(this.id).then(function (result) {
        });
    };
    PonentePage.prototype.verDetalles = function (id) {
        this.navCtrl.navigateForward("/tabs/principal/programa/actividad/" + id);
    };
    PonentePage = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-ponente',
            template: __webpack_require__(/*! ./ponente.page.html */ "./src/app/pages/ponente/ponente.page.html"),
            styles: [__webpack_require__(/*! ./ponente.page.scss */ "./src/app/pages/ponente/ponente.page.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [src_app_services_actividades_service__WEBPACK_IMPORTED_MODULE_2__["ActividadesService"],
            _angular_router__WEBPACK_IMPORTED_MODULE_3__["ActivatedRoute"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["NavController"]])
    ], PonentePage);
    return PonentePage;
}());



/***/ })

}]);
//# sourceMappingURL=ponente-ponente-module.js.map