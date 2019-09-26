import * as tslib_1 from "tslib";
import { Injectable } from '@angular/core';
import { LoadingController, Platform, ToastController, AlertController } from '@ionic/angular';
import { Network } from '@ionic-native/network/ngx';
var AjustesService = /** @class */ (function () {
    function AjustesService(loadingCtrl, toastCtrl, platform, network, alertCtrl) {
        this.loadingCtrl = loadingCtrl;
        this.toastCtrl = toastCtrl;
        this.platform = platform;
        this.network = network;
        this.alertCtrl = alertCtrl;
        this.online = true;
        this.checkConexion();
    }
    AjustesService.prototype.presentLoading = function (mensaje, segundos) {
        if (segundos === void 0) { segundos = 3; }
        return tslib_1.__awaiter(this, void 0, void 0, function () {
            var duracion, _a;
            return tslib_1.__generator(this, function (_b) {
                switch (_b.label) {
                    case 0:
                        duracion = 1000 * segundos;
                        _a = this;
                        return [4 /*yield*/, this.loadingCtrl.create({
                                message: mensaje,
                                duration: duracion
                            })];
                    case 1:
                        _a.loading = _b.sent();
                        return [4 /*yield*/, this.loading.present()];
                    case 2:
                        _b.sent();
                        return [2 /*return*/];
                }
            });
        });
    };
    AjustesService.prototype.presentToast = function (mensaje) {
        return tslib_1.__awaiter(this, void 0, void 0, function () {
            var toast;
            return tslib_1.__generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this.toastCtrl.create({
                            message: mensaje,
                            duration: 3000,
                            position: 'bottom',
                            color: 'dark'
                        })];
                    case 1:
                        toast = _a.sent();
                        toast.present();
                        return [2 /*return*/];
                }
            });
        });
    };
    AjustesService.prototype.presentAlert = function (mensaje) {
        return tslib_1.__awaiter(this, void 0, void 0, function () {
            var alert;
            return tslib_1.__generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this.alertCtrl.create({
                            header: 'Mensaje',
                            message: mensaje,
                            buttons: ['OK']
                        })];
                    case 1:
                        alert = _a.sent();
                        return [4 /*yield*/, alert.present()];
                    case 2:
                        _a.sent();
                        return [2 /*return*/];
                }
            });
        });
    };
    AjustesService.prototype.checkConexion = function () {
        var _this = this;
        if (this.platform.is('cordova')) {
            if (this.network.type === undefined || this.network.type === null || this.network.type === 'unknown') {
                this.online = false;
                console.log('No hay conexion a internet');
                this.presentToast('No hay conexion a internet');
            }
            else {
                this.online = true;
            }
        }
        else {
            this.online = navigator.onLine;
        }
        var disconnectSubscription = this.network.onDisconnect().subscribe(function () {
            console.log('No hay conexion a internet');
            _this.presentToast('Se perdio la conexion a internet');
            _this.online = false;
        });
        var connectSubscription = this.network.onConnect().subscribe(function () {
            _this.online = true;
        });
    };
    AjustesService = tslib_1.__decorate([
        Injectable({
            providedIn: 'root'
        }),
        tslib_1.__metadata("design:paramtypes", [LoadingController,
            ToastController,
            Platform,
            Network,
            AlertController])
    ], AjustesService);
    return AjustesService;
}());
export { AjustesService };
//# sourceMappingURL=ajustes.service.js.map