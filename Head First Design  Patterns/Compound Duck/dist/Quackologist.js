"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var Quackologist = /** @class */ (function () {
    function Quackologist() {
    }
    Quackologist.prototype.update = function (quack) {
        console.log('Quackologist: ' + quack + ' just quacked');
    };
    return Quackologist;
}());
exports.default = Quackologist;
