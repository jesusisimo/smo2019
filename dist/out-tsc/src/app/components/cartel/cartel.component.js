import * as tslib_1 from "tslib";
import { Component, Input } from '@angular/core';
import { CartelesService } from 'src/app/services/carteles.service';
import { ModalController } from '@ionic/angular';
var CartelComponent = /** @class */ (function () {
    function CartelComponent(_cs, modalCtrl) {
        this._cs = _cs;
        this.modalCtrl = modalCtrl;
    }
    CartelComponent.prototype.ngOnInit = function () {
        //console.log("ID "+this.id);
        this.cartel = this._cs.getDetalles(this.id);
    };
    CartelComponent.prototype.regresar = function () {
        this.modalCtrl.dismiss();
    };
    tslib_1.__decorate([
        Input(),
        tslib_1.__metadata("design:type", Object)
    ], CartelComponent.prototype, "id", void 0);
    CartelComponent = tslib_1.__decorate([
        Component({
            selector: 'app-cartel',
            templateUrl: './cartel.component.html',
            styleUrls: ['./cartel.component.scss'],
        }),
        tslib_1.__metadata("design:paramtypes", [CartelesService,
            ModalController])
    ], CartelComponent);
    return CartelComponent;
}());
export { CartelComponent };
//# sourceMappingURL=cartel.component.js.map