(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["programa-programa-module"],{

/***/ "./src/app/pages/programa/programa.module.ts":
/*!***************************************************!*\
  !*** ./src/app/pages/programa/programa.module.ts ***!
  \***************************************************/
/*! exports provided: ProgramaPageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ProgramaPageModule", function() { return ProgramaPageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");
/* harmony import */ var _programa_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./programa.page */ "./src/app/pages/programa/programa.page.ts");







var routes = [
    {
        path: '',
        component: _programa_page__WEBPACK_IMPORTED_MODULE_6__["ProgramaPage"]
    }
];
var ProgramaPageModule = /** @class */ (function () {
    function ProgramaPageModule() {
    }
    ProgramaPageModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            imports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
                _ionic_angular__WEBPACK_IMPORTED_MODULE_5__["IonicModule"],
                _angular_router__WEBPACK_IMPORTED_MODULE_4__["RouterModule"].forChild(routes)
            ],
            declarations: [_programa_page__WEBPACK_IMPORTED_MODULE_6__["ProgramaPage"]]
        })
    ], ProgramaPageModule);
    return ProgramaPageModule;
}());



/***/ }),

/***/ "./src/app/pages/programa/programa.page.html":
/*!***************************************************!*\
  !*** ./src/app/pages/programa/programa.page.html ***!
  \***************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<ion-header>\n  <ion-toolbar color=\"primary\">\n    <ion-buttons slot=\"start\">\n      <ion-menu-button></ion-menu-button>\n      <ion-back-button color=\"light\" text=\"Atras\" defaultHref=\"/tabs/principal\"></ion-back-button>\n    </ion-buttons>\n    <ion-title>Programa general</ion-title>\n  </ion-toolbar>\n  <ion-toolbar color=\"primary\" class=\"buscadores\">\n    <ion-searchbar class=\"buscador\" debounce=\"550\" animated placeholder=\"Buscar actividad, tema, especialidad...\"\n      (ionChange)=\"buscar($event)\" color=\"light\" showCancelButton cancelButtonText=\"OK\"></ion-searchbar>\n    <ion-segment [(ngModel)]=\"_as.dia_actual\" color=\"light\">\n      <ion-segment-button value=\"25\">Sab/25\n      </ion-segment-button>\n      <ion-segment-button value=\"26\">Dom/26\n      </ion-segment-button>\n      <ion-segment-button value=\"27\">Lun/27\n      </ion-segment-button>\n      <ion-segment-button value=\"28\">Mar/28\n      </ion-segment-button>\n    </ion-segment>\n  </ion-toolbar>\n</ion-header>\n\n\n<ion-content>\n  <div [ngSwitch]=\"_as.dia_actual\">\n    <ng-container *ngFor=\"let dia of _as.dias\">\n      <div *ngSwitchCase=\"dia.clave_dia\">\n        <ion-list>\n          <ion-list-header>\n            {{ dia.dia }}\n          </ion-list-header>\n          <ion-item *ngFor=\"let actividad of dia.actividades\" href=\"javascript:;\" (click)=\"verDetalles(actividad.id)\">\n            <ion-label style=\"white-space: normal;\">\n              <p>\n                <!-- {{actividad.clave}} -->\n                  <ion-icon name=\"clock\" color=\"primary\"></ion-icon> {{actividad.horario}}\n                <ion-badge color=\"{{actividad.color}}\"> {{actividad.categoria}} </ion-badge>\n              </p>\n              <h2>{{actividad.actividad}}</h2>\n              <p>\n                 <ion-icon name=\"pin\"\n                  color=\"danger\"></ion-icon> {{actividad.salon}} - {{actividad.piso}}\n              </p>\n            </ion-label>\n          </ion-item>\n        </ion-list>\n      </div>\n    </ng-container>\n  </div>\n</ion-content>"

/***/ }),

/***/ "./src/app/pages/programa/programa.page.scss":
/*!***************************************************!*\
  !*** ./src/app/pages/programa/programa.page.scss ***!
  \***************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3BhZ2VzL3Byb2dyYW1hL3Byb2dyYW1hLnBhZ2Uuc2NzcyJ9 */"

/***/ }),

/***/ "./src/app/pages/programa/programa.page.ts":
/*!*************************************************!*\
  !*** ./src/app/pages/programa/programa.page.ts ***!
  \*************************************************/
/*! exports provided: ProgramaPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ProgramaPage", function() { return ProgramaPage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");
/* harmony import */ var src_app_services_actividades_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/app/services/actividades.service */ "./src/app/services/actividades.service.ts");
/* harmony import */ var _ionic_native_in_app_browser_ngx__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ionic-native/in-app-browser/ngx */ "./node_modules/@ionic-native/in-app-browser/ngx/index.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");






var ProgramaPage = /** @class */ (function () {
    function ProgramaPage(router, navCtrl, _as, iab) {
        this.router = router;
        this.navCtrl = navCtrl;
        this._as = _as;
        this.iab = iab;
        this.variable = "";
    }
    ProgramaPage.prototype.ngOnInit = function () {
        this._as.pagina = 0;
        this._as.dias = [];
        this._as.cargar_todos().then(function (result) { return console.log("Ok"); });
    };
    ProgramaPage.prototype.verDetalles = function (id) {
        this.navCtrl.navigateForward("/tabs/principal/programa/actividad/" + id);
    };
    ProgramaPage.prototype.buscar = function (texto) {
        this.variable = texto.target.value;
        this._as.buscar(this.variable);
    };
    ProgramaPage = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-programa',
            template: __webpack_require__(/*! ./programa.page.html */ "./src/app/pages/programa/programa.page.html"),
            styles: [__webpack_require__(/*! ./programa.page.scss */ "./src/app/pages/programa/programa.page.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_5__["Router"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["NavController"],
            src_app_services_actividades_service__WEBPACK_IMPORTED_MODULE_3__["ActividadesService"],
            _ionic_native_in_app_browser_ngx__WEBPACK_IMPORTED_MODULE_4__["InAppBrowser"]])
    ], ProgramaPage);
    return ProgramaPage;
}());



/***/ })

}]);
//# sourceMappingURL=programa-programa-module.js.map