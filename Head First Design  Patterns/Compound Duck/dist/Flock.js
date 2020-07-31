"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var Flock = /** @class */ (function () {
    function Flock() {
        this.quackers = [];
    }
    Flock.prototype.registerObserver = function (observer) {
        for (var _i = 0, _a = this.quackers; _i < _a.length; _i++) {
            var quacker = _a[_i];
            quacker.registerObserver(observer);
        }
    };
    Flock.prototype.notifyObservers = function () {
        for (var _i = 0, _a = this.quackers; _i < _a.length; _i++) {
            var quacker = _a[_i];
            quacker.notifyObservers();
        }
    };
    Flock.prototype.add = function (quacker) {
        this.quackers.push(quacker);
    };
    Flock.prototype.quack = function () {
        for (var _i = 0, _a = this.quackers; _i < _a.length; _i++) {
            var quacker = _a[_i];
            quacker.quack();
        }
    };
    return Flock;
}());
exports.default = Flock;
