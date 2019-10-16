import * as tslib_1 from "tslib";
import { Component } from '@angular/core';
import { NavController } from '@ionic/angular';
import { UsuarioService } from 'src/app/services/usuario.service';
import { AjustesService } from 'src/app/services/ajustes.service';
var LoginPage = /** @class */ (function () {
    function LoginPage(_us, navCtrl, _as) {
        this._us = _us;
        this.navCtrl = navCtrl;
        this._as = _as;
        this.loginUser = {
            email: "",
            password: ""
        };
        this.registerUser = {
            email: "",
            password: "",
            nombre: "",
            apellidos: "",
            telefono: "",
            institucion: "",
            avatar: "av-1.png",
        };
    }
    LoginPage.prototype.ngOnInit = function () {
    };
    LoginPage.prototype.login = function (fLogin) {
        return tslib_1.__awaiter(this, void 0, void 0, function () {
            var valido;
            return tslib_1.__generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        if (fLogin.invalid) {
                            return [2 /*return*/, false];
                        }
                        return [4 /*yield*/, this._us.login(this.loginUser.email, this.loginUser.password)];
                    case 1:
                        valido = _a.sent();
                        if (valido) {
                            this._as.presentAlert("Bienvenido");
                            this.navCtrl.navigateRoot('/tabs/login/usuario', { animated: true });
                        }
                        else {
                            this._as.presentAlert("Usuario o contraseña incorrectos");
                        }
                        return [2 /*return*/];
                }
            });
        });
    };
    LoginPage.prototype.registro = function (fRegistro) {
        return tslib_1.__awaiter(this, void 0, void 0, function () {
            var registrado;
            return tslib_1.__generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        console.log(fRegistro);
                        if (fRegistro.invalid) {
                            return [2 /*return*/, false];
                        }
                        return [4 /*yield*/, this._us.registro(this.registerUser)];
                    case 1:
                        registrado = _a.sent();
                        if (registrado) {
                            //navegar tabs
                            this._as.presentAlert("Registro exitoso");
                            this.navCtrl.navigateRoot('/tabs/login/usuario', { animated: true });
                        }
                        return [2 /*return*/];
                }
            });
        });
    };
    LoginPage.prototype.seleccionarAvatar = function (avatar) {
        this.registerUser.avatar = avatar.img;
    };
    LoginPage.prototype.mostrarRegistro = function () {
    };
    LoginPage.prototype.mostrarLogin = function () {
    };
    LoginPage = tslib_1.__decorate([
        Component({
            selector: 'app-login',
            templateUrl: './login.page.html',
            styleUrls: ['./login.page.scss'],
        }),
        tslib_1.__metadata("design:paramtypes", [UsuarioService,
            NavController,
            AjustesService])
    ], LoginPage);
    return LoginPage;
}());
export { LoginPage };
//# sourceMappingURL=login.page.js.map