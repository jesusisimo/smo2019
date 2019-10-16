import * as tslib_1 from "tslib";
import { Component } from '@angular/core';
import { PhotoViewer } from '@ionic-native/photo-viewer/ngx';
import { File } from '@ionic-native/file/ngx';
import { InAppBrowser } from '@ionic-native/in-app-browser/ngx';
var CongresosPage = /** @class */ (function () {
    function CongresosPage(photoViewer, iab, file) {
        this.photoViewer = photoViewer;
        this.iab = iab;
        this.file = file;
    }
    CongresosPage.prototype.ngOnInit = function () {
    };
    CongresosPage.prototype.viewPhoto = function (img) {
        var imageName = img;
        this.photoViewer.show(this.file.applicationDirectory + "www/assets/img/" + imageName, "Esquema");
    };
    CongresosPage.prototype.abrirWeb = function (url, target) {
        this.iab.create(url, target);
    };
    CongresosPage = tslib_1.__decorate([
        Component({
            selector: 'app-congresos',
            templateUrl: './congresos.page.html',
            styleUrls: ['./congresos.page.scss'],
        }),
        tslib_1.__metadata("design:paramtypes", [PhotoViewer,
            InAppBrowser,
            File])
    ], CongresosPage);
    return CongresosPage;
}());
export { CongresosPage };
//# sourceMappingURL=congresos.page.js.map