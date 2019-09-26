(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["agenda-agenda-module"],{

/***/ "./src/app/pages/agenda/agenda.module.ts":
/*!***********************************************!*\
  !*** ./src/app/pages/agenda/agenda.module.ts ***!
  \***********************************************/
/*! exports provided: AgendaPageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AgendaPageModule", function() { return AgendaPageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");
/* harmony import */ var _agenda_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./agenda.page */ "./src/app/pages/agenda/agenda.page.ts");







var routes = [
    {
        path: '',
        component: _agenda_page__WEBPACK_IMPORTED_MODULE_6__["AgendaPage"]
    }
];
var AgendaPageModule = /** @class */ (function () {
    function AgendaPageModule() {
    }
    AgendaPageModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            imports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
                _ionic_angular__WEBPACK_IMPORTED_MODULE_5__["IonicModule"],
                _angular_router__WEBPACK_IMPORTED_MODULE_4__["RouterModule"].forChild(routes)
            ],
            declarations: [_agenda_page__WEBPACK_IMPORTED_MODULE_6__["AgendaPage"]]
        })
    ], AgendaPageModule);
    return AgendaPageModule;
}());



/***/ }),

/***/ "./src/app/pages/agenda/agenda.page.html":
/*!***********************************************!*\
  !*** ./src/app/pages/agenda/agenda.page.html ***!
  \***********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<ion-header>\n    <ion-toolbar color=\"primary\">\n      <ion-buttons slot=\"start\">\n        <ion-menu-button></ion-menu-button>\n        <ion-back-button color=\"light\" text=\"Atras\"></ion-back-button>\n      </ion-buttons>\n      <ion-title>Mi agenda</ion-title>\n    </ion-toolbar>\n  </ion-header>\n  \n  \n  <ion-content>\n  \n      <ion-list>\n          <ion-list-header>\n            Actividades marcadas como favoritos\n          </ion-list-header>\n          <ion-item *ngFor=\"let actividad of favoritos\" href=\"javascript:;\" (click)=\"verDetalles(actividad.id)\">\n            <ion-label style=\"white-space: normal;\">\n              <p>\n                <!-- {{actividad.clave}} -->\n                  <ion-icon name=\"clock\" color=\"primary\"></ion-icon> {{actividad.horario}}\n                <ion-badge color=\"{{actividad.color}}\"> {{actividad.categoria}} </ion-badge>\n              </p>\n              <h2>{{actividad.actividad}}</h2>\n              <p>\n                 <ion-icon name=\"pin\"\n                  color=\"danger\"></ion-icon> {{actividad.salon}} - {{actividad.piso}}\n              </p>\n            </ion-label>\n          </ion-item>\n        </ion-list>\n  \n  \n  </ion-content>"

/***/ }),

/***/ "./src/app/pages/agenda/agenda.page.scss":
/*!***********************************************!*\
  !*** ./src/app/pages/agenda/agenda.page.scss ***!
  \***********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3BhZ2VzL2FnZW5kYS9hZ2VuZGEucGFnZS5zY3NzIn0= */"

/***/ }),

/***/ "./src/app/pages/agenda/agenda.page.ts":
/*!*********************************************!*\
  !*** ./src/app/pages/agenda/agenda.page.ts ***!
  \*********************************************/
/*! exports provided: AgendaPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AgendaPage", function() { return AgendaPage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");
/* harmony import */ var _services_datos_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../services/datos.service */ "./src/app/services/datos.service.ts");




var AgendaPage = /** @class */ (function () {
    function AgendaPage(_ds, navCtrl) {
        this._ds = _ds;
        this.navCtrl = navCtrl;
        this.favoritos = [];
    }
    AgendaPage.prototype.ngOnInit = function () {
        this.getFavoritos();
    };
    AgendaPage.prototype.getFavoritos = function () {
        var _this = this;
        var promise = this._ds.getFavoritos()
            .then(function (data) {
            _this.favoritos = _this._ds.favoritos;
            return data;
        });
    };
    AgendaPage.prototype.verDetalles = function (id) {
        this.navCtrl.navigateForward("/tabs/principal/programa/actividad/" + id);
    };
    AgendaPage.prototype.ionViewWillEnter = function () {
        this.getFavoritos();
    };
    AgendaPage = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-agenda',
            template: __webpack_require__(/*! ./agenda.page.html */ "./src/app/pages/agenda/agenda.page.html"),
            styles: [__webpack_require__(/*! ./agenda.page.scss */ "./src/app/pages/agenda/agenda.page.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_services_datos_service__WEBPACK_IMPORTED_MODULE_3__["DatosService"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["NavController"]])
    ], AgendaPage);
    return AgendaPage;
}());



/***/ })

}]);
//# sourceMappingURL=agenda-agenda-module.js.map