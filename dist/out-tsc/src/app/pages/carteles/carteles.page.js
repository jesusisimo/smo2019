import * as tslib_1 from "tslib";
import { Component } from '@angular/core';
import { ModalController } from '@ionic/angular';
import { CartelesService } from 'src/app/services/carteles.service';
import { InAppBrowser } from '@ionic-native/in-app-browser/ngx';
var CartelesPage = /** @class */ (function () {
    function CartelesPage(modalCtrl, _cs, iab) {
        this.modalCtrl = modalCtrl;
        this._cs = _cs;
        this.iab = iab;
        this.variable = "";
    }
    CartelesPage.prototype.ngOnInit = function () {
        this._cs.pagina = 0;
        this._cs.carteles = [];
        this._cs.cargar_todos();
    };
    // async verCartel(id:any){
    //   const modal = await this.modalCtrl.create({
    //     component: CartelComponent,
    //     componentProps:{
    //       id
    //     }
    //   });
    //   modal.present();
    // }
    CartelesPage.prototype.detalles = function (url) {
        console.log(url);
        this.iab.create(url, '_system');
    };
    CartelesPage.prototype.buscar = function (texto) {
        this.variable = texto.target.value;
        this._cs.buscar(this.variable);
    };
    CartelesPage.prototype.siguiente_pagina = function (event) {
        this._cs.siguiente_pagina()
            .then(function () {
            event.target.complete();
            event.target.disabled = false;
        });
    };
    CartelesPage.prototype.recargar = function (event) {
        this._cs.recargar(this.variable)
            .then(function () {
            event.target.complete();
            event.target.disabled = false;
        });
    };
    CartelesPage = tslib_1.__decorate([
        Component({
            selector: 'app-carteles',
            templateUrl: './carteles.page.html',
            styleUrls: ['./carteles.page.scss'],
        }),
        tslib_1.__metadata("design:paramtypes", [ModalController,
            CartelesService,
            InAppBrowser])
    ], CartelesPage);
    return CartelesPage;
}());
export { CartelesPage };
//# sourceMappingURL=carteles.page.js.map