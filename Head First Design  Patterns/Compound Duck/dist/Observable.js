"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var Observable = /** @class */ (function () {
    function Observable(duck) {
        this.observers = [];
        this.duck = duck;
    }
    Observable.prototype.registerObserver = function (observer) {
        this.observers.push(observer);
    };
    Observable.prototype.notifyObservers = function () {
        for (var _i = 0, _a = this.observers; _i < _a.length; _i++) {
            var observer = _a[_i];
            observer.update(this.duck);
        }
    };
    return Observable;
}());
exports.default = Observable;
