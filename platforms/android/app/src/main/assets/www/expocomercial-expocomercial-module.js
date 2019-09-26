(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["expocomercial-expocomercial-module"],{

/***/ "./src/app/pages/expocomercial/expocomercial.module.ts":
/*!*************************************************************!*\
  !*** ./src/app/pages/expocomercial/expocomercial.module.ts ***!
  \*************************************************************/
/*! exports provided: ExpocomercialPageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ExpocomercialPageModule", function() { return ExpocomercialPageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");
/* harmony import */ var _expocomercial_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./expocomercial.page */ "./src/app/pages/expocomercial/expocomercial.page.ts");







var routes = [
    {
        path: '',
        component: _expocomercial_page__WEBPACK_IMPORTED_MODULE_6__["ExpocomercialPage"]
    }
];
var ExpocomercialPageModule = /** @class */ (function () {
    function ExpocomercialPageModule() {
    }
    ExpocomercialPageModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            imports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
                _ionic_angular__WEBPACK_IMPORTED_MODULE_5__["IonicModule"],
                _angular_router__WEBPACK_IMPORTED_MODULE_4__["RouterModule"].forChild(routes)
            ],
            declarations: [_expocomercial_page__WEBPACK_IMPORTED_MODULE_6__["ExpocomercialPage"]]
        })
    ], ExpocomercialPageModule);
    return ExpocomercialPageModule;
}());



/***/ }),

/***/ "./src/app/pages/expocomercial/expocomercial.page.html":
/*!*************************************************************!*\
  !*** ./src/app/pages/expocomercial/expocomercial.page.html ***!
  \*************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<ion-header>\n  <ion-toolbar color=\"primary\">\n    <ion-buttons slot=\"start\">\n      <ion-menu-button></ion-menu-button>\n      <ion-back-button color=\"light\" text=\"Atras\"></ion-back-button>\n    </ion-buttons>\n    <ion-title>Expo Comercial</ion-title>\n  </ion-toolbar>\n</ion-header>\n\n\n<ion-content>\n  <ion-card (click)=\"viewPhoto('comercial.jpg')\">\n\n    <ion-card-header>\n      <ion-card-subtitle>Planta baja</ion-card-subtitle>\n    </ion-card-header>\n    <img src=\"/assets/img/comercial.jpg\" alt=\"\">\n  </ion-card>\n\n  <ion-card (click)=\"viewPhoto('primerpiso.jpg')\">\n    <ion-card-header>\n      <ion-card-subtitle>Primer piso</ion-card-subtitle>\n    </ion-card-header>\n    <img src=\"/assets/img/primerpiso.jpg\" alt=\"\">\n  </ion-card>\n  <ion-card (click)=\"viewPhoto('salones.jpg')\">\n    <ion-card-header>\n      <ion-card-subtitle>Salones</ion-card-subtitle>\n    </ion-card-header>\n    <img src=\"/assets/img/salones.jpg\" alt=\"\">\n  </ion-card>\n\n\n</ion-content>"

/***/ }),

/***/ "./src/app/pages/expocomercial/expocomercial.page.scss":
/*!*************************************************************!*\
  !*** ./src/app/pages/expocomercial/expocomercial.page.scss ***!
  \*************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3BhZ2VzL2V4cG9jb21lcmNpYWwvZXhwb2NvbWVyY2lhbC5wYWdlLnNjc3MifQ== */"

/***/ }),

/***/ "./src/app/pages/expocomercial/expocomercial.page.ts":
/*!***********************************************************!*\
  !*** ./src/app/pages/expocomercial/expocomercial.page.ts ***!
  \***********************************************************/
/*! exports provided: ExpocomercialPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ExpocomercialPage", function() { return ExpocomercialPage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _ionic_native_photo_viewer_ngx__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @ionic-native/photo-viewer/ngx */ "./node_modules/@ionic-native/photo-viewer/ngx/index.js");
/* harmony import */ var _ionic_native_file_ngx__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @ionic-native/file/ngx */ "./node_modules/@ionic-native/file/ngx/index.js");




var ExpocomercialPage = /** @class */ (function () {
    function ExpocomercialPage(photoViewer, file) {
        this.photoViewer = photoViewer;
        this.file = file;
    }
    ExpocomercialPage.prototype.ngOnInit = function () {
    };
    ExpocomercialPage.prototype.viewPhoto = function (img) {
        var imageName = img;
        this.photoViewer.show(this.file.applicationDirectory + "www/assets/img/" + imageName, "Plano");
    };
    ExpocomercialPage = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-expocomercial',
            template: __webpack_require__(/*! ./expocomercial.page.html */ "./src/app/pages/expocomercial/expocomercial.page.html"),
            styles: [__webpack_require__(/*! ./expocomercial.page.scss */ "./src/app/pages/expocomercial/expocomercial.page.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_ionic_native_photo_viewer_ngx__WEBPACK_IMPORTED_MODULE_2__["PhotoViewer"],
            _ionic_native_file_ngx__WEBPACK_IMPORTED_MODULE_3__["File"]])
    ], ExpocomercialPage);
    return ExpocomercialPage;
}());



/***/ })

}]);
//# sourceMappingURL=expocomercial-expocomercial-module.js.map