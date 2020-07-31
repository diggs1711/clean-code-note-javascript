"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var Observable_1 = __importDefault(require("./Observable"));
var RedHeadDuck = /** @class */ (function () {
    function RedHeadDuck() {
        this.name = 'Red Head';
        this.observerable = new Observable_1.default(this);
    }
    RedHeadDuck.prototype.registerObserver = function (observer) {
        this.observerable.registerObserver(observer);
    };
    RedHeadDuck.prototype.notifyObservers = function () {
        this.observerable.notifyObservers();
    };
    RedHeadDuck.prototype.getName = function () {
        return this.name;
    };
    RedHeadDuck.prototype.quack = function () {
        console.log('Quack');
        this.notifyObservers();
    };
    return RedHeadDuck;
}());
exports.default = RedHeadDuck;
