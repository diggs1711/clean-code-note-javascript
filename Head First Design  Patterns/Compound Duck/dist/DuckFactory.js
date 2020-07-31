"use strict";
var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var AbstractDuckFactory_1 = __importDefault(require("./AbstractDuckFactory"));
var MallardDuck_1 = __importDefault(require("./MallardDuck"));
var RedHeadDuck_1 = __importDefault(require("./RedHeadDuck"));
var RubberDuck_1 = __importDefault(require("./RubberDuck"));
var DuckFactory = /** @class */ (function (_super) {
    __extends(DuckFactory, _super);
    function DuckFactory() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    DuckFactory.prototype.createMallardDuck = function () {
        return new MallardDuck_1.default();
    };
    DuckFactory.prototype.createRedHeadDuck = function () {
        return new RedHeadDuck_1.default();
    };
    DuckFactory.prototype.createRubberDuck = function () {
        return new RubberDuck_1.default();
    };
    return DuckFactory;
}(AbstractDuckFactory_1.default));
exports.default = DuckFactory;
