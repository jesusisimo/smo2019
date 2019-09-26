import * as tslib_1 from "tslib";
import { Pipe } from '@angular/core';
var URL = "https://image.tmdb.org/t/p";
var ImagenPipe = /** @class */ (function () {
    function ImagenPipe() {
    }
    ImagenPipe.prototype.transform = function (img, size) {
        if (size === void 0) { size = "w500"; }
        if (!img) {
            return;
        }
        var imgUrl = URL + "/" + size + "/" + img;
        console.log('URL ', imgUrl);
        return imgUrl;
    };
    ImagenPipe = tslib_1.__decorate([
        Pipe({
            name: 'imagen'
        })
    ], ImagenPipe);
    return ImagenPipe;
}());
export { ImagenPipe };
//# sourceMappingURL=imagen.pipe.js.map