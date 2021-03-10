(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["contacto-contacto-module"],{

/***/ "./src/app/pages/contacto/contacto.module.ts":
/*!***************************************************!*\
  !*** ./src/app/pages/contacto/contacto.module.ts ***!
  \***************************************************/
/*! exports provided: ContactoPageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ContactoPageModule", function() { return ContactoPageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");
/* harmony import */ var _contacto_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./contacto.page */ "./src/app/pages/contacto/contacto.page.ts");







var routes = [
    {
        path: '',
        component: _contacto_page__WEBPACK_IMPORTED_MODULE_6__["ContactoPage"]
    }
];
var ContactoPageModule = /** @class */ (function () {
    function ContactoPageModule() {
    }
    ContactoPageModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            imports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
                _ionic_angular__WEBPACK_IMPORTED_MODULE_5__["IonicModule"],
                _angular_router__WEBPACK_IMPORTED_MODULE_4__["RouterModule"].forChild(routes)
            ],
            declarations: [_contacto_page__WEBPACK_IMPORTED_MODULE_6__["ContactoPage"]]
        })
    ], ContactoPageModule);
    return ContactoPageModule;
}());



/***/ }),

/***/ "./src/app/pages/contacto/contacto.page.html":
/*!***************************************************!*\
  !*** ./src/app/pages/contacto/contacto.page.html ***!
  \***************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<ion-header>\n    <ion-toolbar color=\"primary\">\n      <ion-buttons slot=\"start\">\n        <ion-menu-button></ion-menu-button>\n        <ion-back-button color=\"light\" text=\"Volver\"></ion-back-button>\n      </ion-buttons>\n      <ion-title>Contacto</ion-title>\n    </ion-toolbar>\n  </ion-header>\n  \n  \n  \n\n<ion-content class=\"background\">\n  <ion-card color=\"primary\">\n    <ion-card-header>\n      <ion-card-title color=\"primary\" >Sociedad Mexicana de Oftalmología A.C.</ion-card-title>\n    </ion-card-header>\n  \n    <ion-card-content>\n      Boston 99, <br>\n      Col. Nochebuena, <br>\n      CDMX C.P. 03720, <br>\n      Telefonos:(55) 5563-9393, 5563-7812, 5598-3827 y 5598-5372, 5611-1343 <br>\n      contacto@smo.org.mx\n    </ion-card-content>\n  </ion-card>\n\n \n          <h2>Formulario de contácto</h2>\n          <div>\n            <ion-row>\n              <ion-col>\n                <ion-input clearInput type=\"text\" placeholder=\"Nombre:\" [(ngModel)]=\"nombre\" class=\"input\" padding-horizontal clear-input=\"true\"></ion-input>\n              </ion-col>\n            </ion-row>\n            <ion-row>\n              <ion-col>\n                <ion-input clearInput type=\"number\" placeholder=\"Teléfono\" [(ngModel)]=\"telefono\" class=\"input\" padding-horizontal clear-input=\"true\"></ion-input>\n              </ion-col>\n            </ion-row>\n            <ion-row>\n              <ion-col>\n                <ion-input clearInput type=\"email\" placeholder=\"Correo Electrónico:\" [(ngModel)]=\"email\" class=\"input\" padding-horizontal clear-input=\"true\"></ion-input>\n              </ion-col>\n            </ion-row>\n            <ion-row>\n              <ion-col>\n                \n                <ion-textarea clearInput type=\"text\" placeholder=\"Comentarios:\" [(ngModel)]=\"comentario\" class=\"input\" padding-horizontal clear-input=\"true\"></ion-textarea>\n              </ion-col>\n            </ion-row>\n   \n      <ion-button (click)=\"enviarMensaje()\">Enviar</ion-button>\n      <img src=\"../../assets/img/logo_smo_blanco.png\" class=\"logoSmall\">\n    </div>\n    <br>\n        <br>\n</ion-content>\n"

/***/ }),

/***/ "./src/app/pages/contacto/contacto.page.scss":
/*!***************************************************!*\
  !*** ./src/app/pages/contacto/contacto.page.scss ***!
  \***************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "ion-content.background {\n  --background: url('background.jpg') 0 0/100% 100% no-repeat; }\n\n.iconBig {\n  size: 30px;\n  padding: 40px; }\n\nh2 {\n  color: #ffffff;\n  text-align: center; }\n\nion-item {\n  border-radius: 11px 11px 11px 11px;\n  -moz-border-radius: 11px 11px 11px 11px;\n  -webkit-border-radius: 11px 11px 11px 11px;\n  border: 0px solid #000000; }\n\ndiv {\n  padding: 20px; }\n\n.input {\n  background-color: #f0f0f0;\n  border: 1px solid #a2a2a2;\n  border-radius: 9px;\n  font-size: .9em !important; }\n\nion-button {\n  text-align: center; }\n\n.logoSmall {\n  background-color: #00000000;\n  size: 4em; }\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9qY2lubm92YXRpb24vSkMgSW5ub3ZhdGlvbiBEcm9wYm94L0plc3XMgXMgQ3VldmFzL01pIE1hYyAoTWFjQm9vay1Qcm8tZGUtSkMtSW5ub3ZhdGlvbi5sb2NhbCkvRG9jdW1lbnRzL0dpdEh1Yi9zbW8yMDE5L3NyYy9hcHAvcGFnZXMvY29udGFjdG8vY29udGFjdG8ucGFnZS5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0ksMkRBQWEsRUFBQTs7QUFHakI7RUFDSSxVQUFVO0VBQ1YsYUFBYSxFQUFBOztBQUdqQjtFQUNJLGNBQWM7RUFDZCxrQkFBa0IsRUFBQTs7QUFHdEI7RUFDSSxrQ0FBa0M7RUFDbEMsdUNBQXVDO0VBQ3ZDLDBDQUEwQztFQUMxQyx5QkFBeUIsRUFBQTs7QUFHN0I7RUFDSSxhQUFhLEVBQUE7O0FBR2pCO0VBQ0kseUJBQW9DO0VBQ3BDLHlCQUF5QjtFQUN6QixrQkFBa0I7RUFDbEIsMEJBQTBCLEVBQUE7O0FBRzlCO0VBQ0ksa0JBQWtCLEVBQUE7O0FBR3RCO0VBQ0ksMkJBQTJCO0VBQzNCLFNBQVMsRUFBQSIsImZpbGUiOiJzcmMvYXBwL3BhZ2VzL2NvbnRhY3RvL2NvbnRhY3RvLnBhZ2Uuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbImlvbi1jb250ZW50LmJhY2tncm91bmR7XG4gICAgLS1iYWNrZ3JvdW5kOiB1cmwoLi4vLi4vLi4vYXNzZXRzL2ltZy9iYWNrZ3JvdW5kLmpwZykgMCAwLzEwMCUgMTAwJSBuby1yZXBlYXQ7XG59XG5cbi5pY29uQmlne1xuICAgIHNpemU6IDMwcHg7XG4gICAgcGFkZGluZzogNDBweDtcbn1cblxuaDJ7XG4gICAgY29sb3I6ICNmZmZmZmY7XG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xufVxuXG5pb24taXRlbXtcbiAgICBib3JkZXItcmFkaXVzOiAxMXB4IDExcHggMTFweCAxMXB4O1xuICAgIC1tb3otYm9yZGVyLXJhZGl1czogMTFweCAxMXB4IDExcHggMTFweDtcbiAgICAtd2Via2l0LWJvcmRlci1yYWRpdXM6IDExcHggMTFweCAxMXB4IDExcHg7XG4gICAgYm9yZGVyOiAwcHggc29saWQgIzAwMDAwMDtcbn1cblxuZGl2e1xuICAgIHBhZGRpbmc6IDIwcHg7XG59XG5cbi5pbnB1dCB7XG4gICAgYmFja2dyb3VuZC1jb2xvcjogcmdiKDI0MCwgMjQwLCAyNDApO1xuICAgIGJvcmRlcjogMXB4IHNvbGlkICNhMmEyYTI7XG4gICAgYm9yZGVyLXJhZGl1czogOXB4O1xuICAgIGZvbnQtc2l6ZTogLjllbSAhaW1wb3J0YW50O1xufVxuXG5pb24tYnV0dG9ue1xuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcbn1cblxuLmxvZ29TbWFsbHtcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjMDAwMDAwMDA7XG4gICAgc2l6ZTogNGVtO1xufSJdfQ== */"

/***/ }),

/***/ "./src/app/pages/contacto/contacto.page.ts":
/*!*************************************************!*\
  !*** ./src/app/pages/contacto/contacto.page.ts ***!
  \*************************************************/
/*! exports provided: ContactoPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ContactoPage", function() { return ContactoPage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var src_app_services_ajustes_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/services/ajustes.service */ "./src/app/services/ajustes.service.ts");
/* harmony import */ var src_app_services_contacto_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/app/services/contacto.service */ "./src/app/services/contacto.service.ts");




var ContactoPage = /** @class */ (function () {
    function ContactoPage(_as, _cs) {
        this._as = _as;
        this._cs = _cs;
        this.nombre = "";
        this.email = "";
        this.telefono = "";
        this.comentario = "";
    }
    ContactoPage.prototype.ngOnInit = function () {
    };
    ContactoPage.prototype.enviarMensaje = function () {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function () {
            var respuesta;
            return tslib__WEBPACK_IMPORTED_MODULE_0__["__generator"](this, function (_a) {
                switch (_a.label) {
                    case 0:
                        if (!(this.comentario != "" && this.email != "" && this.nombre != "")) return [3 /*break*/, 2];
                        return [4 /*yield*/, this._cs.sendMensaje(this.email, this.nombre, this.comentario, this.telefono)];
                    case 1:
                        respuesta = _a.sent();
                        this.comentario = "";
                        this.email = "";
                        this.telefono = "";
                        this.nombre = "";
                        return [3 /*break*/, 3];
                    case 2:
                        this._as.presentAlert("Por favor complete el formulario");
                        _a.label = 3;
                    case 3: return [2 /*return*/];
                }
            });
        });
    };
    ContactoPage = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-contacto',
            template: __webpack_require__(/*! ./contacto.page.html */ "./src/app/pages/contacto/contacto.page.html"),
            styles: [__webpack_require__(/*! ./contacto.page.scss */ "./src/app/pages/contacto/contacto.page.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [src_app_services_ajustes_service__WEBPACK_IMPORTED_MODULE_2__["AjustesService"],
            src_app_services_contacto_service__WEBPACK_IMPORTED_MODULE_3__["ContactoService"]])
    ], ContactoPage);
    return ContactoPage;
}());



/***/ }),

/***/ "./src/app/services/contacto.service.ts":
/*!**********************************************!*\
  !*** ./src/app/services/contacto.service.ts ***!
  \**********************************************/
/*! exports provided: ContactoService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ContactoService", function() { return ContactoService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _config_url_servicios__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../config/url.servicios */ "./src/app/config/url.servicios.ts");
/* harmony import */ var _ajustes_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./ajustes.service */ "./src/app/services/ajustes.service.ts");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");





var ContactoService = /** @class */ (function () {
    function ContactoService(_as, http) {
        this._as = _as;
        this.http = http;
    }
    ContactoService.prototype.sendMensaje = function (email, nombre, comentario, telefono) {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function () {
            var _this = this;
            return tslib__WEBPACK_IMPORTED_MODULE_0__["__generator"](this, function (_a) {
                return [2 /*return*/, new Promise(function (resolve) {
                        var url = _config_url_servicios__WEBPACK_IMPORTED_MODULE_2__["URL_SERVICIOS"] + "/formpost.php";
                        _this.http.post(url, { 'email': email, 'nombre': nombre, 'telefono': telefono, 'comentario': comentario })
                            .subscribe(function (resp) {
                            if (!resp['error']) {
                                resolve(true);
                                _this._as.presentAlert("Mensaje enviado correctamente");
                            }
                            else {
                                resolve(false);
                                _this._as.presentAlert("No se pudo enviar el mensaje");
                            }
                        });
                    })];
            });
        });
    };
    ContactoService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
            providedIn: 'root'
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_ajustes_service__WEBPACK_IMPORTED_MODULE_3__["AjustesService"],
            _angular_common_http__WEBPACK_IMPORTED_MODULE_4__["HttpClient"]])
    ], ContactoService);
    return ContactoService;
}());



/***/ })

}]);
//# sourceMappingURL=contacto-contacto-module.js.map