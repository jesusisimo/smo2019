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

module.exports = "<ion-header>\n    <ion-toolbar color=\"primary\">\n      <ion-buttons slot=\"start\">\n        <ion-menu-button></ion-menu-button>\n        <ion-back-button color=\"light\" text=\"Volver\"></ion-back-button>\n      </ion-buttons>\n      <ion-title>Transmisión en Vivo</ion-title>\n    </ion-toolbar>\n  </ion-header>\n\n<ion-content>\n  <ion-card *ngIf=\"url!=''\">\n    <img src=\"{{icono}}\" />\n    <ion-card-header class=\"ion-text-center\">\n      <ion-card-subtitle>{{fecha}}</ion-card-subtitle>\n      <ion-text color=\"primary\">\n        <h4>{{tema}}</h4>\n      </ion-text>\n    </ion-card-header>\n    <section class=\"full-width\" (click)=\"abrirWeb(url,'_system')\" >\n      <ion-button expand=\"full\" color=\"primary\">Ir a la transmisión</ion-button>\n    </section>\n  </ion-card>\n\n  <h3 class=\"center\">Próximas Transmisiones</h3><br>\n  <ion-list>\n    <ion-item *ngFor=\"let transmision of transmisiones\" >\n        <ion-label class=\"ion-text-wrap\">     \n          <ion-row>\n            <ion-col size=\"3\">\n                \n                    <img class=\"perfil\" src=\"{{transmision.ruta_img}}\">\n                  \n            </ion-col>\n            <ion-col size=\"9\">               \n          <ion-text color=\"secondary\">\n              <ion-text color=\"primary\">         \n                  <h3>{{transmision.titulo}}</h3>\n                </ion-text>\n                <p>{{transmision.fecha}}</p>\n          </ion-text>\n        </ion-col>\n      </ion-row>  \n        </ion-label>\n      </ion-item>\n    </ion-list>\n\n      \n</ion-content>\n"

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
/* harmony import */ var src_app_services_transmision_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/services/transmision.service */ "./src/app/services/transmision.service.ts");
/* harmony import */ var _ionic_native_in_app_browser_ngx__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @ionic-native/in-app-browser/ngx */ "./node_modules/@ionic-native/in-app-browser/ngx/index.js");




var TransmListaPage = /** @class */ (function () {
    function TransmListaPage(tr, iab) {
        this.tr = tr;
        this.iab = iab;
        this.url = "";
        this.icono = "";
        this.tema = "";
        this.fecha = "";
        this.cargarSesiones();
    }
    TransmListaPage.prototype.ngOnInit = function () {
    };
    TransmListaPage.prototype.cargarSesiones = function () {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function () {
            var _a;
            return tslib__WEBPACK_IMPORTED_MODULE_0__["__generator"](this, function (_b) {
                switch (_b.label) {
                    case 0:
                        _a = this;
                        return [4 /*yield*/, this.tr.cargar_transmisiones()];
                    case 1:
                        _a.transmisiones = _b.sent();
                        this.url = this.tr.url_video;
                        this.icono = this.tr.icono;
                        this.tema = this.tr.tema;
                        this.fecha = this.tr.fecha;
                        console.log(this.url, this.icono);
                        return [2 /*return*/];
                }
            });
        });
    };
    TransmListaPage.prototype.abrirWeb = function (url, target) {
        this.iab.create(url, target);
    };
    TransmListaPage = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-transm-lista',
            template: __webpack_require__(/*! ./transm-lista.page.html */ "./src/app/pages/transm-lista/transm-lista.page.html"),
            styles: [__webpack_require__(/*! ./transm-lista.page.scss */ "./src/app/pages/transm-lista/transm-lista.page.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [src_app_services_transmision_service__WEBPACK_IMPORTED_MODULE_2__["TransmisionService"],
            _ionic_native_in_app_browser_ngx__WEBPACK_IMPORTED_MODULE_3__["InAppBrowser"]])
    ], TransmListaPage);
    return TransmListaPage;
}());



/***/ }),

/***/ "./src/app/services/transmision.service.ts":
/*!*************************************************!*\
  !*** ./src/app/services/transmision.service.ts ***!
  \*************************************************/
/*! exports provided: TransmisionService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TransmisionService", function() { return TransmisionService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _config_url_servicios__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../config/url.servicios */ "./src/app/config/url.servicios.ts");
/* harmony import */ var _ajustes_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./ajustes.service */ "./src/app/services/ajustes.service.ts");
/* harmony import */ var rxjs_add_operator_map__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! rxjs/add/operator/map */ "./node_modules/rxjs-compat/_esm5/add/operator/map.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");






var TransmisionService = /** @class */ (function () {
    function TransmisionService(tr, http, _as) {
        this.tr = tr;
        this.http = http;
        this._as = _as;
    }
    TransmisionService.prototype.cargar_transmisiones = function () {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function () {
            var url, promesa;
            var _this = this;
            return tslib__WEBPACK_IMPORTED_MODULE_0__["__generator"](this, function (_a) {
                switch (_a.label) {
                    case 0:
                        url = _config_url_servicios__WEBPACK_IMPORTED_MODULE_2__["URL_SERVICIOS"] + "/transmision.php";
                        return [4 /*yield*/, this.http.get(url)
                                .toPromise()
                                .then(function (data) {
                                _this.url_video = data.url;
                                _this.icono = data.icono;
                                _this.tema = data.tema;
                                _this.fecha = data.fecha;
                                _this.transmisiones = data.transmision;
                                return _this.transmisiones;
                            })
                                .catch(function (error) {
                                _this._as.loading.dismiss();
                                return Promise.reject(error);
                            })];
                    case 1:
                        promesa = _a.sent();
                        return [2 /*return*/, promesa];
                }
            });
        });
    };
    TransmisionService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
            providedIn: 'root'
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [TransmisionService,
            _angular_common_http__WEBPACK_IMPORTED_MODULE_5__["HttpClient"],
            _ajustes_service__WEBPACK_IMPORTED_MODULE_3__["AjustesService"]])
    ], TransmisionService);
    return TransmisionService;
}());



/***/ })

}]);
//# sourceMappingURL=transm-lista-transm-lista-module.js.map