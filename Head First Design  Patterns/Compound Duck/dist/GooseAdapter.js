"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var GooseAdapter = /** @class */ (function () {
    function GooseAdapter(goose) {
        this.goose = goose;
    }
    GooseAdapter.prototype.registerObserver = function (observer) {
        throw new Error('Method not implemented.');
    };
    GooseAdapter.prototype.notifyObservers = function () {
        throw new Error('Method not implemented.');
    };
    GooseAdapter.prototype.quack = function () {
        this.goose.honk();
    };
    return GooseAdapter;
}());
exports.default = GooseAdapter;
