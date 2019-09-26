import * as tslib_1 from "tslib";
import { Component, ViewChild } from '@angular/core';
import { IonSlides, NavController } from '@ionic/angular';
import { UsuarioService } from 'src/app/services/usuario.service';
import { AjustesService } from 'src/app/services/ajustes.service';
var LoginPage = /** @class */ (function () {
    function LoginPage(_us, navCtrl, _as) {
        this._us = _us;
        this.navCtrl = navCtrl;
        this._as = _as;
        this.avatars = [
            {
                img: 'av-1.png',
                seleccionado: true
            },
            {
                img: 'av-2.png',
                seleccionado: false
            },
            {
                img: 'av-3.png',
                seleccionado: false
            },
            {
                img: 'av-4.png',
                seleccionado: false
            },
            {
                img: 'av-5.png',
                seleccionado: false
            },
            {
                img: 'av-6.png',
                seleccionado: false
            },
            {
                img: 'av-7.png',
                seleccionado: false
            },
            {
                img: 'av-8.png',
                seleccionado: false
            },
        ];
        this.avatarSlide = {
            slidesPerView: 3.5
        };
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
        this.slides.lockSwipes(true);
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
        console.log(avatar.img);
        this.avatars.forEach(function (av) { return av.seleccionado = false; });
        avatar.seleccionado = true;
        this.registerUser.avatar = avatar.img;
    };
    LoginPage.prototype.mostrarRegistro = function () {
        this.slides.lockSwipes(false);
        this.slides.slideTo(1);
        this.slides.lockSwipes(true);
    };
    LoginPage.prototype.mostrarLogin = function () {
        this.slides.lockSwipes(false);
        this.slides.slideTo(0);
        this.slides.lockSwipes(true);
    };
    tslib_1.__decorate([
        ViewChild('slidePrincipal'),
        tslib_1.__metadata("design:type", IonSlides)
    ], LoginPage.prototype, "slides", void 0);
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