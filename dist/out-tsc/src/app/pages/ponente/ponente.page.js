import * as tslib_1 from "tslib";
import { Component } from '@angular/core';
import { ActividadesService } from 'src/app/services/actividades.service';
import { ActivatedRoute } from '@angular/router';
import { NavController } from '@ionic/angular';
var PonentePage = /** @class */ (function () {
    function PonentePage(_as, activeRoute, navCtrl) {
        this._as = _as;
        this.activeRoute = activeRoute;
        this.navCtrl = navCtrl;
        this.id = null;
        this.actividades = null;
    }
    PonentePage.prototype.ngOnInit = function () {
        this.id = this.activeRoute.snapshot.paramMap.get('id');
        this._as.actividadesPonente(this.id).then(function (result) {
        });
    };
    PonentePage.prototype.verDetalles = function (id) {
        this.navCtrl.navigateForward("/tabs/principal/programa/actividad/" + id);
    };
    PonentePage = tslib_1.__decorate([
        Component({
            selector: 'app-ponente',
            templateUrl: './ponente.page.html',
            styleUrls: ['./ponente.page.scss'],
        }),
        tslib_1.__metadata("design:paramtypes", [ActividadesService,
            ActivatedRoute,
            NavController])
    ], PonentePage);
    return PonentePage;
}());
export { PonentePage };
//# sourceMappingURL=ponente.page.js.map