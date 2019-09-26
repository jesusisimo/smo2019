import * as tslib_1 from "tslib";
import { Component } from '@angular/core';
import { NavController, Platform, AlertController } from '@ionic/angular';
import { InAppBrowser } from '@ionic-native/in-app-browser/ngx';
import { UsuarioService } from 'src/app/services/usuario.service';
import { AjustesService } from 'src/app/services/ajustes.service';
import { FileOpener } from '@ionic-native/file-opener/ngx';
import { DocumentViewer } from '@ionic-native/document-viewer/ngx';
import { File } from '@ionic-native/file/ngx';
import { FileTransfer } from '@ionic-native/file-transfer/ngx';
var PrincipalPage = /** @class */ (function () {
    function PrincipalPage(navCtrl, iab, _us, _as, platform, file, ft, fileOpener, document, alert) {
        this.navCtrl = navCtrl;
        this.iab = iab;
        this._us = _us;
        this._as = _as;
        this.platform = platform;
        this.file = file;
        this.ft = ft;
        this.fileOpener = fileOpener;
        this.document = document;
        this.alert = alert;
    }
    PrincipalPage.prototype.navegarPagina = function (pagina) {
        return tslib_1.__awaiter(this, void 0, void 0, function () {
            var _a;
            return tslib_1.__generator(this, function (_b) {
                switch (_b.label) {
                    case 0:
                        console.log(pagina);
                        _a = (pagina == "agenda" || pagina == "congresistas");
                        if (!_a) return [3 /*break*/, 2];
                        return [4 /*yield*/, this._us.tienePermiso()];
                    case 1:
                        _a = !(_b.sent());
                        _b.label = 2;
                    case 2:
                        if (_a) {
                            this._as.presentAlert("Inicia sesión para ver esta sección");
                            this.navCtrl.navigateRoot('/tabs/login');
                        }
                        else {
                            this.navCtrl.navigateForward('/tabs/principal/' + pagina);
                        }
                        return [2 /*return*/];
                }
            });
        });
    };
    PrincipalPage.prototype.abrirWeb = function (url, target) {
        this.iab.create(url, target);
    };
    PrincipalPage.prototype.openLocalPdf = function () {
        var _this = this;
        var filePath = this.file.applicationDirectory + 'www/assets';
        if (this.platform.is('android')) {
            var fakeName = Date.now();
            this.file.copyFile(filePath, 'programa_final.pdf', this.file.dataDirectory, fakeName + ".pdf").then(function (result) {
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
            this.document.viewDocument(filePath + "/programa_final.pdf", 'application/pdf', options);
        }
    };
    PrincipalPage.prototype.downloadAndOpenPdf = function () {
        var _this = this;
        var downloadUrl = 'http://www.paaocancun2019.com/wp-content/uploads/2019/05/programa_paao2.pdf';
        var path = this.file.dataDirectory;
        var transfer = this.ft.create();
        transfer.download(downloadUrl, path + 'programa.pdf').then(function (entry) {
            var url = entry.toURL();
            if (_this.platform.is('ios')) {
                _this.document.viewDocument(url, 'application/pdf', {});
            }
            else {
                _this.fileOpener.open(url, 'application/pdf')
                    .then(function () { return console.log('File is opened'); })
                    .catch(function (e) { return console.log('Error opening file', e); });
            }
        });
    };
    PrincipalPage = tslib_1.__decorate([
        Component({
            selector: 'app-principal',
            templateUrl: './principal.page.html',
            styleUrls: ['./principal.page.scss'],
        }),
        tslib_1.__metadata("design:paramtypes", [NavController,
            InAppBrowser,
            UsuarioService,
            AjustesService,
            Platform,
            File,
            FileTransfer,
            FileOpener,
            DocumentViewer,
            AlertController])
    ], PrincipalPage);
    return PrincipalPage;
}());
export { PrincipalPage };
//# sourceMappingURL=principal.page.js.map