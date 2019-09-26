import * as tslib_1 from "tslib";
import { Injectable } from '@angular/core';
import { Storage } from '@ionic/storage';
import { URL_SERVICIOS } from '../config/url.servicios';
import { HttpClient } from '@angular/common/http';
import 'rxjs/add/operator/map';
import { AjustesService } from './ajustes.service';
var DatosService = /** @class */ (function () {
    function DatosService(storage, http, _as) {
        this.storage = storage;
        this.http = http;
        this._as = _as;
        this.actividad = [];
        this.is_favorito = "ligth";
        this.favoritos = [];
    }
    DatosService.prototype.actualizaciones = function () {
        if (this._as.online) {
            this.guardarCarteles();
            this.guardarActividades();
            this.guardarVideos();
            this.guardarPatrocinadores();
            this.guardarProfesores();
            // this.storage.get('carteles').then((valores) => {
            //   if (!valores) {
            //     this.guardarCarteles();
            //   }
            // });
            // this.storage.get('actividades').then((valores) => {
            //   if (!valores) {
            //     this.guardarActividades();
            //   }
            // });
            // this.storage.get('videos').then((valores) => {
            //   if (!valores) {
            //     this.guardarVideos();
            //   }
            // });
            // this.storage.get('patrocinadores').then((valores) => {
            //   if (!valores) {
            //     this.guardarPatrocinadores();
            //   }
            // });
        }
    };
    //CARTELES
    DatosService.prototype.guardarCarteles = function () {
        var _this = this;
        var url = URL_SERVICIOS + "/carteles.php?getall";
        var promesa = this.http.get(url)
            .toPromise()
            .then(function (data) {
            if (data.resultados.length > 0) {
                _this.storage.set('carteles', data.resultados);
                //this._as.presentToast("Carteles guardados en dispositivo");
            }
            return promesa;
        })
            .catch(function (error) {
            return Promise.reject(error);
        });
        return promesa;
    };
    DatosService.prototype.getCarteles = function () {
        return tslib_1.__awaiter(this, void 0, void 0, function () {
            var promesa;
            var _this = this;
            return tslib_1.__generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this.storage.get('carteles').then(function (valores) {
                            _this.carteles = valores;
                            return valores;
                        })];
                    case 1:
                        promesa = _a.sent();
                        return [2 /*return*/, promesa];
                }
            });
        });
    };
    //PROFESORES
    DatosService.prototype.getProfesores = function () {
        return tslib_1.__awaiter(this, void 0, void 0, function () {
            var promesa;
            var _this = this;
            return tslib_1.__generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this.storage.get('profesores').then(function (valores) {
                            _this.profesores = valores;
                            return valores;
                        })];
                    case 1:
                        promesa = _a.sent();
                        return [2 /*return*/, promesa];
                }
            });
        });
    };
    DatosService.prototype.guardarProfesores = function () {
        var _this = this;
        var url = URL_SERVICIOS + "/profesores.php?getall";
        var promesa = this.http.get(url)
            .toPromise()
            .then(function (data) {
            if (data.profesores.length > 0) {
                _this.storage.set('profesores', data.profesores);
            }
            return promesa;
        })
            .catch(function (error) {
            return Promise.reject(error);
        });
        return promesa;
    };
    //VIDEOS
    DatosService.prototype.guardarVideos = function () {
        var _this = this;
        var url = URL_SERVICIOS + "/videos.php?getall";
        var promesa = this.http.get(url)
            .toPromise()
            .then(function (data) {
            if (data.resultados.length > 0) {
                _this.storage.set('videos', data.resultados);
                //this._as.presentToast("Videos guardados en dispositivo");
            }
            return promesa;
        })
            .catch(function (error) {
            return Promise.reject(error);
        });
        return promesa;
    };
    DatosService.prototype.getVideos = function () {
        return tslib_1.__awaiter(this, void 0, void 0, function () {
            var promesa;
            var _this = this;
            return tslib_1.__generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this.storage.get('videos').then(function (valores) {
                            _this.videos = valores;
                            return valores;
                        })];
                    case 1:
                        promesa = _a.sent();
                        return [2 /*return*/, promesa];
                }
            });
        });
    };
    DatosService.prototype.getFavoritos = function () {
        return tslib_1.__awaiter(this, void 0, void 0, function () {
            var promesa;
            var _this = this;
            return tslib_1.__generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this.storage.get('favoritos').then(function (valores) {
                            _this.favoritos = valores;
                            return promesa;
                        })];
                    case 1:
                        promesa = _a.sent();
                        return [2 /*return*/, promesa];
                }
            });
        });
    };
    //Actividades
    DatosService.prototype.guardarActividades = function () {
        var _this = this;
        var url = URL_SERVICIOS + "/minutoxminuto.php?getall";
        var promesa = this.http.get(url)
            .toPromise()
            .then(function (data) {
            if (data.dias.length > 0) {
                _this.storage.set('actividades', data);
                // this._as.presentToast("Actividades save");
            }
            return promesa;
        })
            .catch(function (error) {
            return Promise.reject(error);
        });
        return promesa;
    };
    DatosService.prototype.getActividades = function () {
        return tslib_1.__awaiter(this, void 0, void 0, function () {
            var promesa;
            var _this = this;
            return tslib_1.__generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this.storage.get('actividades').then(function (valores) {
                            _this.actividades = valores;
                            return valores;
                        })];
                    case 1:
                        promesa = _a.sent();
                        return [2 /*return*/, promesa];
                }
            });
        });
    };
    DatosService.prototype.getActividad = function (id) {
        return tslib_1.__awaiter(this, void 0, void 0, function () {
            var promesa;
            return tslib_1.__generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this.storage.get('actividades').then(function (valores) {
                            if (valores) {
                                for (var _i = 0, _a = valores.dias; _i < _a.length; _i++) {
                                    var dia = _a[_i];
                                    for (var _b = 0, _c = dia.actividades; _b < _c.length; _b++) {
                                        var actividad = _c[_b];
                                        if (actividad.id == id) {
                                            return actividad;
                                            break;
                                        }
                                    }
                                }
                            }
                            // this.actividades = valores;
                            return valores;
                        })];
                    case 1:
                        promesa = _a.sent();
                        return [2 /*return*/, promesa];
                }
            });
        });
    };
    //PATROCINADORES
    DatosService.prototype.guardarPatrocinadores = function () {
        var _this = this;
        var url = URL_SERVICIOS + "/patrocinadores.php?getall";
        var promesa = this.http.get(url)
            .toPromise()
            .then(function (data) {
            if (data.resultados.length > 0) {
                _this.storage.set('patrocinadores', data.resultados);
                //this._as.presentToast("Patrocinadores guardados en dispositivo");
            }
            return promesa;
        })
            .catch(function (error) {
            return Promise.reject(error);
        });
        return promesa;
    };
    DatosService.prototype.getPatrocinadores = function () {
        return tslib_1.__awaiter(this, void 0, void 0, function () {
            var promesa;
            var _this = this;
            return tslib_1.__generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this.storage.get('patrocinadores').then(function (valores) {
                            _this.patrocinadores = valores;
                            return valores;
                        })];
                    case 1:
                        promesa = _a.sent();
                        return [2 /*return*/, promesa];
                }
            });
        });
    };
    //PATROCINADORES
    DatosService.prototype.guardarFavorito = function (favorito) {
        return tslib_1.__awaiter(this, void 0, void 0, function () {
            var existe, mensaje, promesa;
            var _this = this;
            return tslib_1.__generator(this, function (_a) {
                existe = false;
                mensaje = "";
                promesa = this.storage.get('favoritos').then(function (valores) {
                    if (valores) {
                        _this.favoritos = valores;
                        for (var _i = 0, _a = _this.favoritos; _i < _a.length; _i++) {
                            var act = _a[_i];
                            if (act.id == favorito.id) {
                                existe = true;
                                break;
                            }
                        }
                    }
                    if (existe) {
                        _this.favoritos = _this.favoritos.filter(function (act) { return act.id !== favorito.id; });
                        mensaje = "Borrado de favoritos";
                        _this.is_favorito = "ligth";
                    }
                    else {
                        _this.favoritos.push(favorito);
                        _this.is_favorito = "danger";
                        mensaje = "Agregado a favoritos";
                    }
                    _this.storage.set('favoritos', _this.favoritos).then(function (result) {
                        _this._as.presentToast(mensaje);
                        return promesa;
                    });
                });
                return [2 /*return*/, promesa];
            });
        });
    };
    DatosService.prototype.isFavorito = function (id) {
        return tslib_1.__awaiter(this, void 0, void 0, function () {
            var mensaje;
            var _this = this;
            return tslib_1.__generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        mensaje = "";
                        this.is_favorito = "ligth";
                        console.log("BUSCANDO EN FAVORITOS");
                        return [4 /*yield*/, this.storage.get('favoritos').then(function (valores) {
                                for (var _i = 0, valores_1 = valores; _i < valores_1.length; _i++) {
                                    var act = valores_1[_i];
                                    if (act.id == id) {
                                        console.log("EXISTE");
                                        _this.is_favorito = "danger";
                                        break;
                                    }
                                }
                            })];
                    case 1:
                        _a.sent();
                        return [2 /*return*/];
                }
            });
        });
    };
    DatosService = tslib_1.__decorate([
        Injectable({
            providedIn: 'root'
        }),
        tslib_1.__metadata("design:paramtypes", [Storage,
            HttpClient,
            AjustesService])
    ], DatosService);
    return DatosService;
}());
export { DatosService };
//# sourceMappingURL=datos.service.js.map