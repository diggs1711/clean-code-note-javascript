var GumballMachine = /** @class */ (function () {
    function GumballMachine(location, numGumballs) {
        this.count = 0;
        this.location = location;
        this.soldOutState = new SoldOutState(this);
        this.noQuarterState = new NoQuarterState(this);
        this.hasQuarterState = new HasQuarterState(this);
        this.soldState = new SoldState(this);
        this.winnerState = new WinnerState(this);
        this.state = this.soldOutState;
        this.count = numGumballs;
        if (numGumballs > 0) {
            this.state = this.noQuarterState;
        }
        else {
            this.state = this.soldOutState;
        }
    }
    GumballMachine.prototype.getLocation = function () {
        return this.location;
    };
    GumballMachine.prototype.insertQuarter = function () {
        this.state.insertQuarter();
    };
    GumballMachine.prototype.ejectQuarter = function () {
        this.state.ejectQuarter();
    };
    GumballMachine.prototype.turnCrank = function () {
        this.state.turnCrank();
        this.state.dispense();
    };
    GumballMachine.prototype.setState = function (state) {
        this.state = state;
    };
    GumballMachine.prototype.releaseBall = function () {
        console.log('A gumball comes rolling out the slot...');
        if (this.count != 0) {
            this.count -= 1;
        }
    };
    GumballMachine.prototype.getWinnerState = function () {
        return this.winnerState;
    };
    GumballMachine.prototype.getHasQuarterState = function () {
        return this.hasQuarterState;
    };
    GumballMachine.prototype.getNoQuarterState = function () {
        return this.noQuarterState;
    };
    GumballMachine.prototype.getSoldState = function () {
        return this.soldState;
    };
    GumballMachine.prototype.getCount = function () {
        return this.count;
    };
    GumballMachine.prototype.getSoldOutState = function () {
        return this.soldOutState;
    };
    GumballMachine.prototype.getState = function () {
        return this.state.constructor.name;
    };
    return GumballMachine;
}());
var GumballMonitor = /** @class */ (function () {
    function GumballMonitor(gumballMachine) {
        this.gumballMachine = gumballMachine;
    }
    GumballMonitor.prototype.report = function () {
        console.log('Gumball machine: ' + this.gumballMachine.getLocation());
        console.log('Current Inventory:  ' + this.gumballMachine.getCount() + ' gumballs');
        console.log('Current state: ' + this.gumballMachine.getState());
    };
    return GumballMonitor;
}());
var NoQuarterState = /** @class */ (function () {
    function NoQuarterState(gumballMachine) {
        this.gumballMachine = gumballMachine;
    }
    NoQuarterState.prototype.insertQuarter = function () {
        console.log('You entered a quarter');
        this.gumballMachine.setState(this.gumballMachine.getHasQuarterState());
    };
    NoQuarterState.prototype.ejectQuarter = function () {
        console.log("You haven't inserted a quarter");
    };
    NoQuarterState.prototype.turnCrank = function () {
        console.log('You turned but no quarter');
    };
    NoQuarterState.prototype.dispense = function () {
        console.log('You need to pay first');
    };
    return NoQuarterState;
}());
var HasQuarterState = /** @class */ (function () {
    function HasQuarterState(gumballMachine) {
        this.randomWinner = Math.random();
        this.gumballMachine = gumballMachine;
    }
    HasQuarterState.prototype.insertQuarter = function () {
        console.log("You can't insert another quarter");
    };
    HasQuarterState.prototype.ejectQuarter = function () {
        console.log('Quarter returned');
        this.gumballMachine.setState(this.gumballMachine.getNoQuarterState());
    };
    HasQuarterState.prototype.turnCrank = function () {
        console.log('You turned...');
        var winner = this.randomWinner <= 0.1;
        if (winner && this.gumballMachine.getCount() > 1) {
            this.gumballMachine.setState(this.gumballMachine.getWinnerState());
        }
        else {
            this.gumballMachine.setState(this.gumballMachine.getSoldState());
        }
    };
    HasQuarterState.prototype.dispense = function () {
        console.log('No gumball dispensed');
    };
    return HasQuarterState;
}());
var WinnerState = /** @class */ (function () {
    function WinnerState(gumballMachine) {
        this.gumballMachine = gumballMachine;
    }
    WinnerState.prototype.insertQuarter = function () {
        console.log("Please wait, we're giving you a gumball");
    };
    WinnerState.prototype.ejectQuarter = function () {
        console.log('You already turned the crank');
    };
    WinnerState.prototype.turnCrank = function () {
        console.log("TUrning twice doesn't get you another gumball");
    };
    WinnerState.prototype.dispense = function () {
        this.gumballMachine.releaseBall();
        if (this.gumballMachine.getCount() == 0) {
            this.gumballMachine.setState(this.gumballMachine.getSoldOutState());
        }
        else {
            this.gumballMachine.releaseBall();
            console.log("You're a winner, you got two gumballs");
            if (this.gumballMachine.getCount() > 0) {
                this.gumballMachine.setState(this.gumballMachine.getNoQuarterState());
            }
            else {
                console.log('Out of gumballs');
                this.gumballMachine.setState(this.gumballMachine.getSoldOutState());
            }
        }
    };
    return WinnerState;
}());
var SoldState = /** @class */ (function () {
    function SoldState(gumballMachine) {
        this.gumballMachine = gumballMachine;
    }
    SoldState.prototype.insertQuarter = function () {
        console.log("Please wait, we're giving you a gumball");
    };
    SoldState.prototype.ejectQuarter = function () {
        console.log('You already turned the crank');
    };
    SoldState.prototype.turnCrank = function () {
        console.log("TUrning twice doesn't get you another gumball");
    };
    SoldState.prototype.dispense = function () {
        this.gumballMachine.releaseBall();
        if (this.gumballMachine.getCount()) {
            this.gumballMachine.setState(this.gumballMachine.getNoQuarterState());
        }
        else {
            console.log('Oops, out of gumballs');
            this.gumballMachine.setState(this.gumballMachine.getSoldOutState());
        }
    };
    return SoldState;
}());
var SoldOutState = /** @class */ (function () {
    function SoldOutState(gumballMachine) {
        this.gumballMachine = gumballMachine;
    }
    SoldOutState.prototype.insertQuarter = function () {
        console.log('Sorry out of gumballs');
    };
    SoldOutState.prototype.ejectQuarter = function () {
        console.log('Your quarter has been ejected');
    };
    SoldOutState.prototype.turnCrank = function () {
        console.log('Crank turned');
    };
    SoldOutState.prototype.dispense = function () {
        console.log('Sorry sold out');
    };
    return SoldOutState;
}());
var GumballMachineTest = /** @class */ (function () {
    function GumballMachineTest() {
    }
    GumballMachineTest.prototype.main = function () {
        var gumballMachine = new GumballMachine('Seattle', 5);
        var gumballMonitor = new GumballMonitor(gumballMachine);
        gumballMonitor.report();
    };
    return GumballMachineTest;
}());
new GumballMachineTest().main();
