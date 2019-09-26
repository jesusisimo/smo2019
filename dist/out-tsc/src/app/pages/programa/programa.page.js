import * as tslib_1 from "tslib";
import { Component } from '@angular/core';
import { NavController } from '@ionic/angular';
import { ActividadesService } from 'src/app/services/actividades.service';
import { InAppBrowser } from '@ionic-native/in-app-browser/ngx';
import { Router } from '@angular/router';
var ProgramaPage = /** @class */ (function () {
    function ProgramaPage(router, navCtrl, _as, iab) {
        this.router = router;
        this.navCtrl = navCtrl;
        this._as = _as;
        this.iab = iab;
        this.variable = "";
    }
    ProgramaPage.prototype.ngOnInit = function () {
        this._as.pagina = 0;
        this._as.dias = [];
        this._as.cargar_todos().then(function (result) { return console.log("Ok"); });
    };
    ProgramaPage.prototype.verDetalles = function (id) {
        this.navCtrl.navigateForward("/tabs/principal/programa/actividad/" + id);
    };
    ProgramaPage.prototype.buscar = function (texto) {
        this.variable = texto.target.value;
        this._as.buscar(this.variable);
    };
    ProgramaPage = tslib_1.__decorate([
        Component({
            selector: 'app-programa',
            templateUrl: './programa.page.html',
            styleUrls: ['./programa.page.scss'],
        }),
        tslib_1.__metadata("design:paramtypes", [Router,
            NavController,
            ActividadesService,
            InAppBrowser])
    ], ProgramaPage);
    return ProgramaPage;
}());
export { ProgramaPage };
//# sourceMappingURL=programa.page.js.map