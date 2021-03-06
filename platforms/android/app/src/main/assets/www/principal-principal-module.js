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

module.exports = "<!-- <ion-header>\n\t<ion-toolbar color=\"primary\">\n\t\t<ion-title>PAAO Cancun 2019</ion-title>\n\t</ion-toolbar>\n</ion-header> -->\n\n\n\n<ion-content text-center class=\"icons-basic-page\" >\n\t\t<ion-item color=\"primary\" class=\"banner\">\n\t<img class=\"logoSmall\" color=\"primary\" src=\"../../assets/img/logo_smo_blanco.png\">\n\t</ion-item>\n\t<ion-row>\n\t\t<ion-col>\n\t\t\t\t<ion-buttons (click)=\"validarVista()\" color=\"secondary\" expand=\"full\" shape=\"round\">\n\t\t\t\t\t<img class=\"iconos\" src=\"../../assets/icon/socios.png\">\n\t\t\t\t  </ion-buttons>\n\t\t</ion-col>\n\t\t<ion-col>\n\t\t\t\t<ion-buttons (click)=\"navegarPagina('coloquios')\"expand=\"full\" shape=\"round\">\n\t\t\t\t\t<img class=\"iconos\" src=\"../../assets/icon/coloq.png\">\n\t\t\t\t  </ion-buttons>\n\t\t</ion-col>\n\t\t<ion-col>\n\t\t\t\t<ion-buttons (click)=\"navegarPagina('transm-lista')\" expand=\"full\" shape=\"round\">\n\t\t\t\t\t\t<img class=\"iconos\" src=\"../../assets/icon/transm.png\">\n\t\t\t\t\t  </ion-buttons>\n\t\t\t\n\t\t</ion-col>\n\t\t<ion-col *ngIf=\"congreso\">\n\t\t\t\t<ion-buttons (click)=\"navegarPagina('congresos')\" expand=\"full\" shape=\"round\">\n\t\t\t\t\t<img class=\"iconos\" src=\"{{icono}}\">\n\t\t\t\t  </ion-buttons>\n\t\t</ion-col>\n\t\t<ion-col>\n\t\t\t\t<ion-buttons (click)=\"navegarPagina('sesiones')\" expand=\"full\" shape=\"round\">\n\t\t\t\t\t<img class=\"iconos\" src=\"../../assets/icon/sesion.png\">\n\t\t\t\t  </ion-buttons>\n\t\t</ion-col>\n\t\t<ion-col>\n\t\t\t<ion-buttons  (click)=\"navegarPagina('webinars')\" color=\"secondary\" expand=\"full\" shape=\"round\">\n\t\t\t\t\t<img class=\"iconos\" src=\"../../assets/icon/webinars.png\">\n\t\t\t\t  </ion-buttons>\n\t</ion-col>\n\t<ion-col>\n\t\t<ion-buttons  (click)=\"navegarPagina('comunicados')\" color=\"secondary\" expand=\"full\" shape=\"round\">\n\t\t\t\t<img class=\"iconos\" src=\"../../assets/icon/comunicados.png\">\n\t\t\t  </ion-buttons>\n</ion-col>\n<ion-col>\n\t<ion-buttons  (click)=\"navegarPagina('seguro')\" color=\"secondary\" expand=\"full\" shape=\"round\">\n\t\t\t<img class=\"iconos\" src=\"../../assets/icon/seguro.png\">\n\t\t  </ion-buttons>\n</ion-col>\n<ion-col>\n\t<ion-buttons (click)=\"abrirWeb('http://www.rmo.com.mx','_system')\" color=\"secondary\" expand=\"full\" shape=\"round\">\n\t\t\t<img class=\"iconos\" src=\"../../assets/icon/REVISTA.png\">\n\t\t  </ion-buttons>\n</ion-col>\n\t\t<ion-col>\n\t\t\t\t<ion-buttons (click)=\"navegarPagina('mesadirectiva')\" expand=\"full\" shape=\"round\">\n\t\t\t\t\t<img class=\"iconos\" src=\"../../assets/icon/mesa.png\">\n\t\t\t\t  </ion-buttons>\n\t\t</ion-col>\n\t\t<ion-col>\n\t\t\t\t<ion-buttons (click)=\"abrirWeb('https://www.smo.org.mx/solicitud_articulos.php','_system')\"  expand=\"full\" shape=\"round\">\n\t\t\t\t\t\t<img class=\"iconos\" src=\"../../assets/icon/articulos.png\">\n\t\t\t\t\t  </ion-buttons>\n\t\t</ion-col>\n\t\t<ion-col>\n\t\t\t<ion-buttons (click)=\"navegarPagina('bienvenida')\"   expand=\"full\" shape=\"round\">\n\t\t\t\t\t<img class=\"iconos\" src=\"../../assets/icon/abre.png\">\n\t\t\t\t  </ion-buttons>\n\t\t</ion-col>\n\t\t<ion-col>\n\t\t\t\t<ion-buttons (click)=\"navegarPagina('lista')\"  expand=\"full\" shape=\"round\">\n\t\t\t\t\t<img class=\"iconos\" src=\"../../assets/icon/casos.png\">\n\t\t\t\t  </ion-buttons>\n\t\t</ion-col>\n\t\t<ion-col>\n\t\t\t\t<ion-buttons (click)=\"abrirWeb('https://www.facebook.com/socmexofta/','_system')\" color=\"secondary\" expand=\"full\" shape=\"round\">\n\t\t\t\t\t\t<img class=\"iconos\" src=\"../../assets/icon/redes.png\">\n\t\t\t\t\t  </ion-buttons>\n\t\t</ion-col>\n\n\t\t<ion-col>\n\t\t\t\t<ion-buttons (click)=\"navegarPagina('contacto')\" expand=\"full\" shape=\"round\">\n\t\t\t\t\t<img class=\"iconos\" src=\"../../assets/icon/contact.png\">\n\t\t\t\t  </ion-buttons>\n\t\t</ion-col>\n\n\t\t\n\t</ion-row>\n</ion-content>"

/***/ }),

/***/ "./src/app/pages/principal/principal.page.scss":
/*!*****************************************************!*\
  !*** ./src/app/pages/principal/principal.page.scss ***!
  \*****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ":host ion-content {\n  --background:none;\n  background: url(\"/assets/img/background.jpg\");\n  background-size: cover;\n  background-position: center center;\n  --color: var(--ion-text-color,#fff); }\n\n:host .banner {\n  --padding-top: 35px;\n  --padding-bottom: 7px; }\n\n:host .iconos {\n  size: 1em;\n  padding: 7px; }\n\n:host .icons-basic-page ion-icon {\n  font-size: 80px;\n  /*80px para ios 60 para android*/\n  color: #ffffff; }\n\n:host .icons-basic-page ion-row {\n  flex-wrap: wrap; }\n\n:host .icons-basic-page ion-col {\n  flex: 0 0 33%;\n  max-width: 33%;\n  text-align: center;\n  padding: 10px 5px; }\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9qY2lubm92YXRpb24vSkMgSW5ub3ZhdGlvbiBEcm9wYm94L0plc3XMgXMgQ3VldmFzL01pIE1hYyAoTWFjQm9vay1Qcm8tZGUtSkMtSW5ub3ZhdGlvbi5sb2NhbCkvRG9jdW1lbnRzL0dpdEh1Yi9zbW8yMDE5L3NyYy9hcHAvcGFnZXMvcHJpbmNpcGFsL3ByaW5jaXBhbC5wYWdlLnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFFUSxpQkFBYTtFQUNmLDZDQUE0QztFQUM1QyxzQkFBc0I7RUFDdEIsa0NBQWtDO0VBQ3JDLG1DQUFRLEVBQUE7O0FBTlg7RUFTRSxtQkFBYztFQUNkLHFCQUFpQixFQUFBOztBQVZuQjtFQWFFLFNBQVM7RUFDVCxZQUFZLEVBQUE7O0FBZGQ7RUFrQkcsZUFBZTtFQUFDLGdDQUFBO0VBQ2hCLGNBQWMsRUFBQTs7QUFuQmpCO0VBd0JHLGVBQWUsRUFBQTs7QUF4QmxCO0VBNEJHLGFBQWE7RUFDYixjQUFjO0VBQ2Qsa0JBQWtCO0VBQ2xCLGlCQUFpQixFQUFBIiwiZmlsZSI6InNyYy9hcHAvcGFnZXMvcHJpbmNpcGFsL3ByaW5jaXBhbC5wYWdlLnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyI6aG9zdCB7XG4gICAgaW9uLWNvbnRlbnQge1xuICAgICAgICAtLWJhY2tncm91bmQ6bm9uZTtcbiAgICAgIGJhY2tncm91bmQ6dXJsKCcvYXNzZXRzL2ltZy9iYWNrZ3JvdW5kLmpwZycpO1xuICAgICAgYmFja2dyb3VuZC1zaXplOiBjb3ZlcjtcbiAgICAgIGJhY2tncm91bmQtcG9zaXRpb246IGNlbnRlciBjZW50ZXI7XG5cdCAgLS1jb2xvcjogdmFyKC0taW9uLXRleHQtY29sb3IsI2ZmZik7XG4gICAgfVxuXHQuYmFubmVye1xuXHRcdC0tcGFkZGluZy10b3A6IDM1cHg7XG5cdFx0LS1wYWRkaW5nLWJvdHRvbTogN3B4O1xuXHR9XG5cdC5pY29ub3N7XG5cdFx0c2l6ZTogMWVtO1xuXHRcdHBhZGRpbmc6IDdweDtcblx0fVxuXHQuaWNvbnMtYmFzaWMtcGFnZSB7XG5cdFx0aW9uLWljb24ge1xuXHRcdFx0Zm9udC1zaXplOiA4MHB4Oy8qODBweCBwYXJhIGlvcyA2MCBwYXJhIGFuZHJvaWQqL1xuXHRcdFx0Y29sb3I6ICNmZmZmZmY7XG5cdFx0fVxuXG5cdFx0aW9uLXJvdyB7XG5cdFx0XHRcblx0XHRcdGZsZXgtd3JhcDogd3JhcDtcblx0XHR9XG5cblx0XHRpb24tY29sIHtcblx0XHRcdGZsZXg6IDAgMCAzMyU7XG5cdFx0XHRtYXgtd2lkdGg6IDMzJTtcblx0XHRcdHRleHQtYWxpZ246IGNlbnRlcjtcblx0XHRcdHBhZGRpbmc6IDEwcHggNXB4O1xuXHRcdH1cblx0fVxuXHRcbn0iXX0= */"

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









var PrincipalPage = /** @class */ (function () {
    function PrincipalPage(navCtrl, iab, _us, _as, platform, file, fileOpener, document, alert) {
        this.navCtrl = navCtrl;
        this.iab = iab;
        this._us = _us;
        this._as = _as;
        this.platform = platform;
        this.file = file;
        this.fileOpener = fileOpener;
        this.document = document;
        this.alert = alert;
        this.congreso = false;
        this.icono = "https://www.wsbrb-services.com/appsmo/servicios/";
    }
    PrincipalPage.prototype.ngOnInit = function () {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function () {
            var _a, _b;
            return tslib__WEBPACK_IMPORTED_MODULE_0__["__generator"](this, function (_c) {
                switch (_c.label) {
                    case 0:
                        _a = this;
                        return [4 /*yield*/, this._as.congreso()];
                    case 1:
                        _a.congreso = _c.sent();
                        if (!this.congreso) return [3 /*break*/, 3];
                        _b = this;
                        return [4 /*yield*/, this._as.getCongreso()];
                    case 2:
                        _b.congresos = _c.sent();
                        this.icono = this.congresos.icono;
                        _c.label = 3;
                    case 3: return [2 /*return*/];
                }
            });
        });
    };
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
            _ionic_native_file_opener_ngx__WEBPACK_IMPORTED_MODULE_6__["FileOpener"],
            _ionic_native_document_viewer_ngx__WEBPACK_IMPORTED_MODULE_7__["DocumentViewer"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["AlertController"]])
    ], PrincipalPage);
    return PrincipalPage;
}());



/***/ }),

/***/ "./src/app/services/usuario.service.ts":
/*!*********************************************!*\
  !*** ./src/app/services/usuario.service.ts ***!
  \*********************************************/
/*! exports provided: UsuarioService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "UsuarioService", function() { return UsuarioService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _ionic_storage__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @ionic/storage */ "./node_modules/@ionic/storage/fesm5/ionic-storage.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var _config_url_servicios__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../config/url.servicios */ "./src/app/config/url.servicios.ts");
/* harmony import */ var _ajustes_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./ajustes.service */ "./src/app/services/ajustes.service.ts");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");







var UsuarioService = /** @class */ (function () {
    function UsuarioService(storage, http, _as, navCtrl) {
        this.storage = storage;
        this.http = http;
        this._as = _as;
        this.navCtrl = navCtrl;
        this.token = null;
        this.usuario = {};
    }
    UsuarioService.prototype.login = function (email, password) {
        var _this = this;
        var data = { email: email, password: password };
        var url = _config_url_servicios__WEBPACK_IMPORTED_MODULE_4__["URL_SERVICIOS"] + "/login.php";
        return new Promise(function (resolve) {
            _this.http.post(url, data).subscribe(function (resp) {
                console.log(resp);
                if (!resp['error']) {
                    _this.guardarToken(resp['token']);
                    resolve(true);
                }
                else {
                    _this._as.presentAlert(resp['mensaje']);
                    _this.token = null;
                    _this.storage.remove('token');
                    resolve(false);
                }
            });
        });
    };
    UsuarioService.prototype.registro = function (usuario) {
        var _this = this;
        var url = _config_url_servicios__WEBPACK_IMPORTED_MODULE_4__["URL_SERVICIOS"] + "/registro.php";
        return new Promise(function (resolve) {
            _this.http.post(url, usuario).subscribe(function (resp) {
                console.log(resp);
                if (!resp['error']) {
                    _this.guardarToken(resp['token']);
                    resolve(true);
                }
                else {
                    _this._as.presentAlert(resp['mensaje']);
                    _this.token = null;
                    _this.storage.remove('token');
                    resolve(false);
                }
            });
        });
    };
    UsuarioService.prototype.getUsuario = function () {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function () {
            return tslib__WEBPACK_IMPORTED_MODULE_0__["__generator"](this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this.validaToken()];
                    case 1:
                        _a.sent();
                        return [4 /*yield*/, tslib__WEBPACK_IMPORTED_MODULE_0__["__assign"]({}, this.usuario)];
                    case 2: return [2 /*return*/, _a.sent()];
                }
            });
        });
    };
    UsuarioService.prototype.guardarToken = function (token) {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function () {
            return tslib__WEBPACK_IMPORTED_MODULE_0__["__generator"](this, function (_a) {
                switch (_a.label) {
                    case 0:
                        this.token = token;
                        return [4 /*yield*/, this.storage.set('token', token)];
                    case 1:
                        _a.sent();
                        return [2 /*return*/];
                }
            });
        });
    };
    UsuarioService.prototype.cargarToken = function () {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function () {
            var _a;
            return tslib__WEBPACK_IMPORTED_MODULE_0__["__generator"](this, function (_b) {
                switch (_b.label) {
                    case 0:
                        _a = this;
                        return [4 /*yield*/, this.storage.get('token')];
                    case 1:
                        _a.token = (_b.sent()) || null;
                        return [2 /*return*/];
                }
            });
        });
    };
    UsuarioService.prototype.existeToken = function () {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function () {
            return tslib__WEBPACK_IMPORTED_MODULE_0__["__generator"](this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this.cargarToken()];
                    case 1:
                        _a.sent();
                        if (!this.token) {
                            console.log("No existe token");
                            return [2 /*return*/, Promise.resolve(false)];
                        }
                        else {
                            console.log("Si existe token");
                            return [2 /*return*/, Promise.resolve(true)];
                        }
                        return [2 /*return*/];
                }
            });
        });
    };
    UsuarioService.prototype.tienePermiso = function () {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function () {
            return tslib__WEBPACK_IMPORTED_MODULE_0__["__generator"](this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this.cargarToken()];
                    case 1:
                        _a.sent();
                        if (!this.token) {
                            //this._as.presentAlert("Ir a mi perfil para registrarme");
                            return [2 /*return*/, Promise.resolve(false)];
                        }
                        else {
                            console.log("Si existe token");
                            return [2 /*return*/, Promise.resolve(true)];
                        }
                        return [2 /*return*/];
                }
            });
        });
    };
    UsuarioService.prototype.validaToken = function () {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function () {
            var _this = this;
            return tslib__WEBPACK_IMPORTED_MODULE_0__["__generator"](this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this.cargarToken()];
                    case 1:
                        _a.sent();
                        if (!this.token) {
                            this.navCtrl.navigateRoot('/tabs/login');
                            return [2 /*return*/, Promise.resolve(false)];
                        }
                        return [2 /*return*/, new Promise(function (resolve) {
                                var url = _config_url_servicios__WEBPACK_IMPORTED_MODULE_4__["URL_SERVICIOS"] + "/usuario.php";
                                var data = { token: _this.token };
                                _this.http.post(url, data)
                                    .subscribe(function (resp) {
                                    if (resp['id']) {
                                        _this.usuario = resp;
                                        resolve(true);
                                    }
                                    else {
                                        _this.navCtrl.navigateRoot('/tabs/login');
                                        resolve(false);
                                    }
                                });
                            })];
                }
            });
        });
    };
    UsuarioService.prototype.logout = function () {
        this.token = null;
        this.usuario = null;
        this.storage.remove('token');
        this.navCtrl.navigateRoot('/tabs/login', { animated: true });
    };
    UsuarioService.prototype.actualizarUsuario = function (usuario) {
        var _this = this;
        return new Promise(function (resolve) {
            var url = _config_url_servicios__WEBPACK_IMPORTED_MODULE_4__["URL_SERVICIOS"] + "/updateuser.php";
            _this.http.post(url, usuario)
                .subscribe(function (resp) {
                if (resp['success']) {
                    resolve(true);
                }
                else {
                    resolve(false);
                }
            });
        });
    };
    UsuarioService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
            providedIn: 'root'
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_ionic_storage__WEBPACK_IMPORTED_MODULE_2__["Storage"],
            _angular_common_http__WEBPACK_IMPORTED_MODULE_3__["HttpClient"],
            _ajustes_service__WEBPACK_IMPORTED_MODULE_5__["AjustesService"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_6__["NavController"]])
    ], UsuarioService);
    return UsuarioService;
}());



/***/ })

}]);
//# sourceMappingURL=principal-principal-module.js.map