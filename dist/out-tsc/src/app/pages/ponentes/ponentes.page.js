import * as tslib_1 from "tslib";
import { Component } from '@angular/core';
import { ModalController, NavController } from '@ionic/angular';
import { PonentesService } from 'src/app/services/ponentes.service';
var PonentesPage = /** @class */ (function () {
    function PonentesPage(modalCtrl, _ps, navCtrl) {
        this.modalCtrl = modalCtrl;
        this._ps = _ps;
        this.navCtrl = navCtrl;
        this.variable = "";
    }
    PonentesPage.prototype.ngOnInit = function () {
        this._ps.pagina = 0;
        this._ps.ponentes = [];
        this._ps.cargar_todos();
    };
    PonentesPage.prototype.verDetalles = function (id) {
        this.navCtrl.navigateForward("/tabs/principal/ponentes/ponente/" + id);
    };
    PonentesPage.prototype.buscar = function (texto) {
        this.variable = texto.target.value;
        this._ps.buscar(this.variable);
    };
    PonentesPage.prototype.siguiente_pagina = function (event) {
        this._ps.siguiente_pagina()
            .then(function () {
            event.target.complete();
            event.target.disabled = false;
        });
    };
    PonentesPage.prototype.recargar = function (event) {
        this._ps.recargar(this.variable)
            .then(function () {
            event.target.complete();
            event.target.disabled = false;
        });
    };
    PonentesPage = tslib_1.__decorate([
        Component({
            selector: 'app-ponentes',
            templateUrl: './ponentes.page.html',
            styleUrls: ['./ponentes.page.scss'],
        }),
        tslib_1.__metadata("design:paramtypes", [ModalController,
            PonentesService,
            NavController])
    ], PonentesPage);
    return PonentesPage;
}());
export { PonentesPage };
//# sourceMappingURL=ponentes.page.js.map