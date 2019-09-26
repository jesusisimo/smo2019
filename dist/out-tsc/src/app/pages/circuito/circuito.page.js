import * as tslib_1 from "tslib";
import { Component } from '@angular/core';
import { PhotoViewer } from '@ionic-native/photo-viewer/ngx';
import { File } from '@ionic-native/file/ngx';
var CircuitoPage = /** @class */ (function () {
    function CircuitoPage(photoViewer, file) {
        this.photoViewer = photoViewer;
        this.file = file;
    }
    CircuitoPage.prototype.ngOnInit = function () {
    };
    CircuitoPage.prototype.viewPhoto = function (img) {
        var imageName = img;
        this.photoViewer.show(this.file.applicationDirectory + "www/assets/img/esquemas/" + imageName, "Esquema");
    };
    CircuitoPage = tslib_1.__decorate([
        Component({
            selector: 'app-circuito',
            templateUrl: './circuito.page.html',
            styleUrls: ['./circuito.page.scss'],
        }),
        tslib_1.__metadata("design:paramtypes", [PhotoViewer,
            File])
    ], CircuitoPage);
    return CircuitoPage;
}());
export { CircuitoPage };
//# sourceMappingURL=circuito.page.js.map