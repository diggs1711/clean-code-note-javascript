"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var QuackCounter = /** @class */ (function () {
    function QuackCounter(duck) {
        this.duck = duck;
    }
    QuackCounter.prototype.registerObserver = function (observer) {
        this.duck.registerObserver(observer);
    };
    QuackCounter.prototype.notifyObservers = function () {
        this.duck.notifyObservers();
    };
    QuackCounter.prototype.quack = function () {
        this.duck.quack();
        QuackCounter.quacks++;
    };
    QuackCounter.getCount = function () {
        return this.quacks;
    };
    QuackCounter.quacks = 0;
    return QuackCounter;
}());
exports.default = QuackCounter;
