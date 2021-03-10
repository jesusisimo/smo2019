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

module.exports = "<ion-content no-padding class=\"background\">\n    <div class=\"main\">\n        <form (ngSubmit)=\"login(fLogin)\" #fLogin=\"ngForm\">\n      <ion-card no-margin class=\"card\" color=\"shadow\">\n        <ion-card-content >\n            <ion-row class=\"row\">\n                <div class=\"fire-logo\">\n                    <img src=\"../../assets/img/logo_smo_blanco.png\" class=\"logoSmall\">\n                    <br>\n                    <ion-text><h1 no-margin margin-vertical text-center>Acceso a Socios SMO</h1></ion-text>\n                  </div>\n            </ion-row>\n            <ion-row>\n                <ion-col>\n                  <ion-input name=\"email\" type=\"email\" placeholder=\"usuario@correo.com\" [(ngModel)]=\"loginUser.email\" required class=\"input\" padding-horizontal clear-input=\"true\"></ion-input>\n                </ion-col>\n              </ion-row>\n              <ion-row>\n                <ion-col>\n                  <ion-input type=\"password\" name=\"password\"  placeholder=\"Contraseña\" [(ngModel)]=\"loginUser.password\" required class=\"input\" padding-horizontal clear-input=\"true\"></ion-input>\n                </ion-col>\n              </ion-row>\n              \n              <ion-row>\n                <ion-col>\n                  <ion-button expand=\"block\" color=\"undefined\" class=\"btn-transition\" type=\"submit\">\n                    <strong class=\"white\">Ingresar</strong>\n                  </ion-button>\n                </ion-col>\n              </ion-row>\n              <div class=\"line\"></div>\n              <ion-row>\n              </ion-row>\n        </ion-card-content>\n      </ion-card>\n        </form>\n    </div>\n  </ion-content>\n  "

/***/ }),

/***/ "./src/app/pages/login/login.page.scss":
/*!*********************************************!*\
  !*** ./src/app/pages/login/login.page.scss ***!
  \*********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "@charset \"UTF-8\";\nion-content.background {\n  --background: url('/assets/img/background.jpg') 0 0/100% 100% no-repeat; }\n.logoSmall {\n  background-color: #00000000;\n  size: 4em; }\n.white {\n  color: white;\n  padding: 10px;\n  text-align: center; }\n.blueOne {\n  color: #0303b4;\n  padding: 10px;\n  text-align: center; }\n.blueOne:hover {\n  color: #dedee4;\n  padding: 10px;\n  text-align: center; }\n/**\n* Ionic Full App  (https://store.enappd.com/product/ionic-full-app-ionic-4-full-app)\n*\n* Copyright © 2019-present Enappd. All rights reserved.\n*\n* This source code is licensed as per the terms found in the\n* LICENSE.md file in the root directory of this source tree.\n*/\n.main {\n  height: 100vh;\n  display: flex;\n  flex-direction: column;\n  justify-content: center; }\nion-card {\n  --background: #fff;\n  box-shadow: none;\n  -webkit-box-shadow: none; }\n@media screen and (min-width: 768px) {\n  ion-card {\n    width: 500px;\n    margin: auto; } }\n.input {\n  background-color: #f0f0f0;\n  border: 1px solid #a2a2a2;\n  border-radius: 9px;\n  font-size: .9em !important; }\n.white, h1 {\n  color: white; }\n.small {\n  font-size: 13px; }\n.small a {\n    text-decoration: unset !important; }\n.button-color {\n  background-color: var(--ion-color-mytheme); }\n.logo {\n  width: 1.25em !important; }\n.grid {\n  height: 100vh;\n  display: flex;\n  flex-direction: column;\n  justify-content: center; }\n.row {\n  display: flex;\n  flex-direction: row;\n  justify-content: center; }\n.img-logo {\n  height: 150px;\n  width: 150px; }\n.fire-logo {\n  display: flex;\n  flex-direction: column;\n  justify-content: center; }\n.fire-logo ion-text {\n    padding: 10px; }\n.btn-transition {\n  background: linear-gradient(to right, #006 14%, #3d3d3d 96%); }\n.btn-color {\n  color: #006;\n  --border-radius: 0; }\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvcGFnZXMvbG9naW4vbG9naW4ucGFnZS5zY3NzIiwiL1VzZXJzL2pjaW5ub3ZhdGlvbi9KQyBJbm5vdmF0aW9uIERyb3Bib3gvSmVzdcyBcyBDdWV2YXMvTWkgTWFjIChNYWNCb29rLVByby1kZS1KQy1Jbm5vdmF0aW9uLmxvY2FsKS9Eb2N1bWVudHMvR2l0SHViL3NtbzIwMTkvc3JjL2FwcC9wYWdlcy9sb2dpbi9sb2dpbi5wYWdlLnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUEsZ0JBQWdCO0FDQWhCO0VBQ0ksdUVBQWEsRUFBQTtBQUVqQjtFQUNJLDJCQUEyQjtFQUMzQixTQUFTLEVBQUE7QUFHYjtFQUNJLFlBQVk7RUFDWixhQUFhO0VBQ2Isa0JBQWtCLEVBQUE7QUFHdEI7RUFDSSxjQUFjO0VBQ2QsYUFBYTtFQUNiLGtCQUFrQixFQUFBO0FBRXRCO0VBQ0ksY0FBYztFQUNkLGFBQWE7RUFDYixrQkFBa0IsRUFBQTtBQUd0Qjs7Ozs7OztDREtDO0FDR0Q7RUFDSSxhQUFhO0VBQ2IsYUFBYTtFQUNiLHNCQUFzQjtFQUN0Qix1QkFBdUIsRUFBQTtBQUUzQjtFQUNJLGtCQUFhO0VBQ2IsZ0JBQWdCO0VBQ2hCLHdCQUF1QixFQUFBO0FBRTNCO0VBQ0k7SUFDSSxZQUFZO0lBQ1osWUFBWSxFQUFBLEVBQ2Y7QUFFTDtFQUNJLHlCQUFvQztFQUNwQyx5QkFBeUI7RUFDekIsa0JBQWtCO0VBQ2xCLDBCQUEwQixFQUFBO0FBRTlCO0VBQ0ksWUFBWSxFQUFBO0FBR2hCO0VBQ0ksZUFBZSxFQUFBO0FBRG5CO0lBR1EsaUNBQWlDLEVBQUE7QUFHekM7RUFDSSwwQ0FBMkMsRUFBQTtBQUUvQztFQUNJLHdCQUF3QixFQUFBO0FBRTVCO0VBQ0ksYUFBYTtFQUNiLGFBQWE7RUFDYixzQkFBc0I7RUFDdEIsdUJBQXVCLEVBQUE7QUFFM0I7RUFDSSxhQUFhO0VBQ2IsbUJBQW1CO0VBQ25CLHVCQUF1QixFQUFBO0FBRTNCO0VBQ0ksYUFBWTtFQUNaLFlBQVcsRUFBQTtBQUVmO0VBQ0ksYUFBYTtFQUNiLHNCQUFzQjtFQUN0Qix1QkFBdUIsRUFBQTtBQUgzQjtJQUtRLGFBQWEsRUFBQTtBQUdyQjtFQUNJLDREQUE0RCxFQUFBO0FBRWhFO0VBQ0ksV0FBVTtFQUNWLGtCQUFnQixFQUFBIiwiZmlsZSI6InNyYy9hcHAvcGFnZXMvbG9naW4vbG9naW4ucGFnZS5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiQGNoYXJzZXQgXCJVVEYtOFwiO1xuaW9uLWNvbnRlbnQuYmFja2dyb3VuZCB7XG4gIC0tYmFja2dyb3VuZDogdXJsKCcvYXNzZXRzL2ltZy9iYWNrZ3JvdW5kLmpwZycpIDAgMC8xMDAlIDEwMCUgbm8tcmVwZWF0OyB9XG5cbi5sb2dvU21hbGwge1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjMDAwMDAwMDA7XG4gIHNpemU6IDRlbTsgfVxuXG4ud2hpdGUge1xuICBjb2xvcjogd2hpdGU7XG4gIHBhZGRpbmc6IDEwcHg7XG4gIHRleHQtYWxpZ246IGNlbnRlcjsgfVxuXG4uYmx1ZU9uZSB7XG4gIGNvbG9yOiAjMDMwM2I0O1xuICBwYWRkaW5nOiAxMHB4O1xuICB0ZXh0LWFsaWduOiBjZW50ZXI7IH1cblxuLmJsdWVPbmU6aG92ZXIge1xuICBjb2xvcjogI2RlZGVlNDtcbiAgcGFkZGluZzogMTBweDtcbiAgdGV4dC1hbGlnbjogY2VudGVyOyB9XG5cbi8qKlxuKiBJb25pYyBGdWxsIEFwcCAgKGh0dHBzOi8vc3RvcmUuZW5hcHBkLmNvbS9wcm9kdWN0L2lvbmljLWZ1bGwtYXBwLWlvbmljLTQtZnVsbC1hcHApXG4qXG4qIENvcHlyaWdodCDCqSAyMDE5LXByZXNlbnQgRW5hcHBkLiBBbGwgcmlnaHRzIHJlc2VydmVkLlxuKlxuKiBUaGlzIHNvdXJjZSBjb2RlIGlzIGxpY2Vuc2VkIGFzIHBlciB0aGUgdGVybXMgZm91bmQgaW4gdGhlXG4qIExJQ0VOU0UubWQgZmlsZSBpbiB0aGUgcm9vdCBkaXJlY3Rvcnkgb2YgdGhpcyBzb3VyY2UgdHJlZS5cbiovXG4ubWFpbiB7XG4gIGhlaWdodDogMTAwdmg7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XG4gIGp1c3RpZnktY29udGVudDogY2VudGVyOyB9XG5cbmlvbi1jYXJkIHtcbiAgLS1iYWNrZ3JvdW5kOiAjZmZmO1xuICBib3gtc2hhZG93OiBub25lO1xuICAtd2Via2l0LWJveC1zaGFkb3c6IG5vbmU7IH1cblxuQG1lZGlhIHNjcmVlbiBhbmQgKG1pbi13aWR0aDogNzY4cHgpIHtcbiAgaW9uLWNhcmQge1xuICAgIHdpZHRoOiA1MDBweDtcbiAgICBtYXJnaW46IGF1dG87IH0gfVxuXG4uaW5wdXQge1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjZjBmMGYwO1xuICBib3JkZXI6IDFweCBzb2xpZCAjYTJhMmEyO1xuICBib3JkZXItcmFkaXVzOiA5cHg7XG4gIGZvbnQtc2l6ZTogLjllbSAhaW1wb3J0YW50OyB9XG5cbi53aGl0ZSwgaDEge1xuICBjb2xvcjogd2hpdGU7IH1cblxuLnNtYWxsIHtcbiAgZm9udC1zaXplOiAxM3B4OyB9XG4gIC5zbWFsbCBhIHtcbiAgICB0ZXh0LWRlY29yYXRpb246IHVuc2V0ICFpbXBvcnRhbnQ7IH1cblxuLmJ1dHRvbi1jb2xvciB7XG4gIGJhY2tncm91bmQtY29sb3I6IHZhcigtLWlvbi1jb2xvci1teXRoZW1lKTsgfVxuXG4ubG9nbyB7XG4gIHdpZHRoOiAxLjI1ZW0gIWltcG9ydGFudDsgfVxuXG4uZ3JpZCB7XG4gIGhlaWdodDogMTAwdmg7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XG4gIGp1c3RpZnktY29udGVudDogY2VudGVyOyB9XG5cbi5yb3cge1xuICBkaXNwbGF5OiBmbGV4O1xuICBmbGV4LWRpcmVjdGlvbjogcm93O1xuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjsgfVxuXG4uaW1nLWxvZ28ge1xuICBoZWlnaHQ6IDE1MHB4O1xuICB3aWR0aDogMTUwcHg7IH1cblxuLmZpcmUtbG9nbyB7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XG4gIGp1c3RpZnktY29udGVudDogY2VudGVyOyB9XG4gIC5maXJlLWxvZ28gaW9uLXRleHQge1xuICAgIHBhZGRpbmc6IDEwcHg7IH1cblxuLmJ0bi10cmFuc2l0aW9uIHtcbiAgYmFja2dyb3VuZDogbGluZWFyLWdyYWRpZW50KHRvIHJpZ2h0LCAjMDA2IDE0JSwgIzNkM2QzZCA5NiUpOyB9XG5cbi5idG4tY29sb3Ige1xuICBjb2xvcjogIzAwNjtcbiAgLS1ib3JkZXItcmFkaXVzOiAwOyB9XG4iLCJpb24tY29udGVudC5iYWNrZ3JvdW5ke1xuICAgIC0tYmFja2dyb3VuZDogdXJsKCcvYXNzZXRzL2ltZy9iYWNrZ3JvdW5kLmpwZycpIDAgMC8xMDAlIDEwMCUgbm8tcmVwZWF0O1xufVxuLmxvZ29TbWFsbHtcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjMDAwMDAwMDA7XG4gICAgc2l6ZTogNGVtO1xufVxuXG4ud2hpdGV7XG4gICAgY29sb3I6IHdoaXRlO1xuICAgIHBhZGRpbmc6IDEwcHg7XG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xufVxuXG4uYmx1ZU9uZXtcbiAgICBjb2xvcjogIzAzMDNiNDtcbiAgICBwYWRkaW5nOiAxMHB4O1xuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcbn1cbi5ibHVlT25lOmhvdmVye1xuICAgIGNvbG9yOiAjZGVkZWU0O1xuICAgIHBhZGRpbmc6IDEwcHg7XG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xufSBcblxuLyoqXG4qIElvbmljIEZ1bGwgQXBwICAoaHR0cHM6Ly9zdG9yZS5lbmFwcGQuY29tL3Byb2R1Y3QvaW9uaWMtZnVsbC1hcHAtaW9uaWMtNC1mdWxsLWFwcClcbipcbiogQ29weXJpZ2h0IMKpIDIwMTktcHJlc2VudCBFbmFwcGQuIEFsbCByaWdodHMgcmVzZXJ2ZWQuXG4qXG4qIFRoaXMgc291cmNlIGNvZGUgaXMgbGljZW5zZWQgYXMgcGVyIHRoZSB0ZXJtcyBmb3VuZCBpbiB0aGVcbiogTElDRU5TRS5tZCBmaWxlIGluIHRoZSByb290IGRpcmVjdG9yeSBvZiB0aGlzIHNvdXJjZSB0cmVlLlxuKi9cbi5tYWlue1xuICAgIGhlaWdodDogMTAwdmg7XG4gICAgZGlzcGxheTogZmxleDtcbiAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xuICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xufVxuaW9uLWNhcmR7XG4gICAgLS1iYWNrZ3JvdW5kOiAjZmZmO1xuICAgIGJveC1zaGFkb3c6IG5vbmU7XG4gICAgLXdlYmtpdC1ib3gtc2hhZG93Om5vbmU7XG59XG5AbWVkaWEgc2NyZWVuIGFuZCAobWluLXdpZHRoOjc2OHB4KXtcbiAgICBpb24tY2FyZHtcbiAgICAgICAgd2lkdGg6IDUwMHB4O1xuICAgICAgICBtYXJnaW46IGF1dG87XG4gICAgfVxufVxuLmlucHV0IHtcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2IoMjQwLCAyNDAsIDI0MCk7XG4gICAgYm9yZGVyOiAxcHggc29saWQgI2EyYTJhMjtcbiAgICBib3JkZXItcmFkaXVzOiA5cHg7XG4gICAgZm9udC1zaXplOiAuOWVtICFpbXBvcnRhbnQ7XG59XG4ud2hpdGUsIGgxe1xuICAgIGNvbG9yOiB3aGl0ZTtcbn1cblxuLnNtYWxsIHtcbiAgICBmb250LXNpemU6IDEzcHg7XG4gICAgYXtcbiAgICAgICAgdGV4dC1kZWNvcmF0aW9uOiB1bnNldCAhaW1wb3J0YW50O1xuICAgIH1cbn1cbi5idXR0b24tY29sb3Ige1xuICAgIGJhY2tncm91bmQtY29sb3IgOiB2YXIoLS1pb24tY29sb3ItbXl0aGVtZSk7XG59XG4ubG9nbyB7XG4gICAgd2lkdGg6IDEuMjVlbSAhaW1wb3J0YW50O1xufVxuLmdyaWR7XG4gICAgaGVpZ2h0OiAxMDB2aDtcbiAgICBkaXNwbGF5OiBmbGV4O1xuICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XG4gICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG59XG4ucm93e1xuICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgZmxleC1kaXJlY3Rpb246IHJvdztcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcbn1cbi5pbWctbG9nb3tcbiAgICBoZWlnaHQ6MTUwcHg7XG4gICAgd2lkdGg6MTUwcHg7XG59XG4uZmlyZS1sb2dve1xuICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcbiAgICBpb24tdGV4dHtcbiAgICAgICAgcGFkZGluZzogMTBweDtcbiAgICB9XG59XG4uYnRuLXRyYW5zaXRpb257XG4gICAgYmFja2dyb3VuZDogbGluZWFyLWdyYWRpZW50KHRvIHJpZ2h0LCAjMDA2IDE0JSwgIzNkM2QzZCA5NiUpO1xufVxuLmJ0bi1jb2xvcntcbiAgICBjb2xvcjojMDA2O1xuICAgIC0tYm9yZGVyLXJhZGl1czogMDtcbn0iXX0= */"

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
        this.registerUser.avatar = avatar.img;
    };
    LoginPage.prototype.mostrarRegistro = function () {
    };
    LoginPage.prototype.mostrarLogin = function () {
    };
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



/***/ }),

/***/ "./src/app/services/usuario.service.ts":
/*!*********************************************!*\
  !*** ./src/app/services/usuario.service.ts ***!
  \*********************************************/
/*! exports provided: UsuarioService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "UsuarioService", function() { return UsuarioService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _ionic_storage__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @ionic/storage */ "./node_modules/@ionic/storage/fesm5/ionic-storage.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var _config_url_servicios__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../config/url.servicios */ "./src/app/config/url.servicios.ts");
/* harmony import */ var _ajustes_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./ajustes.service */ "./src/app/services/ajustes.service.ts");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");







var UsuarioService = /** @class */ (function () {
    function UsuarioService(storage, http, _as, navCtrl) {
        this.storage = storage;
        this.http = http;
        this._as = _as;
        this.navCtrl = navCtrl;
        this.token = null;
        this.usuario = {};
    }
    UsuarioService.prototype.login = function (email, password) {
        var _this = this;
        var data = { email: email, password: password };
        var url = _config_url_servicios__WEBPACK_IMPORTED_MODULE_4__["URL_SERVICIOS"] + "/login.php";
        return new Promise(function (resolve) {
            _this.http.post(url, data).subscribe(function (resp) {
                console.log(resp);
                if (!resp['error']) {
                    _this.guardarToken(resp['token']);
                    resolve(true);
                }
                else {
                    _this._as.presentAlert(resp['mensaje']);
                    _this.token = null;
                    _this.storage.remove('token');
                    resolve(false);
                }
            });
        });
    };
    UsuarioService.prototype.registro = function (usuario) {
        var _this = this;
        var url = _config_url_servicios__WEBPACK_IMPORTED_MODULE_4__["URL_SERVICIOS"] + "/registro.php";
        return new Promise(function (resolve) {
            _this.http.post(url, usuario).subscribe(function (resp) {
                console.log(resp);
                if (!resp['error']) {
                    _this.guardarToken(resp['token']);
                    resolve(true);
                }
                else {
                    _this._as.presentAlert(resp['mensaje']);
                    _this.token = null;
                    _this.storage.remove('token');
                    resolve(false);
                }
            });
        });
    };
    UsuarioService.prototype.getUsuario = function () {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function () {
            return tslib__WEBPACK_IMPORTED_MODULE_0__["__generator"](this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this.validaToken()];
                    case 1:
                        _a.sent();
                        return [4 /*yield*/, tslib__WEBPACK_IMPORTED_MODULE_0__["__assign"]({}, this.usuario)];
                    case 2: return [2 /*return*/, _a.sent()];
                }
            });
        });
    };
    UsuarioService.prototype.guardarToken = function (token) {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function () {
            return tslib__WEBPACK_IMPORTED_MODULE_0__["__generator"](this, function (_a) {
                switch (_a.label) {
                    case 0:
                        this.token = token;
                        return [4 /*yield*/, this.storage.set('token', token)];
                    case 1:
                        _a.sent();
                        return [2 /*return*/];
                }
            });
        });
    };
    UsuarioService.prototype.cargarToken = function () {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function () {
            var _a;
            return tslib__WEBPACK_IMPORTED_MODULE_0__["__generator"](this, function (_b) {
                switch (_b.label) {
                    case 0:
                        _a = this;
                        return [4 /*yield*/, this.storage.get('token')];
                    case 1:
                        _a.token = (_b.sent()) || null;
                        return [2 /*return*/];
                }
            });
        });
    };
    UsuarioService.prototype.existeToken = function () {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function () {
            return tslib__WEBPACK_IMPORTED_MODULE_0__["__generator"](this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this.cargarToken()];
                    case 1:
                        _a.sent();
                        if (!this.token) {
                            console.log("No existe token");
                            return [2 /*return*/, Promise.resolve(false)];
                        }
                        else {
                            console.log("Si existe token");
                            return [2 /*return*/, Promise.resolve(true)];
                        }
                        return [2 /*return*/];
                }
            });
        });
    };
    UsuarioService.prototype.tienePermiso = function () {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function () {
            return tslib__WEBPACK_IMPORTED_MODULE_0__["__generator"](this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this.cargarToken()];
                    case 1:
                        _a.sent();
                        if (!this.token) {
                            //this._as.presentAlert("Ir a mi perfil para registrarme");
                            return [2 /*return*/, Promise.resolve(false)];
                        }
                        else {
                            console.log("Si existe token");
                            return [2 /*return*/, Promise.resolve(true)];
                        }
                        return [2 /*return*/];
                }
            });
        });
    };
    UsuarioService.prototype.validaToken = function () {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function () {
            var _this = this;
            return tslib__WEBPACK_IMPORTED_MODULE_0__["__generator"](this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this.cargarToken()];
                    case 1:
                        _a.sent();
                        if (!this.token) {
                            this.navCtrl.navigateRoot('/tabs/login');
                            return [2 /*return*/, Promise.resolve(false)];
                        }
                        return [2 /*return*/, new Promise(function (resolve) {
                                var url = _config_url_servicios__WEBPACK_IMPORTED_MODULE_4__["URL_SERVICIOS"] + "/usuario.php";
                                var data = { token: _this.token };
                                _this.http.post(url, data)
                                    .subscribe(function (resp) {
                                    if (resp['id']) {
                                        _this.usuario = resp;
                                        resolve(true);
                                    }
                                    else {
                                        _this.navCtrl.navigateRoot('/tabs/login');
                                        resolve(false);
                                    }
                                });
                            })];
                }
            });
        });
    };
    UsuarioService.prototype.logout = function () {
        this.token = null;
        this.usuario = null;
        this.storage.remove('token');
        this.navCtrl.navigateRoot('/tabs/login', { animated: true });
    };
    UsuarioService.prototype.actualizarUsuario = function (usuario) {
        var _this = this;
        return new Promise(function (resolve) {
            var url = _config_url_servicios__WEBPACK_IMPORTED_MODULE_4__["URL_SERVICIOS"] + "/updateuser.php";
            _this.http.post(url, usuario)
                .subscribe(function (resp) {
                if (resp['success']) {
                    resolve(true);
                }
                else {
                    resolve(false);
                }
            });
        });
    };
    UsuarioService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
            providedIn: 'root'
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_ionic_storage__WEBPACK_IMPORTED_MODULE_2__["Storage"],
            _angular_common_http__WEBPACK_IMPORTED_MODULE_3__["HttpClient"],
            _ajustes_service__WEBPACK_IMPORTED_MODULE_5__["AjustesService"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_6__["NavController"]])
    ], UsuarioService);
    return UsuarioService;
}());



/***/ })

}]);
//# sourceMappingURL=login-login-module.js.map