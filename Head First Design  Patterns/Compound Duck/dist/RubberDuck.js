"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var Observable_1 = __importDefault(require("./Observable"));
var RubberDuck = /** @class */ (function () {
    function RubberDuck() {
        this.name = 'Rubber';
        this.observerable = new Observable_1.default(this);
    }
    RubberDuck.prototype.registerObserver = function (observer) {
        this.observerable.registerObserver(observer);
    };
    RubberDuck.prototype.notifyObservers = function () {
        this.observerable.notifyObservers();
    };
    RubberDuck.prototype.getName = function () {
        return this.name;
    };
    RubberDuck.prototype.quack = function () {
        console.log('Squeak');
        this.notifyObservers();
    };
    return RubberDuck;
}());
exports.default = RubberDuck;
