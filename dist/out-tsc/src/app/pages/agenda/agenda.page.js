import * as tslib_1 from "tslib";
import { Component } from '@angular/core';
import { NavController } from '@ionic/angular';
import { DatosService } from '../../services/datos.service';
var AgendaPage = /** @class */ (function () {
    function AgendaPage(_ds, navCtrl) {
        this._ds = _ds;
        this.navCtrl = navCtrl;
        this.favoritos = [];
    }
    AgendaPage.prototype.ngOnInit = function () {
        this.getFavoritos();
    };
    AgendaPage.prototype.getFavoritos = function () {
        var _this = this;
        var promise = this._ds.getFavoritos()
            .then(function (data) {
            _this.favoritos = _this._ds.favoritos;
            return data;
        });
    };
    AgendaPage.prototype.verDetalles = function (id) {
        this.navCtrl.navigateForward("/tabs/principal/programa/actividad/" + id);
    };
    AgendaPage.prototype.ionViewWillEnter = function () {
        this.getFavoritos();
    };
    AgendaPage = tslib_1.__decorate([
        Component({
            selector: 'app-agenda',
            templateUrl: './agenda.page.html',
            styleUrls: ['./agenda.page.scss'],
        }),
        tslib_1.__metadata("design:paramtypes", [DatosService,
            NavController])
    ], AgendaPage);
    return AgendaPage;
}());
export { AgendaPage };
//# sourceMappingURL=agenda.page.js.map