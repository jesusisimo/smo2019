(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["carteles-carteles-module"],{

/***/ "./src/app/pages/carteles/carteles.module.ts":
/*!***************************************************!*\
  !*** ./src/app/pages/carteles/carteles.module.ts ***!
  \***************************************************/
/*! exports provided: CartelesPageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CartelesPageModule", function() { return CartelesPageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");
/* harmony import */ var _carteles_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./carteles.page */ "./src/app/pages/carteles/carteles.page.ts");







var routes = [
    {
        path: '',
        component: _carteles_page__WEBPACK_IMPORTED_MODULE_6__["CartelesPage"]
    }
];
var CartelesPageModule = /** @class */ (function () {
    function CartelesPageModule() {
    }
    CartelesPageModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            imports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
                _ionic_angular__WEBPACK_IMPORTED_MODULE_5__["IonicModule"],
                _angular_router__WEBPACK_IMPORTED_MODULE_4__["RouterModule"].forChild(routes)
            ],
            declarations: [_carteles_page__WEBPACK_IMPORTED_MODULE_6__["CartelesPage"]]
        })
    ], CartelesPageModule);
    return CartelesPageModule;
}());



/***/ }),

/***/ "./src/app/pages/carteles/carteles.page.html":
/*!***************************************************!*\
  !*** ./src/app/pages/carteles/carteles.page.html ***!
  \***************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<ion-header>\n  <ion-toolbar color=\"primary\">\n    <ion-buttons slot=\"start\">\n      <ion-menu-button></ion-menu-button>\n      <ion-back-button color=\"light\" text=\"Atras\"></ion-back-button>\n    </ion-buttons>\n    <ion-title>Carteles</ion-title>\n  </ion-toolbar>\n  <ion-toolbar color=\"primary\" class=\"buscadores\">\n    <ion-searchbar class=\"buscador\" debounce=\"550\" animated placeholder=\"Buscar cartel, autor, especialidad...\" (ionChange)=\"buscar($event)\" color=\"light\"  showCancelButton cancelButtonText=\"OK\"  ></ion-searchbar>\n  </ion-toolbar>\n</ion-header>\n\n<ion-content ion-padding=\"ion-padding\">\n  <ion-refresher   (ionRefresh)=\"recargar($event)\">\n    <ion-refresher-content></ion-refresher-content>\n  </ion-refresher>\n    <ion-list>\n        <ion-item *ngFor=\"let cartel of _cs.carteles\"  color=\"{{cartel.color}}\" (click)=\"detalles(cartel.url)\"  href=\"javascript:;\">\n          <ion-label>\n            <p>{{cartel.id}}.- {{ cartel.titulo }}</p>\n           \n            <h3>A. {{ cartel.autores }}</h3>\n             <p>Especialidad: {{ cartel.especialidad }}</p>\n          </ion-label>\n        </ion-item>\n      </ion-list>\n      <ion-infinite-scroll (ionInfinite)=\"siguiente_pagina($event)\">\n          <ion-infinite-scroll-content loadingText=\"Cargando mas información…\"></ion-infinite-scroll-content>\n      </ion-infinite-scroll>\n      \n</ion-content>"

/***/ }),

/***/ "./src/app/pages/carteles/carteles.page.scss":
/*!***************************************************!*\
  !*** ./src/app/pages/carteles/carteles.page.scss ***!
  \***************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".buscadores {\n  --padding-top: 0px;\n  --padding-bottom: 0px;\n  --padding-start: 0px;\n  --padding-end: 0px; }\n\n.buscador {\n  padding-top: 0px;\n  padding-bottom: 0px;\n  height: 0px; }\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9icmIvRG9jdW1lbnRzL0dpdEh1Yi9BUFBfU01PL3Ntby9zcmMvYXBwL3BhZ2VzL2NhcnRlbGVzL2NhcnRlbGVzLnBhZ2Uuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNJLGtCQUFjO0VBQ2xCLHFCQUFpQjtFQUNqQixvQkFBZ0I7RUFDaEIsa0JBQWMsRUFBQTs7QUFHZDtFQUNJLGdCQUFnQjtFQUNwQixtQkFBbUI7RUFDbkIsV0FBVyxFQUFBIiwiZmlsZSI6InNyYy9hcHAvcGFnZXMvY2FydGVsZXMvY2FydGVsZXMucGFnZS5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLmJ1c2NhZG9yZXN7XG4gICAgLS1wYWRkaW5nLXRvcDogMHB4O1xuLS1wYWRkaW5nLWJvdHRvbTogMHB4O1xuLS1wYWRkaW5nLXN0YXJ0OiAwcHg7XG4tLXBhZGRpbmctZW5kOiAwcHg7XG59XG5cbi5idXNjYWRvcntcbiAgICBwYWRkaW5nLXRvcDogMHB4O1xucGFkZGluZy1ib3R0b206IDBweDtcbmhlaWdodDogMHB4O1xufSJdfQ== */"

/***/ }),

/***/ "./src/app/pages/carteles/carteles.page.ts":
/*!*************************************************!*\
  !*** ./src/app/pages/carteles/carteles.page.ts ***!
  \*************************************************/
/*! exports provided: CartelesPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CartelesPage", function() { return CartelesPage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");
/* harmony import */ var src_app_services_carteles_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/app/services/carteles.service */ "./src/app/services/carteles.service.ts");
/* harmony import */ var _ionic_native_in_app_browser_ngx__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ionic-native/in-app-browser/ngx */ "./node_modules/@ionic-native/in-app-browser/ngx/index.js");





var CartelesPage = /** @class */ (function () {
    function CartelesPage(modalCtrl, _cs, iab) {
        this.modalCtrl = modalCtrl;
        this._cs = _cs;
        this.iab = iab;
        this.variable = "";
    }
    CartelesPage.prototype.ngOnInit = function () {
        this._cs.pagina = 0;
        this._cs.carteles = [];
        this._cs.cargar_todos();
    };
    // async verCartel(id:any){
    //   const modal = await this.modalCtrl.create({
    //     component: CartelComponent,
    //     componentProps:{
    //       id
    //     }
    //   });
    //   modal.present();
    // }
    CartelesPage.prototype.detalles = function (url) {
        console.log(url);
        this.iab.create(url, '_system');
    };
    CartelesPage.prototype.buscar = function (texto) {
        this.variable = texto.target.value;
        this._cs.buscar(this.variable);
    };
    CartelesPage.prototype.siguiente_pagina = function (event) {
        this._cs.siguiente_pagina()
            .then(function () {
            event.target.complete();
            event.target.disabled = false;
        });
    };
    CartelesPage.prototype.recargar = function (event) {
        this._cs.recargar(this.variable)
            .then(function () {
            event.target.complete();
            event.target.disabled = false;
        });
    };
    CartelesPage = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-carteles',
            template: __webpack_require__(/*! ./carteles.page.html */ "./src/app/pages/carteles/carteles.page.html"),
            styles: [__webpack_require__(/*! ./carteles.page.scss */ "./src/app/pages/carteles/carteles.page.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_ionic_angular__WEBPACK_IMPORTED_MODULE_2__["ModalController"],
            src_app_services_carteles_service__WEBPACK_IMPORTED_MODULE_3__["CartelesService"],
            _ionic_native_in_app_browser_ngx__WEBPACK_IMPORTED_MODULE_4__["InAppBrowser"]])
    ], CartelesPage);
    return CartelesPage;
}());



/***/ })

}]);
//# sourceMappingURL=carteles-carteles-module.js.map