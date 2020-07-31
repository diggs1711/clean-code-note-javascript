"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var FlockObservable = /** @class */ (function () {
    function FlockObservable(flock) {
        this.flock = flock;
    }
    FlockObservable.prototype.registerObserver = function (observer) {
        this.flock.registerObserver(observer);
    };
    FlockObservable.prototype.notifyObservers = function () {
        this.flock.notifyObservers();
    };
    return FlockObservable;
}());
exports.default = FlockObservable;
