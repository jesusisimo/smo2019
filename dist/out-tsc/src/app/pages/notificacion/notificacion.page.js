import * as tslib_1 from "tslib";
import { Component, Input } from '@angular/core';
import { ModalController } from '@ionic/angular';
var NotificacionPage = /** @class */ (function () {
    function NotificacionPage(modalCtrl) {
        this.modalCtrl = modalCtrl;
    }
    NotificacionPage.prototype.ngOnInit = function () {
        console.log(this.notificacion);
    };
    NotificacionPage.prototype.salir = function () {
        this.modalCtrl.dismiss();
    };
    tslib_1.__decorate([
        Input(),
        tslib_1.__metadata("design:type", Object)
    ], NotificacionPage.prototype, "notificacion", void 0);
    NotificacionPage = tslib_1.__decorate([
        Component({
            selector: 'app-notificacion',
            templateUrl: './notificacion.page.html',
            styleUrls: ['./notificacion.page.scss'],
        }),
        tslib_1.__metadata("design:paramtypes", [ModalController])
    ], NotificacionPage);
    return NotificacionPage;
}());
export { NotificacionPage };
//# sourceMappingURL=notificacion.page.js.map