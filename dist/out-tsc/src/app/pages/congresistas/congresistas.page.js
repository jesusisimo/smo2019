import * as tslib_1 from "tslib";
import { Component } from '@angular/core';
import { ModalController, NavController } from '@ionic/angular';
import { CongresistasService } from 'src/app/services/congresistas.service';
var CongresistasPage = /** @class */ (function () {
    function CongresistasPage(modalCtrl, _cs, navCtrl) {
        this.modalCtrl = modalCtrl;
        this._cs = _cs;
        this.navCtrl = navCtrl;
        this.variable = "";
    }
    CongresistasPage.prototype.ngOnInit = function () {
        this._cs.pagina = 0;
        this._cs.congresistas = [];
        this._cs.cargar_todos();
    };
    CongresistasPage.prototype.verDetalles = function (id) {
        this.navCtrl.navigateForward("/tabs/principal/congresistas/congresista/" + id);
    };
    CongresistasPage.prototype.buscar = function (texto) {
        this.variable = texto.target.value;
        this._cs.buscar(this.variable);
    };
    CongresistasPage.prototype.siguiente_pagina = function (event) {
        this._cs.siguiente_pagina()
            .then(function () {
            event.target.complete();
            event.target.disabled = false;
        });
    };
    CongresistasPage.prototype.recargar = function (event) {
        this._cs.recargar(this.variable)
            .then(function () {
            event.target.complete();
            event.target.disabled = false;
        });
    };
    CongresistasPage = tslib_1.__decorate([
        Component({
            selector: 'app-congresistas',
            templateUrl: './congresistas.page.html',
            styleUrls: ['./congresistas.page.scss'],
        }),
        tslib_1.__metadata("design:paramtypes", [ModalController,
            CongresistasService,
            NavController])
    ], CongresistasPage);
    return CongresistasPage;
}());
export { CongresistasPage };
//# sourceMappingURL=congresistas.page.js.map