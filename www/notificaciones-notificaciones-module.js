(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["notificaciones-notificaciones-module"],{

/***/ "./src/app/pages/notificacion/notificacion.module.ts":
/*!***********************************************************!*\
  !*** ./src/app/pages/notificacion/notificacion.module.ts ***!
  \***********************************************************/
/*! exports provided: NotificacionPageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NotificacionPageModule", function() { return NotificacionPageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");
/* harmony import */ var _notificacion_page__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./notificacion.page */ "./src/app/pages/notificacion/notificacion.page.ts");






var NotificacionPageModule = /** @class */ (function () {
    function NotificacionPageModule() {
    }
    NotificacionPageModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            imports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
                _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonicModule"]
            ],
            declarations: [_notificacion_page__WEBPACK_IMPORTED_MODULE_5__["NotificacionPage"]]
        })
    ], NotificacionPageModule);
    return NotificacionPageModule;
}());



/***/ }),

/***/ "./src/app/pages/notificacion/notificacion.page.html":
/*!***********************************************************!*\
  !*** ./src/app/pages/notificacion/notificacion.page.html ***!
  \***********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<ion-header>\n    <ion-toolbar color=\"primary\">\n        <ion-title>Notificación</ion-title>\n        <ion-buttons slot=\"end\">\n          <ion-icon slot=\"icon-only\" (click)=\"salir()\" name=\"close\"></ion-icon>\n        </ion-buttons>\n      </ion-toolbar>\n</ion-header>\n\n\n\n\n<ion-content>\n    <ion-card>\n        <ion-card-header>\n          <ion-card-title>{{notificacion.titulo}}</ion-card-title>\n          <ion-card-subtitle>{{notificacion.time}}</ion-card-subtitle>\n        </ion-card-header>\n      \n        <ion-card-content>\n         {{notificacion.mensaje}}\n        </ion-card-content>\n      </ion-card>\n</ion-content>\n"

/***/ }),

/***/ "./src/app/pages/notificacion/notificacion.page.scss":
/*!***********************************************************!*\
  !*** ./src/app/pages/notificacion/notificacion.page.scss ***!
  \***********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3BhZ2VzL25vdGlmaWNhY2lvbi9ub3RpZmljYWNpb24ucGFnZS5zY3NzIn0= */"

/***/ }),

/***/ "./src/app/pages/notificacion/notificacion.page.ts":
/*!*********************************************************!*\
  !*** ./src/app/pages/notificacion/notificacion.page.ts ***!
  \*********************************************************/
/*! exports provided: NotificacionPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NotificacionPage", function() { return NotificacionPage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");



var NotificacionPage = /** @class */ (function () {
    function NotificacionPage(modalCtrl) {
        this.modalCtrl = modalCtrl;
    }
    NotificacionPage.prototype.ngOnInit = function () {
        console.log(this.notificacion);
    };
    NotificacionPage.prototype.salir = function () {
        this.modalCtrl.dismiss();
    };
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Object)
    ], NotificacionPage.prototype, "notificacion", void 0);
    NotificacionPage = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-notificacion',
            template: __webpack_require__(/*! ./notificacion.page.html */ "./src/app/pages/notificacion/notificacion.page.html"),
            styles: [__webpack_require__(/*! ./notificacion.page.scss */ "./src/app/pages/notificacion/notificacion.page.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_ionic_angular__WEBPACK_IMPORTED_MODULE_2__["ModalController"]])
    ], NotificacionPage);
    return NotificacionPage;
}());



/***/ }),

/***/ "./src/app/pages/notificaciones/notificaciones.module.ts":
/*!***************************************************************!*\
  !*** ./src/app/pages/notificaciones/notificaciones.module.ts ***!
  \***************************************************************/
/*! exports provided: NotificacionesPageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NotificacionesPageModule", function() { return NotificacionesPageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");
/* harmony import */ var _notificaciones_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./notificaciones.page */ "./src/app/pages/notificaciones/notificaciones.page.ts");
/* harmony import */ var _notificacion_notificacion_page__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../notificacion/notificacion.page */ "./src/app/pages/notificacion/notificacion.page.ts");
/* harmony import */ var _notificacion_notificacion_module__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../notificacion/notificacion.module */ "./src/app/pages/notificacion/notificacion.module.ts");









var routes = [
    {
        path: '',
        component: _notificaciones_page__WEBPACK_IMPORTED_MODULE_6__["NotificacionesPage"]
    }
];
var NotificacionesPageModule = /** @class */ (function () {
    function NotificacionesPageModule() {
    }
    NotificacionesPageModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            entryComponents: [
                _notificacion_notificacion_page__WEBPACK_IMPORTED_MODULE_7__["NotificacionPage"]
            ],
            imports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
                _ionic_angular__WEBPACK_IMPORTED_MODULE_5__["IonicModule"],
                _notificacion_notificacion_module__WEBPACK_IMPORTED_MODULE_8__["NotificacionPageModule"],
                _angular_router__WEBPACK_IMPORTED_MODULE_4__["RouterModule"].forChild(routes)
            ],
            declarations: [_notificaciones_page__WEBPACK_IMPORTED_MODULE_6__["NotificacionesPage"]]
        })
    ], NotificacionesPageModule);
    return NotificacionesPageModule;
}());



/***/ }),

/***/ "./src/app/pages/notificaciones/notificaciones.page.html":
/*!***************************************************************!*\
  !*** ./src/app/pages/notificaciones/notificaciones.page.html ***!
  \***************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<ion-header>\n  <ion-toolbar color=\"primary\">\n    <ion-title>Notificaciones</ion-title>\n    <!-- <ion-buttons slot=\"end\">\n      <ion-button  (click)=\"borrarMensajes()\">\n        <ion-icon slot=\"icon-only\"  name=\"trash\"></ion-icon>\n      </ion-button>\n    </ion-buttons> -->\n  </ion-toolbar>\n</ion-header>\n\n<ion-content>\n  <!-- List of Text Items -->\n  <ion-list>\n    <ion-item *ngFor=\"let notificacion of mensajes\" (click)=\"verNotificacion(notificacion); notificacion.visto=1;\" href=\"javascript:;\" [ngClass]=\"(!notificacion.visto) ? 'novisto' : ''\">\n      <ion-label>\n        <h2>{{notificacion.titulo}}</h2>\n        <h3>{{notificacion.mensaje}}</h3>\n        <p>{{notificacion.time}}</p>\n      </ion-label>\n    </ion-item>\n    <ion-item *ngIf=\"!existen\">\n      <ion-label>\n        <h3>No hay notificaciones</h3>\n\n      </ion-label>\n    </ion-item>\n    \n  </ion-list>\n<!-- \n  <ion-button color=\"danger\" (click)=\"verNotificacion('Notificacion','Mensaje');\">\n      <ion-icon slot=\"icon-only\" color=\"danger\" name=\"trash\"></ion-icon>\n    </ion-button> -->\n\n\n\n  \n</ion-content>"

/***/ }),

/***/ "./src/app/pages/notificaciones/notificaciones.page.scss":
/*!***************************************************************!*\
  !*** ./src/app/pages/notificaciones/notificaciones.page.scss ***!
  \***************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".novisto {\n  --ion-background-color: #e4e4e4; }\n\nh3 {\n  color: #373744; }\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9icmIvRG9jdW1lbnRzL0dpdEh1Yi9zbW8yMDE5L3NyYy9hcHAvcGFnZXMvbm90aWZpY2FjaW9uZXMvbm90aWZpY2FjaW9uZXMucGFnZS5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0ksK0JBQXVCLEVBQUE7O0FBRTNCO0VBQ0ksY0FBc0IsRUFBQSIsImZpbGUiOiJzcmMvYXBwL3BhZ2VzL25vdGlmaWNhY2lvbmVzL25vdGlmaWNhY2lvbmVzLnBhZ2Uuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIi5ub3Zpc3Rve1xuICAgIC0taW9uLWJhY2tncm91bmQtY29sb3I6ICNlNGU0ZTQ7XG5cdH1cbmgze1xuICAgIGNvbG9yOiByZ2IoNTUsIDU1LCA2OCk7XG59Il19 */"

/***/ }),

/***/ "./src/app/pages/notificaciones/notificaciones.page.ts":
/*!*************************************************************!*\
  !*** ./src/app/pages/notificaciones/notificaciones.page.ts ***!
  \*************************************************************/
/*! exports provided: NotificacionesPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NotificacionesPage", function() { return NotificacionesPage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var src_app_services_push_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/services/push.service */ "./src/app/services/push.service.ts");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");
/* harmony import */ var _notificacion_notificacion_page__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../notificacion/notificacion.page */ "./src/app/pages/notificacion/notificacion.page.ts");
/* harmony import */ var src_app_services_ajustes_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! src/app/services/ajustes.service */ "./src/app/services/ajustes.service.ts");






var NotificacionesPage = /** @class */ (function () {
    function NotificacionesPage(pushService, applicationRef, alertCtrl, modalCtrl, _as) {
        this.pushService = pushService;
        this.applicationRef = applicationRef;
        this.alertCtrl = alertCtrl;
        this.modalCtrl = modalCtrl;
        this._as = _as;
        this.msgs = [
            {
                title: 'Titulo de la push',
                body: 'Este es el body de la push',
                date: 'Jueves 3:30pm'
            }
        ];
        this.existen = false;
        // this.pushService.cargar_todos();
    }
    NotificacionesPage.prototype.ngOnInit = function () {
        var _this = this;
        this.pushService.pushListener.subscribe(function (notificacion) {
            _this.mensajes.unshift(notificacion);
            //this.applicationRef.tick();
            if (_this.mensajes.length > 0) {
                console.log("no hay");
                _this.existen = true;
            }
            else {
                _this.existen = false;
                console.log("si hay");
            }
        });
    };
    NotificacionesPage.prototype.ionViewWillEnter = function () {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function () {
            var _a;
            return tslib__WEBPACK_IMPORTED_MODULE_0__["__generator"](this, function (_b) {
                switch (_b.label) {
                    case 0:
                        this.mensajes = [];
                        _a = this;
                        return [4 /*yield*/, this.pushService.cargar_todos()];
                    case 1:
                        _a.mensajes = _b.sent();
                        if (this.mensajes.length > 0) {
                            console.log("si hay will");
                            this.existen = true;
                        }
                        else {
                            console.log("no hay will");
                            this.existen = false;
                        }
                        return [2 /*return*/];
                }
            });
        });
    };
    NotificacionesPage.prototype.borrarMensajes = function () {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function () {
            var alert;
            var _this = this;
            return tslib__WEBPACK_IMPORTED_MODULE_0__["__generator"](this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this.alertCtrl.create({
                            header: 'Borrar noticiaciones',
                            message: '¿Seguro que desea borrar todas las noticifaciones?',
                            buttons: [
                                {
                                    text: 'Cancelar',
                                    role: 'cancel',
                                    cssClass: 'secondary',
                                    handler: function (blah) {
                                        console.log('Confirm Cancel: blah');
                                    }
                                }, {
                                    text: 'Borrar',
                                    handler: function () {
                                        _this.mensajes = [];
                                        _this.existen = false;
                                        _this.pushService.borrarMensajes();
                                    }
                                }
                            ]
                        })];
                    case 1:
                        alert = _a.sent();
                        return [4 /*yield*/, alert.present()];
                    case 2:
                        _a.sent();
                        return [2 /*return*/];
                }
            });
        });
    };
    NotificacionesPage.prototype.verNotificacion = function (notificacion) {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function () {
            var modal;
            return tslib__WEBPACK_IMPORTED_MODULE_0__["__generator"](this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this.modalCtrl.create({
                            component: _notificacion_notificacion_page__WEBPACK_IMPORTED_MODULE_4__["NotificacionPage"],
                            componentProps: {
                                'notificacion': notificacion
                            }
                        })];
                    case 1:
                        modal = _a.sent();
                        if (this._as.sinleer > 0) {
                            this._as.sinleer = this._as.sinleer - 1;
                        }
                        this.pushService.marcar_visto(notificacion.id);
                        return [4 /*yield*/, modal.present()];
                    case 2: return [2 /*return*/, _a.sent()];
                }
            });
        });
    };
    NotificacionesPage = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-notificaciones',
            template: __webpack_require__(/*! ./notificaciones.page.html */ "./src/app/pages/notificaciones/notificaciones.page.html"),
            styles: [__webpack_require__(/*! ./notificaciones.page.scss */ "./src/app/pages/notificaciones/notificaciones.page.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [src_app_services_push_service__WEBPACK_IMPORTED_MODULE_2__["PushService"],
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ApplicationRef"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_3__["AlertController"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_3__["ModalController"],
            src_app_services_ajustes_service__WEBPACK_IMPORTED_MODULE_5__["AjustesService"]])
    ], NotificacionesPage);
    return NotificacionesPage;
}());



/***/ })

}]);
//# sourceMappingURL=notificaciones-notificaciones-module.js.map