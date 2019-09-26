import * as tslib_1 from "tslib";
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { URL_SERVICIOS } from "../config/url.servicios";
import { AjustesService } from './ajustes.service';
import 'rxjs/add/operator/map';
var BuscadorService = /** @class */ (function () {
    function BuscadorService(http, _as) {
        this.http = http;
        this._as = _as;
        this.tipos = [];
        this.tipo_actual = "1";
    }
    BuscadorService.prototype.buscar = function (variable) {
        return tslib_1.__awaiter(this, void 0, void 0, function () {
            var url, promesa_1;
            var _this = this;
            return tslib_1.__generator(this, function (_a) {
                this.tipos = [];
                if (!this._as.online) {
                }
                else {
                    url = URL_SERVICIOS + "/buscador.php?search=" + variable;
                    promesa_1 = this.http.get(url)
                        .toPromise()
                        .then(function (data) {
                        _this.tipos = data.tipos;
                        _this.tipo_actual = data.tipo_actual;
                        return promesa_1;
                    })
                        .catch(function (error) {
                        _this._as.presentToast("Ocurrio un error");
                        return Promise.reject(error);
                    });
                    return [2 /*return*/, promesa_1];
                }
                return [2 /*return*/];
            });
        });
    };
    BuscadorService = tslib_1.__decorate([
        Injectable({
            providedIn: 'root'
        }),
        tslib_1.__metadata("design:paramtypes", [HttpClient,
            AjustesService])
    ], BuscadorService);
    return BuscadorService;
}());
export { BuscadorService };
//# sourceMappingURL=buscador.service.js.map