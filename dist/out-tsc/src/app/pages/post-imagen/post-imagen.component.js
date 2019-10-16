import * as tslib_1 from "tslib";
import { Component, Input } from '@angular/core';
import { ModalController } from '@ionic/angular';
var PostImagenComponent = /** @class */ (function () {
    function PostImagenComponent(modalController) {
        this.modalController = modalController;
        this.imgLink = '../../assets/avatars/av-4.png';
        this.slideOpts = {
            centeredSlides: 'true'
        };
    }
    PostImagenComponent.prototype.ngOnInit = function () { };
    PostImagenComponent.prototype.cerrarImagen = function () {
        this.modalController.dismiss();
    };
    tslib_1.__decorate([
        Input(),
        tslib_1.__metadata("design:type", Object)
    ], PostImagenComponent.prototype, "imgLink", void 0);
    PostImagenComponent = tslib_1.__decorate([
        Component({
            selector: 'app-post-imagen',
            templateUrl: './post-imagen.component.html',
            styleUrls: ['./post-imagen.component.scss'],
        }),
        tslib_1.__metadata("design:paramtypes", [ModalController])
    ], PostImagenComponent);
    return PostImagenComponent;
}());
export { PostImagenComponent };
//# sourceMappingURL=post-imagen.component.js.map