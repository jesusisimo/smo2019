(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["pages-tabs-tabs-module"],{

/***/ "./src/app/guards/usuario.guard.ts":
/*!*****************************************!*\
  !*** ./src/app/guards/usuario.guard.ts ***!
  \*****************************************/
/*! exports provided: UsuarioGuard */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "UsuarioGuard", function() { return UsuarioGuard; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _services_usuario_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../services/usuario.service */ "./src/app/services/usuario.service.ts");



var UsuarioGuard = /** @class */ (function () {
    function UsuarioGuard(_us) {
        this._us = _us;
    }
    UsuarioGuard.prototype.canLoad = function () {
        console.log("guard");
        return this._us.tienePermiso();
    };
    UsuarioGuard = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
            providedIn: 'root'
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_services_usuario_service__WEBPACK_IMPORTED_MODULE_2__["UsuarioService"]])
    ], UsuarioGuard);
    return UsuarioGuard;
}());



/***/ }),

/***/ "./src/app/pages/tabs/tabs.module.ts":
/*!*******************************************!*\
  !*** ./src/app/pages/tabs/tabs.module.ts ***!
  \*******************************************/
/*! exports provided: TabsPageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TabsPageModule", function() { return TabsPageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _tabs_router_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./tabs.router.module */ "./src/app/pages/tabs/tabs.router.module.ts");
/* harmony import */ var _tabs_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./tabs.page */ "./src/app/pages/tabs/tabs.page.ts");







var TabsPageModule = /** @class */ (function () {
    function TabsPageModule() {
    }
    TabsPageModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["NgModule"])({
            imports: [
                _ionic_angular__WEBPACK_IMPORTED_MODULE_1__["IonicModule"],
                _angular_common__WEBPACK_IMPORTED_MODULE_3__["CommonModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_4__["FormsModule"],
                _tabs_router_module__WEBPACK_IMPORTED_MODULE_5__["TabsPageRoutingModule"]
            ],
            declarations: [_tabs_page__WEBPACK_IMPORTED_MODULE_6__["TabsPage"]]
        })
    ], TabsPageModule);
    return TabsPageModule;
}());



/***/ }),

/***/ "./src/app/pages/tabs/tabs.page.html":
/*!*******************************************!*\
  !*** ./src/app/pages/tabs/tabs.page.html ***!
  \*******************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<ion-tabs>\n  <!-- <ion-toolbar class=\"publicidad\">\n    <ion-slides pager=\"false\" [options]=\"slideOpts\">\n      <ion-slide>\n        <img src=\"/assets/img/banner_patrocinador.png\" alt=\"\">\n      </ion-slide>\n      <ion-slide>\n        <img src=\"/assets/img/banner_patrocinador2.png\" alt=\"\" (click)=\"abrirWeb('https://www.alcon.com')\">\n      </ion-slide>\n    </ion-slides>\n  </ion-toolbar> -->\n  <ion-tab-bar  slot=\"bottom\" color=\"primary\">\n    <ion-tab-button  tab=\"notificaciones\">\n      <ion-badge *ngIf=\"_as.sinleer\" color=\"danger\">{{_as.sinleer}}</ion-badge>\n      <ion-icon name=\"notifications\"></ion-icon>\n      <ion-label>Notificaciones</ion-label>\n    </ion-tab-button>\n\n    <ion-tab-button tab=\"principal\">\n      <ion-icon name=\"apps\"></ion-icon>\n      <ion-label>Inicio</ion-label>\n    </ion-tab-button>\n\n    <ion-tab-button (click)=\"validarVista()\">\n      <ion-icon name=\"contact\"></ion-icon>\n      <ion-label>Perfil</ion-label>\n    </ion-tab-button>\n  </ion-tab-bar>\n</ion-tabs>"

/***/ }),

/***/ "./src/app/pages/tabs/tabs.page.scss":
/*!*******************************************!*\
  !*** ./src/app/pages/tabs/tabs.page.scss ***!
  \*******************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".publicidad {\n  --padding-top: 0px;\n  --padding-bottom: 0px;\n  --padding-start: 0px;\n  --padding-end: 0px;\n  --min-height: 44px; }\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9qY2lubm92YXRpb24vSkMgSW5ub3ZhdGlvbiBEcm9wYm94L0plc3XMgXMgQ3VldmFzL01pIE1hYyAoTWFjQm9vay1Qcm8tZGUtSkMtSW5ub3ZhdGlvbi5sb2NhbCkvRG9jdW1lbnRzL0dpdEh1Yi9zbW8yMDE5L3NyYy9hcHAvcGFnZXMvdGFicy90YWJzLnBhZ2Uuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNJLGtCQUFjO0VBRWxCLHFCQUFpQjtFQUVqQixvQkFBZ0I7RUFFaEIsa0JBQWM7RUFFZCxrQkFBYSxFQUFBIiwiZmlsZSI6InNyYy9hcHAvcGFnZXMvdGFicy90YWJzLnBhZ2Uuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIi5wdWJsaWNpZGFke1xuICAgIC0tcGFkZGluZy10b3A6IDBweDtcblxuLS1wYWRkaW5nLWJvdHRvbTogMHB4O1xuXG4tLXBhZGRpbmctc3RhcnQ6IDBweDtcblxuLS1wYWRkaW5nLWVuZDogMHB4O1xuXG4tLW1pbi1oZWlnaHQ6IDQ0cHg7XG59XG4iXX0= */"

/***/ }),

/***/ "./src/app/pages/tabs/tabs.page.ts":
/*!*****************************************!*\
  !*** ./src/app/pages/tabs/tabs.page.ts ***!
  \*****************************************/
/*! exports provided: TabsPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TabsPage", function() { return TabsPage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _ionic_native_in_app_browser_ngx__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @ionic-native/in-app-browser/ngx */ "./node_modules/@ionic-native/in-app-browser/ngx/index.js");
/* harmony import */ var src_app_services_usuario_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/app/services/usuario.service */ "./src/app/services/usuario.service.ts");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");
/* harmony import */ var src_app_services_ajustes_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! src/app/services/ajustes.service */ "./src/app/services/ajustes.service.ts");






var TabsPage = /** @class */ (function () {
    function TabsPage(iab, _us, _as, navCtrl) {
        this.iab = iab;
        this._us = _us;
        this._as = _as;
        this.navCtrl = navCtrl;
        this.slideOpts = {
            effect: 'cube',
            speed: 1100,
            autoplay: false,
            loop: true
        };
        this.notificaciones = 0;
        this.notificaciones = this._as.sinleer;
    }
    TabsPage.prototype.abrirWeb = function (url) {
        var browser = this.iab.create(url, '_system');
    };
    TabsPage.prototype.validarVista = function () {
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
    TabsPage = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-tabs',
            template: __webpack_require__(/*! ./tabs.page.html */ "./src/app/pages/tabs/tabs.page.html"),
            styles: [__webpack_require__(/*! ./tabs.page.scss */ "./src/app/pages/tabs/tabs.page.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_ionic_native_in_app_browser_ngx__WEBPACK_IMPORTED_MODULE_2__["InAppBrowser"],
            src_app_services_usuario_service__WEBPACK_IMPORTED_MODULE_3__["UsuarioService"],
            src_app_services_ajustes_service__WEBPACK_IMPORTED_MODULE_5__["AjustesService"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["NavController"]])
    ], TabsPage);
    return TabsPage;
}());



/***/ }),

/***/ "./src/app/pages/tabs/tabs.router.module.ts":
/*!**************************************************!*\
  !*** ./src/app/pages/tabs/tabs.router.module.ts ***!
  \**************************************************/
/*! exports provided: TabsPageRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TabsPageRoutingModule", function() { return TabsPageRoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _tabs_page__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./tabs.page */ "./src/app/pages/tabs/tabs.page.ts");
/* harmony import */ var src_app_guards_usuario_guard__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! src/app/guards/usuario.guard */ "./src/app/guards/usuario.guard.ts");





var routes = [
    {
        path: 'tabs',
        component: _tabs_page__WEBPACK_IMPORTED_MODULE_3__["TabsPage"],
        children: [
            {
                path: 'notificaciones',
                children: [
                    {
                        path: '',
                        loadChildren: '../notificaciones/notificaciones.module#NotificacionesPageModule'
                    }
                ]
            },
            {
                path: 'principal',
                children: [
                    {
                        path: '',
                        loadChildren: '../principal/principal.module#PrincipalPageModule'
                    },
                    {
                        path: 'contacto',
                        loadChildren: '../contacto/contacto.module#ContactoPageModule'
                    },
                    {
                        path: 'coloquios',
                        loadChildren: '../coloquios/coloquios.module#ColoquiosPageModule'
                    },
                    {
                        path: 'webinars',
                        loadChildren: '../webinars/webinars.module#WebinarsPageModule'
                    },
                    {
                        path: 'comunicados',
                        loadChildren: '../comunicados/comunicados.module#ComunicadosPageModule'
                    },
                    {
                        path: 'congresos',
                        loadChildren: '../congresos/congresos.module#CongresosPageModule'
                    },
                    {
                        path: 'seguro',
                        loadChildren: '../seguro/seguro.module#SeguroPageModule'
                    },
                    {
                        path: 'sesiones',
                        loadChildren: '../sesiones/sesiones.module#SesionesPageModule'
                    },
                    {
                        path: 'mesadirectiva',
                        loadChildren: '../mesadirectiva/mesadirectiva.module#MesadirectivaPageModule'
                    },
                    {
                        path: 'casos/:id',
                        loadChildren: '../casos/casos.module#CasosPageModule'
                    },
                    {
                        path: 'lista',
                        loadChildren: '../pages/casos-lista/casos-lista.module#CasosListaPageModule'
                    },
                    {
                        path: 'usuario',
                        loadChildren: '../usuario/usuario.module#UsuarioPageModule',
                        canLoad: [src_app_guards_usuario_guard__WEBPACK_IMPORTED_MODULE_4__["UsuarioGuard"]]
                    },
                    {
                        path: 'programa',
                        children: [
                            {
                                path: '',
                                loadChildren: '../programa/programa.module#ProgramaPageModule'
                            },
                            {
                                path: 'actividad/:id',
                                loadChildren: '../actividad/actividad.module#ActividadPageModule'
                            },
                        ]
                    },
                    {
                        path: 'buscador',
                        loadChildren: '../buscador/buscador.module#BuscadorPageModule'
                    },
                    {
                        path: 'esquema',
                        loadChildren: '../esquema/esquema.module#EsquemaPageModule'
                    },
                    {
                        path: 'carteles',
                        loadChildren: '../carteles/carteles.module#CartelesPageModule'
                    },
                    {
                        path: 'videos',
                        loadChildren: '../videos/videos.module#VideosPageModule'
                    },
                    {
                        path: 'actividades',
                        loadChildren: '../actividades/actividades.module#ActividadesPageModule'
                    },
                    {
                        path: 'ponentes',
                        children: [
                            {
                                path: '',
                                loadChildren: '../ponentes/ponentes.module#PonentesPageModule'
                            },
                            {
                                path: 'ponente/:id',
                                loadChildren: '../ponente/ponente.module#PonentePageModule'
                            },
                        ]
                    },
                    {
                        path: 'bienvenida',
                        loadChildren: '../bienvenida/bienvenida.module#BienvenidaPageModule'
                    },
                    {
                        path: 'expocomercial',
                        loadChildren: '../expocomercial/expocomercial.module#ExpocomercialPageModule'
                    },
                    {
                        path: 'patrocinadores',
                        loadChildren: '../patrocinadores/patrocinadores.module#PatrocinadoresPageModule'
                    },
                    {
                        path: 'circuito',
                        loadChildren: '../circuito/circuito.module#CircuitoPageModule'
                    },
                    {
                        path: 'agenda',
                        loadChildren: '../agenda/agenda.module#AgendaPageModule'
                    },
                    {
                        path: 'congresistas',
                        children: [
                            {
                                path: '',
                                loadChildren: '../congresistas/congresistas.module#CongresistasPageModule',
                                canLoad: [src_app_guards_usuario_guard__WEBPACK_IMPORTED_MODULE_4__["UsuarioGuard"]],
                            },
                            {
                                path: 'congresista/:id',
                                loadChildren: '../congresista/congresista.module#CongresistaPageModule'
                            },
                        ]
                    },
                    {
                        path: 'transm-lista',
                        loadChildren: '../transm-lista/transm-lista.module#TransmListaPageModule'
                    },
                ]
            },
            {
                path: 'login',
                children: [
                    {
                        path: '',
                        loadChildren: '../login/login.module#LoginPageModule',
                    },
                    {
                        path: 'usuario',
                        loadChildren: '../usuario/usuario.module#UsuarioPageModule',
                        canLoad: [src_app_guards_usuario_guard__WEBPACK_IMPORTED_MODULE_4__["UsuarioGuard"]]
                    },
                ]
            },
            {
                path: '',
                redirectTo: '/tabs/principal',
                pathMatch: 'full'
            }
        ]
    },
    {
        path: '',
        redirectTo: '/tabs/principal',
        pathMatch: 'full'
    }
];
var TabsPageRoutingModule = /** @class */ (function () {
    function TabsPageRoutingModule() {
    }
    TabsPageRoutingModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            imports: [
                _angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)
            ],
            exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]]
        })
    ], TabsPageRoutingModule);
    return TabsPageRoutingModule;
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
//# sourceMappingURL=pages-tabs-tabs-module.js.map