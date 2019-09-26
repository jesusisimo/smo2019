import * as tslib_1 from "tslib";
import { Component } from '@angular/core';
import { ModalController } from '@ionic/angular';
import { PatrocinadoresService } from 'src/app/services/patrocinadores.service';
import { InAppBrowser } from '@ionic-native/in-app-browser/ngx';
var PatrocinadoresPage = /** @class */ (function () {
    function PatrocinadoresPage(modalCtrl, _ps, iab) {
        this.modalCtrl = modalCtrl;
        this._ps = _ps;
        this.iab = iab;
        this.variable = "";
    }
    PatrocinadoresPage.prototype.ngOnInit = function () {
        this._ps.pagina = 0;
        this._ps.patrocinadores = [];
        this._ps.cargar_todos();
    };
    PatrocinadoresPage.prototype.abrirWeb = function (url) {
        this.iab.create(url, '_system');
    };
    PatrocinadoresPage.prototype.buscar = function (texto) {
        this.variable = texto.target.value;
        this._ps.buscar(this.variable);
    };
    PatrocinadoresPage.prototype.siguiente_pagina = function (event) {
        this._ps.siguiente_pagina()
            .then(function () {
            event.target.complete();
            event.target.disabled = false;
        });
    };
    PatrocinadoresPage.prototype.recargar = function (event) {
        this._ps.recargar(this.variable)
            .then(function () {
            event.target.complete();
            event.target.disabled = false;
        });
    };
    PatrocinadoresPage = tslib_1.__decorate([
        Component({
            selector: 'app-patrocinadores',
            templateUrl: './patrocinadores.page.html',
            styleUrls: ['./patrocinadores.page.scss'],
        }),
        tslib_1.__metadata("design:paramtypes", [ModalController,
            PatrocinadoresService,
            InAppBrowser])
    ], PatrocinadoresPage);
    return PatrocinadoresPage;
}());
export { PatrocinadoresPage };
//# sourceMappingURL=patrocinadores.page.js.map