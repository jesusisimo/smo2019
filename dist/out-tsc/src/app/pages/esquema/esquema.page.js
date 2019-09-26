import * as tslib_1 from "tslib";
import { Component } from '@angular/core';
import { PhotoViewer } from '@ionic-native/photo-viewer/ngx';
import { File } from '@ionic-native/file/ngx';
var EsquemaPage = /** @class */ (function () {
    function EsquemaPage(photoViewer, file) {
        this.photoViewer = photoViewer;
        this.file = file;
    }
    EsquemaPage.prototype.ngOnInit = function () {
    };
    EsquemaPage.prototype.viewPhoto = function (img) {
        var imageName = img;
        this.photoViewer.show(this.file.applicationDirectory + "www/assets/img/esquemas/" + imageName, "Esquema");
    };
    EsquemaPage = tslib_1.__decorate([
        Component({
            selector: 'app-esquema',
            templateUrl: './esquema.page.html',
            styleUrls: ['./esquema.page.scss'],
        }),
        tslib_1.__metadata("design:paramtypes", [PhotoViewer,
            File])
    ], EsquemaPage);
    return EsquemaPage;
}());
export { EsquemaPage };
//# sourceMappingURL=esquema.page.js.map