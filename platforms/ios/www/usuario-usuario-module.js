(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["usuario-usuario-module"],{

/***/ "./src/app/pages/usuario/usuario.module.ts":
/*!*************************************************!*\
  !*** ./src/app/pages/usuario/usuario.module.ts ***!
  \*************************************************/
/*! exports provided: UsuarioPageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "UsuarioPageModule", function() { return UsuarioPageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");
/* harmony import */ var _usuario_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./usuario.page */ "./src/app/pages/usuario/usuario.page.ts");







var routes = [
    {
        path: '',
        component: _usuario_page__WEBPACK_IMPORTED_MODULE_6__["UsuarioPage"]
    }
];
var UsuarioPageModule = /** @class */ (function () {
    function UsuarioPageModule() {
    }
    UsuarioPageModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            imports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
                _ionic_angular__WEBPACK_IMPORTED_MODULE_5__["IonicModule"],
                _angular_router__WEBPACK_IMPORTED_MODULE_4__["RouterModule"].forChild(routes)
            ],
            declarations: [_usuario_page__WEBPACK_IMPORTED_MODULE_6__["UsuarioPage"]]
        })
    ], UsuarioPageModule);
    return UsuarioPageModule;
}());



/***/ }),

/***/ "./src/app/pages/usuario/usuario.page.html":
/*!*************************************************!*\
  !*** ./src/app/pages/usuario/usuario.page.html ***!
  \*************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<ion-header no-border >\n  <ion-toolbar color=\"primary\">\n      \n    <ion-buttons slot=\"end\">Salir \n      <ion-button (click)=\"logout()\"\n                  color=\"light\">\n        <ion-icon slot=\"icon-only\" name=\"exit\"></ion-icon>\n      </ion-button>\n    </ion-buttons>\n  </ion-toolbar>\n</ion-header>\n\n<ion-content class=\"background\">\n\n\n    <ion-card color=\"primary\">\n      <ion-card-content>\n        <ion-avatar>\n          <img id=\"perfil\" src=\"{{ usuario.avatar }}\">\n        </ion-avatar>\n        <br>  \n            <ion-card-title text-center>{{ usuario.nombre }} {{ usuario.apellidos }}</ion-card-title>\n            <p text-center>{{ usuario.categoria }} | {{ usuario.email }}</p>\n        </ion-card-content> \n    </ion-card>\n    <ion-card>\n        <ion-card-content>\n            <ion-card-title text-center>Anualidades</ion-card-title>\n            <ion-row>\n                <ion-col size=\"4\" text-center>\n                    <ion-label>2017</ion-label><br>\n                    <ion-toggle  checked=\"{{usuario.an2017}}\" color=\"primary\"></ion-toggle>\n                  </ion-col>\n                  <ion-col size=\"4\" text-center>\n                      <ion-label>2018</ion-label><br>\n                      <ion-toggle  checked=\"{{usuario.an2018}}\" color=\"primary\"></ion-toggle>\n                    </ion-col>\n                    <ion-col size=\"4\" text-center>\n                      <ion-label>2019</ion-label><br>\n                      <ion-toggle  checked=\"{{usuario.an2019}}\" color=\"primary\"></ion-toggle>\n                    </ion-col>\n                    <ion-col size=\"4\" text-center>\n                      <ion-label>2020</ion-label><br>\n                      <ion-toggle  checked=\"{{usuario.an2020}}\" color=\"primary\"></ion-toggle>\n                    </ion-col>\n            </ion-row>\n    </ion-card-content>\n        </ion-card>\n    <ion-card color=\"light\">\n      <ion-row>\n        <ion-col size=\"6\">\n          <ion-item (click)=\"abrirWeb('https://smo.org.mx/archivos/documentos/ESTATUTO%20Final%20abril%202017.pdf','_system')\">           \n                  <p>Reglamento <br> y estatuto</p> \n                  <ion-icon slot=\"end\" name=\"bookmark\"></ion-icon>\n          </ion-item>  \n        </ion-col>\n        <ion-col size=\"6\">\n          <ion-item (click)=\"abrirWeb('https://smo.org.mx/archivos/smonline/smonline_busqueda.php','_system')\" >\n              <p>Artículos <br> de revistas</p>\n                  <ion-icon slot=\"end\" name=\"today\"></ion-icon>\n          </ion-item>         \n        </ion-col>\n        \n      </ion-row> \n    </ion-card>\n   \n  </ion-content>"

/***/ }),

/***/ "./src/app/pages/usuario/usuario.page.scss":
/*!*************************************************!*\
  !*** ./src/app/pages/usuario/usuario.page.scss ***!
  \*************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "ion-content.background {\n  --background: url('perfilBck.png') 0 0/100% 100% no-repeat; }\n\nion-avatar {\n  border: 1px solid rgba(0, 0, 0, 0.25);\n  padding: 3px;\n  border-radius: 100%;\n  box-sizing: content-box;\n  margin: 0 auto;\n  width: 128px;\n  height: 128px;\n  overflow: hidden; }\n\n.perfil img {\n  width: 128px;\n  border-radius: 100%; }\n\n.centerButton {\n  padding-left: 20px;\n  padding-right: 20px; }\n\n.buttoncolor {\n  background-color: antiquewhite; }\n\n.centerText {\n  padding-left: 200px; }\n\n.center {\n  padding-left: 75px;\n  padding-right: 75px; }\n\nion-item, ion-segment {\n  border: 2px;\n  border-color: #006;\n  border-radius: 16px 16px 16px 16px;\n  -moz-border-radius: 16px 16px 16px 16px;\n  -webkit-border-radius: 4px 4px 4px 4px; }\n\nion-item {\n  border: 2px solid;\n  border-color: #006;\n  background-color: white; }\n\nion-button {\n  background-color: #838080d8;\n  /* For browsers that do not support gradients */\n  background-image: linear-gradient(-90deg, #006, #838080d8);\n  /* Standard syntax (must be last) */ }\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9qY2lubm92YXRpb24vSkMgSW5ub3ZhdGlvbiBEcm9wYm94L0plc3XMgXMgQ3VldmFzL01pIE1hYyAoTWFjQm9vay1Qcm8tZGUtSkMtSW5ub3ZhdGlvbi5sb2NhbCkvRG9jdW1lbnRzL0dpdEh1Yi9zbW8yMDE5L3NyYy9hcHAvcGFnZXMvdXN1YXJpby91c3VhcmlvLnBhZ2Uuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNJLDBEQUFhLEVBQUE7O0FBRWpCO0VBRUkscUNBQXFDO0VBQ3JDLFlBQVk7RUFDWixtQkFBbUI7RUFHbkIsdUJBQXVCO0VBQ3ZCLGNBQWM7RUFDZCxZQUFZO0VBQ1osYUFBYTtFQUNiLGdCQUFnQixFQUFBOztBQUdwQjtFQUNJLFlBQVk7RUFDZCxtQkFBbUIsRUFBQTs7QUFHckI7RUFDSSxrQkFBa0I7RUFDbEIsbUJBQW1CLEVBQUE7O0FBR3ZCO0VBQ0ksOEJBQThCLEVBQUE7O0FBR2xDO0VBQ0ksbUJBQW1CLEVBQUE7O0FBR3ZCO0VBQ0ksa0JBQWtCO0VBQ2xCLG1CQUFtQixFQUFBOztBQUV2QjtFQUNJLFdBQVk7RUFDWixrQkFBa0I7RUFDbEIsa0NBQWtDO0VBQ3RDLHVDQUF1QztFQUN2QyxzQ0FDQSxFQUFBOztBQUNBO0VBQ0ksaUJBQWlCO0VBQ2pCLGtCQUFrQjtFQUNsQix1QkFBdUIsRUFBQTs7QUFFM0I7RUFFSSwyQkFBMkI7RUFBRSwrQ0FBQTtFQUM3QiwwREFBeUQ7RUFBRSxtQ0FBQSxFQUFvQyIsImZpbGUiOiJzcmMvYXBwL3BhZ2VzL3VzdWFyaW8vdXN1YXJpby5wYWdlLnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyJpb24tY29udGVudC5iYWNrZ3JvdW5ke1xuICAgIC0tYmFja2dyb3VuZDogdXJsKC4uLy4uLy4uL2Fzc2V0cy9pbWcvcGVyZmlsQmNrLnBuZykgMCAwLzEwMCUgMTAwJSBuby1yZXBlYXQ7XG59XG5pb24tYXZhdGFye1xuXG4gICAgYm9yZGVyOiAxcHggc29saWQgcmdiYSgwLCAwLCAwLCAwLjI1KTtcbiAgICBwYWRkaW5nOiAzcHg7XG4gICAgYm9yZGVyLXJhZGl1czogMTAwJTtcbiAgICAtd2Via2l0LWJveC1zaXppbmc6IGNvbnRlbnQtYm94O1xuICAgIC1tb3otYm94LXNpemluZzogY29udGVudC1ib3g7XG4gICAgYm94LXNpemluZzogY29udGVudC1ib3g7XG4gICAgbWFyZ2luOiAwIGF1dG87XG4gICAgd2lkdGg6IDEyOHB4O1xuICAgIGhlaWdodDogMTI4cHg7XG4gICAgb3ZlcmZsb3c6IGhpZGRlbjsgXG59XG5cbi5wZXJmaWwgaW1ne1xuICAgIHdpZHRoOiAxMjhweDtcbiAgYm9yZGVyLXJhZGl1czogMTAwJTtcbn1cblxuLmNlbnRlckJ1dHRvbntcbiAgICBwYWRkaW5nLWxlZnQ6IDIwcHg7XG4gICAgcGFkZGluZy1yaWdodDogMjBweDtcbiAgICBcbn1cbi5idXR0b25jb2xvcntcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiBhbnRpcXVld2hpdGU7XG59XG5cbi5jZW50ZXJUZXh0e1xuICAgIHBhZGRpbmctbGVmdDogMjAwcHg7XG5cbn1cbi5jZW50ZXJ7XG4gICAgcGFkZGluZy1sZWZ0OiA3NXB4O1xuICAgIHBhZGRpbmctcmlnaHQ6IDc1cHg7XG59XG5pb24taXRlbSwgaW9uLXNlZ21lbnR7XG4gICAgYm9yZGVyOiAycHggO1xuICAgIGJvcmRlci1jb2xvcjogIzAwNjtcbiAgICBib3JkZXItcmFkaXVzOiAxNnB4IDE2cHggMTZweCAxNnB4O1xuLW1vei1ib3JkZXItcmFkaXVzOiAxNnB4IDE2cHggMTZweCAxNnB4O1xuLXdlYmtpdC1ib3JkZXItcmFkaXVzOiA0cHggNHB4IDRweCA0cHhcbn1cbmlvbi1pdGVte1xuICAgIGJvcmRlcjogMnB4IHNvbGlkO1xuICAgIGJvcmRlci1jb2xvcjogIzAwNjtcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiB3aGl0ZTtcbn1cbmlvbi1idXR0b24ge1xuICAgIFxuICAgIGJhY2tncm91bmQtY29sb3I6ICM4MzgwODBkODsgLyogRm9yIGJyb3dzZXJzIHRoYXQgZG8gbm90IHN1cHBvcnQgZ3JhZGllbnRzICovXG4gICAgYmFja2dyb3VuZC1pbWFnZTogbGluZWFyLWdyYWRpZW50KC05MGRlZywjMDA2LCAjODM4MDgwZDgpOyAvKiBTdGFuZGFyZCBzeW50YXggKG11c3QgYmUgbGFzdCkgKi9cbiAgfSJdfQ== */"

/***/ }),

/***/ "./src/app/pages/usuario/usuario.page.ts":
/*!***********************************************!*\
  !*** ./src/app/pages/usuario/usuario.page.ts ***!
  \***********************************************/
/*! exports provided: UsuarioPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "UsuarioPage", function() { return UsuarioPage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var src_app_services_usuario_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/services/usuario.service */ "./src/app/services/usuario.service.ts");
/* harmony import */ var _ionic_native_in_app_browser_ngx__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @ionic-native/in-app-browser/ngx */ "./node_modules/@ionic-native/in-app-browser/ngx/index.js");
/* harmony import */ var src_app_services_ajustes_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! src/app/services/ajustes.service */ "./src/app/services/ajustes.service.ts");





var UsuarioPage = /** @class */ (function () {
    function UsuarioPage(_us, iab, _as) {
        this._us = _us;
        this.iab = iab;
        this._as = _as;
        this.avatars = [
            {
                img: 'av-1.png',
                seleccionado: true
            },
            {
                img: 'av-2.png',
                seleccionado: false
            },
            {
                img: 'av-3.png',
                seleccionado: false
            },
            {
                img: 'av-4.png',
                seleccionado: false
            },
            {
                img: 'av-5.png',
                seleccionado: false
            },
            {
                img: 'av-6.png',
                seleccionado: false
            },
            {
                img: 'av-7.png',
                seleccionado: false
            },
            {
                img: 'av-8.png',
                seleccionado: false
            },
        ];
        this.avatarSlide = {
            slidesPerView: 3.5
        };
        this.usuario = {};
        this.avatarActual = "av-1.png";
    }
    UsuarioPage.prototype.ngOnInit = function () {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function () {
            var _a;
            return tslib__WEBPACK_IMPORTED_MODULE_0__["__generator"](this, function (_b) {
                switch (_b.label) {
                    case 0:
                        _a = this;
                        return [4 /*yield*/, this._us.getUsuario()];
                    case 1:
                        _a.usuario = _b.sent();
                        console.log(this.usuario);
                        return [2 /*return*/];
                }
            });
        });
    };
    UsuarioPage.prototype.logout = function () {
        this._us.logout();
    };
    UsuarioPage.prototype.actualizar = function (fActualizar) {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function () {
            var actualizado;
            return tslib__WEBPACK_IMPORTED_MODULE_0__["__generator"](this, function (_a) {
                switch (_a.label) {
                    case 0:
                        if (fActualizar.invalid) {
                            return [2 /*return*/];
                        }
                        return [4 /*yield*/, this._us.actualizarUsuario(this.usuario)];
                    case 1:
                        actualizado = _a.sent();
                        if (actualizado) {
                            this._as.presentToast('Registro actualizado');
                        }
                        else {
                            this._as.presentToast('No se pudo actualizar');
                        }
                        return [2 /*return*/];
                }
            });
        });
    };
    UsuarioPage.prototype.abrirWeb = function (url, target) {
        this.iab.create(url, target);
    };
    UsuarioPage = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-usuario',
            template: __webpack_require__(/*! ./usuario.page.html */ "./src/app/pages/usuario/usuario.page.html"),
            styles: [__webpack_require__(/*! ./usuario.page.scss */ "./src/app/pages/usuario/usuario.page.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [src_app_services_usuario_service__WEBPACK_IMPORTED_MODULE_2__["UsuarioService"],
            _ionic_native_in_app_browser_ngx__WEBPACK_IMPORTED_MODULE_3__["InAppBrowser"],
            src_app_services_ajustes_service__WEBPACK_IMPORTED_MODULE_4__["AjustesService"]])
    ], UsuarioPage);
    return UsuarioPage;
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
//# sourceMappingURL=usuario-usuario-module.js.map