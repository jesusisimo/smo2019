(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["default~casos-casos-module~pages-casos-lista-casos-lista-module"],{

/***/ "./src/app/services/casos.service.ts":
/*!*******************************************!*\
  !*** ./src/app/services/casos.service.ts ***!
  \*******************************************/
/*! exports provided: CasosService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CasosService", function() { return CasosService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _config_url_servicios__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../config/url.servicios */ "./src/app/config/url.servicios.ts");
/* harmony import */ var _ajustes_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./ajustes.service */ "./src/app/services/ajustes.service.ts");
/* harmony import */ var rxjs_add_operator_map__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! rxjs/add/operator/map */ "./node_modules/rxjs-compat/_esm5/add/operator/map.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");






var CasosService = /** @class */ (function () {
    function CasosService(http, _as) {
        this.http = http;
        this._as = _as;
    }
    CasosService.prototype.cargar_todos = function () {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function () {
            var url, promesa;
            var _this = this;
            return tslib__WEBPACK_IMPORTED_MODULE_0__["__generator"](this, function (_a) {
                switch (_a.label) {
                    case 0:
                        url = _config_url_servicios__WEBPACK_IMPORTED_MODULE_2__["URL_SERVICIOS"] + "/casosC.php";
                        return [4 /*yield*/, this.http.get(url)
                                .toPromise()
                                .then(function (data) {
                                _this.casos = data.casos;
                                return _this.casos;
                            })
                                .catch(function (error) {
                                _this._as.loading.dismiss();
                                return Promise.reject(error);
                            })];
                    case 1:
                        promesa = _a.sent();
                        return [2 /*return*/, promesa];
                }
            });
        });
    };
    CasosService.prototype.getCaso = function (id) {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function () {
            var url, promesa;
            var _this = this;
            return tslib__WEBPACK_IMPORTED_MODULE_0__["__generator"](this, function (_a) {
                switch (_a.label) {
                    case 0:
                        url = _config_url_servicios__WEBPACK_IMPORTED_MODULE_2__["URL_SERVICIOS"] + "/casosC.php?id=" + id;
                        return [4 /*yield*/, this.http.get(url)
                                .toPromise()
                                .then(function (data) {
                                _this.casos = data.casos;
                                return _this.casos;
                            })
                                .catch(function (error) {
                                _this._as.loading.dismiss();
                                return Promise.reject(error);
                            })];
                    case 1:
                        promesa = _a.sent();
                        return [2 /*return*/, promesa];
                }
            });
        });
    };
    CasosService.prototype.setComentario = function (socio_id, caso_id, comentario) {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function () {
            var _this = this;
            return tslib__WEBPACK_IMPORTED_MODULE_0__["__generator"](this, function (_a) {
                return [2 /*return*/, new Promise(function (resolve) {
                        var url = _config_url_servicios__WEBPACK_IMPORTED_MODULE_2__["URL_SERVICIOS"] + "/setComentario.php";
                        _this.http.post(url, { 'socio_id': socio_id, 'caso_id': caso_id, 'comentario': comentario })
                            .subscribe(function (resp) {
                            if (!resp['error']) {
                                resolve(true);
                            }
                            else {
                                resolve(false);
                            }
                        });
                    })];
            });
        });
    };
    CasosService.prototype.getComentarios = function (caso) {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function () {
            var url, promesa;
            var _this = this;
            return tslib__WEBPACK_IMPORTED_MODULE_0__["__generator"](this, function (_a) {
                switch (_a.label) {
                    case 0:
                        url = _config_url_servicios__WEBPACK_IMPORTED_MODULE_2__["URL_SERVICIOS"] + "/comentarios.php?caso=" + caso;
                        return [4 /*yield*/, this.http.get(url)
                                .toPromise()
                                .then(function (data) {
                                _this.comentarios = data.comentarios;
                                return _this.comentarios;
                            })
                                .catch(function (error) {
                                _this._as.loading.dismiss();
                                return Promise.reject(error);
                            })];
                    case 1:
                        promesa = _a.sent();
                        return [2 /*return*/, promesa];
                }
            });
        });
    };
    CasosService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
            providedIn: 'root'
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_common_http__WEBPACK_IMPORTED_MODULE_5__["HttpClient"],
            _ajustes_service__WEBPACK_IMPORTED_MODULE_3__["AjustesService"]])
    ], CasosService);
    return CasosService;
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
//# sourceMappingURL=default~casos-casos-module~pages-casos-lista-casos-lista-module.js.map