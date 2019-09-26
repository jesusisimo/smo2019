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

module.exports = "<ion-tabs>\n  <!-- <ion-toolbar class=\"publicidad\">\n    <ion-slides pager=\"false\" [options]=\"slideOpts\">\n      <ion-slide>\n        <img src=\"/assets/img/banner_patrocinador.png\" alt=\"\">\n      </ion-slide>\n      <ion-slide>\n        <img src=\"/assets/img/banner_patrocinador2.png\" alt=\"\" (click)=\"abrirWeb('https://www.alcon.com')\">\n      </ion-slide>\n    </ion-slides>\n  </ion-toolbar> -->\n  <ion-tab-bar slot=\"bottom\" color=\"primary\">\n    <ion-tab-button tab=\"notificaciones\">\n      <ion-icon name=\"notifications\"></ion-icon>\n      <ion-label>Notificaciones</ion-label>\n    </ion-tab-button>\n\n    <ion-tab-button tab=\"principal\">\n      <ion-icon name=\"apps\"></ion-icon>\n      <ion-label>Inicio</ion-label>\n    </ion-tab-button>\n\n    <ion-tab-button (click)=\"validarVista()\">\n      <ion-icon name=\"contact\"></ion-icon>\n      <ion-label>Perfil</ion-label>\n    </ion-tab-button>\n  </ion-tab-bar>\n</ion-tabs>"

/***/ }),

/***/ "./src/app/pages/tabs/tabs.page.scss":
/*!*******************************************!*\
  !*** ./src/app/pages/tabs/tabs.page.scss ***!
  \*******************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".publicidad {\n  --padding-top: 0px;\n  --padding-bottom: 0px;\n  --padding-start: 0px;\n  --padding-end: 0px;\n  --min-height: 44px; }\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9icmIvRG9jdW1lbnRzL0dpdEh1Yi9BUFBfU01PL3Ntby9zcmMvYXBwL3BhZ2VzL3RhYnMvdGFicy5wYWdlLnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDSSxrQkFBYztFQUVsQixxQkFBaUI7RUFFakIsb0JBQWdCO0VBRWhCLGtCQUFjO0VBRWQsa0JBQWEsRUFBQSIsImZpbGUiOiJzcmMvYXBwL3BhZ2VzL3RhYnMvdGFicy5wYWdlLnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIucHVibGljaWRhZHtcbiAgICAtLXBhZGRpbmctdG9wOiAwcHg7XG5cbi0tcGFkZGluZy1ib3R0b206IDBweDtcblxuLS1wYWRkaW5nLXN0YXJ0OiAwcHg7XG5cbi0tcGFkZGluZy1lbmQ6IDBweDtcblxuLS1taW4taGVpZ2h0OiA0NHB4O1xufVxuIl19 */"

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





var TabsPage = /** @class */ (function () {
    function TabsPage(iab, _us, navCtrl) {
        this.iab = iab;
        this._us = _us;
        this.navCtrl = navCtrl;
        this.slideOpts = {
            effect: 'cube',
            speed: 1100,
            autoplay: false,
            loop: true
        };
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
                        path: 'congresos',
                        loadChildren: '../congresos/congresos.module#CongresosPageModule'
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
                        path: 'casos',
                        loadChildren: '../casos/casos.module#CasosPageModule'
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



/***/ })

}]);
//# sourceMappingURL=pages-tabs-tabs-module.js.map