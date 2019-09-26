(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["circuito-circuito-module"],{

/***/ "./src/app/pages/circuito/circuito.module.ts":
/*!***************************************************!*\
  !*** ./src/app/pages/circuito/circuito.module.ts ***!
  \***************************************************/
/*! exports provided: CircuitoPageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CircuitoPageModule", function() { return CircuitoPageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");
/* harmony import */ var _circuito_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./circuito.page */ "./src/app/pages/circuito/circuito.page.ts");







var routes = [
    {
        path: '',
        component: _circuito_page__WEBPACK_IMPORTED_MODULE_6__["CircuitoPage"]
    }
];
var CircuitoPageModule = /** @class */ (function () {
    function CircuitoPageModule() {
    }
    CircuitoPageModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            imports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
                _ionic_angular__WEBPACK_IMPORTED_MODULE_5__["IonicModule"],
                _angular_router__WEBPACK_IMPORTED_MODULE_4__["RouterModule"].forChild(routes)
            ],
            declarations: [_circuito_page__WEBPACK_IMPORTED_MODULE_6__["CircuitoPage"]]
        })
    ], CircuitoPageModule);
    return CircuitoPageModule;
}());



/***/ }),

/***/ "./src/app/pages/circuito/circuito.page.html":
/*!***************************************************!*\
  !*** ./src/app/pages/circuito/circuito.page.html ***!
  \***************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<ion-header>\n  <ion-toolbar color=\"primary\">\n    <ion-buttons slot=\"start\">\n      <ion-menu-button></ion-menu-button>\n      <ion-back-button color=\"light\" text=\"Atras\"></ion-back-button>\n    </ion-buttons>\n    <ion-title>Rutas de autobuses</ion-title>\n  </ion-toolbar>\n</ion-header>\n\n\n<ion-content>\n\n\n  <ion-card color=\"primary\">\n    <ion-card-header>\n      <ion-card-title>Ruta 1</ion-card-title>\n    </ion-card-header>\n\n    <ion-card-content>\n      -Presidente Intercontinental Hotel <br>\n      -Real Inn Hotel\n    </ion-card-content>\n  </ion-card>\n\n  <ion-card color=\"secondary\">\n    <ion-card-header>\n      <ion-card-title>Ruta 2</ion-card-title>\n    </ion-card-header>\n\n    <ion-card-content>\n      -Ritz Carlton Hotel <br>\n      -Paradisus Hotel\n    </ion-card-content>\n  </ion-card>\n\n\n  <ion-card color=\"light\">\n    <ion-card-header>\n      <ion-card-title>Horarios</ion-card-title>\n    </ion-card-header>\n\n    <ion-card-content color=\"dark\">\n      -Sábado 25 de mayo: 7 am a 9 pm <br>\n      -Domingo 26 de mayo: 7 am a 6 pm <br>\n      -Lunes 27 de mayo: 7 am a 6 pm <br>\n      -Martes 28 de mayo: 7 am a 2 pm\n    </ion-card-content>\n  </ion-card>\n\n  <ion-card (click)=\"viewPhoto('rutas.jpg')\">\n    <img src=\"/assets/img/esquemas/rutas.jpg\" alt=\"\">\n  </ion-card>\n  <ion-card (click)=\"viewPhoto('direcciones.jpg')\">\n      <img src=\"/assets/img/esquemas/direcciones.jpg\" alt=\"\">\n    </ion-card>\n\n</ion-content>"

/***/ }),

/***/ "./src/app/pages/circuito/circuito.page.scss":
/*!***************************************************!*\
  !*** ./src/app/pages/circuito/circuito.page.scss ***!
  \***************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3BhZ2VzL2NpcmN1aXRvL2NpcmN1aXRvLnBhZ2Uuc2NzcyJ9 */"

/***/ }),

/***/ "./src/app/pages/circuito/circuito.page.ts":
/*!*************************************************!*\
  !*** ./src/app/pages/circuito/circuito.page.ts ***!
  \*************************************************/
/*! exports provided: CircuitoPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CircuitoPage", function() { return CircuitoPage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _ionic_native_photo_viewer_ngx__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @ionic-native/photo-viewer/ngx */ "./node_modules/@ionic-native/photo-viewer/ngx/index.js");
/* harmony import */ var _ionic_native_file_ngx__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @ionic-native/file/ngx */ "./node_modules/@ionic-native/file/ngx/index.js");




var CircuitoPage = /** @class */ (function () {
    function CircuitoPage(photoViewer, file) {
        this.photoViewer = photoViewer;
        this.file = file;
    }
    CircuitoPage.prototype.ngOnInit = function () {
    };
    CircuitoPage.prototype.viewPhoto = function (img) {
        var imageName = img;
        this.photoViewer.show(this.file.applicationDirectory + "www/assets/img/esquemas/" + imageName, "Esquema");
    };
    CircuitoPage = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-circuito',
            template: __webpack_require__(/*! ./circuito.page.html */ "./src/app/pages/circuito/circuito.page.html"),
            styles: [__webpack_require__(/*! ./circuito.page.scss */ "./src/app/pages/circuito/circuito.page.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_ionic_native_photo_viewer_ngx__WEBPACK_IMPORTED_MODULE_2__["PhotoViewer"],
            _ionic_native_file_ngx__WEBPACK_IMPORTED_MODULE_3__["File"]])
    ], CircuitoPage);
    return CircuitoPage;
}());



/***/ })

}]);
//# sourceMappingURL=circuito-circuito-module.js.map