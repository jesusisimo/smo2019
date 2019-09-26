import * as tslib_1 from "tslib";
import { Injectable } from '@angular/core';
import { UsuarioService } from '../services/usuario.service';
var UsuarioGuard = /** @class */ (function () {
    function UsuarioGuard(_us) {
        this._us = _us;
    }
    UsuarioGuard.prototype.canLoad = function () {
        console.log("guard");
        return this._us.tienePermiso();
    };
    UsuarioGuard = tslib_1.__decorate([
        Injectable({
            providedIn: 'root'
        }),
        tslib_1.__metadata("design:paramtypes", [UsuarioService])
    ], UsuarioGuard);
    return UsuarioGuard;
}());
export { UsuarioGuard };
//# sourceMappingURL=usuario.guard.js.map