(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["bienvenida-bienvenida-module"],{

/***/ "./src/app/pages/bienvenida/bienvenida.module.ts":
/*!*******************************************************!*\
  !*** ./src/app/pages/bienvenida/bienvenida.module.ts ***!
  \*******************************************************/
/*! exports provided: BienvenidaPageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "BienvenidaPageModule", function() { return BienvenidaPageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");
/* harmony import */ var _bienvenida_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./bienvenida.page */ "./src/app/pages/bienvenida/bienvenida.page.ts");







var routes = [
    {
        path: '',
        component: _bienvenida_page__WEBPACK_IMPORTED_MODULE_6__["BienvenidaPage"]
    }
];
var BienvenidaPageModule = /** @class */ (function () {
    function BienvenidaPageModule() {
    }
    BienvenidaPageModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            imports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
                _ionic_angular__WEBPACK_IMPORTED_MODULE_5__["IonicModule"],
                _angular_router__WEBPACK_IMPORTED_MODULE_4__["RouterModule"].forChild(routes)
            ],
            declarations: [_bienvenida_page__WEBPACK_IMPORTED_MODULE_6__["BienvenidaPage"]]
        })
    ], BienvenidaPageModule);
    return BienvenidaPageModule;
}());



/***/ }),

/***/ "./src/app/pages/bienvenida/bienvenida.page.html":
/*!*******************************************************!*\
  !*** ./src/app/pages/bienvenida/bienvenida.page.html ***!
  \*******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<ion-header>\n  <ion-toolbar color=\"primary\">\n    <ion-buttons slot=\"start\">\n      <ion-menu-button></ion-menu-button>\n      <ion-back-button color=\"light\" text=\"Atras\"></ion-back-button>\n    </ion-buttons>\n    <ion-title>Mensaje de bienvenida</ion-title>\n  </ion-toolbar>\n</ion-header>\n\n<ion-content padding>\n<h3 text-center>Sociedad Mexicana de la Oftalmología</h3>\n<iframe  width=\"100%\" height=\"315\" src=\"https://player.vimeo.com/video/336680837\" frameborder=\"0\" allowfullscreen></iframe>\n<p text-justify>\nEstimados amigos y colegas:\n\nUna vez mas la Sociedad Mexicana de Oftalmología se congratula de ser por sexta ocasión la anfitriona del Congreso Panamericano de Oftalmología.\n\nLa experiencia inicia en el año 1952 cuando organizamos el IV congreso en la Ciudad de México, repitiéndose en 1981 en Acapulco (XIII), 1997 en Cancún (XXI), nuevamente en Cancún 2007 (XXVII) y por último el evento conjunto XXXIII Congreso Mexicano, XXXII Congreso Panamericano y XXV Congreso Mundial de Oftalmología  2016 en Guadalajara.\n\nUna vez más,  Cancún será sede del XXXIV Congreso Panamericano, en esta ocasión en conjunto con el V Curso Bienal de la Sociedad Mexicana de Oftalmología, nuestro gran foro de actualización en el que participan los once grupos de alta especialidad afiliados a nuestra Sociedad.\n\nLa planeación compartida del congreso ofrecerá un gran programa académico, sumamente incluyente e interactivo,  con la participación de 26 sociedades nacionales de América y Europa, 14 grupos de alta especialidad de Latinoamérica y hospitales y departamentos de oftalmología de todo el continente.\n\nEs innegable la velocidad con la que el conocimiento y tecnología cambian, y esto nos obliga a mantenernos continuamente actualizados en las dos grandes áreas de la especialidad, clínica y quirúrgica.\n\nPor supuesto no nos olvidamos de la actividad social que tanto disfrutamos, estableciendo y fortaleciendo lazos de amistad entre los diferentes países que integran la región.\n\nA nombre de la Sociedad Mexicana de Oftalmología reciban una cordial bienvenida y que la experiencia sea placentera para ustedes y sus familias.\n</p>\n<p text-center>\nAtentamente\n</p>\n<p text-center>\nDr. Eduardo Chávez Mondragón\n</p>\n<p text-center>\nPresidente Sociedad Mexicana de Oftalmología 2019\n</p>\n</ion-content>\n"

/***/ }),

/***/ "./src/app/pages/bienvenida/bienvenida.page.scss":
/*!*******************************************************!*\
  !*** ./src/app/pages/bienvenida/bienvenida.page.scss ***!
  \*******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3BhZ2VzL2JpZW52ZW5pZGEvYmllbnZlbmlkYS5wYWdlLnNjc3MifQ== */"

/***/ }),

/***/ "./src/app/pages/bienvenida/bienvenida.page.ts":
/*!*****************************************************!*\
  !*** ./src/app/pages/bienvenida/bienvenida.page.ts ***!
  \*****************************************************/
/*! exports provided: BienvenidaPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "BienvenidaPage", function() { return BienvenidaPage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/platform-browser */ "./node_modules/@angular/platform-browser/fesm5/platform-browser.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");




var BienvenidaPage = /** @class */ (function () {
    function BienvenidaPage(navCtrl, domSanitizer) {
        this.navCtrl = navCtrl;
        this.domSanitizer = domSanitizer;
    }
    BienvenidaPage.prototype.ngOnInit = function () {
        this.trustedVideoUrl = this.domSanitizer.bypassSecurityTrustResourceUrl(this.vid_link);
    };
    BienvenidaPage = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-bienvenida',
            template: __webpack_require__(/*! ./bienvenida.page.html */ "./src/app/pages/bienvenida/bienvenida.page.html"),
            styles: [__webpack_require__(/*! ./bienvenida.page.scss */ "./src/app/pages/bienvenida/bienvenida.page.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_ionic_angular__WEBPACK_IMPORTED_MODULE_3__["NavController"],
            _angular_platform_browser__WEBPACK_IMPORTED_MODULE_2__["DomSanitizer"]])
    ], BienvenidaPage);
    return BienvenidaPage;
}());



/***/ })

}]);
//# sourceMappingURL=bienvenida-bienvenida-module.js.map