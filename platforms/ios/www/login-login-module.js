(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["login-login-module"],{

/***/ "./src/app/pages/login/login.module.ts":
/*!*********************************************!*\
  !*** ./src/app/pages/login/login.module.ts ***!
  \*********************************************/
/*! exports provided: LoginPageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LoginPageModule", function() { return LoginPageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");
/* harmony import */ var _login_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./login.page */ "./src/app/pages/login/login.page.ts");







var routes = [
    {
        path: '',
        component: _login_page__WEBPACK_IMPORTED_MODULE_6__["LoginPage"]
    }
];
var LoginPageModule = /** @class */ (function () {
    function LoginPageModule() {
    }
    LoginPageModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            imports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
                _ionic_angular__WEBPACK_IMPORTED_MODULE_5__["IonicModule"],
                _angular_router__WEBPACK_IMPORTED_MODULE_4__["RouterModule"].forChild(routes)
            ],
            declarations: [_login_page__WEBPACK_IMPORTED_MODULE_6__["LoginPage"]]
        })
    ], LoginPageModule);
    return LoginPageModule;
}());



/***/ }),

/***/ "./src/app/pages/login/login.page.html":
/*!*********************************************!*\
  !*** ./src/app/pages/login/login.page.html ***!
  \*********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<ion-content no-padding class=\"background\">\n    <div class=\"main\">\n        <form (ngSubmit)=\"login(fLogin)\" #fLogin=\"ngForm\">\n      <ion-card no-margin class=\"card\" color=\"shadow\">\n        <ion-card-content >\n            <ion-row class=\"row\">\n                <div class=\"fire-logo\">\n                    <img src=\"../../assets/img/logo_smo_blanco.png\" class=\"logoSmall\">\n                    <br>\n                    <ion-text><h1 no-margin margin-vertical text-center>Socio SMO</h1></ion-text>\n                  </div>\n            </ion-row>\n            <ion-row>\n                <ion-col>\n                  <ion-input name=\"email\" type=\"email\" placeholder=\"usuario@correo.com\" [(ngModel)]=\"loginUser.email\" required class=\"input\" padding-horizontal clear-input=\"true\"></ion-input>\n                </ion-col>\n              </ion-row>\n              <ion-row>\n                <ion-col>\n                  <ion-input type=\"password\" name=\"password\"  placeholder=\"Contraseña\" [(ngModel)]=\"loginUser.password\" required class=\"input\" padding-horizontal clear-input=\"true\"></ion-input>\n                </ion-col>\n              </ion-row>\n              <ion-row>\n                <ion-col>\n                  <ion-text float-end color=\"medium\" ><h6 no-margin text-end class=\"small\">Recupera tu contraseña</h6></ion-text>\n                </ion-col>\n              </ion-row>\n              <ion-row>\n                <ion-col>\n                  <ion-button expand=\"block\" color=\"undefined\" class=\"btn-transition\" type=\"submit\">\n                    <strong class=\"white\">Ingresar</strong>\n                  </ion-button>\n                </ion-col>\n              </ion-row>\n              <div class=\"line\"></div>\n              <ion-row>\n              </ion-row>\n        </ion-card-content>\n      </ion-card>\n        </form>\n    </div>\n  </ion-content>\n  "

/***/ }),

/***/ "./src/app/pages/login/login.page.scss":
/*!*********************************************!*\
  !*** ./src/app/pages/login/login.page.scss ***!
  \*********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "@charset \"UTF-8\";\nion-content.background {\n  --background: url('/assets/img/background.jpg') 0 0/100% 100% no-repeat; }\n.logoSmall {\n  background-color: #00000000;\n  size: 4em; }\n.white {\n  color: white;\n  padding: 10px;\n  text-align: center; }\n.blueOne {\n  color: #0303b4;\n  padding: 10px;\n  text-align: center; }\n.blueOne:hover {\n  color: #dedee4;\n  padding: 10px;\n  text-align: center; }\n/**\n* Ionic Full App  (https://store.enappd.com/product/ionic-full-app-ionic-4-full-app)\n*\n* Copyright © 2019-present Enappd. All rights reserved.\n*\n* This source code is licensed as per the terms found in the\n* LICENSE.md file in the root directory of this source tree.\n*/\n.main {\n  height: 100vh;\n  display: flex;\n  flex-direction: column;\n  justify-content: center; }\nion-card {\n  --background: #fff;\n  box-shadow: none;\n  -webkit-box-shadow: none; }\n@media screen and (min-width: 768px) {\n  ion-card {\n    width: 500px;\n    margin: auto; } }\n.input {\n  background-color: #f0f0f0;\n  border: 1px solid #a2a2a2;\n  border-radius: 9px;\n  font-size: .9em !important; }\n.white, h1 {\n  color: white; }\n.small {\n  font-size: 13px; }\n.small a {\n    text-decoration: unset !important; }\n.button-color {\n  background-color: var(--ion-color-mytheme); }\n.logo {\n  width: 1.25em !important; }\n.grid {\n  height: 100vh;\n  display: flex;\n  flex-direction: column;\n  justify-content: center; }\n.row {\n  display: flex;\n  flex-direction: row;\n  justify-content: center; }\n.img-logo {\n  height: 150px;\n  width: 150px; }\n.fire-logo {\n  display: flex;\n  flex-direction: column;\n  justify-content: center; }\n.fire-logo ion-text {\n    padding: 10px; }\n.btn-transition {\n  background: linear-gradient(to right, #006 14%, #3d3d3d 96%); }\n.btn-color {\n  color: #006;\n  --border-radius: 0; }\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvcGFnZXMvbG9naW4vbG9naW4ucGFnZS5zY3NzIiwiL1VzZXJzL2JyYi9Eb2N1bWVudHMvR2l0SHViL0FQUF9TTU8vc21vL3NyYy9hcHAvcGFnZXMvbG9naW4vbG9naW4ucGFnZS5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBLGdCQUFnQjtBQ0FoQjtFQUNJLHVFQUFhLEVBQUE7QUFFakI7RUFDSSwyQkFBMkI7RUFDM0IsU0FBUyxFQUFBO0FBR2I7RUFDSSxZQUFZO0VBQ1osYUFBYTtFQUNiLGtCQUFrQixFQUFBO0FBR3RCO0VBQ0ksY0FBYztFQUNkLGFBQWE7RUFDYixrQkFBa0IsRUFBQTtBQUV0QjtFQUNJLGNBQWM7RUFDZCxhQUFhO0VBQ2Isa0JBQWtCLEVBQUE7QUFHdEI7Ozs7Ozs7Q0RLQztBQ0dEO0VBQ0ksYUFBYTtFQUNiLGFBQWE7RUFDYixzQkFBc0I7RUFDdEIsdUJBQXVCLEVBQUE7QUFFM0I7RUFDSSxrQkFBYTtFQUNiLGdCQUFnQjtFQUNoQix3QkFBdUIsRUFBQTtBQUUzQjtFQUNJO0lBQ0ksWUFBWTtJQUNaLFlBQVksRUFBQSxFQUNmO0FBRUw7RUFDSSx5QkFBb0M7RUFDcEMseUJBQXlCO0VBQ3pCLGtCQUFrQjtFQUNsQiwwQkFBMEIsRUFBQTtBQUU5QjtFQUNJLFlBQVksRUFBQTtBQUdoQjtFQUNJLGVBQWUsRUFBQTtBQURuQjtJQUdRLGlDQUFpQyxFQUFBO0FBR3pDO0VBQ0ksMENBQTJDLEVBQUE7QUFFL0M7RUFDSSx3QkFBd0IsRUFBQTtBQUU1QjtFQUNJLGFBQWE7RUFDYixhQUFhO0VBQ2Isc0JBQXNCO0VBQ3RCLHVCQUF1QixFQUFBO0FBRTNCO0VBQ0ksYUFBYTtFQUNiLG1CQUFtQjtFQUNuQix1QkFBdUIsRUFBQTtBQUUzQjtFQUNJLGFBQVk7RUFDWixZQUFXLEVBQUE7QUFFZjtFQUNJLGFBQWE7RUFDYixzQkFBc0I7RUFDdEIsdUJBQXVCLEVBQUE7QUFIM0I7SUFLUSxhQUFhLEVBQUE7QUFHckI7RUFDSSw0REFBNEQsRUFBQTtBQUVoRTtFQUNJLFdBQVU7RUFDVixrQkFBZ0IsRUFBQSIsImZpbGUiOiJzcmMvYXBwL3BhZ2VzL2xvZ2luL2xvZ2luLnBhZ2Uuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIkBjaGFyc2V0IFwiVVRGLThcIjtcbmlvbi1jb250ZW50LmJhY2tncm91bmQge1xuICAtLWJhY2tncm91bmQ6IHVybCgnL2Fzc2V0cy9pbWcvYmFja2dyb3VuZC5qcGcnKSAwIDAvMTAwJSAxMDAlIG5vLXJlcGVhdDsgfVxuXG4ubG9nb1NtYWxsIHtcbiAgYmFja2dyb3VuZC1jb2xvcjogIzAwMDAwMDAwO1xuICBzaXplOiA0ZW07IH1cblxuLndoaXRlIHtcbiAgY29sb3I6IHdoaXRlO1xuICBwYWRkaW5nOiAxMHB4O1xuICB0ZXh0LWFsaWduOiBjZW50ZXI7IH1cblxuLmJsdWVPbmUge1xuICBjb2xvcjogIzAzMDNiNDtcbiAgcGFkZGluZzogMTBweDtcbiAgdGV4dC1hbGlnbjogY2VudGVyOyB9XG5cbi5ibHVlT25lOmhvdmVyIHtcbiAgY29sb3I6ICNkZWRlZTQ7XG4gIHBhZGRpbmc6IDEwcHg7XG4gIHRleHQtYWxpZ246IGNlbnRlcjsgfVxuXG4vKipcbiogSW9uaWMgRnVsbCBBcHAgIChodHRwczovL3N0b3JlLmVuYXBwZC5jb20vcHJvZHVjdC9pb25pYy1mdWxsLWFwcC1pb25pYy00LWZ1bGwtYXBwKVxuKlxuKiBDb3B5cmlnaHQgwqkgMjAxOS1wcmVzZW50IEVuYXBwZC4gQWxsIHJpZ2h0cyByZXNlcnZlZC5cbipcbiogVGhpcyBzb3VyY2UgY29kZSBpcyBsaWNlbnNlZCBhcyBwZXIgdGhlIHRlcm1zIGZvdW5kIGluIHRoZVxuKiBMSUNFTlNFLm1kIGZpbGUgaW4gdGhlIHJvb3QgZGlyZWN0b3J5IG9mIHRoaXMgc291cmNlIHRyZWUuXG4qL1xuLm1haW4ge1xuICBoZWlnaHQ6IDEwMHZoO1xuICBkaXNwbGF5OiBmbGV4O1xuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjsgfVxuXG5pb24tY2FyZCB7XG4gIC0tYmFja2dyb3VuZDogI2ZmZjtcbiAgYm94LXNoYWRvdzogbm9uZTtcbiAgLXdlYmtpdC1ib3gtc2hhZG93OiBub25lOyB9XG5cbkBtZWRpYSBzY3JlZW4gYW5kIChtaW4td2lkdGg6IDc2OHB4KSB7XG4gIGlvbi1jYXJkIHtcbiAgICB3aWR0aDogNTAwcHg7XG4gICAgbWFyZ2luOiBhdXRvOyB9IH1cblxuLmlucHV0IHtcbiAgYmFja2dyb3VuZC1jb2xvcjogI2YwZjBmMDtcbiAgYm9yZGVyOiAxcHggc29saWQgI2EyYTJhMjtcbiAgYm9yZGVyLXJhZGl1czogOXB4O1xuICBmb250LXNpemU6IC45ZW0gIWltcG9ydGFudDsgfVxuXG4ud2hpdGUsIGgxIHtcbiAgY29sb3I6IHdoaXRlOyB9XG5cbi5zbWFsbCB7XG4gIGZvbnQtc2l6ZTogMTNweDsgfVxuICAuc21hbGwgYSB7XG4gICAgdGV4dC1kZWNvcmF0aW9uOiB1bnNldCAhaW1wb3J0YW50OyB9XG5cbi5idXR0b24tY29sb3Ige1xuICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1pb24tY29sb3ItbXl0aGVtZSk7IH1cblxuLmxvZ28ge1xuICB3aWR0aDogMS4yNWVtICFpbXBvcnRhbnQ7IH1cblxuLmdyaWQge1xuICBoZWlnaHQ6IDEwMHZoO1xuICBkaXNwbGF5OiBmbGV4O1xuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjsgfVxuXG4ucm93IHtcbiAgZGlzcGxheTogZmxleDtcbiAgZmxleC1kaXJlY3Rpb246IHJvdztcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7IH1cblxuLmltZy1sb2dvIHtcbiAgaGVpZ2h0OiAxNTBweDtcbiAgd2lkdGg6IDE1MHB4OyB9XG5cbi5maXJlLWxvZ28ge1xuICBkaXNwbGF5OiBmbGV4O1xuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjsgfVxuICAuZmlyZS1sb2dvIGlvbi10ZXh0IHtcbiAgICBwYWRkaW5nOiAxMHB4OyB9XG5cbi5idG4tdHJhbnNpdGlvbiB7XG4gIGJhY2tncm91bmQ6IGxpbmVhci1ncmFkaWVudCh0byByaWdodCwgIzAwNiAxNCUsICMzZDNkM2QgOTYlKTsgfVxuXG4uYnRuLWNvbG9yIHtcbiAgY29sb3I6ICMwMDY7XG4gIC0tYm9yZGVyLXJhZGl1czogMDsgfVxuIiwiaW9uLWNvbnRlbnQuYmFja2dyb3VuZHtcbiAgICAtLWJhY2tncm91bmQ6IHVybCgnL2Fzc2V0cy9pbWcvYmFja2dyb3VuZC5qcGcnKSAwIDAvMTAwJSAxMDAlIG5vLXJlcGVhdDtcbn1cbi5sb2dvU21hbGx7XG4gICAgYmFja2dyb3VuZC1jb2xvcjogIzAwMDAwMDAwO1xuICAgIHNpemU6IDRlbTtcbn1cblxuLndoaXRle1xuICAgIGNvbG9yOiB3aGl0ZTtcbiAgICBwYWRkaW5nOiAxMHB4O1xuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcbn1cblxuLmJsdWVPbmV7XG4gICAgY29sb3I6ICMwMzAzYjQ7XG4gICAgcGFkZGluZzogMTBweDtcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XG59XG4uYmx1ZU9uZTpob3ZlcntcbiAgICBjb2xvcjogI2RlZGVlNDtcbiAgICBwYWRkaW5nOiAxMHB4O1xuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcbn0gXG5cbi8qKlxuKiBJb25pYyBGdWxsIEFwcCAgKGh0dHBzOi8vc3RvcmUuZW5hcHBkLmNvbS9wcm9kdWN0L2lvbmljLWZ1bGwtYXBwLWlvbmljLTQtZnVsbC1hcHApXG4qXG4qIENvcHlyaWdodCDCqSAyMDE5LXByZXNlbnQgRW5hcHBkLiBBbGwgcmlnaHRzIHJlc2VydmVkLlxuKlxuKiBUaGlzIHNvdXJjZSBjb2RlIGlzIGxpY2Vuc2VkIGFzIHBlciB0aGUgdGVybXMgZm91bmQgaW4gdGhlXG4qIExJQ0VOU0UubWQgZmlsZSBpbiB0aGUgcm9vdCBkaXJlY3Rvcnkgb2YgdGhpcyBzb3VyY2UgdHJlZS5cbiovXG4ubWFpbntcbiAgICBoZWlnaHQ6IDEwMHZoO1xuICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcbn1cbmlvbi1jYXJke1xuICAgIC0tYmFja2dyb3VuZDogI2ZmZjtcbiAgICBib3gtc2hhZG93OiBub25lO1xuICAgIC13ZWJraXQtYm94LXNoYWRvdzpub25lO1xufVxuQG1lZGlhIHNjcmVlbiBhbmQgKG1pbi13aWR0aDo3NjhweCl7XG4gICAgaW9uLWNhcmR7XG4gICAgICAgIHdpZHRoOiA1MDBweDtcbiAgICAgICAgbWFyZ2luOiBhdXRvO1xuICAgIH1cbn1cbi5pbnB1dCB7XG4gICAgYmFja2dyb3VuZC1jb2xvcjogcmdiKDI0MCwgMjQwLCAyNDApO1xuICAgIGJvcmRlcjogMXB4IHNvbGlkICNhMmEyYTI7XG4gICAgYm9yZGVyLXJhZGl1czogOXB4O1xuICAgIGZvbnQtc2l6ZTogLjllbSAhaW1wb3J0YW50O1xufVxuLndoaXRlLCBoMXtcbiAgICBjb2xvcjogd2hpdGU7XG59XG5cbi5zbWFsbCB7XG4gICAgZm9udC1zaXplOiAxM3B4O1xuICAgIGF7XG4gICAgICAgIHRleHQtZGVjb3JhdGlvbjogdW5zZXQgIWltcG9ydGFudDtcbiAgICB9XG59XG4uYnV0dG9uLWNvbG9yIHtcbiAgICBiYWNrZ3JvdW5kLWNvbG9yIDogdmFyKC0taW9uLWNvbG9yLW15dGhlbWUpO1xufVxuLmxvZ28ge1xuICAgIHdpZHRoOiAxLjI1ZW0gIWltcG9ydGFudDtcbn1cbi5ncmlke1xuICAgIGhlaWdodDogMTAwdmg7XG4gICAgZGlzcGxheTogZmxleDtcbiAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xuICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xufVxuLnJvd3tcbiAgICBkaXNwbGF5OiBmbGV4O1xuICAgIGZsZXgtZGlyZWN0aW9uOiByb3c7XG4gICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG59XG4uaW1nLWxvZ297XG4gICAgaGVpZ2h0OjE1MHB4O1xuICAgIHdpZHRoOjE1MHB4O1xufVxuLmZpcmUtbG9nb3tcbiAgICBkaXNwbGF5OiBmbGV4O1xuICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XG4gICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG4gICAgaW9uLXRleHR7XG4gICAgICAgIHBhZGRpbmc6IDEwcHg7XG4gICAgfVxufVxuLmJ0bi10cmFuc2l0aW9ue1xuICAgIGJhY2tncm91bmQ6IGxpbmVhci1ncmFkaWVudCh0byByaWdodCwgIzAwNiAxNCUsICMzZDNkM2QgOTYlKTtcbn1cbi5idG4tY29sb3J7XG4gICAgY29sb3I6IzAwNjtcbiAgICAtLWJvcmRlci1yYWRpdXM6IDA7XG59Il19 */"

/***/ }),

/***/ "./src/app/pages/login/login.page.ts":
/*!*******************************************!*\
  !*** ./src/app/pages/login/login.page.ts ***!
  \*******************************************/
/*! exports provided: LoginPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LoginPage", function() { return LoginPage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");
/* harmony import */ var src_app_services_usuario_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/app/services/usuario.service */ "./src/app/services/usuario.service.ts");
/* harmony import */ var src_app_services_ajustes_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! src/app/services/ajustes.service */ "./src/app/services/ajustes.service.ts");





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
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function () {
            var valido;
            return tslib__WEBPACK_IMPORTED_MODULE_0__["__generator"](this, function (_a) {
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
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function () {
            var registrado;
            return tslib__WEBPACK_IMPORTED_MODULE_0__["__generator"](this, function (_a) {
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
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"])('slidePrincipal'),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["IonSlides"])
    ], LoginPage.prototype, "slides", void 0);
    LoginPage = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-login',
            template: __webpack_require__(/*! ./login.page.html */ "./src/app/pages/login/login.page.html"),
            styles: [__webpack_require__(/*! ./login.page.scss */ "./src/app/pages/login/login.page.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [src_app_services_usuario_service__WEBPACK_IMPORTED_MODULE_3__["UsuarioService"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["NavController"],
            src_app_services_ajustes_service__WEBPACK_IMPORTED_MODULE_4__["AjustesService"]])
    ], LoginPage);
    return LoginPage;
}());



/***/ })

}]);
//# sourceMappingURL=login-login-module.js.map