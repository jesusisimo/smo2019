import * as tslib_1 from "tslib";
import { Component } from '@angular/core';
import { PhotoViewer } from '@ionic-native/photo-viewer/ngx';
import { File } from '@ionic-native/file/ngx';
import { Platform } from '@ionic/angular';
import { FileOpener } from '@ionic-native/file-opener/ngx';
import { DocumentViewer } from '@ionic-native/document-viewer/ngx';
var ActividadesPage = /** @class */ (function () {
    function ActividadesPage(photoViewer, file, platform, fileOpener, document) {
        this.photoViewer = photoViewer;
        this.file = file;
        this.platform = platform;
        this.fileOpener = fileOpener;
        this.document = document;
    }
    ActividadesPage.prototype.ngOnInit = function () {
    };
    ActividadesPage.prototype.viewPhoto = function (img) {
        var imageName = img;
        this.photoViewer.show(this.file.applicationDirectory + "www/assets/img/" + imageName, "Plano");
    };
    ActividadesPage.prototype.verPrograma = function () {
        var _this = this;
        var filePath = this.file.applicationDirectory + 'www/assets';
        if (this.platform.is('android')) {
            var fakeName = Date.now();
            this.file.copyFile(filePath, 'programa_curso_bienal.pdf', this.file.dataDirectory, fakeName + ".pdf").then(function (result) {
                _this.fileOpener.open(result.nativeURL, 'application/pdf')
                    .then(function () { return console.log('File is opened'); })
                    .catch(function (e) { return console.log('Error opening file', e); });
            });
        }
        else {
            // Use Document viewer for iOS for a better UI
            var options = {
                title: 'Programa'
            };
            this.document.viewDocument(filePath + "/programa_curso_bienal.pdf", 'application/pdf', options);
        }
    };
    ActividadesPage = tslib_1.__decorate([
        Component({
            selector: 'app-actividades',
            templateUrl: './actividades.page.html',
            styleUrls: ['./actividades.page.scss'],
        }),
        tslib_1.__metadata("design:paramtypes", [PhotoViewer,
            File,
            Platform,
            FileOpener,
            DocumentViewer])
    ], ActividadesPage);
    return ActividadesPage;
}());
export { ActividadesPage };
//# sourceMappingURL=actividades.page.js.map