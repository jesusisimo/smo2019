(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["actividades-actividades-module"],{

/***/ "./src/app/pages/actividades/actividades.module.ts":
/*!*********************************************************!*\
  !*** ./src/app/pages/actividades/actividades.module.ts ***!
  \*********************************************************/
/*! exports provided: ActividadesPageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ActividadesPageModule", function() { return ActividadesPageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");
/* harmony import */ var _actividades_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./actividades.page */ "./src/app/pages/actividades/actividades.page.ts");







var routes = [
    {
        path: '',
        component: _actividades_page__WEBPACK_IMPORTED_MODULE_6__["ActividadesPage"]
    }
];
var ActividadesPageModule = /** @class */ (function () {
    function ActividadesPageModule() {
    }
    ActividadesPageModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            imports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
                _ionic_angular__WEBPACK_IMPORTED_MODULE_5__["IonicModule"],
                _angular_router__WEBPACK_IMPORTED_MODULE_4__["RouterModule"].forChild(routes)
            ],
            declarations: [_actividades_page__WEBPACK_IMPORTED_MODULE_6__["ActividadesPage"]]
        })
    ], ActividadesPageModule);
    return ActividadesPageModule;
}());



/***/ }),

/***/ "./src/app/pages/actividades/actividades.page.html":
/*!*********************************************************!*\
  !*** ./src/app/pages/actividades/actividades.page.html ***!
  \*********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<ion-header>\n  <ion-toolbar color=\"primary\">\n    <ion-buttons slot=\"start\">\n      <ion-menu-button></ion-menu-button>\n      <ion-back-button color=\"light\" text=\"Atras\"></ion-back-button>\n    </ion-buttons>\n    <ion-title>Actividades SMO</ion-title>\n  </ion-toolbar>\n</ion-header>\n\n\n<ion-content>\n\n\n  <ion-card>\n      <ion-card-header text-center>\n          <ion-card-title text-center>Programa Curso Bienal de Actualización</ion-card-title>\n          <ion-note text-center>Toca la imagen para ver el programa</ion-note>\n        </ion-card-header>\n    <img src=\"/assets/img/programa_smo.jpg\"  (click)=\"verPrograma()\">\n    \n   \n  </ion-card>\n\n\n  <ion-card>\n    <img src=\"/assets/img/coahuila.jpg\"  (click)=\"viewPhoto('coahuila.jpg')\">\n    <ion-card-header>\n      <ion-card-title text-center>Coloquio Retina</ion-card-title>\n    </ion-card-header>\n    <ion-card-content text-center>\n      27, 28 y 29 de junio 2019 <br>\n      Torreón Coahuila\n    </ion-card-content>\n  </ion-card>\n\n\n\n  <ion-card>\n    <img src=\"/assets/img/san_carlos.jpg\"  (click)=\"viewPhoto('san_carlos.jpg')\">\n    <ion-card-header>\n      <ion-card-title text-center>\n        Coloquio Catarata y Cirugía Refractiva\n      </ion-card-title>\n    </ion-card-header>\n    <ion-card-content text-center>\n      10, 11 y 12 de octubre 2019 <br>\n      San Carlos, Son.\n    </ion-card-content>\n  </ion-card>\n\n\n\n\n\n</ion-content>"

/***/ }),

/***/ "./src/app/pages/actividades/actividades.page.scss":
/*!*********************************************************!*\
  !*** ./src/app/pages/actividades/actividades.page.scss ***!
  \*********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3BhZ2VzL2FjdGl2aWRhZGVzL2FjdGl2aWRhZGVzLnBhZ2Uuc2NzcyJ9 */"

/***/ }),

/***/ "./src/app/pages/actividades/actividades.page.ts":
/*!*******************************************************!*\
  !*** ./src/app/pages/actividades/actividades.page.ts ***!
  \*******************************************************/
/*! exports provided: ActividadesPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ActividadesPage", function() { return ActividadesPage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _ionic_native_photo_viewer_ngx__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @ionic-native/photo-viewer/ngx */ "./node_modules/@ionic-native/photo-viewer/ngx/index.js");
/* harmony import */ var _ionic_native_file_ngx__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @ionic-native/file/ngx */ "./node_modules/@ionic-native/file/ngx/index.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");
/* harmony import */ var _ionic_native_file_opener_ngx__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @ionic-native/file-opener/ngx */ "./node_modules/@ionic-native/file-opener/ngx/index.js");
/* harmony import */ var _ionic_native_document_viewer_ngx__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @ionic-native/document-viewer/ngx */ "./node_modules/@ionic-native/document-viewer/ngx/index.js");







var ActividadesPage = /** @class */ (function () {
    function ActividadesPage(photoViewer, file, platform, fileOpener, document) {
        this.photoViewer = photoViewer;
        this.file = file;
        this.platform = platform;
        this.fileOpener = fileOpener;
        this.document = document;
    }
    ActividadesPage.prototype.ngOnInit = function () {
    };
    ActividadesPage.prototype.viewPhoto = function (img) {
        var imageName = img;
        this.photoViewer.show(this.file.applicationDirectory + "www/assets/img/" + imageName, "Plano");
    };
    ActividadesPage.prototype.verPrograma = function () {
        var _this = this;
        var filePath = this.file.applicationDirectory + 'www/assets';
        if (this.platform.is('android')) {
            var fakeName = Date.now();
            this.file.copyFile(filePath, 'programa_curso_bienal.pdf', this.file.dataDirectory, fakeName + ".pdf").then(function (result) {
                _this.fileOpener.open(result.nativeURL, 'application/pdf')
                    .then(function () { return console.log('File is opened'); })
                    .catch(function (e) { return console.log('Error opening file', e); });
            });
        }
        else {
            // Use Document viewer for iOS for a better UI
            var options = {
                title: 'Programa'
            };
            this.document.viewDocument(filePath + "/programa_curso_bienal.pdf", 'application/pdf', options);
        }
    };
    ActividadesPage = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-actividades',
            template: __webpack_require__(/*! ./actividades.page.html */ "./src/app/pages/actividades/actividades.page.html"),
            styles: [__webpack_require__(/*! ./actividades.page.scss */ "./src/app/pages/actividades/actividades.page.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_ionic_native_photo_viewer_ngx__WEBPACK_IMPORTED_MODULE_2__["PhotoViewer"],
            _ionic_native_file_ngx__WEBPACK_IMPORTED_MODULE_3__["File"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["Platform"],
            _ionic_native_file_opener_ngx__WEBPACK_IMPORTED_MODULE_5__["FileOpener"],
            _ionic_native_document_viewer_ngx__WEBPACK_IMPORTED_MODULE_6__["DocumentViewer"]])
    ], ActividadesPage);
    return ActividadesPage;
}());



/***/ })

}]);
//# sourceMappingURL=actividades-actividades-module.js.map