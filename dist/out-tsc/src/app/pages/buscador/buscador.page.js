import * as tslib_1 from "tslib";
import { Component } from '@angular/core';
import { BuscadorService } from 'src/app/services/buscador.service';
import { InAppBrowser } from '@ionic-native/in-app-browser/ngx';
import { NavController } from '@ionic/angular';
import { AjustesService } from 'src/app/services/ajustes.service';
var BuscadorPage = /** @class */ (function () {
    function BuscadorPage(_bs, iab, navCtrl, _as) {
        this._bs = _bs;
        this.iab = iab;
        this.navCtrl = navCtrl;
        this._as = _as;
        this.variable = "";
        this._bs.tipo_actual = "1";
        this._bs.tipos = [];
    }
    BuscadorPage.prototype.ngOnInit = function () {
        this._as.checkConexion();
    };
    BuscadorPage.prototype.buscar = function (texto) {
        if (!this._as.online) {
            this._as.presentAlert("Esta sección solo funciona con conexión a internet, vuelve al menú y realiza las busquedas en programa general, videos, carteles o ponentes según lo requieras.");
        }
        else {
            this._bs.tipos = [];
            this.variable = texto.target.value;
            if (this.variable.length > 3) {
                this._bs.buscar(this.variable);
            }
        }
    };
    BuscadorPage.prototype.detalles = function (resultado) {
        if (resultado.clase == "video" || resultado.clase == "cartel") {
            this.iab.create(resultado.extra, '_system');
        }
        else {
            this.navCtrl.navigateForward("/tabs/principal/programa/actividad/" + resultado.id);
        }
    };
    BuscadorPage = tslib_1.__decorate([
        Component({
            selector: 'app-buscador',
            templateUrl: './buscador.page.html',
            styleUrls: ['./buscador.page.scss'],
        }),
        tslib_1.__metadata("design:paramtypes", [BuscadorService,
            InAppBrowser,
            NavController,
            AjustesService])
    ], BuscadorPage);
    return BuscadorPage;
}());
export { BuscadorPage };
//# sourceMappingURL=buscador.page.js.map