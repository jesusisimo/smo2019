(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["buscador-buscador-module"],{

/***/ "./src/app/pages/buscador/buscador.module.ts":
/*!***************************************************!*\
  !*** ./src/app/pages/buscador/buscador.module.ts ***!
  \***************************************************/
/*! exports provided: BuscadorPageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "BuscadorPageModule", function() { return BuscadorPageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");
/* harmony import */ var _buscador_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./buscador.page */ "./src/app/pages/buscador/buscador.page.ts");







var routes = [
    {
        path: '',
        component: _buscador_page__WEBPACK_IMPORTED_MODULE_6__["BuscadorPage"]
    }
];
var BuscadorPageModule = /** @class */ (function () {
    function BuscadorPageModule() {
    }
    BuscadorPageModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            imports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
                _ionic_angular__WEBPACK_IMPORTED_MODULE_5__["IonicModule"],
                _angular_router__WEBPACK_IMPORTED_MODULE_4__["RouterModule"].forChild(routes)
            ],
            declarations: [_buscador_page__WEBPACK_IMPORTED_MODULE_6__["BuscadorPage"]]
        })
    ], BuscadorPageModule);
    return BuscadorPageModule;
}());



/***/ }),

/***/ "./src/app/pages/buscador/buscador.page.html":
/*!***************************************************!*\
  !*** ./src/app/pages/buscador/buscador.page.html ***!
  \***************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<ion-header>\n  <ion-toolbar color=\"primary\">\n    <ion-buttons slot=\"start\">\n      <ion-menu-button></ion-menu-button>\n      <ion-back-button color=\"light\" text=\"Atras\"></ion-back-button>\n    </ion-buttons>\n    <ion-title>Buscador</ion-title>\n  </ion-toolbar>\n  <ion-toolbar color=\"primary\" class=\"buscadores\">\n    <ion-searchbar class=\"buscador\" debounce=\"650\" animated placeholder=\"Buscar actividad, cartel, video...\"\n      (ionChange)=\"buscar($event)\" color=\"light\" showCancelButton cancelButtonText=\"OK\"></ion-searchbar>\n    <ion-segment [(ngModel)]=\"_bs.tipo_actual\" color=\"light\">\n      <ion-segment-button value=\"1\">Actividades\n      </ion-segment-button>\n      <ion-segment-button value=\"2\">Carteles\n      </ion-segment-button>\n      <ion-segment-button value=\"3\">Videos\n      </ion-segment-button>\n      <!-- <ion-segment-button value=\"4\">Profesores\n      </ion-segment-button> -->\n    </ion-segment>\n  </ion-toolbar>\n</ion-header>\n\n\n<ion-content>\n  <div [ngSwitch]=\"_bs.tipo_actual\">\n    <ng-container *ngFor=\"let tipo of _bs.tipos\">\n      <div *ngSwitchCase=\"tipo.tipo\">\n        <ion-list>\n          <ion-item  *ngFor=\"let resultado of tipo.resultados\"  href=\"javascript:;\" (click)=\"detalles(resultado)\" >\n            <ion-label style=\"white-space: normal;\">\n              <h2>{{resultado.principal}}</h2>\n              \n            </ion-label>\n          </ion-item> \n        </ion-list>\n      </div>\n    </ng-container>\n  </div>\n</ion-content>"

/***/ }),

/***/ "./src/app/pages/buscador/buscador.page.scss":
/*!***************************************************!*\
  !*** ./src/app/pages/buscador/buscador.page.scss ***!
  \***************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3BhZ2VzL2J1c2NhZG9yL2J1c2NhZG9yLnBhZ2Uuc2NzcyJ9 */"

/***/ }),

/***/ "./src/app/pages/buscador/buscador.page.ts":
/*!*************************************************!*\
  !*** ./src/app/pages/buscador/buscador.page.ts ***!
  \*************************************************/
/*! exports provided: BuscadorPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "BuscadorPage", function() { return BuscadorPage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var src_app_services_buscador_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/services/buscador.service */ "./src/app/services/buscador.service.ts");
/* harmony import */ var _ionic_native_in_app_browser_ngx__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @ionic-native/in-app-browser/ngx */ "./node_modules/@ionic-native/in-app-browser/ngx/index.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");
/* harmony import */ var src_app_services_ajustes_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! src/app/services/ajustes.service */ "./src/app/services/ajustes.service.ts");






var BuscadorPage = /** @class */ (function () {
    function BuscadorPage(_bs, iab, navCtrl, _as) {
        this._bs = _bs;
        this.iab = iab;
        this.navCtrl = navCtrl;
        this._as = _as;
        this.variable = "";
        this._bs.tipo_actual = "1";
        this._bs.tipos = [];
    }
    BuscadorPage.prototype.ngOnInit = function () {
        this._as.checkConexion();
    };
    BuscadorPage.prototype.buscar = function (texto) {
        if (!this._as.online) {
            this._as.presentAlert("Esta sección solo funciona con conexión a internet, vuelve al menú y realiza las busquedas en programa general, videos, carteles o ponentes según lo requieras.");
        }
        else {
            this._bs.tipos = [];
            this.variable = texto.target.value;
            if (this.variable.length > 3) {
                this._bs.buscar(this.variable);
            }
        }
    };
    BuscadorPage.prototype.detalles = function (resultado) {
        if (resultado.clase == "video" || resultado.clase == "cartel") {
            this.iab.create(resultado.extra, '_system');
        }
        else {
            this.navCtrl.navigateForward("/tabs/principal/programa/actividad/" + resultado.id);
        }
    };
    BuscadorPage = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-buscador',
            template: __webpack_require__(/*! ./buscador.page.html */ "./src/app/pages/buscador/buscador.page.html"),
            styles: [__webpack_require__(/*! ./buscador.page.scss */ "./src/app/pages/buscador/buscador.page.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [src_app_services_buscador_service__WEBPACK_IMPORTED_MODULE_2__["BuscadorService"],
            _ionic_native_in_app_browser_ngx__WEBPACK_IMPORTED_MODULE_3__["InAppBrowser"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["NavController"],
            src_app_services_ajustes_service__WEBPACK_IMPORTED_MODULE_5__["AjustesService"]])
    ], BuscadorPage);
    return BuscadorPage;
}());



/***/ }),

/***/ "./src/app/services/buscador.service.ts":
/*!**********************************************!*\
  !*** ./src/app/services/buscador.service.ts ***!
  \**********************************************/
/*! exports provided: BuscadorService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "BuscadorService", function() { return BuscadorService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var _config_url_servicios__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../config/url.servicios */ "./src/app/config/url.servicios.ts");
/* harmony import */ var _ajustes_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./ajustes.service */ "./src/app/services/ajustes.service.ts");
/* harmony import */ var rxjs_add_operator_map__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! rxjs/add/operator/map */ "./node_modules/rxjs-compat/_esm5/add/operator/map.js");






var BuscadorService = /** @class */ (function () {
    function BuscadorService(http, _as) {
        this.http = http;
        this._as = _as;
        this.tipos = [];
        this.tipo_actual = "1";
    }
    BuscadorService.prototype.buscar = function (variable) {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function () {
            var url, promesa_1;
            var _this = this;
            return tslib__WEBPACK_IMPORTED_MODULE_0__["__generator"](this, function (_a) {
                this.tipos = [];
                if (!this._as.online) {
                }
                else {
                    url = _config_url_servicios__WEBPACK_IMPORTED_MODULE_3__["URL_SERVICIOS"] + "/buscador.php?search=" + variable;
                    promesa_1 = this.http.get(url)
                        .toPromise()
                        .then(function (data) {
                        _this.tipos = data.tipos;
                        _this.tipo_actual = data.tipo_actual;
                        return promesa_1;
                    })
                        .catch(function (error) {
                        _this._as.presentToast("Ocurrio un error");
                        return Promise.reject(error);
                    });
                    return [2 /*return*/, promesa_1];
                }
                return [2 /*return*/];
            });
        });
    };
    BuscadorService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
            providedIn: 'root'
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"],
            _ajustes_service__WEBPACK_IMPORTED_MODULE_4__["AjustesService"]])
    ], BuscadorService);
    return BuscadorService;
}());



/***/ })

}]);
//# sourceMappingURL=buscador-buscador-module.js.map