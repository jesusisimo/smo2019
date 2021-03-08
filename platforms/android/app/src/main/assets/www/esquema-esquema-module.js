(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["esquema-esquema-module"],{

/***/ "./src/app/pages/esquema/esquema.module.ts":
/*!*************************************************!*\
  !*** ./src/app/pages/esquema/esquema.module.ts ***!
  \*************************************************/
/*! exports provided: EsquemaPageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "EsquemaPageModule", function() { return EsquemaPageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");
/* harmony import */ var _esquema_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./esquema.page */ "./src/app/pages/esquema/esquema.page.ts");







var routes = [
    {
        path: '',
        component: _esquema_page__WEBPACK_IMPORTED_MODULE_6__["EsquemaPage"]
    }
];
var EsquemaPageModule = /** @class */ (function () {
    function EsquemaPageModule() {
    }
    EsquemaPageModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            imports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
                _ionic_angular__WEBPACK_IMPORTED_MODULE_5__["IonicModule"],
                _angular_router__WEBPACK_IMPORTED_MODULE_4__["RouterModule"].forChild(routes)
            ],
            declarations: [_esquema_page__WEBPACK_IMPORTED_MODULE_6__["EsquemaPage"]]
        })
    ], EsquemaPageModule);
    return EsquemaPageModule;
}());



/***/ }),

/***/ "./src/app/pages/esquema/esquema.page.html":
/*!*************************************************!*\
  !*** ./src/app/pages/esquema/esquema.page.html ***!
  \*************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<ion-header>\n  <ion-toolbar color=\"primary\">\n    <ion-buttons slot=\"start\">\n      <ion-menu-button></ion-menu-button>\n      <ion-back-button color=\"light\" text=\"Atras\"></ion-back-button>\n    </ion-buttons>\n    <ion-title>Esquema general de actividades</ion-title>\n  </ion-toolbar>\n</ion-header>\n\n\n<ion-content>\n    <ion-row >\n        <ion-col text-center>\n          <ion-note >Toca las imagenes, luego haz zoom</ion-note>\n          <img src=\"/assets/img/zoomgesture.gif\" width=\"50px;\">\n        </ion-col>\n      </ion-row>\n  <ion-card (click)=\"viewPhoto('sabado.jpg')\">\n    <ion-card-header>\n      <ion-card-subtitle text-center color=\"dark\">Sábado 25 May 2019</ion-card-subtitle>\n    </ion-card-header>\n    <img src=\"/assets/img/esquemas/sabado.jpg\" alt=\"\">\n  </ion-card>\n  <ion-card (click)=\"viewPhoto('domingo.jpg')\">\n    <ion-card-header>\n      <ion-card-subtitle text-center color=\"dark\">Domingo 26 May 2019</ion-card-subtitle>\n    </ion-card-header>\n    <img src=\"/assets/img/esquemas/domingo.jpg\" alt=\"\">\n  </ion-card>\n  <ion-card (click)=\"viewPhoto('lunes.jpg')\">\n    <ion-card-header>\n      <ion-card-subtitle text-center color=\"dark\">Lunes 27 May 2019</ion-card-subtitle>\n    </ion-card-header>\n    <img src=\"/assets/img/esquemas/lunes.jpg\" alt=\"\">\n  </ion-card>\n  <ion-card (click)=\"viewPhoto('martes.jpg')\">\n    <ion-card-header>\n      <ion-card-subtitle text-center color=\"dark\">Martes 28 May 2019</ion-card-subtitle>\n    </ion-card-header>\n    <img src=\"/assets/img/esquemas/martes.jpg\" alt=\"\">\n  </ion-card>\n<br>\n<ion-row >\n    <ion-col size=\"2\">\n      <p text-center color=\"dark\"><br>Código de colores</p>\n    </ion-col>\n    <ion-col size=\"2\" class=\"color1\">\n        <p text-center color=\"light\">\n        Hotel Fiesta Americana Coral\n        </p>\n    </ion-col>\n    <ion-col size=\"2\"  class=\"color2\">\n        <p text-center color=\"light\">\n        planta baja / ground floor Cancun ICC\t\n        </p>\n    </ion-col>\n    <ion-col size=\"2\"  class=\"color3\">\n        <p text-center color=\"light\">\n        primer piso / 1st floor Cancun ICC\n        </p>\n    </ion-col>\n    <ion-col size=\"2\"  class=\"color4\">\n        <p text-center color=\"light\">\n        segundo piso / 2nd floor Cancun ICC\n        </p>\n    </ion-col>\n    <ion-col size=\"2\"  class=\"color5\">\n        <p text-center color=\"light\">\n        tercer piso / 3rd floor Cancun ICC\n        </p>\n    </ion-col>\n  </ion-row>\n\n\n</ion-content>"

/***/ }),

/***/ "./src/app/pages/esquema/esquema.page.scss":
/*!*************************************************!*\
  !*** ./src/app/pages/esquema/esquema.page.scss ***!
  \*************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "ion-card-header {\n  padding-top: 1px;\n  padding-bottom: 1px; }\n\np {\n  font-size: 9px; }\n\n.color1 {\n  background-color: #D9D2E9; }\n\n.color2 {\n  background-color: #B6D7A8; }\n\n.color3 {\n  background-color: #FFE599; }\n\n.color4 {\n  background-color: #F9CB9C; }\n\n.color5 {\n  background-color: #EA9999; }\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9qY2lubm92YXRpb24vSkMgSW5ub3ZhdGlvbiBEcm9wYm94L0plc3XMgXMgQ3VldmFzL01pIE1hYyAoTWFjQm9vay1Qcm8tZGUtSkMtSW5ub3ZhdGlvbi5sb2NhbCkvRG9jdW1lbnRzL0dpdEh1Yi9zbW8yMDE5L3NyYy9hcHAvcGFnZXMvZXNxdWVtYS9lc3F1ZW1hLnBhZ2Uuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNFLGdCQUFnQjtFQUNsQixtQkFBbUIsRUFBQTs7QUFFbkI7RUFDRSxjQUFjLEVBQUE7O0FBRWhCO0VBQ0UseUJBQXlCLEVBQUE7O0FBRTNCO0VBQ0UseUJBQXlCLEVBQUE7O0FBRTNCO0VBQ0UseUJBQXlCLEVBQUE7O0FBRTNCO0VBQ0UseUJBQXlCLEVBQUE7O0FBRTNCO0VBQ0UseUJBQXlCLEVBQUEiLCJmaWxlIjoic3JjL2FwcC9wYWdlcy9lc3F1ZW1hL2VzcXVlbWEucGFnZS5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiaW9uLWNhcmQtaGVhZGVye1xuICBwYWRkaW5nLXRvcDogMXB4O1xucGFkZGluZy1ib3R0b206IDFweDtcbn1cbnB7XG4gIGZvbnQtc2l6ZTogOXB4O1xufVxuLmNvbG9yMXtcbiAgYmFja2dyb3VuZC1jb2xvcjogI0Q5RDJFOTtcbn1cbi5jb2xvcjJ7XG4gIGJhY2tncm91bmQtY29sb3I6ICNCNkQ3QTg7XG59XG4uY29sb3Ize1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjRkZFNTk5O1xufVxuLmNvbG9yNHtcbiAgYmFja2dyb3VuZC1jb2xvcjogI0Y5Q0I5Qztcbn1cbi5jb2xvcjV7XG4gIGJhY2tncm91bmQtY29sb3I6ICNFQTk5OTk7XG59Il19 */"

/***/ }),

/***/ "./src/app/pages/esquema/esquema.page.ts":
/*!***********************************************!*\
  !*** ./src/app/pages/esquema/esquema.page.ts ***!
  \***********************************************/
/*! exports provided: EsquemaPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "EsquemaPage", function() { return EsquemaPage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _ionic_native_photo_viewer_ngx__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @ionic-native/photo-viewer/ngx */ "./node_modules/@ionic-native/photo-viewer/ngx/index.js");
/* harmony import */ var _ionic_native_file_ngx__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @ionic-native/file/ngx */ "./node_modules/@ionic-native/file/ngx/index.js");




var EsquemaPage = /** @class */ (function () {
    function EsquemaPage(photoViewer, file) {
        this.photoViewer = photoViewer;
        this.file = file;
    }
    EsquemaPage.prototype.ngOnInit = function () {
    };
    EsquemaPage.prototype.viewPhoto = function (img) {
        var imageName = img;
        this.photoViewer.show(this.file.applicationDirectory + "www/assets/img/esquemas/" + imageName, "Esquema");
    };
    EsquemaPage = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-esquema',
            template: __webpack_require__(/*! ./esquema.page.html */ "./src/app/pages/esquema/esquema.page.html"),
            styles: [__webpack_require__(/*! ./esquema.page.scss */ "./src/app/pages/esquema/esquema.page.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_ionic_native_photo_viewer_ngx__WEBPACK_IMPORTED_MODULE_2__["PhotoViewer"],
            _ionic_native_file_ngx__WEBPACK_IMPORTED_MODULE_3__["File"]])
    ], EsquemaPage);
    return EsquemaPage;
}());



/***/ })

}]);
//# sourceMappingURL=esquema-esquema-module.js.map