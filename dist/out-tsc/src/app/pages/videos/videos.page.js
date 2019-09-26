import * as tslib_1 from "tslib";
import { Component } from '@angular/core';
import { ModalController } from '@ionic/angular';
import { VideosService } from 'src/app/services/videos.service';
import { InAppBrowser } from '@ionic-native/in-app-browser/ngx';
var VideosPage = /** @class */ (function () {
    function VideosPage(modalCtrl, _vs, iab) {
        this.modalCtrl = modalCtrl;
        this._vs = _vs;
        this.iab = iab;
        this.variable = "";
    }
    VideosPage.prototype.ngOnInit = function () {
        this._vs.pagina = 0;
        this._vs.videos = [];
        this._vs.cargar_todos();
    };
    VideosPage.prototype.detalles = function (url) {
        var link = url;
        this.iab.create(link, '_system');
    };
    VideosPage.prototype.buscar = function (texto) {
        this.variable = texto.target.value;
        this._vs.buscar(this.variable);
    };
    VideosPage.prototype.siguiente_pagina = function (event) {
        this._vs.siguiente_pagina()
            .then(function () {
            event.target.complete();
            event.target.disabled = false;
        });
    };
    VideosPage.prototype.recargar = function (event) {
        this._vs.recargar(this.variable)
            .then(function () {
            event.target.complete();
            event.target.disabled = false;
        });
    };
    VideosPage = tslib_1.__decorate([
        Component({
            selector: 'app-videos',
            templateUrl: './videos.page.html',
            styleUrls: ['./videos.page.scss'],
        }),
        tslib_1.__metadata("design:paramtypes", [ModalController,
            VideosService,
            InAppBrowser])
    ], VideosPage);
    return VideosPage;
}());
export { VideosPage };
//# sourceMappingURL=videos.page.js.map