"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var Observable_1 = __importDefault(require("./Observable"));
var MallardDuck = /** @class */ (function () {
    function MallardDuck() {
        this.name = 'Mallard';
        this.observable = new Observable_1.default(this);
    }
    MallardDuck.prototype.getName = function () {
        return this.name;
    };
    MallardDuck.prototype.registerObserver = function (observer) {
        this.observable.registerObserver(observer);
    };
    MallardDuck.prototype.notifyObservers = function () {
        this.observable.notifyObservers();
    };
    MallardDuck.prototype.quack = function () {
        console.log('Quack');
        this.notifyObservers();
    };
    return MallardDuck;
}());
exports.default = MallardDuck;
