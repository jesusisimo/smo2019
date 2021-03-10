(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["actividad-actividad-module"],{

/***/ "./src/app/pages/actividad/actividad.module.ts":
/*!*****************************************************!*\
  !*** ./src/app/pages/actividad/actividad.module.ts ***!
  \*****************************************************/
/*! exports provided: ActividadPageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ActividadPageModule", function() { return ActividadPageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");
/* harmony import */ var _actividad_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./actividad.page */ "./src/app/pages/actividad/actividad.page.ts");







var routes = [
    {
        path: '',
        component: _actividad_page__WEBPACK_IMPORTED_MODULE_6__["ActividadPage"]
    }
];
var ActividadPageModule = /** @class */ (function () {
    function ActividadPageModule() {
    }
    ActividadPageModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            imports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
                _ionic_angular__WEBPACK_IMPORTED_MODULE_5__["IonicModule"],
                _angular_router__WEBPACK_IMPORTED_MODULE_4__["RouterModule"].forChild(routes)
            ],
            declarations: [_actividad_page__WEBPACK_IMPORTED_MODULE_6__["ActividadPage"]]
        })
    ], ActividadPageModule);
    return ActividadPageModule;
}());



/***/ }),

/***/ "./src/app/pages/actividad/actividad.page.html":
/*!*****************************************************!*\
  !*** ./src/app/pages/actividad/actividad.page.html ***!
  \*****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<ion-header>\n  <ion-toolbar color=\"primary\">\n    <ion-buttons slot=\"start\">\n      <ion-menu-button></ion-menu-button>\n      <ion-back-button color=\"light\" text=\"Atras\"></ion-back-button>\n    </ion-buttons>\n    <ion-title>Detalles</ion-title>\n    <ion-buttons slot=\"end\">\n      <ion-button color=\"light\" (click)=\"guardarFavorito(_as.actividad)\">\n        <ion-icon slot=\"icon-only\" color=\"{{_ds.is_favorito}}\" name=\"heart\"></ion-icon>\n      </ion-button>\n\n    </ion-buttons>\n  </ion-toolbar>\n</ion-header>\n\n\n<ion-content>\n\n  <ion-card>\n    <ion-card-header>\n      <ion-card-subtitle>\n        <ion-badge color=\"{{_as.actividad.color}}\"> {{_as.actividad.categoria}}</ion-badge>\n      </ion-card-subtitle>\n      <ion-card-title>{{_as.actividad.actividad}}</ion-card-title>\n\n    </ion-card-header>\n    \n\n    <ion-card-content>\n      <ion-segment [(ngModel)]=\"seccion\" color=\"primary\">\n        <ion-segment-button value=\"1\">Descripción\n        </ion-segment-button>\n        <ion-segment-button value=\"2\">Temario\n        </ion-segment-button>\n      </ion-segment>\n\n      <div [ngSwitch]=\"seccion\">\n        <ng-container>\n          <div *ngSwitchCase=\"1\">\n            <ion-chip outline>\n              <ion-icon name=\"clock\" color=\"primary\"></ion-icon>\n              <ion-label>{{_as.actividad.horario}}</ion-label>\n            </ion-chip>\n            <ion-chip outline color=\"danger\">\n              <ion-icon name=\"pin\" color=\"danger\"></ion-icon>\n              <ion-label>{{_as.actividad.salon}} - {{_as.actividad.piso}}</ion-label>\n            </ion-chip>\n            <br>\n            <br>\n            <p text-justify [innerHTML]=\"_as.actividad.descripcion\"></p>\n          </div>\n          <div *ngSwitchCase=\"2\">\n            <br>\n            <p color=\"dark\" text-justify [innerHTML]=\"_as.actividad.temario\"></p>\n          </div>\n        </ng-container>\n      </div>\n    </ion-card-content>\n  </ion-card>\n\n\n</ion-content>"

/***/ }),

/***/ "./src/app/pages/actividad/actividad.page.scss":
/*!*****************************************************!*\
  !*** ./src/app/pages/actividad/actividad.page.scss ***!
  \*****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".etiqueta {\n  font-size: 12px;\n  text-transform: none; }\n\nion-card {\n  margin: 5px; }\n\nion-card-title {\n  font-size: 22px; }\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9qY2lubm92YXRpb24vSkMgSW5ub3ZhdGlvbiBEcm9wYm94L0plc3XMgXMgQ3VldmFzL01pIE1hYyAoTWFjQm9vay1Qcm8tZGUtSkMtSW5ub3ZhdGlvbi5sb2NhbCkvRG9jdW1lbnRzL0dpdEh1Yi9zbW8yMDE5L3NyYy9hcHAvcGFnZXMvYWN0aXZpZGFkL2FjdGl2aWRhZC5wYWdlLnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQ0E7RUFDSSxlQUFlO0VBQ25CLG9CQUFvQixFQUFBOztBQUVwQjtFQUNJLFdBQVcsRUFBQTs7QUFFZjtFQUNJLGVBQWUsRUFBQSIsImZpbGUiOiJzcmMvYXBwL3BhZ2VzL2FjdGl2aWRhZC9hY3RpdmlkYWQucGFnZS5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiXG4uZXRpcXVldGF7XG4gICAgZm9udC1zaXplOiAxMnB4O1xudGV4dC10cmFuc2Zvcm06IG5vbmU7XG59XG5pb24tY2FyZHtcbiAgICBtYXJnaW46IDVweDtcbn1cbmlvbi1jYXJkLXRpdGxle1xuICAgIGZvbnQtc2l6ZTogMjJweDtcbn0iXX0= */"

/***/ }),

/***/ "./src/app/pages/actividad/actividad.page.ts":
/*!***************************************************!*\
  !*** ./src/app/pages/actividad/actividad.page.ts ***!
  \***************************************************/
/*! exports provided: ActividadPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ActividadPage", function() { return ActividadPage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var src_app_services_actividades_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/app/services/actividades.service */ "./src/app/services/actividades.service.ts");
/* harmony import */ var _services_datos_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../services/datos.service */ "./src/app/services/datos.service.ts");





var ActividadPage = /** @class */ (function () {
    function ActividadPage(activeRoute, _as, _ds) {
        this.activeRoute = activeRoute;
        this._as = _as;
        this._ds = _ds;
        this.id = null;
        this.seccion = "1";
    }
    ActividadPage.prototype.ngOnInit = function () {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function () {
            var _a;
            var _this = this;
            return tslib__WEBPACK_IMPORTED_MODULE_0__["__generator"](this, function (_b) {
                switch (_b.label) {
                    case 0:
                        _a = this;
                        return [4 /*yield*/, this.activeRoute.snapshot.paramMap.get('id')];
                    case 1:
                        _a.id = _b.sent();
                        return [4 /*yield*/, this._as.getDetalles(this.id).then(function (result) {
                                _this.esFavorito();
                            })];
                    case 2:
                        _b.sent();
                        return [2 /*return*/];
                }
            });
        });
    };
    ActividadPage.prototype.guardarFavorito = function (favorito) {
        this._ds.guardarFavorito(favorito);
    };
    ActividadPage.prototype.esFavorito = function () {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function () {
            return tslib__WEBPACK_IMPORTED_MODULE_0__["__generator"](this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this._ds.isFavorito(this.id)];
                    case 1:
                        _a.sent();
                        return [2 /*return*/];
                }
            });
        });
    };
    ActividadPage = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-actividad',
            template: __webpack_require__(/*! ./actividad.page.html */ "./src/app/pages/actividad/actividad.page.html"),
            styles: [__webpack_require__(/*! ./actividad.page.scss */ "./src/app/pages/actividad/actividad.page.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_2__["ActivatedRoute"],
            src_app_services_actividades_service__WEBPACK_IMPORTED_MODULE_3__["ActividadesService"],
            _services_datos_service__WEBPACK_IMPORTED_MODULE_4__["DatosService"]])
    ], ActividadPage);
    return ActividadPage;
}());



/***/ })

}]);
//# sourceMappingURL=actividad-actividad-module.js.map