import * as tslib_1 from "tslib";
import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { CongresistasService } from 'src/app/services/congresistas.service';
var CongresistaPage = /** @class */ (function () {
    function CongresistaPage(activeRoute, _cs) {
        this.activeRoute = activeRoute;
        this._cs = _cs;
        this.id = null;
        this.congresista = null;
        this.email_c = false;
        this.telefono_c = false;
        this.institucion_c = false;
    }
    CongresistaPage.prototype.ngOnInit = function () {
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
                        return [4 /*yield*/, this._cs.getDetalles(this.id).then(function (result) {
                                console.log(_this._cs.congresista);
                                if (_this._cs.congresista.email_c == "1") {
                                    _this.email_c = true;
                                }
                                if (_this._cs.congresista.telefono_c == "1") {
                                    _this.telefono_c = true;
                                }
                                if (_this._cs.congresista.institucion_c == "1") {
                                    _this.institucion_c = true;
                                }
                            })];
                    case 2:
                        _b.sent();
                        return [2 /*return*/];
                }
            });
        });
    };
    CongresistaPage = tslib_1.__decorate([
        Component({
            selector: 'app-congresista',
            templateUrl: './congresista.page.html',
            styleUrls: ['./congresista.page.scss'],
        }),
        tslib_1.__metadata("design:paramtypes", [ActivatedRoute,
            CongresistasService])
    ], CongresistaPage);
    return CongresistaPage;
}());
export { CongresistaPage };
//# sourceMappingURL=congresista.page.js.map