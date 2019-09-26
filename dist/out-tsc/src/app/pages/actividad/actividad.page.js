import * as tslib_1 from "tslib";
import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ActividadesService } from 'src/app/services/actividades.service';
import { DatosService } from '../../services/datos.service';
var ActividadPage = /** @class */ (function () {
    function ActividadPage(activeRoute, _as, _ds) {
        this.activeRoute = activeRoute;
        this._as = _as;
        this._ds = _ds;
        this.id = null;
        this.seccion = "1";
    }
    ActividadPage.prototype.ngOnInit = function () {
        return tslib_1.__awaiter(this, void 0, void 0, function () {
            var _a;
            var _this = this;
            return tslib_1.__generator(this, function (_b) {
                switch (_b.label) {
                    case 0:
                        _a = this;
                        return [4 /*yield*/, this.activeRoute.snapshot.paramMap.get('id')];
                    case 1:
                        _a.id = _b.sent();
                        return [4 /*yield*/, this._as.getDetalles(this.id).then(function (result) {
                                _this.esFavorito();
                            })];
                    case 2:
                        _b.sent();
                        return [2 /*return*/];
                }
            });
        });
    };
    ActividadPage.prototype.guardarFavorito = function (favorito) {
        this._ds.guardarFavorito(favorito);
    };
    ActividadPage.prototype.esFavorito = function () {
        return tslib_1.__awaiter(this, void 0, void 0, function () {
            return tslib_1.__generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this._ds.isFavorito(this.id)];
                    case 1:
                        _a.sent();
                        return [2 /*return*/];
                }
            });
        });
    };
    ActividadPage = tslib_1.__decorate([
        Component({
            selector: 'app-actividad',
            templateUrl: './actividad.page.html',
            styleUrls: ['./actividad.page.scss'],
        }),
        tslib_1.__metadata("design:paramtypes", [ActivatedRoute,
            ActividadesService,
            DatosService])
    ], ActividadPage);
    return ActividadPage;
}());
export { ActividadPage };
//# sourceMappingURL=actividad.page.js.map