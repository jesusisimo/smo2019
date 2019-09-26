import * as tslib_1 from "tslib";
import { Component } from '@angular/core';
import { BuscadorService } from 'src/app/services/buscador.service';
import { InAppBrowser } from '@ionic-native/in-app-browser/ngx';
import { NavController } from '@ionic/angular';
var BuscadorPage = /** @class */ (function () {
    function BuscadorPage(_bs, iab, navCtrl) {
        this._bs = _bs;
        this.iab = iab;
        this.navCtrl = navCtrl;
        this.variable = "";
        this._bs.tipo_actual = "1";
        this._bs.tipos = [];
    }
    BuscadorPage.prototype.ngOnInit = function () {
    };
    BuscadorPage.prototype.buscar = function (texto) {
        this._bs.tipos = [];
        this.variable = texto.target.value;
        if (this.variable.length > 3) {
            this._bs.buscar(this.variable);
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
            NavController])
    ], BuscadorPage);
    return BuscadorPage;
}());
export { BuscadorPage };
//# sourceMappingURL=buscador.page.js.map