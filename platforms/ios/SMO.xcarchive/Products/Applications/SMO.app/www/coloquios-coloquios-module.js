(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["coloquios-coloquios-module"],{

/***/ "./src/app/pages/coloquios/coloquios.module.ts":
/*!*****************************************************!*\
  !*** ./src/app/pages/coloquios/coloquios.module.ts ***!
  \*****************************************************/
/*! exports provided: ColoquiosPageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ColoquiosPageModule", function() { return ColoquiosPageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");
/* harmony import */ var _coloquios_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./coloquios.page */ "./src/app/pages/coloquios/coloquios.page.ts");







var routes = [
    {
        path: '',
        component: _coloquios_page__WEBPACK_IMPORTED_MODULE_6__["ColoquiosPage"]
    }
];
var ColoquiosPageModule = /** @class */ (function () {
    function ColoquiosPageModule() {
    }
    ColoquiosPageModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            imports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
                _ionic_angular__WEBPACK_IMPORTED_MODULE_5__["IonicModule"],
                _angular_router__WEBPACK_IMPORTED_MODULE_4__["RouterModule"].forChild(routes)
            ],
            declarations: [_coloquios_page__WEBPACK_IMPORTED_MODULE_6__["ColoquiosPage"]]
        })
    ], ColoquiosPageModule);
    return ColoquiosPageModule;
}());



/***/ }),

/***/ "./src/app/pages/coloquios/coloquios.page.html":
/*!*****************************************************!*\
  !*** ./src/app/pages/coloquios/coloquios.page.html ***!
  \*****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<ion-header>\n    <ion-toolbar color=\"primary\">\n      <ion-buttons slot=\"start\">\n        <ion-menu-button></ion-menu-button>\n        <ion-back-button color=\"light\" text=\"Volver\"></ion-back-button>\n      </ion-buttons>\n      <ion-title>Coloquios</ion-title>\n    </ion-toolbar>\n  </ion-header>\n  \n  <ion-content>\n\n      <ion-item (click)=\"abrirWeb('https://www.smo.org.mx/','_system')\" >\n          <ion-label class=\"ion-text-wrap\">     \n            <ion-row>\n              <ion-col size=\"4\">\n                  <ion-avatar>\n                      <img class=\"logoSmall\" src=\"../../assets/img/oculoplastica.png\">\n                    </ion-avatar>\n              </ion-col>\n              <ion-col size=\"8\">               \n            <ion-text color=\"secondary\">\n                <ion-text color=\"primary\">         \n                    <h3>1er Diplomado en Enfermería Quirúrgica oftálmica</h3>\n                  </ion-text>\n            </ion-text>\n            <p>Septiembre 2019</p>\n          </ion-col>\n        </ion-row>  \n          </ion-label>\n        </ion-item>\n\n        <ion-item (click)=\"abrirWeb('https://www.smo.org.mx/','_system')\">\n            <ion-label class=\"ion-text-wrap\">     \n              <ion-row>\n                <ion-col size=\"4\">\n                    <ion-avatar>\n                        <img class=\"logoSmall\" src=\"../../assets/img/oculoplastica.png\">\n                      </ion-avatar>\n                </ion-col>\n                <ion-col size=\"8\">               \n              <ion-text color=\"secondary\">\n                  <ion-text color=\"primary\">         \n                      <h3>Trabajos por la Discapacidad Visual</h3>\n                    </ion-text>\n              </ion-text>\n              <p>Septiembre 2019</p>\n            </ion-col>\n          </ion-row>  \n            </ion-label>\n          </ion-item>\n\n\n          <ion-item (click)=\"abrirWeb('https://www.smo.org.mx/','_system')\">\n              <ion-label class=\"ion-text-wrap\">     \n                <ion-row>\n                  <ion-col size=\"4\">\n                      <ion-avatar>\n                          <img class=\"logoSmall\" src=\"../../assets/img/oculoplastica.png\">\n                        </ion-avatar>\n                  </ion-col>\n                  <ion-col size=\"8\">               \n                <ion-text color=\"secondary\">\n                    <ion-text color=\"primary\">         \n                        <h3>5o Curso de Actualización en Enfermedades Inflamatorias Oculares</h3>\n                      </ion-text>\n                </ion-text>\n                <p>20 y 21 de Septiembre 2019</p>\n              </ion-col>\n            </ion-row>  \n              </ion-label>\n            </ion-item>\n  <!--ion-card>\n    <img src=\"../../assets/img/col1.png\" class=\"logoSmall\">\n  </ion-card>\n  <ion-card>\n    <img src=\"../../assets/img/col2.png\" class=\"logoSmall\">\n  </ion-card>\n  <ion-card>\n    <img src=\"../../assets/img/col3.png\" class=\"logoSmall\">\n  </ion-card-->\n  </ion-content>\n  "

/***/ }),

/***/ "./src/app/pages/coloquios/coloquios.page.scss":
/*!*****************************************************!*\
  !*** ./src/app/pages/coloquios/coloquios.page.scss ***!
  \*****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3BhZ2VzL2NvbG9xdWlvcy9jb2xvcXVpb3MucGFnZS5zY3NzIn0= */"

/***/ }),

/***/ "./src/app/pages/coloquios/coloquios.page.ts":
/*!***************************************************!*\
  !*** ./src/app/pages/coloquios/coloquios.page.ts ***!
  \***************************************************/
/*! exports provided: ColoquiosPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ColoquiosPage", function() { return ColoquiosPage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _ionic_native_in_app_browser_ngx__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @ionic-native/in-app-browser/ngx */ "./node_modules/@ionic-native/in-app-browser/ngx/index.js");



var ColoquiosPage = /** @class */ (function () {
    function ColoquiosPage(iab) {
        this.iab = iab;
    }
    ColoquiosPage.prototype.abrirWeb = function (url, target) {
        this.iab.create(url, target);
    };
    ColoquiosPage.prototype.ngOnInit = function () {
    };
    ColoquiosPage = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-coloquios',
            template: __webpack_require__(/*! ./coloquios.page.html */ "./src/app/pages/coloquios/coloquios.page.html"),
            styles: [__webpack_require__(/*! ./coloquios.page.scss */ "./src/app/pages/coloquios/coloquios.page.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_ionic_native_in_app_browser_ngx__WEBPACK_IMPORTED_MODULE_2__["InAppBrowser"]])
    ], ColoquiosPage);
    return ColoquiosPage;
}());



/***/ })

}]);
//# sourceMappingURL=coloquios-coloquios-module.js.map