(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["congresista-congresista-module"],{

/***/ "./src/app/pages/congresista/congresista.module.ts":
/*!*********************************************************!*\
  !*** ./src/app/pages/congresista/congresista.module.ts ***!
  \*********************************************************/
/*! exports provided: CongresistaPageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CongresistaPageModule", function() { return CongresistaPageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");
/* harmony import */ var _congresista_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./congresista.page */ "./src/app/pages/congresista/congresista.page.ts");







var routes = [
    {
        path: '',
        component: _congresista_page__WEBPACK_IMPORTED_MODULE_6__["CongresistaPage"]
    }
];
var CongresistaPageModule = /** @class */ (function () {
    function CongresistaPageModule() {
    }
    CongresistaPageModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            imports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
                _ionic_angular__WEBPACK_IMPORTED_MODULE_5__["IonicModule"],
                _angular_router__WEBPACK_IMPORTED_MODULE_4__["RouterModule"].forChild(routes)
            ],
            declarations: [_congresista_page__WEBPACK_IMPORTED_MODULE_6__["CongresistaPage"]]
        })
    ], CongresistaPageModule);
    return CongresistaPageModule;
}());



/***/ }),

/***/ "./src/app/pages/congresista/congresista.page.html":
/*!*********************************************************!*\
  !*** ./src/app/pages/congresista/congresista.page.html ***!
  \*********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<ion-header>\n  <ion-toolbar color=\"primary\">\n    <ion-buttons slot=\"start\">\n      <ion-menu-button></ion-menu-button>\n      <ion-back-button color=\"light\" text=\"Atras\"></ion-back-button>\n    </ion-buttons>\n    <ion-title>Detalles</ion-title>\n  </ion-toolbar>\n</ion-header>\n\n<ion-content>\n\n  <ion-row class=\"top-20\">\n\n    <ion-col size=\"12\" text-center>\n      <img src=\"assets/avatars/{{ _cs.congresista.avatar }}\" class=\"img-avatar\">\n    </ion-col>\n\n  </ion-row>\n\n\n  <ion-row >\n    <ion-col size=\"4\">\n      <ion-item>\n          <ion-label>Nombre:</ion-label>\n      </ion-item>\n    </ion-col>\n    <ion-col size=\"8\">\n      <ion-item>\n        <label for=\"\">{{_cs.congresista.nombre}}</label>\n      </ion-item>\n    </ion-col>\n  </ion-row>\n  <ion-row>\n    <ion-col size=\"4\">\n      <ion-item>\n        <ion-label>Apellidos:</ion-label>\n      </ion-item>\n    </ion-col>\n    <ion-col size=\"8\">\n      <ion-item>\n        <label for=\"\">{{_cs.congresista.apellidos}}</label>\n      </ion-item>\n    </ion-col>\n  </ion-row>\n  <ion-row *ngIf=\"email_c\">\n    <ion-col size=\"4\">\n      <ion-item>\n        <ion-label>Email:</ion-label>\n      </ion-item>\n    </ion-col>\n    <ion-col size=\"8\">\n      <ion-item>\n        <label for=\"\">{{_cs.congresista.email}}</label>\n      </ion-item>\n    </ion-col>\n  </ion-row>\n  <ion-row *ngIf=\"telefono_c\">\n    <ion-col size=\"4\">\n      <ion-item>\n        <ion-label>Teléfono:</ion-label>\n      </ion-item>\n    </ion-col>\n    <ion-col size=\"8\">\n      <ion-item>\n        <label for=\"\">{{_cs.congresista.telefono}}</label>\n      </ion-item>\n    </ion-col>\n  </ion-row>\n  <ion-row *ngIf=\"institucion_c\">\n    <ion-col size=\"4\">\n      <ion-item>\n        <ion-label>Institución:</ion-label>\n      </ion-item>\n    </ion-col>\n    <ion-col size=\"8\">\n      <ion-item>\n        <label for=\"\">{{_cs.congresista.institucion}}</label>\n      </ion-item>\n    </ion-col>\n  </ion-row>\n\n\n</ion-content>"

/***/ }),

/***/ "./src/app/pages/congresista/congresista.page.scss":
/*!*********************************************************!*\
  !*** ./src/app/pages/congresista/congresista.page.scss ***!
  \*********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".mainSlide, .mainSlide ion-slide {\n  width: 100%;\n  height: 100%; }\n\nimg {\n  width: 120px; }\n\n.pick-avatar {\n  width: 80px;\n  opacity: 0.3; }\n\n.pick-avatar-seleccionado {\n  -webkit-transition: opacity 0.5s linear;\n  transition: opacity 0.5s linear;\n  opacity: 1 !important; }\n\n.leyenda {\n  font-size: 10px;\n  color: red; }\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9icmIvRG9jdW1lbnRzL0dpdEh1Yi9zbW8yMDE5L3NyYy9hcHAvcGFnZXMvY29uZ3Jlc2lzdGEvY29uZ3Jlc2lzdGEucGFnZS5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0ksV0FBVztFQUNYLFlBQVksRUFBQTs7QUFHaEI7RUFDSSxZQUFZLEVBQUE7O0FBR2hCO0VBQ0ksV0FBVztFQUNYLFlBQVksRUFBQTs7QUFHaEI7RUFDSSx1Q0FBK0I7RUFBL0IsK0JBQStCO0VBQy9CLHFCQUFxQixFQUFBOztBQUV6QjtFQUNJLGVBQWU7RUFDZixVQUFTLEVBQUEiLCJmaWxlIjoic3JjL2FwcC9wYWdlcy9jb25ncmVzaXN0YS9jb25ncmVzaXN0YS5wYWdlLnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIubWFpblNsaWRlLCAubWFpblNsaWRlIGlvbi1zbGlkZSB7XG4gICAgd2lkdGg6IDEwMCU7XG4gICAgaGVpZ2h0OiAxMDAlO1xufVxuXG5pbWcge1xuICAgIHdpZHRoOiAxMjBweDtcbn1cblxuLnBpY2stYXZhdGFyIHtcbiAgICB3aWR0aDogODBweDtcbiAgICBvcGFjaXR5OiAwLjM7XG59XG5cbi5waWNrLWF2YXRhci1zZWxlY2Npb25hZG8ge1xuICAgIHRyYW5zaXRpb246IG9wYWNpdHkgMC41cyBsaW5lYXI7XG4gICAgb3BhY2l0eTogMSAhaW1wb3J0YW50O1xufVxuLmxleWVuZGF7XG4gICAgZm9udC1zaXplOiAxMHB4O1xuICAgIGNvbG9yOnJlZDtcbn0iXX0= */"

/***/ }),

/***/ "./src/app/pages/congresista/congresista.page.ts":
/*!*******************************************************!*\
  !*** ./src/app/pages/congresista/congresista.page.ts ***!
  \*******************************************************/
/*! exports provided: CongresistaPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CongresistaPage", function() { return CongresistaPage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var src_app_services_congresistas_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/app/services/congresistas.service */ "./src/app/services/congresistas.service.ts");




var CongresistaPage = /** @class */ (function () {
    function CongresistaPage(activeRoute, _cs) {
        this.activeRoute = activeRoute;
        this._cs = _cs;
        this.id = null;
        this.congresista = null;
        this.email_c = false;
        this.telefono_c = false;
        this.institucion_c = false;
    }
    CongresistaPage.prototype.ngOnInit = function () {
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
                        return [4 /*yield*/, this._cs.getDetalles(this.id).then(function (result) {
                                console.log(_this._cs.congresista);
                                if (_this._cs.congresista.email_c == "1") {
                                    _this.email_c = true;
                                }
                                if (_this._cs.congresista.telefono_c == "1") {
                                    _this.telefono_c = true;
                                }
                                if (_this._cs.congresista.institucion_c == "1") {
                                    _this.institucion_c = true;
                                }
                            })];
                    case 2:
                        _b.sent();
                        return [2 /*return*/];
                }
            });
        });
    };
    CongresistaPage = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-congresista',
            template: __webpack_require__(/*! ./congresista.page.html */ "./src/app/pages/congresista/congresista.page.html"),
            styles: [__webpack_require__(/*! ./congresista.page.scss */ "./src/app/pages/congresista/congresista.page.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_2__["ActivatedRoute"],
            src_app_services_congresistas_service__WEBPACK_IMPORTED_MODULE_3__["CongresistasService"]])
    ], CongresistaPage);
    return CongresistaPage;
}());



/***/ })

}]);
//# sourceMappingURL=congresista-congresista-module.js.map