import * as tslib_1 from "tslib";
import { Component } from '@angular/core';
import { PhotoViewer } from '@ionic-native/photo-viewer/ngx';
import { File } from '@ionic-native/file/ngx';
var ExpocomercialPage = /** @class */ (function () {
    function ExpocomercialPage(photoViewer, file) {
        this.photoViewer = photoViewer;
        this.file = file;
    }
    ExpocomercialPage.prototype.ngOnInit = function () {
    };
    ExpocomercialPage.prototype.viewPhoto = function (img) {
        var imageName = img;
        this.photoViewer.show(this.file.applicationDirectory + "www/assets/img/" + imageName, "Plano");
    };
    ExpocomercialPage = tslib_1.__decorate([
        Component({
            selector: 'app-expocomercial',
            templateUrl: './expocomercial.page.html',
            styleUrls: ['./expocomercial.page.scss'],
        }),
        tslib_1.__metadata("design:paramtypes", [PhotoViewer,
            File])
    ], ExpocomercialPage);
    return ExpocomercialPage;
}());
export { ExpocomercialPage };
//# sourceMappingURL=expocomercial.page.js.map