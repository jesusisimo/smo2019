(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["principal-principal-module"],{

/***/ "./src/app/pages/principal/principal.module.ts":
/*!*****************************************************!*\
  !*** ./src/app/pages/principal/principal.module.ts ***!
  \*****************************************************/
/*! exports provided: PrincipalPageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PrincipalPageModule", function() { return PrincipalPageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");
/* harmony import */ var _principal_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./principal.page */ "./src/app/pages/principal/principal.page.ts");







var routes = [
    {
        path: '',
        component: _principal_page__WEBPACK_IMPORTED_MODULE_6__["PrincipalPage"]
    }
];
var PrincipalPageModule = /** @class */ (function () {
    function PrincipalPageModule() {
    }
    PrincipalPageModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            imports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
                _ionic_angular__WEBPACK_IMPORTED_MODULE_5__["IonicModule"],
                _angular_router__WEBPACK_IMPORTED_MODULE_4__["RouterModule"].forChild(routes)
            ],
            declarations: [_principal_page__WEBPACK_IMPORTED_MODULE_6__["PrincipalPage"]]
        })
    ], PrincipalPageModule);
    return PrincipalPageModule;
}());



/***/ }),

/***/ "./src/app/pages/principal/principal.page.html":
/*!*****************************************************!*\
  !*** ./src/app/pages/principal/principal.page.html ***!
  \*****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<!-- <ion-header>\n\t<ion-toolbar color=\"primary\">\n\t\t<ion-title>PAAO Cancun 2019</ion-title>\n\t</ion-toolbar>\n</ion-header> -->\n\n\n\n<ion-content text-center class=\"icons-basic-page\" >\n\t\t<ion-item color=\"primary\" class=\"banner\">\n\t<img class=\"logoSmall\" color=\"primary\" src=\"../../assets/img/logo_smo_blanco.png\">\n\t</ion-item>\n\t<ion-row>\n\t\t<ion-col>\n\t\t\t\t<ion-buttons (click)=\"validarVista()\" color=\"secondary\" expand=\"full\" shape=\"round\">\n\t\t\t\t\t<img class=\"iconos\" src=\"../../assets/icon/socios.png\">\n\t\t\t\t  </ion-buttons>\n\t\t</ion-col>\n\t\t<ion-col>\n\t\t\t\t<ion-buttons (click)=\"navegarPagina('coloquios')\"expand=\"full\" shape=\"round\">\n\t\t\t\t\t<img class=\"iconos\" src=\"../../assets/icon/coloq.png\">\n\t\t\t\t  </ion-buttons>\n\t\t</ion-col>\n\t\t<ion-col>\n\t\t\t\t<ion-buttons (click)=\"abrirWeb('https://www.smo.org.mx/','_system')\" expand=\"full\" shape=\"round\">\n\t\t\t\t\t\t<img class=\"iconos\" src=\"../../assets/icon/transm.png\">\n\t\t\t\t\t  </ion-buttons>\n\t\t\t\n\t\t</ion-col>\n\t\t<ion-col>\n\t\t\t\t<ion-buttons (click)=\"navegarPagina('congresos')\" expand=\"full\" shape=\"round\">\n\t\t\t\t\t<img class=\"iconos\" src=\"../../assets/icon/congres.png\">\n\t\t\t\t  </ion-buttons>\n\t\t</ion-col>\n\t\t<ion-col>\n\t\t\t\t<ion-buttons (click)=\"navegarPagina('sesiones')\" expand=\"full\" shape=\"round\">\n\t\t\t\t\t<img class=\"iconos\" src=\"../../assets/icon/sesion.png\">\n\t\t\t\t  </ion-buttons>\n\t\t</ion-col>\n\t\t<ion-col>\n\t\t\t\t<ion-buttons (click)=\"abrirWeb('http://www.rmo.com.mx','_system')\" color=\"secondary\" expand=\"full\" shape=\"round\">\n\t\t\t\t\t\t<img class=\"iconos\" src=\"../../assets/icon/REVISTA.png\">\n\t\t\t\t\t  </ion-buttons>\n\t\t</ion-col>\n\t\t<ion-col>\n\t\t\t\t<ion-buttons (click)=\"navegarPagina('mesadirectiva')\" expand=\"full\" shape=\"round\">\n\t\t\t\t\t<img class=\"iconos\" src=\"../../assets/icon/mesa.png\">\n\t\t\t\t  </ion-buttons>\n\t\t</ion-col>\n\t\t<ion-col>\n\t\t\t\t<ion-buttons (click)=\"abrirWeb('https://www.smo.org.mx/solicitud_articulos.php','_system')\"  expand=\"full\" shape=\"round\">\n\t\t\t\t\t\t<img class=\"iconos\" src=\"../../assets/icon/articulos.png\">\n\t\t\t\t\t  </ion-buttons>\n\t\t</ion-col>\n\t\t<ion-col>\n\t\t\t\t<ion-buttons (click)=\"navegarPagina('casos')\"  expand=\"full\" shape=\"round\">\n\t\t\t\t\t<img class=\"iconos\" src=\"../../assets/icon/casos.png\">\n\t\t\t\t  </ion-buttons>\n\t\t</ion-col>\n\t\t<ion-col>\n\t\t\t\t<ion-buttons (click)=\"abrirWeb('https://www.facebook.com/socmexofta/','_system')\" color=\"secondary\" expand=\"full\" shape=\"round\">\n\t\t\t\t\t\t<img class=\"iconos\" src=\"../../assets/icon/redes.png\">\n\t\t\t\t\t  </ion-buttons>\n\t\t</ion-col>\n\n\t\t<ion-col>\n\t\t\t\t<ion-buttons (click)=\"navegarPagina('contacto')\" expand=\"full\" shape=\"round\">\n\t\t\t\t\t<img class=\"iconos\" src=\"../../assets/icon/contact.png\">\n\t\t\t\t  </ion-buttons>\n\t\t</ion-col>\n\n\t\t\n\t</ion-row>\n</ion-content>"

/***/ }),

/***/ "./src/app/pages/principal/principal.page.scss":
/*!*****************************************************!*\
  !*** ./src/app/pages/principal/principal.page.scss ***!
  \*****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ":host ion-content {\n  --background:none;\n  background: url(\"/assets/img/background.jpg\");\n  background-size: cover;\n  background-position: center center;\n  --color: var(--ion-text-color,#fff); }\n\n:host .banner {\n  --padding-top: 13px;\n  --padding-bottom: 7px; }\n\n:host .iconos {\n  size: 1em;\n  padding: 7px; }\n\n:host .icons-basic-page ion-icon {\n  font-size: 60px;\n  /*80px para ios 60 para android*/\n  color: #ffffff; }\n\n:host .icons-basic-page ion-row {\n  flex-wrap: wrap; }\n\n:host .icons-basic-page ion-col {\n  flex: 0 0 33%;\n  max-width: 33%;\n  text-align: center;\n  padding: 10px 5px; }\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9icmIvRG9jdW1lbnRzL0dpdEh1Yi9BUFBfU01PL3Ntby9zcmMvYXBwL3BhZ2VzL3ByaW5jaXBhbC9wcmluY2lwYWwucGFnZS5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBRVEsaUJBQWE7RUFDZiw2Q0FBNEM7RUFDNUMsc0JBQXNCO0VBQ3RCLGtDQUFrQztFQUNyQyxtQ0FBUSxFQUFBOztBQU5YO0VBU0UsbUJBQWM7RUFDZCxxQkFBaUIsRUFBQTs7QUFWbkI7RUFhRSxTQUFTO0VBQ1QsWUFBWSxFQUFBOztBQWRkO0VBa0JHLGVBQWU7RUFBQyxnQ0FBQTtFQUNoQixjQUFjLEVBQUE7O0FBbkJqQjtFQXdCRyxlQUFlLEVBQUE7O0FBeEJsQjtFQTRCRyxhQUFhO0VBQ2IsY0FBYztFQUNkLGtCQUFrQjtFQUNsQixpQkFBaUIsRUFBQSIsImZpbGUiOiJzcmMvYXBwL3BhZ2VzL3ByaW5jaXBhbC9wcmluY2lwYWwucGFnZS5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiOmhvc3Qge1xuICAgIGlvbi1jb250ZW50IHtcbiAgICAgICAgLS1iYWNrZ3JvdW5kOm5vbmU7XG4gICAgICBiYWNrZ3JvdW5kOnVybCgnL2Fzc2V0cy9pbWcvYmFja2dyb3VuZC5qcGcnKTtcbiAgICAgIGJhY2tncm91bmQtc2l6ZTogY292ZXI7XG4gICAgICBiYWNrZ3JvdW5kLXBvc2l0aW9uOiBjZW50ZXIgY2VudGVyO1xuXHQgIC0tY29sb3I6IHZhcigtLWlvbi10ZXh0LWNvbG9yLCNmZmYpO1xuICAgIH1cblx0LmJhbm5lcntcblx0XHQtLXBhZGRpbmctdG9wOiAxM3B4O1xuXHRcdC0tcGFkZGluZy1ib3R0b206IDdweDtcblx0fVxuXHQuaWNvbm9ze1xuXHRcdHNpemU6IDFlbTtcblx0XHRwYWRkaW5nOiA3cHg7XG5cdH1cblx0Lmljb25zLWJhc2ljLXBhZ2Uge1xuXHRcdGlvbi1pY29uIHtcblx0XHRcdGZvbnQtc2l6ZTogNjBweDsvKjgwcHggcGFyYSBpb3MgNjAgcGFyYSBhbmRyb2lkKi9cblx0XHRcdGNvbG9yOiAjZmZmZmZmO1xuXHRcdH1cblxuXHRcdGlvbi1yb3cge1xuXHRcdFx0XG5cdFx0XHRmbGV4LXdyYXA6IHdyYXA7XG5cdFx0fVxuXG5cdFx0aW9uLWNvbCB7XG5cdFx0XHRmbGV4OiAwIDAgMzMlO1xuXHRcdFx0bWF4LXdpZHRoOiAzMyU7XG5cdFx0XHR0ZXh0LWFsaWduOiBjZW50ZXI7XG5cdFx0XHRwYWRkaW5nOiAxMHB4IDVweDtcblx0XHR9XG5cdH1cblx0XG59Il19 */"

/***/ }),

/***/ "./src/app/pages/principal/principal.page.ts":
/*!***************************************************!*\
  !*** ./src/app/pages/principal/principal.page.ts ***!
  \***************************************************/
/*! exports provided: PrincipalPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PrincipalPage", function() { return PrincipalPage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");
/* harmony import */ var _ionic_native_in_app_browser_ngx__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @ionic-native/in-app-browser/ngx */ "./node_modules/@ionic-native/in-app-browser/ngx/index.js");
/* harmony import */ var src_app_services_usuario_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! src/app/services/usuario.service */ "./src/app/services/usuario.service.ts");
/* harmony import */ var src_app_services_ajustes_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! src/app/services/ajustes.service */ "./src/app/services/ajustes.service.ts");
/* harmony import */ var _ionic_native_file_opener_ngx__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @ionic-native/file-opener/ngx */ "./node_modules/@ionic-native/file-opener/ngx/index.js");
/* harmony import */ var _ionic_native_document_viewer_ngx__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @ionic-native/document-viewer/ngx */ "./node_modules/@ionic-native/document-viewer/ngx/index.js");
/* harmony import */ var _ionic_native_file_ngx__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @ionic-native/file/ngx */ "./node_modules/@ionic-native/file/ngx/index.js");
/* harmony import */ var _ionic_native_file_transfer_ngx__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @ionic-native/file-transfer/ngx */ "./node_modules/@ionic-native/file-transfer/ngx/index.js");










var PrincipalPage = /** @class */ (function () {
    function PrincipalPage(navCtrl, iab, _us, _as, platform, file, ft, fileOpener, document, alert) {
        this.navCtrl = navCtrl;
        this.iab = iab;
        this._us = _us;
        this._as = _as;
        this.platform = platform;
        this.file = file;
        this.ft = ft;
        this.fileOpener = fileOpener;
        this.document = document;
        this.alert = alert;
    }
    PrincipalPage.prototype.navegarPagina = function (pagina) {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function () {
            var _a;
            return tslib__WEBPACK_IMPORTED_MODULE_0__["__generator"](this, function (_b) {
                switch (_b.label) {
                    case 0:
                        console.log(pagina);
                        _a = (pagina == "agenda" || pagina == "congresistas");
                        if (!_a) return [3 /*break*/, 2];
                        return [4 /*yield*/, this._us.tienePermiso()];
                    case 1:
                        _a = !(_b.sent());
                        _b.label = 2;
                    case 2:
                        if (_a) {
                            this._as.presentAlert("Inicia sesión para ver esta sección");
                            this.navCtrl.navigateRoot('/tabs/login');
                        }
                        else {
                            this.navCtrl.navigateForward('/tabs/principal/' + pagina);
                        }
                        return [2 /*return*/];
                }
            });
        });
    };
    PrincipalPage.prototype.validarVista = function () {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function () {
            var existe;
            return tslib__WEBPACK_IMPORTED_MODULE_0__["__generator"](this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this._us.existeToken()];
                    case 1:
                        existe = _a.sent();
                        if (existe) {
                            console.log("dirigir a user");
                            this.navCtrl.navigateRoot('/tabs/login/usuario');
                        }
                        else {
                            console.log("dirigir a log");
                            this.navCtrl.navigateRoot('/tabs/login');
                        }
                        return [2 /*return*/];
                }
            });
        });
    };
    PrincipalPage.prototype.abrirWeb = function (url, target) {
        this.iab.create(url, target);
    };
    PrincipalPage.prototype.openLocalPdf = function () {
        var _this = this;
        var filePath = this.file.applicationDirectory + 'www/assets';
        if (this.platform.is('android')) {
            var fakeName = Date.now();
            this.file.copyFile(filePath, 'programa_final.pdf', this.file.dataDirectory, fakeName + ".pdf").then(function (result) {
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
            this.document.viewDocument(filePath + "/programa_final.pdf", 'application/pdf', options);
        }
    };
    PrincipalPage.prototype.downloadAndOpenPdf = function () {
        var _this = this;
        var downloadUrl = 'http://www.paaocancun2019.com/wp-content/uploads/2019/05/programa_paao2.pdf';
        var path = this.file.dataDirectory;
        var transfer = this.ft.create();
        transfer.download(downloadUrl, path + 'programa.pdf').then(function (entry) {
            var url = entry.toURL();
            if (_this.platform.is('ios')) {
                _this.document.viewDocument(url, 'application/pdf', {});
            }
            else {
                _this.fileOpener.open(url, 'application/pdf')
                    .then(function () { return console.log('File is opened'); })
                    .catch(function (e) { return console.log('Error opening file', e); });
            }
        });
    };
    PrincipalPage = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-principal',
            template: __webpack_require__(/*! ./principal.page.html */ "./src/app/pages/principal/principal.page.html"),
            styles: [__webpack_require__(/*! ./principal.page.scss */ "./src/app/pages/principal/principal.page.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_ionic_angular__WEBPACK_IMPORTED_MODULE_2__["NavController"],
            _ionic_native_in_app_browser_ngx__WEBPACK_IMPORTED_MODULE_3__["InAppBrowser"],
            src_app_services_usuario_service__WEBPACK_IMPORTED_MODULE_4__["UsuarioService"],
            src_app_services_ajustes_service__WEBPACK_IMPORTED_MODULE_5__["AjustesService"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["Platform"],
            _ionic_native_file_ngx__WEBPACK_IMPORTED_MODULE_8__["File"],
            _ionic_native_file_transfer_ngx__WEBPACK_IMPORTED_MODULE_9__["FileTransfer"],
            _ionic_native_file_opener_ngx__WEBPACK_IMPORTED_MODULE_6__["FileOpener"],
            _ionic_native_document_viewer_ngx__WEBPACK_IMPORTED_MODULE_7__["DocumentViewer"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["AlertController"]])
    ], PrincipalPage);
    return PrincipalPage;
}());



/***/ })

}]);
//# sourceMappingURL=principal-principal-module.js.map