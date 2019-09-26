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

module.exports = "<ion-header no-border >\n  <ion-toolbar color=\"primary\">\n      \n    <ion-buttons slot=\"end\">Salir \n      <ion-button (click)=\"logout()\"\n                  color=\"light\">\n        <ion-icon slot=\"icon-only\" name=\"exit\"></ion-icon>\n      </ion-button>\n    </ion-buttons>\n  </ion-toolbar>\n</ion-header>\n\n<ion-content class=\"background\">\n\n\n    <ion-card color=\"primary\">\n      <ion-card-content>\n        <ion-avatar>\n          <img id=\"perfil\" src=\"../../assets/avatars/{{ usuario.avatar }}\">\n        </ion-avatar>\n        <br>  \n            <ion-card-title text-center>{{ usuario.nombre }} {{ usuario.apellidos }}</ion-card-title>\n            <p text-center>{{ usuario.email }}</p>\n        </ion-card-content> \n    </ion-card>\n    <ion-card>\n        <ion-card-content>\n            <ion-card-title text-center>Anualidades</ion-card-title>\n            <ion-row>\n                <ion-col size=\"4\" text-center>\n                    <ion-label>2017</ion-label><br>\n                    <ion-toggle  checked=\"{{usuario.an2017}}\" color=\"primary\"></ion-toggle>\n                  </ion-col>\n                  <ion-col size=\"4\" text-center>\n                      <ion-label>2018</ion-label><br>\n                      <ion-toggle  checked=\"{{usuario.an2018}}\" color=\"primary\"></ion-toggle>\n                    </ion-col>\n                    <ion-col size=\"4\" text-center>\n                        <ion-label>2019</ion-label><br>\n                        <ion-toggle  checked=\"{{usuario.an2019}}\" color=\"primary\"></ion-toggle>\n                      </ion-col>\n            </ion-row>\n    </ion-card-content>\n        </ion-card>\n    <ion-card color=\"light\">\n      <ion-row>\n        <ion-col size=\"6\">\n          <ion-item (click)=\"abrirWeb('https://smo.org.mx/archivos/documentos/ESTATUTO%20Final%20abril%202017.pdf','_system')\">           \n                  <p>Reglamento <br> y estatuto</p> \n                  <ion-icon slot=\"end\" name=\"bookmark\"></ion-icon>\n          </ion-item>  \n        </ion-col>\n        <ion-col size=\"6\">\n          <ion-item (click)=\"abrirWeb('https://smo.org.mx/archivos/smonline/smonline_busqueda.php','_system')\" >\n              <p>Artículos <br> de revistas</p>\n                  <ion-icon slot=\"end\" name=\"today\"></ion-icon>\n          </ion-item>         \n        </ion-col>\n        <ion-col size=\"6\">\n            <ion-item > \n                    <p>Publicar <br> Anuncios</p> \n                    <ion-icon slot=\"end\" name=\"list-box\"></ion-icon>\n            </ion-item>  \n          </ion-col>\n          <ion-col size=\"6\">\n            <ion-item > \n                <p>Publicar <br> Artículos</p>\n                    <ion-icon slot=\"end\" name=\"paper\"></ion-icon>\n            </ion-item>         \n          </ion-col>\n      </ion-row> \n    </ion-card>\n   \n  </ion-content>"

/***/ }),

/***/ "./src/app/pages/usuario/usuario.page.scss":
/*!*************************************************!*\
  !*** ./src/app/pages/usuario/usuario.page.scss ***!
  \*************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "ion-content.background {\n  --background: url('perfilBck.png') 0 0/100% 100% no-repeat; }\n\nion-avatar {\n  border: 1px solid rgba(0, 0, 0, 0.25);\n  padding: 3px;\n  border-radius: 100%;\n  box-sizing: content-box;\n  margin: 0 auto;\n  width: 128px;\n  height: 128px;\n  overflow: hidden; }\n\n.perfil img {\n  width: 128px;\n  border-radius: 100%; }\n\n.centerButton {\n  padding-left: 20px;\n  padding-right: 20px; }\n\n.buttoncolor {\n  background-color: antiquewhite; }\n\n.centerText {\n  padding-left: 200px; }\n\n.center {\n  padding-left: 75px;\n  padding-right: 75px; }\n\nion-item, ion-segment {\n  border: 2px;\n  border-color: #006;\n  border-radius: 16px 16px 16px 16px;\n  -moz-border-radius: 16px 16px 16px 16px;\n  -webkit-border-radius: 16px 16px 16px 16px; }\n\nion-item {\n  border: 2px solid;\n  border-color: #006;\n  background-color: white; }\n\nion-button {\n  background-color: #838080d8;\n  /* For browsers that do not support gradients */\n  background-image: linear-gradient(-90deg, #006, #838080d8);\n  /* Standard syntax (must be last) */ }\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9icmIvRG9jdW1lbnRzL0dpdEh1Yi9BUFBfU01PL3Ntby9zcmMvYXBwL3BhZ2VzL3VzdWFyaW8vdXN1YXJpby5wYWdlLnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDSSwwREFBYSxFQUFBOztBQUVqQjtFQUVJLHFDQUFxQztFQUNyQyxZQUFZO0VBQ1osbUJBQW1CO0VBR25CLHVCQUF1QjtFQUN2QixjQUFjO0VBQ2QsWUFBWTtFQUNaLGFBQWE7RUFDYixnQkFBZ0IsRUFBQTs7QUFHcEI7RUFDSSxZQUFZO0VBQ2QsbUJBQW1CLEVBQUE7O0FBR3JCO0VBQ0ksa0JBQWtCO0VBQ2xCLG1CQUFtQixFQUFBOztBQUd2QjtFQUNJLDhCQUE4QixFQUFBOztBQUdsQztFQUNJLG1CQUFtQixFQUFBOztBQUd2QjtFQUNJLGtCQUFrQjtFQUNsQixtQkFBbUIsRUFBQTs7QUFFdkI7RUFDSSxXQUFZO0VBQ1osa0JBQWtCO0VBQ2xCLGtDQUFrQztFQUN0Qyx1Q0FBdUM7RUFDdkMsMENBQ0EsRUFBQTs7QUFDQTtFQUNJLGlCQUFpQjtFQUNqQixrQkFBa0I7RUFDbEIsdUJBQXVCLEVBQUE7O0FBRTNCO0VBRUksMkJBQTJCO0VBQUUsK0NBQUE7RUFDN0IsMERBQXlEO0VBQUUsbUNBQUEsRUFBb0MiLCJmaWxlIjoic3JjL2FwcC9wYWdlcy91c3VhcmlvL3VzdWFyaW8ucGFnZS5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiaW9uLWNvbnRlbnQuYmFja2dyb3VuZHtcbiAgICAtLWJhY2tncm91bmQ6IHVybCguLi8uLi8uLi9hc3NldHMvaW1nL3BlcmZpbEJjay5wbmcpIDAgMC8xMDAlIDEwMCUgbm8tcmVwZWF0O1xufVxuaW9uLWF2YXRhcntcblxuICAgIGJvcmRlcjogMXB4IHNvbGlkIHJnYmEoMCwgMCwgMCwgMC4yNSk7XG4gICAgcGFkZGluZzogM3B4O1xuICAgIGJvcmRlci1yYWRpdXM6IDEwMCU7XG4gICAgLXdlYmtpdC1ib3gtc2l6aW5nOiBjb250ZW50LWJveDtcbiAgICAtbW96LWJveC1zaXppbmc6IGNvbnRlbnQtYm94O1xuICAgIGJveC1zaXppbmc6IGNvbnRlbnQtYm94O1xuICAgIG1hcmdpbjogMCBhdXRvO1xuICAgIHdpZHRoOiAxMjhweDtcbiAgICBoZWlnaHQ6IDEyOHB4O1xuICAgIG92ZXJmbG93OiBoaWRkZW47IFxufVxuXG4ucGVyZmlsIGltZ3tcbiAgICB3aWR0aDogMTI4cHg7XG4gIGJvcmRlci1yYWRpdXM6IDEwMCU7XG59XG5cbi5jZW50ZXJCdXR0b257XG4gICAgcGFkZGluZy1sZWZ0OiAyMHB4O1xuICAgIHBhZGRpbmctcmlnaHQ6IDIwcHg7XG4gICAgXG59XG4uYnV0dG9uY29sb3J7XG4gICAgYmFja2dyb3VuZC1jb2xvcjogYW50aXF1ZXdoaXRlO1xufVxuXG4uY2VudGVyVGV4dHtcbiAgICBwYWRkaW5nLWxlZnQ6IDIwMHB4O1xuXG59XG4uY2VudGVye1xuICAgIHBhZGRpbmctbGVmdDogNzVweDtcbiAgICBwYWRkaW5nLXJpZ2h0OiA3NXB4O1xufVxuaW9uLWl0ZW0sIGlvbi1zZWdtZW50e1xuICAgIGJvcmRlcjogMnB4IDtcbiAgICBib3JkZXItY29sb3I6ICMwMDY7XG4gICAgYm9yZGVyLXJhZGl1czogMTZweCAxNnB4IDE2cHggMTZweDtcbi1tb3otYm9yZGVyLXJhZGl1czogMTZweCAxNnB4IDE2cHggMTZweDtcbi13ZWJraXQtYm9yZGVyLXJhZGl1czogMTZweCAxNnB4IDE2cHggMTZweFxufVxuaW9uLWl0ZW17XG4gICAgYm9yZGVyOiAycHggc29saWQ7XG4gICAgYm9yZGVyLWNvbG9yOiAjMDA2O1xuICAgIGJhY2tncm91bmQtY29sb3I6IHdoaXRlO1xufVxuaW9uLWJ1dHRvbiB7XG4gICAgXG4gICAgYmFja2dyb3VuZC1jb2xvcjogIzgzODA4MGQ4OyAvKiBGb3IgYnJvd3NlcnMgdGhhdCBkbyBub3Qgc3VwcG9ydCBncmFkaWVudHMgKi9cbiAgICBiYWNrZ3JvdW5kLWltYWdlOiBsaW5lYXItZ3JhZGllbnQoLTkwZGVnLCMwMDYsICM4MzgwODBkOCk7IC8qIFN0YW5kYXJkIHN5bnRheCAobXVzdCBiZSBsYXN0KSAqL1xuICB9Il19 */"

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



/***/ })

}]);
//# sourceMappingURL=usuario-usuario-module.js.map