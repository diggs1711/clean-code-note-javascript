"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var GooseAdapter_1 = __importDefault(require("./GooseAdapter"));
var Goose_1 = __importDefault(require("./Goose"));
var QuackCounter_1 = __importDefault(require("./QuackCounter"));
var CountingDuckFactory_1 = __importDefault(require("./CountingDuckFactory"));
var Flock_1 = __importDefault(require("./Flock"));
var Quackologist_1 = __importDefault(require("./Quackologist"));
var DuckSimulator = /** @class */ (function () {
    function DuckSimulator() {
        this.abstractDuckFactory = new CountingDuckFactory_1.default();
        this.simulate(this.abstractDuckFactory);
    }
    DuckSimulator.prototype.simulate = function (duckFactory) {
        var mallardDuck = duckFactory.createMallardDuck();
        var redHeadDuck = duckFactory.createRedHeadDuck();
        var rubberDuck = duckFactory.createRubberDuck();
        var goose = new GooseAdapter_1.default(new Goose_1.default());
        var flockOfDucks = new Flock_1.default();
        flockOfDucks.add(mallardDuck);
        flockOfDucks.add(rubberDuck);
        flockOfDucks.add(redHeadDuck);
        var quackologist = new Quackologist_1.default();
        var flockOfMallards = new Flock_1.default();
        flockOfMallards.add(duckFactory.createMallardDuck());
        flockOfMallards.add(duckFactory.createMallardDuck());
        flockOfMallards.add(duckFactory.createMallardDuck());
        flockOfMallards.add(duckFactory.createMallardDuck());
        flockOfDucks.add(flockOfMallards);
        flockOfDucks.registerObserver(quackologist);
        this.simulateQuack(flockOfDucks);
        // this.simulateQuack(flockOfMallards)
        console.log(QuackCounter_1.default.getCount());
    };
    DuckSimulator.prototype.simulateQuack = function (duck) {
        duck.quack();
    };
    return DuckSimulator;
}());
new DuckSimulator();
