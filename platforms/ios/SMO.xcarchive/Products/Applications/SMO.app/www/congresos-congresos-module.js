(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["congresos-congresos-module"],{

/***/ "./src/app/pages/congresos/congresos.module.ts":
/*!*****************************************************!*\
  !*** ./src/app/pages/congresos/congresos.module.ts ***!
  \*****************************************************/
/*! exports provided: CongresosPageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CongresosPageModule", function() { return CongresosPageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");
/* harmony import */ var _congresos_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./congresos.page */ "./src/app/pages/congresos/congresos.page.ts");







var routes = [
    {
        path: '',
        component: _congresos_page__WEBPACK_IMPORTED_MODULE_6__["CongresosPage"]
    }
];
var CongresosPageModule = /** @class */ (function () {
    function CongresosPageModule() {
    }
    CongresosPageModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            imports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
                _ionic_angular__WEBPACK_IMPORTED_MODULE_5__["IonicModule"],
                _angular_router__WEBPACK_IMPORTED_MODULE_4__["RouterModule"].forChild(routes)
            ],
            declarations: [_congresos_page__WEBPACK_IMPORTED_MODULE_6__["CongresosPage"]]
        })
    ], CongresosPageModule);
    return CongresosPageModule;
}());



/***/ }),

/***/ "./src/app/pages/congresos/congresos.page.html":
/*!*****************************************************!*\
  !*** ./src/app/pages/congresos/congresos.page.html ***!
  \*****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<ion-header>\n    <ion-toolbar color=\"primary\">\n      <ion-buttons slot=\"start\">\n        <ion-menu-button></ion-menu-button>\n        <ion-back-button color=\"light\" text=\"Volver\"></ion-back-button>\n      </ion-buttons>\n      <ion-title>{{titulo}}</ion-title>\n    </ion-toolbar>\n  </ion-header>\n  \n  <ion-content>\n      <ion-card>\n        <ion-card-header>\n          <ion-card-title class=\"ion-text-center\" color=\"primary\">{{descripcion}}</ion-card-title>\n        </ion-card-header>\n        <img   src=\"{{poster}}\" (click)=\"abrirWeb(poster,'_system')\" >\n        <ion-item color=\"primary\" (click)=\"abrirWeb(url,'_system')\">\n          <ion-buttons expand=\"full\" class=\"text-center\">\n          <h4>{{url}}</h4>\n        </ion-buttons>\n        </ion-item>\n        <br>\n\n        </ion-card>\n        <ion-card>\n        <iframe  width=\"100%\" height=\"315\" src=\"https://player.vimeo.com/video/512598159\" frameborder=\"0\" allowfullscreen></iframe>\n      </ion-card>\n  </ion-content>\n  \n  "

/***/ }),

/***/ "./src/app/pages/congresos/congresos.page.scss":
/*!*****************************************************!*\
  !*** ./src/app/pages/congresos/congresos.page.scss ***!
  \*****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "h4 {\n  font-size: 15px; }\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9qY2lubm92YXRpb24vSkMgSW5ub3ZhdGlvbiBEcm9wYm94L0plc3XMgXMgQ3VldmFzL01pIE1hYyAoTWFjQm9vay1Qcm8tZGUtSkMtSW5ub3ZhdGlvbi5sb2NhbCkvRG9jdW1lbnRzL0dpdEh1Yi9zbW8yMDE5L3NyYy9hcHAvcGFnZXMvY29uZ3Jlc29zL2NvbmdyZXNvcy5wYWdlLnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDRyxlQUFlLEVBQUEiLCJmaWxlIjoic3JjL2FwcC9wYWdlcy9jb25ncmVzb3MvY29uZ3Jlc29zLnBhZ2Uuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbImg0e1xuICAgZm9udC1zaXplOiAxNXB4O1xufVxuIl19 */"

/***/ }),

/***/ "./src/app/pages/congresos/congresos.page.ts":
/*!***************************************************!*\
  !*** ./src/app/pages/congresos/congresos.page.ts ***!
  \***************************************************/
/*! exports provided: CongresosPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CongresosPage", function() { return CongresosPage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _ionic_native_photo_viewer_ngx__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @ionic-native/photo-viewer/ngx */ "./node_modules/@ionic-native/photo-viewer/ngx/index.js");
/* harmony import */ var _ionic_native_file_ngx__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @ionic-native/file/ngx */ "./node_modules/@ionic-native/file/ngx/index.js");
/* harmony import */ var _ionic_native_in_app_browser_ngx__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ionic-native/in-app-browser/ngx */ "./node_modules/@ionic-native/in-app-browser/ngx/index.js");
/* harmony import */ var src_app_services_ajustes_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! src/app/services/ajustes.service */ "./src/app/services/ajustes.service.ts");






var CongresosPage = /** @class */ (function () {
    function CongresosPage(photoViewer, iab, file, _as) {
        this.photoViewer = photoViewer;
        this.iab = iab;
        this.file = file;
        this._as = _as;
        this.titulo = "Congreso";
        this.url = "";
        this.poster = "";
        this.descripcion = "";
    }
    CongresosPage.prototype.ngOnInit = function () {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function () {
            var _a;
            return tslib__WEBPACK_IMPORTED_MODULE_0__["__generator"](this, function (_b) {
                switch (_b.label) {
                    case 0:
                        _a = this;
                        return [4 /*yield*/, this._as.getCongreso()];
                    case 1:
                        _a.congreso = _b.sent();
                        this.url = this.congreso.url;
                        this.titulo = this.congreso.titulo;
                        this.poster = this.congreso.imagen;
                        this.descripcion = this.congreso.descripcion;
                        return [2 /*return*/];
                }
            });
        });
    };
    CongresosPage.prototype.viewPhoto = function (img) {
        var imageName = img;
        this.photoViewer.show(this.file.applicationDirectory + "www/assets/img/" + imageName, "Esquema");
    };
    CongresosPage.prototype.abrirWeb = function (url, target) {
        this.iab.create(url, target);
    };
    CongresosPage = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-congresos',
            template: __webpack_require__(/*! ./congresos.page.html */ "./src/app/pages/congresos/congresos.page.html"),
            styles: [__webpack_require__(/*! ./congresos.page.scss */ "./src/app/pages/congresos/congresos.page.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_ionic_native_photo_viewer_ngx__WEBPACK_IMPORTED_MODULE_2__["PhotoViewer"],
            _ionic_native_in_app_browser_ngx__WEBPACK_IMPORTED_MODULE_4__["InAppBrowser"],
            _ionic_native_file_ngx__WEBPACK_IMPORTED_MODULE_3__["File"],
            src_app_services_ajustes_service__WEBPACK_IMPORTED_MODULE_5__["AjustesService"]])
    ], CongresosPage);
    return CongresosPage;
}());



/***/ })

}]);
//# sourceMappingURL=congresos-congresos-module.js.map