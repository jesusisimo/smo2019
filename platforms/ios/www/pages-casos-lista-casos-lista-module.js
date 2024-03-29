(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["pages-casos-lista-casos-lista-module"],{

/***/ "./src/app/pages/pages/casos-lista/casos-lista.module.ts":
/*!***************************************************************!*\
  !*** ./src/app/pages/pages/casos-lista/casos-lista.module.ts ***!
  \***************************************************************/
/*! exports provided: CasosListaPageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CasosListaPageModule", function() { return CasosListaPageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");
/* harmony import */ var _casos_lista_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./casos-lista.page */ "./src/app/pages/pages/casos-lista/casos-lista.page.ts");







var routes = [
    {
        path: '',
        component: _casos_lista_page__WEBPACK_IMPORTED_MODULE_6__["CasosListaPage"]
    }
];
var CasosListaPageModule = /** @class */ (function () {
    function CasosListaPageModule() {
    }
    CasosListaPageModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            imports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
                _ionic_angular__WEBPACK_IMPORTED_MODULE_5__["IonicModule"],
                _angular_router__WEBPACK_IMPORTED_MODULE_4__["RouterModule"].forChild(routes)
            ],
            declarations: [_casos_lista_page__WEBPACK_IMPORTED_MODULE_6__["CasosListaPage"]]
        })
    ], CasosListaPageModule);
    return CasosListaPageModule;
}());



/***/ }),

/***/ "./src/app/pages/pages/casos-lista/casos-lista.page.html":
/*!***************************************************************!*\
  !*** ./src/app/pages/pages/casos-lista/casos-lista.page.html ***!
  \***************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n<ion-header>\n  <ion-toolbar color=\"primary\">\n      <ion-buttons slot=\"start\">\n          <ion-menu-button></ion-menu-button>\n          <ion-back-button color=\"light\" text=\"Volver\"></ion-back-button>\n        </ion-buttons>\n    <ion-title>Casos Clínicos</ion-title>\n  </ion-toolbar>\n</ion-header>\n\n<ion-content>\n        <ion-list>\n  <ion-item (click)=\"casoImagen(caso.id)\" *ngFor=\"let caso of casos\">\n      <ion-label class=\"ion-text-wrap\">     \n        <ion-row>\n          <ion-col size=\"3\">\n              <ion-avatar>\n                  <img class=\"perfil\" src=\"https://wsbrb-services.com/appsmo/img/avatar-no-img.png\">\n                </ion-avatar>\n          </ion-col>\n          <ion-col size=\"8\">               \n        <ion-text color=\"secondary\">\n            <ion-text color=\"primary\">         \n                <h3>{{caso.titulo}}</h3>\n              </ion-text>\n              <p>{{caso.autor}}</p>\n        </ion-text>\n        <p>{{caso.fecha}}</p>\n      </ion-col>\n      <ion-col size=\"1\">\n        <ion-icon name=\"photos\" *ngIf=\"caso.arch_ext=='.jpg' || caso.arch_ext=='.png' || caso.arch_ext=='.bmp' \"></ion-icon>\n        <ion-icon name=\"document\" *ngIf=\"caso.arch_ext=='.pdf' || caso.arch_ext=='.doc'  || caso.arch_ext=='.docx' \"></ion-icon>\n      </ion-col>\n    </ion-row>  \n      </ion-label>\n    </ion-item>\n</ion-list>\n\n \n</ion-content>\n"

/***/ }),

/***/ "./src/app/pages/pages/casos-lista/casos-lista.page.scss":
/*!***************************************************************!*\
  !*** ./src/app/pages/pages/casos-lista/casos-lista.page.scss ***!
  \***************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "ion-icon {\n  color: #09095ec4; }\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9qY2lubm92YXRpb24vSkMgSW5ub3ZhdGlvbiBEcm9wYm94L0plc3XMgXMgQ3VldmFzL01pIE1hYyAoTWFjQm9vay1Qcm8tZGUtSkMtSW5ub3ZhdGlvbi5sb2NhbCkvRG9jdW1lbnRzL0dpdEh1Yi9zbW8yMDE5L3NyYy9hcHAvcGFnZXMvcGFnZXMvY2Fzb3MtbGlzdGEvY2Fzb3MtbGlzdGEucGFnZS5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0ksZ0JBQWdCLEVBQUEiLCJmaWxlIjoic3JjL2FwcC9wYWdlcy9wYWdlcy9jYXNvcy1saXN0YS9jYXNvcy1saXN0YS5wYWdlLnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyJpb24taWNvbntcbiAgICBjb2xvcjogIzA5MDk1ZWM0O1xufSJdfQ== */"

/***/ }),

/***/ "./src/app/pages/pages/casos-lista/casos-lista.page.ts":
/*!*************************************************************!*\
  !*** ./src/app/pages/pages/casos-lista/casos-lista.page.ts ***!
  \*************************************************************/
/*! exports provided: CasosListaPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CasosListaPage", function() { return CasosListaPage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var src_app_services_usuario_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/services/usuario.service */ "./src/app/services/usuario.service.ts");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");
/* harmony import */ var src_app_services_casos_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! src/app/services/casos.service */ "./src/app/services/casos.service.ts");





var CasosListaPage = /** @class */ (function () {
    function CasosListaPage(navCtrl, _us, _cs) {
        this.navCtrl = navCtrl;
        this._us = _us;
        this._cs = _cs;
        this.usuario = {};
        this.cargarCasos();
    }
    CasosListaPage.prototype.ngOnInit = function () {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function () {
            var _a;
            return tslib__WEBPACK_IMPORTED_MODULE_0__["__generator"](this, function (_b) {
                switch (_b.label) {
                    case 0:
                        _a = this;
                        return [4 /*yield*/, this._us.getUsuario()];
                    case 1:
                        _a.usuario = _b.sent();
                        console.log(this.usuario);
                        return [2 /*return*/];
                }
            });
        });
    };
    CasosListaPage.prototype.casoImagen = function (id) {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function () {
            return tslib__WEBPACK_IMPORTED_MODULE_0__["__generator"](this, function (_a) {
                this.navCtrl.navigateForward("/tabs/principal/casos/" + id);
                return [2 /*return*/];
            });
        });
    };
    CasosListaPage.prototype.cargarCasos = function () {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function () {
            var _a;
            return tslib__WEBPACK_IMPORTED_MODULE_0__["__generator"](this, function (_b) {
                switch (_b.label) {
                    case 0:
                        _a = this;
                        return [4 /*yield*/, this._cs.cargar_todos()];
                    case 1:
                        _a.casos = _b.sent();
                        return [2 /*return*/];
                }
            });
        });
    };
    CasosListaPage = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-casos-lista',
            template: __webpack_require__(/*! ./casos-lista.page.html */ "./src/app/pages/pages/casos-lista/casos-lista.page.html"),
            styles: [__webpack_require__(/*! ./casos-lista.page.scss */ "./src/app/pages/pages/casos-lista/casos-lista.page.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_ionic_angular__WEBPACK_IMPORTED_MODULE_3__["NavController"],
            src_app_services_usuario_service__WEBPACK_IMPORTED_MODULE_2__["UsuarioService"],
            src_app_services_casos_service__WEBPACK_IMPORTED_MODULE_4__["CasosService"]])
    ], CasosListaPage);
    return CasosListaPage;
}());



/***/ })

}]);
//# sourceMappingURL=pages-casos-lista-casos-lista-module.js.map