(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["casos-casos-module"],{

/***/ "./src/app/pages/casos/casos.module.ts":
/*!*********************************************!*\
  !*** ./src/app/pages/casos/casos.module.ts ***!
  \*********************************************/
/*! exports provided: CasosPageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CasosPageModule", function() { return CasosPageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");
/* harmony import */ var _casos_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./casos.page */ "./src/app/pages/casos/casos.page.ts");







var routes = [
    {
        path: '',
        component: _casos_page__WEBPACK_IMPORTED_MODULE_6__["CasosPage"]
    }
];
var CasosPageModule = /** @class */ (function () {
    function CasosPageModule() {
    }
    CasosPageModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            imports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
                _ionic_angular__WEBPACK_IMPORTED_MODULE_5__["IonicModule"],
                _angular_router__WEBPACK_IMPORTED_MODULE_4__["RouterModule"].forChild(routes)
            ],
            declarations: [_casos_page__WEBPACK_IMPORTED_MODULE_6__["CasosPage"]]
        })
    ], CasosPageModule);
    return CasosPageModule;
}());



/***/ }),

/***/ "./src/app/pages/casos/casos.page.html":
/*!*********************************************!*\
  !*** ./src/app/pages/casos/casos.page.html ***!
  \*********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<ion-header>\n    <ion-toolbar color=\"primary\">\n      <ion-buttons slot=\"start\">\n        <ion-menu-button></ion-menu-button>\n        <ion-back-button color=\"light\" text=\"Volver\"></ion-back-button>\n      </ion-buttons>\n      <ion-title>Caso Clínico</ion-title>\n    </ion-toolbar>\n  </ion-header>\n  \n  <ion-content class=\"background\" *ngFor=\"let caso of casos\">\n  <ion-card class=\"backCards\">\n    \n    \n      <ion-item lines=\"none\" class=\"postTexto\"><h2>{{caso.titulo}}</h2></ion-item>\n      <p class=\"hora\">{{caso.fecha}}</p> \n      <ion-item lines=\"none\">\n      <h3 class=\"name\">{{caso.autor}}</h3><br> \n    </ion-item> \n      <p class=\"ion-text-justify ion-padding\">{{caso.descripcion}}</p> \n    <ion-card class=\"centerPost text-center\">\n        <img class=\"postImagen text-center\" src=\"{{caso.ruta_arch}}\" (click)=\"verImagen(caso.ruta_arch, caso.arch_ext)\">\n     </ion-card>\n\n     <ion-card *ngFor=\"let comentario of comentarios\">\n      <ion-item lines=\"none\">\n        <ion-avatar>\n          <img class=\"perfil\" src=\"https://wsbrb-services.com/appsmo/img/avatar-no-img.png\">\n        </ion-avatar>\n        <h3 class=\"name\">{{ comentario.nombre }}</h3>\n      </ion-item>\n      <p class=\"hora\">{{comentario.fecha}}</p>  \n      <ion-item lines=\"none\" id=\"\"><h4>{{comentario.comentario}}</h4></ion-item>\n      <br>\n    </ion-card>\n\n  </ion-card>\n  </ion-content>\n  <ion-footer >\n    <ion-toolbar class=\"backgrounds\">\n      <ion-row class=\"input-position\">\n        <ion-col size=\"9\">\n          <ion-input class=\"input restrict\" type=\"text\" placeholder=\"   Escribe tu comentario\" id=\"comentario\" name=\"comentario\" [(ngModel)]=\"comentario\"></ion-input>\n        </ion-col>\n        <ion-col size=\"3\">\n          <ion-button shape=\"round\" class=\"send-button\"  >\n            <ion-text color=\"light\" (click)=\"comentar(usuario.socio_id)\">Enviar</ion-text>\n          </ion-button>\n        </ion-col>\n      </ion-row>\n    </ion-toolbar>\n  </ion-footer>"

/***/ }),

/***/ "./src/app/pages/casos/casos.page.scss":
/*!*********************************************!*\
  !*** ./src/app/pages/casos/casos.page.scss ***!
  \*********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "ion-content.background {\n  --background: #09095ec4 0 0/100% 100% no-repeat; }\n\nion-toolbar.backgrounds {\n  --background: #09095ec4 0 0/100% 100% no-repeat; }\n\nion-card.backCards {\n  --background: #ffffff 0 0/100% 100% no-repeat; }\n\nion-item {\n  border: 0px solid #000000; }\n\n.coment {\n  border: 1px solid rgba(0, 0, 0, 0.25);\n  padding: 3px;\n  border-radius: 35px 35px 35px 35px;\n  -moz-border-radius: 35px 35px 35px 35px;\n  -webkit-border-radius: 35px 35px 35px 35px;\n  box-sizing: content-box;\n  margin: 0 auto;\n  width: 90%;\n  height: 15%;\n  overflow: hidden; }\n\n.hora {\n  padding-left: 50%;\n  margin: 0px; }\n\np.horaComent {\n  padding-left: 70%;\n  padding-bottom: 5%;\n  margin: 0px; }\n\n.name {\n  padding-left: 10px; }\n\nh4 {\n  font-weight: 300;\n  font-size: 13px; }\n\nh3 {\n  font-size: 16px; }\n\np {\n  font-weight: 300;\n  font-size: 11px; }\n\n.postImagen {\n  max-width: 50%; }\n\n.postTexto {\n  margin-top: 0px;\n  margin-bottom: 2px; }\n\n.centerPost {\n  padding-left: 30%; }\n\n.input-position {\n  background: white; }\n\n.input {\n  background-color: white;\n  border-radius: 20px;\n  font-size: 0.9em !important;\n  border: 1px solid #444; }\n\n.restrict {\n  --height: 33px; }\n\n.send-button {\n  height: 36px;\n  width: 90%;\n  border-radius: 50%;\n  color: #ffffff;\n  background: #09095ec4; }\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9qY2lubm92YXRpb24vSkMgSW5ub3ZhdGlvbiBEcm9wYm94L0plc3XMgXMgQ3VldmFzL01pIE1hYyAoTWFjQm9vay1Qcm8tZGUtSkMtSW5ub3ZhdGlvbi5sb2NhbCkvRG9jdW1lbnRzL0dpdEh1Yi9zbW8yMDE5L3NyYy9hcHAvcGFnZXMvY2Fzb3MvY2Fzb3MucGFnZS5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0ksK0NBQWEsRUFBQTs7QUFHakI7RUFDSSwrQ0FBYSxFQUFBOztBQUdqQjtFQUNJLDZDQUFhLEVBQUE7O0FBR2pCO0VBQ0kseUJBQXlCLEVBQUE7O0FBRzdCO0VBQ0kscUNBQXFDO0VBQ3JDLFlBQVk7RUFDWixrQ0FBa0M7RUFDbEMsdUNBQXVDO0VBQ3ZDLDBDQUEwQztFQUcxQyx1QkFBdUI7RUFDdkIsY0FBYztFQUNkLFVBQVU7RUFDVixXQUFXO0VBQ1gsZ0JBQWdCLEVBQUE7O0FBR3BCO0VBQ0ksaUJBQWlCO0VBQ2pCLFdBQVcsRUFBQTs7QUFHZjtFQUNJLGlCQUFpQjtFQUNqQixrQkFBa0I7RUFDbEIsV0FBVyxFQUFBOztBQUdmO0VBQ0ksa0JBQWtCLEVBQUE7O0FBR3RCO0VBQ0ksZ0JBQWdCO0VBQ2hCLGVBQWUsRUFBQTs7QUFHbkI7RUFDSSxlQUFlLEVBQUE7O0FBR25CO0VBQ0ksZ0JBQWdCO0VBQ2hCLGVBQWUsRUFBQTs7QUFHbkI7RUFDSSxjQUFjLEVBQUE7O0FBR2xCO0VBQ0ksZUFBZTtFQUNmLGtCQUFrQixFQUFBOztBQUd0QjtFQUNJLGlCQUFpQixFQUFBOztBQUdyQjtFQUNJLGlCQUFpQixFQUFBOztBQUduQjtFQUNFLHVCQUF1QjtFQUN2QixtQkFBb0I7RUFDcEIsMkJBQTJCO0VBQzNCLHNCQUFzQixFQUFBOztBQUd4QjtFQUNFLGNBQVMsRUFBQTs7QUFHWDtFQUNFLFlBQVk7RUFDWixVQUFVO0VBQ1Ysa0JBQWtCO0VBRWxCLGNBQWM7RUFDZCxxQkFBcUIsRUFBQSIsImZpbGUiOiJzcmMvYXBwL3BhZ2VzL2Nhc29zL2Nhc29zLnBhZ2Uuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbImlvbi1jb250ZW50LmJhY2tncm91bmR7XG4gICAgLS1iYWNrZ3JvdW5kOiAjMDkwOTVlYzQgMCAwLzEwMCUgMTAwJSBuby1yZXBlYXQ7XG59XG5cbmlvbi10b29sYmFyLmJhY2tncm91bmRze1xuICAgIC0tYmFja2dyb3VuZDogIzA5MDk1ZWM0IDAgMC8xMDAlIDEwMCUgbm8tcmVwZWF0O1xufVxuXG5pb24tY2FyZC5iYWNrQ2FyZHN7XG4gICAgLS1iYWNrZ3JvdW5kOiAjZmZmZmZmIDAgMC8xMDAlIDEwMCUgbm8tcmVwZWF0O1xufVxuXG5pb24taXRlbXtcbiAgICBib3JkZXI6IDBweCBzb2xpZCAjMDAwMDAwO1xufVxuXG4uY29tZW50e1xuICAgIGJvcmRlcjogMXB4IHNvbGlkIHJnYmEoMCwgMCwgMCwgMC4yNSk7XG4gICAgcGFkZGluZzogM3B4O1xuICAgIGJvcmRlci1yYWRpdXM6IDM1cHggMzVweCAzNXB4IDM1cHg7XG4gICAgLW1vei1ib3JkZXItcmFkaXVzOiAzNXB4IDM1cHggMzVweCAzNXB4O1xuICAgIC13ZWJraXQtYm9yZGVyLXJhZGl1czogMzVweCAzNXB4IDM1cHggMzVweDtcbiAgICAtd2Via2l0LWJveC1zaXppbmc6IGNvbnRlbnQtYm94O1xuICAgIC1tb3otYm94LXNpemluZzogY29udGVudC1ib3g7XG4gICAgYm94LXNpemluZzogY29udGVudC1ib3g7XG4gICAgbWFyZ2luOiAwIGF1dG87XG4gICAgd2lkdGg6IDkwJTtcbiAgICBoZWlnaHQ6IDE1JTtcbiAgICBvdmVyZmxvdzogaGlkZGVuOyBcbn1cblxuLmhvcmF7XG4gICAgcGFkZGluZy1sZWZ0OiA1MCU7XG4gICAgbWFyZ2luOiAwcHg7XG59XG5cbnAuaG9yYUNvbWVudHtcbiAgICBwYWRkaW5nLWxlZnQ6IDcwJTtcbiAgICBwYWRkaW5nLWJvdHRvbTogNSU7XG4gICAgbWFyZ2luOiAwcHg7XG59XG5cbi5uYW1le1xuICAgIHBhZGRpbmctbGVmdDogMTBweDtcbn1cblxuaDR7XG4gICAgZm9udC13ZWlnaHQ6IDMwMDtcbiAgICBmb250LXNpemU6IDEzcHg7XG59XG5cbmgze1xuICAgIGZvbnQtc2l6ZTogMTZweDtcbn1cblxucHtcbiAgICBmb250LXdlaWdodDogMzAwO1xuICAgIGZvbnQtc2l6ZTogMTFweDtcbn1cblxuLnBvc3RJbWFnZW57XG4gICAgbWF4LXdpZHRoOiA1MCU7XG59XG5cbi5wb3N0VGV4dG97XG4gICAgbWFyZ2luLXRvcDogMHB4O1xuICAgIG1hcmdpbi1ib3R0b206IDJweDtcbn1cblxuLmNlbnRlclBvc3R7XG4gICAgcGFkZGluZy1sZWZ0OiAzMCU7XG59XG5cbi5pbnB1dC1wb3NpdGlvbiB7XG4gICAgYmFja2dyb3VuZDogd2hpdGU7XG4gIH1cblxuICAuaW5wdXQge1xuICAgIGJhY2tncm91bmQtY29sb3I6IHdoaXRlO1xuICAgIGJvcmRlci1yYWRpdXM6IDIwcHggO1xuICAgIGZvbnQtc2l6ZTogMC45ZW0gIWltcG9ydGFudDtcbiAgICBib3JkZXI6IDFweCBzb2xpZCAjNDQ0O1xuICB9XG5cbiAgLnJlc3RyaWN0IHtcbiAgICAtLWhlaWdodDogMzNweDtcbiAgfVxuXG4gIC5zZW5kLWJ1dHRvbiB7XG4gICAgaGVpZ2h0OiAzNnB4O1xuICAgIHdpZHRoOiA5MCU7XG4gICAgYm9yZGVyLXJhZGl1czogNTAlO1xuXG4gICAgY29sb3I6ICNmZmZmZmY7XG4gICAgYmFja2dyb3VuZDogIzA5MDk1ZWM0O1xuICB9XG5cbiJdfQ== */"

/***/ }),

/***/ "./src/app/pages/casos/casos.page.ts":
/*!*******************************************!*\
  !*** ./src/app/pages/casos/casos.page.ts ***!
  \*******************************************/
/*! exports provided: CasosPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CasosPage", function() { return CasosPage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var src_app_services_usuario_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/services/usuario.service */ "./src/app/services/usuario.service.ts");
/* harmony import */ var src_app_services_ajustes_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/app/services/ajustes.service */ "./src/app/services/ajustes.service.ts");
/* harmony import */ var _post_imagen_post_imagen_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../post-imagen/post-imagen.component */ "./src/app/pages/post-imagen/post-imagen.component.ts");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var src_app_services_casos_service__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! src/app/services/casos.service */ "./src/app/services/casos.service.ts");
/* harmony import */ var _ionic_native_in_app_browser_ngx__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @ionic-native/in-app-browser/ngx */ "./node_modules/@ionic-native/in-app-browser/ngx/index.js");









var CasosPage = /** @class */ (function () {
    function CasosPage(_us, _as, activeRoute, modalController, iab, _cs) {
        this._us = _us;
        this._as = _as;
        this.activeRoute = activeRoute;
        this.modalController = modalController;
        this.iab = iab;
        this._cs = _cs;
        this.id = null;
        this.casos = null;
        this.comentarios = null;
        this.comentario = "";
        this.usuario = {};
    }
    CasosPage.prototype.ngOnInit = function () {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function () {
            var _a, _b, _c;
            return tslib__WEBPACK_IMPORTED_MODULE_0__["__generator"](this, function (_d) {
                switch (_d.label) {
                    case 0:
                        _a = this;
                        return [4 /*yield*/, this._us.getUsuario()];
                    case 1:
                        _a.usuario = _d.sent();
                        _b = this;
                        return [4 /*yield*/, this.activeRoute.snapshot.paramMap.get('id')];
                    case 2:
                        _b.id = _d.sent();
                        _c = this;
                        return [4 /*yield*/, this._cs.getCaso(this.id)];
                    case 3:
                        _c.casos = _d.sent();
                        console.log(this.casos);
                        this.cargarComentarios();
                        return [2 /*return*/];
                }
            });
        });
    };
    CasosPage.prototype.verImagen = function (src, extension) {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function () {
            var modal;
            return tslib__WEBPACK_IMPORTED_MODULE_0__["__generator"](this, function (_a) {
                switch (_a.label) {
                    case 0:
                        if (!(extension == ".pdf" || extension == ".doc" || extension == ".docx")) return [3 /*break*/, 1];
                        this.abrirWeb(src, "_system");
                        return [3 /*break*/, 4];
                    case 1: return [4 /*yield*/, this.modalController.create({
                            component: _post_imagen_post_imagen_component__WEBPACK_IMPORTED_MODULE_4__["PostImagenComponent"],
                            componentProps: {
                                imgLink: src
                            },
                            cssClass: 'modal-fullscreen',
                            keyboardClose: true,
                            showBackdrop: true
                        })];
                    case 2:
                        modal = _a.sent();
                        return [4 /*yield*/, modal.present()];
                    case 3: return [2 /*return*/, _a.sent()];
                    case 4: return [2 /*return*/];
                }
            });
        });
    };
    CasosPage.prototype.abrirWeb = function (url, target) {
        this.iab.create(url, target);
    };
    CasosPage.prototype.cerrarImagen = function () {
        this.modalController.dismiss();
    };
    CasosPage.prototype.comentar = function (socio_id) {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function () {
            var id_socio;
            return tslib__WEBPACK_IMPORTED_MODULE_0__["__generator"](this, function (_a) {
                switch (_a.label) {
                    case 0:
                        id_socio = parseInt(socio_id);
                        console.log("socio: ", id_socio);
                        if (!id_socio) return [3 /*break*/, 1];
                        return [3 /*break*/, 3];
                    case 1: return [4 /*yield*/, this._as.presentAlert("Por favor inicia sesión")];
                    case 2:
                        _a.sent();
                        return [2 /*return*/, false];
                    case 3:
                        if (!(this.comentario != "")) return [3 /*break*/, 6];
                        return [4 /*yield*/, this._cs.setComentario(id_socio, this.id, this.comentario)];
                    case 4:
                        _a.sent();
                        this.comentario = "";
                        return [4 /*yield*/, this._as.presentAlert("Su comentario fue enviado correctamente")];
                    case 5:
                        _a.sent();
                        this.cargarComentarios();
                        _a.label = 6;
                    case 6: return [2 /*return*/];
                }
            });
        });
    };
    CasosPage.prototype.cargarComentarios = function () {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function () {
            var _a;
            return tslib__WEBPACK_IMPORTED_MODULE_0__["__generator"](this, function (_b) {
                switch (_b.label) {
                    case 0:
                        _a = this;
                        return [4 /*yield*/, this._cs.getComentarios(this.id)];
                    case 1:
                        _a.comentarios = _b.sent();
                        return [2 /*return*/];
                }
            });
        });
    };
    CasosPage = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-casos',
            template: __webpack_require__(/*! ./casos.page.html */ "./src/app/pages/casos/casos.page.html"),
            styles: [__webpack_require__(/*! ./casos.page.scss */ "./src/app/pages/casos/casos.page.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [src_app_services_usuario_service__WEBPACK_IMPORTED_MODULE_2__["UsuarioService"],
            src_app_services_ajustes_service__WEBPACK_IMPORTED_MODULE_3__["AjustesService"],
            _angular_router__WEBPACK_IMPORTED_MODULE_6__["ActivatedRoute"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_5__["ModalController"],
            _ionic_native_in_app_browser_ngx__WEBPACK_IMPORTED_MODULE_8__["InAppBrowser"],
            src_app_services_casos_service__WEBPACK_IMPORTED_MODULE_7__["CasosService"]])
    ], CasosPage);
    return CasosPage;
}());



/***/ })

}]);
//# sourceMappingURL=casos-casos-module.js.map