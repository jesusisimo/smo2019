(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["mesadirectiva-mesadirectiva-module"],{

/***/ "./src/app/pages/mesadirectiva/mesadirectiva.module.ts":
/*!*************************************************************!*\
  !*** ./src/app/pages/mesadirectiva/mesadirectiva.module.ts ***!
  \*************************************************************/
/*! exports provided: MesadirectivaPageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MesadirectivaPageModule", function() { return MesadirectivaPageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");
/* harmony import */ var _mesadirectiva_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./mesadirectiva.page */ "./src/app/pages/mesadirectiva/mesadirectiva.page.ts");







var routes = [
    {
        path: '',
        component: _mesadirectiva_page__WEBPACK_IMPORTED_MODULE_6__["MesadirectivaPage"]
    }
];
var MesadirectivaPageModule = /** @class */ (function () {
    function MesadirectivaPageModule() {
    }
    MesadirectivaPageModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            imports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
                _ionic_angular__WEBPACK_IMPORTED_MODULE_5__["IonicModule"],
                _angular_router__WEBPACK_IMPORTED_MODULE_4__["RouterModule"].forChild(routes)
            ],
            declarations: [_mesadirectiva_page__WEBPACK_IMPORTED_MODULE_6__["MesadirectivaPage"]]
        })
    ], MesadirectivaPageModule);
    return MesadirectivaPageModule;
}());



/***/ }),

/***/ "./src/app/pages/mesadirectiva/mesadirectiva.page.html":
/*!*************************************************************!*\
  !*** ./src/app/pages/mesadirectiva/mesadirectiva.page.html ***!
  \*************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<ion-header>\n    <ion-toolbar color=\"primary\">\n      <ion-buttons slot=\"start\">\n        <ion-menu-button></ion-menu-button>\n        <ion-back-button color=\"light\" text=\"Volver\"></ion-back-button>\n      </ion-buttons>\n      <ion-title>Mesa directiva</ion-title>\n    </ion-toolbar>\n  </ion-header>\n  \n\n<ion-content>\n  <ion-list>\n      <ion-item>\n        <ion-label>\n          <h3>Presidente</h3>\n          <p>Dr. Eduardo Chavez Mondragón</p>\n        </ion-label>\n      </ion-item>    \n      <ion-item>\n          <ion-label>\n            <h3>Vicepresidente</h3>\n            <p>\tDra. Claudia Palacio Pastrana</p>\n          </ion-label>\n        </ion-item>    \n        <ion-item>\n            <ion-label>\n              <h3>Secretario General</h3>\n              <p>Dr. René Alfredo Cano Hidalgo</p>\n            </ion-label>\n          </ion-item> \n          <ion-item>\n              <ion-label>\n                <h3>Asesor Anual</h3>\n                <p>Dr. Marco Antonio De la Fuente Torres</p>\n              </ion-label>\n            </ion-item>\n            <ion-item>\n                <ion-label>\n                  <h3>Secretario Anual\t</h3>\n                  <p>Dra. Daniela Pulido London</p>\n                </ion-label>\n              </ion-item>\n              <ion-item>\n                <ion-label>\n                  <h3>Tesorero</h3>\n                  <p>Dr. Jesús Enrique Eng Abadía</p>\n                </ion-label>\n              </ion-item>\n              <ion-item>\n                <ion-label>\n                  <h3>Pro-secretario</h3>\n                  <p>Dr. Jesús Arrieta Camacho</p>\n                </ion-label>\n              </ion-item>\n              <ion-item>\n                <ion-label>\n                  <h3>Pro-tesorero</h3>\n                  <p>Dr. Jesús Jiménez Román</p>\n                </ion-label>\n              </ion-item>\n              <ion-item>\n                <ion-label>\n                  <h3>Comisión de Consejeros (NORTE)\t</h3>\n                  <p>Dr. Fernando Sergio\tAguilera Zárate</p>\n                </ion-label>\n              </ion-item> \n               <ion-item>\n                <ion-label>\n                  <h3>Comisión de Consejeros (NORESTE)\t</h3>\n                  <p>Dr. Linda Nasser Nasser</p>\n                </ion-label>\n              </ion-item>\n              <ion-item>\n                <ion-label>\n                  <h3>Comisión de Consejeros (CENTRO)</h3>\n                  <p>Dr. Francisco Beltrán Díaz de la Vega</p>\n                </ion-label>\n              </ion-item>\n              <ion-item>\n                <ion-label>\n                  <h3>Comisión de Consejeros (OCCIDENTE)</h3>\n                  <p>Dr. Víctor Hugo Sánchez Malof</p>\n                </ion-label>\n              </ion-item>\n              <ion-item>\n                <ion-label>\n                  <h3>Comisión de Consejeros (SURESTE)</h3>\n                  <p>Dr. Ricardo Trigo Lara</p>\n                </ion-label>\n              </ion-item> \n              <ion-item>\n                <ion-label>\n                  <h3>Comisión de Ética y Profesionalismo</h3>\n                  <p>Dr. Arturo\tEspinosa Velasco</p>\n                  <p>Dr. José Luis Tovilla Y Pomar</p>\n                </ion-label>\n              </ion-item>\n              <ion-item>\n                <ion-label>\n                  <h3>Comisión de Ética y Profesionalismo (coordinador)</h3>\n                  <p>Dr. Federico Graue Wiechers</p>\n                </ion-label>\n              </ion-item>\n              <ion-item>\n                <ion-label>\n                  <h3>Comisión de Admisión</h3>\n                  <p>Dra. Valeria\tSánchez Huerta</p>\n                  <p>Dra. Raúl\tSuárez Sánchez</p>\n                  <p>Dr. Cecilio\tVelasco Barona</p>\n                </ion-label>\n              </ion-item>\n              <ion-item>\n                <ion-label>\n                  <h3>Comisión de Admisión (coordinadora)</h3>\n                  <p>Dra. Marisol\tGarzón</p>\n                </ion-label>\n              </ion-item> \n               <ion-item>\n                <ion-label>\n                  <h3>Comisión de Eventos Científicos</h3>\n                  <p>Dra. Karla\tDueñas Angeles</p>\n                  <p>Dra. Linda Guakil Sakruka</p>\n                  <p>Dr. Alejandro Babayan Sosa</p>\n                </ion-label>\n              </ion-item>\n              <ion-item>\n                <ion-label>\n                  <h3>Comisión de Eventos Científicos (coordinador)</h3>\n                  <p>Dr. Raul Vélez Montoya</p>\n                </ion-label>\n              </ion-item>\n              <ion-item>\n                <ion-label>\n                  <h3>Coordinador de Coloquios</h3>\n                  <p>Dr. Juan Arturo\tRamírez Miranda</p>\n                </ion-label>\n              </ion-item>\n              <ion-item>\n                <ion-label>\n                  <h3>Sub-coordinador</h3>\n                  <p>Dr. Sergio\tHerrero Herrera</p>\n                </ion-label>\n              </ion-item> \n               <ion-item>\n                <ion-label>\n                  <h3>Sesiones Científicas Extraordinarias (coordinador)</h3>\n                  <p>Dr. Jessica Vargas Ortega</p>\n                </ion-label>\n              </ion-item>\n              <ion-item>\n                <ion-label>\n                  <h3>Sesiones Científicas Extraordinarias</h3>\n                  <p>Dra. Claudia Murillo Correa</p>\n                </ion-label>\n              </ion-item>\n              <ion-item>\n                <ion-label>\n                  <h3>Educación Médica Continua</h3>\n                  <p>Dra. Erick\tMendoza Schuster Ortiz</p>\n                  <p>\tDra. David\tLozano Rechy</p>\n                  <p>\tDra. Juan Manuel\tJiménez Sierra</p>\n                </ion-label>\n              </ion-item>\n              <ion-item>\n                <ion-label>\n                  <h3>Educación Médica Continua (coordinador)</h3>\n                  <p>Dr. Osiris Olvera Morales</p>\n                </ion-label>\n              </ion-item> \n              <ion-item>\n                <ion-label>\n                  <h3>Coordinador Congreso de Residentes</h3>\n                  <p>\tDra. Leonor\tHernández Salazar</p>\n                </ion-label>\n              </ion-item>\n              <ion-item>\n                <ion-label>\n                  <h3>Comisión de Prestaciones</h3>\n                  <p>Dra. Araceli Rojas Díaz </p>\n                  <p>Dra. Carolina\tOrea Ortega</p>\n                  <p>Dra. Claudia Corredor Ortega</p>\n                </ion-label>\n              </ion-item> \n              <ion-item>\n                <ion-label>\n                  <h3>Comisión de Prestaciones (coordinadora)\t</h3>\n                  <p>Dra. Thamar\tGómez Villegas</p>\n                </ion-label>\n              </ion-item>\n              <ion-item>\n                <ion-label>\n                  <h3>Comisión de Finanzas</h3>\n                  <p>Dr.\tRené Alfredo Cano Hidalgo</p>\n                  <p>\tDr.\tMarco Antonio De la Fuente Torres</p>\n                  <p>Dr.\tLuis Porfirio\tOrozco Gómez</p>\n                  <p>Dr.\tFrancisco\tBeltrán Díaz de la Vega</p>\n                  <p>Dra\tJans\tFromow Guerra</p>\n                  <p>Dr. Humberto Wong Chavarría</p>\n                </ion-label>\n              </ion-item> \n              <ion-item>\n                <ion-label>\n                  <h3>Delegado ante el C.M.O.\t</h3>\n                  <p>Dr.\tEverardo\tHernández Quíntela </p>\n                </ion-label>\n              </ion-item>\n              <ion-item>\n                <ion-label>\n                  <h3>Delegados ante la A.P.A.O.</h3>\n                  <p>Dr.\tGerardo\tGraue Moreno</p>\n                  <p>Dr.\tJorge Eugenio\tValdez García</p>\n                  <p>Dr.\tEnrique\tGraue Hernández</p>\n                  <p>Dr.\tLeonardo\tGarcía Rojas Castillo</p>\n                  <p>Dr.\tTito Ramírez Luquin</p>\n                </ion-label>\n              </ion-item> \n              <ion-item>\n                <ion-label>\n                  <h3>Delegado ante la F.I.S.O./ I.C.O.</h3>\n                  <p>Dr. Van Charles\tLansing Alba</p>\n                </ion-label>\n              </ion-item>\n              <ion-item>\n                <ion-label>\n                  <h3>Delegado ante la O.M.S.</h3>\n                  <p>Dra.\tMaría Estela\tArroyo Yllanes</p>\n                </ion-label>\n              </ion-item> \n              <ion-item>\n                <ion-label>\n                  <h3>Editor Jefe de la Revista</h3>\n                  <p>Dr.\tManuel\tGarza León</p>\n                </ion-label>\n              </ion-item>\n              <ion-item>\n                <ion-label>\n                  <h3>Coeditor de la Revista</h3>\n                  <p>Dr.\tOscar Guerrero Berger</p>\n                  <p>Dr.\tRoberto\tGonzález Salinas</p>\n                </ion-label>\n              </ion-item> \n              <ion-item>\n                <ion-label>\n                  <h3>Director de la Página de Internet</h3>\n                  <p>Dr.\tJosé Gerardo\tGarcía Aguirre</p>\n                  <p>Dr.\tAlberto Haber Olguín</p>\n                </ion-label>\n              </ion-item> \n              <ion-item>\n                <ion-label>\n                  <h3>Subdirector de la Página de Internet</h3>\n                  <p>Dr.\tSantiago\tGarcia Arroyo</p>\n                </ion-label>\n              </ion-item> \n              <ion-item>\n                <ion-label>\n                  <h3>Coordinador-Comisión de Bibliohemeroteca</h3>\n                  <p>Dra. Cristina\tMendoza Velásquez</p>\n                </ion-label>\n              </ion-item> \n              <ion-item>\n                <ion-label>\n                  <h3>Comisión de Bibliohemeroteca</h3>\n                  <p>Dra. Ingrid\tUrrutia Breton</p>\n                </ion-label>\n              </ion-item> \n              <ion-item>\n                <ion-label>\n                  <h3>Coordinador Reunión Científico Cultural Coordinador</h3>\n                  <p>Dr.\tJosé Luis\tTovilla Canales</p>\n                </ion-label>\n              </ion-item>\n              <ion-item>\n                <ion-label>\n                  <h3>Sub-coordinadores</h3>\n                  <p>Dr. Daniel\tMoreno Paramo</p>\n                  <p>Dr. José\tDalma Weiszhausz</p>\n                  <p>Dr.\tSalvador López Rubio</p>\n                  <p>Dr.\tJuan Carlos Serna Ojeda</p>\n                  <p>Dr.\tEmiliano\tFulda Graue</p>\n                  <p>Dr.\tValentina\tFranco Cárdenas</p>\n                </ion-label>\n              </ion-item>  \n  </ion-list>\n</ion-content>\n"

/***/ }),

/***/ "./src/app/pages/mesadirectiva/mesadirectiva.page.scss":
/*!*************************************************************!*\
  !*** ./src/app/pages/mesadirectiva/mesadirectiva.page.scss ***!
  \*************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3BhZ2VzL21lc2FkaXJlY3RpdmEvbWVzYWRpcmVjdGl2YS5wYWdlLnNjc3MifQ== */"

/***/ }),

/***/ "./src/app/pages/mesadirectiva/mesadirectiva.page.ts":
/*!***********************************************************!*\
  !*** ./src/app/pages/mesadirectiva/mesadirectiva.page.ts ***!
  \***********************************************************/
/*! exports provided: MesadirectivaPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MesadirectivaPage", function() { return MesadirectivaPage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


var MesadirectivaPage = /** @class */ (function () {
    function MesadirectivaPage() {
    }
    MesadirectivaPage.prototype.ngOnInit = function () {
    };
    MesadirectivaPage = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-mesadirectiva',
            template: __webpack_require__(/*! ./mesadirectiva.page.html */ "./src/app/pages/mesadirectiva/mesadirectiva.page.html"),
            styles: [__webpack_require__(/*! ./mesadirectiva.page.scss */ "./src/app/pages/mesadirectiva/mesadirectiva.page.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
    ], MesadirectivaPage);
    return MesadirectivaPage;
}());



/***/ })

}]);
//# sourceMappingURL=mesadirectiva-mesadirectiva-module.js.map