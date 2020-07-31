interface State {
	insertQuarter()
	ejectQuarter()
	turnCrank()
	dispense()
}

class GumballMachine {
	soldOutState: State
	noQuarterState: State
	hasQuarterState: State
	soldState: State
	winnerState: State
	state: State
	count = 0
	location: string

	constructor(location: string, numGumballs: number) {
		this.location = location
		this.soldOutState = new SoldOutState(this)
		this.noQuarterState = new NoQuarterState(this)
		this.hasQuarterState = new HasQuarterState(this)
		this.soldState = new SoldState(this)
		this.winnerState = new WinnerState(this)

		this.state = this.soldOutState
		this.count = numGumballs
		if (numGumballs > 0) {
			this.state = this.noQuarterState
		} else {
			this.state = this.soldOutState
		}
	}

	getLocation() {
		return this.location
	}

	insertQuarter() {
		this.state.insertQuarter()
	}

	ejectQuarter() {
		this.state.ejectQuarter()
	}

	turnCrank() {
		this.state.turnCrank()
		this.state.dispense()
	}

	setState(state: State) {
		this.state = state
	}

	releaseBall() {
		console.log('A gumball comes rolling out the slot...')
		if (this.count != 0) {
			this.count -= 1
		}
	}

	getWinnerState() {
		return this.winnerState
	}

	getHasQuarterState() {
		return this.hasQuarterState
	}

	getNoQuarterState() {
		return this.noQuarterState
	}

	getSoldState() {
		return this.soldState
	}

	getCount() {
		return this.count
	}

	getSoldOutState() {
		return this.soldOutState
	}

	getState() {
		return this.state
	}
}

class GumballMonitor {
	gumballMachine: GumballMachine

	constructor(gumballMachine: GumballMachine) {
		this.gumballMachine = gumballMachine
	}

	report() {
		console.log('Gumball machine: ' + this.gumballMachine.getLocation())
		console.log('Current Inventory:  ' + this.gumballMachine.getCount() + ' gumballs')
		console.log('Current state: ' + this.gumballMachine.getState())
	}
}

class NoQuarterState implements State {
	gumballMachine: GumballMachine

	constructor(gumballMachine: GumballMachine) {
		this.gumballMachine = gumballMachine
	}

	insertQuarter() {
		console.log('You entered a quarter')
		this.gumballMachine.setState(this.gumballMachine.getHasQuarterState())
	}
	ejectQuarter() {
		console.log("You haven't inserted a quarter")
	}
	turnCrank() {
		console.log('You turned but no quarter')
	}
	dispense() {
		console.log('You need to pay first')
	}
}
class HasQuarterState implements State {
	gumballMachine: GumballMachine
	randomWinner = Math.random()

	constructor(gumballMachine: GumballMachine) {
		this.gumballMachine = gumballMachine
	}

	insertQuarter() {
		console.log("You can't insert another quarter")
	}
	ejectQuarter() {
		console.log('Quarter returned')
		this.gumballMachine.setState(this.gumballMachine.getNoQuarterState())
	}
	turnCrank() {
		console.log('You turned...')
		const winner = this.randomWinner <= 0.1
		if (winner && this.gumballMachine.getCount() > 1) {
			this.gumballMachine.setState(this.gumballMachine.getWinnerState())
		} else {
			this.gumballMachine.setState(this.gumballMachine.getSoldState())
		}
	}
	dispense() {
		console.log('No gumball dispensed')
	}
}

class WinnerState implements State {
	gumballMachine: GumballMachine

	constructor(gumballMachine: GumballMachine) {
		this.gumballMachine = gumballMachine
	}

	insertQuarter() {
		console.log("Please wait, we're giving you a gumball")
	}
	ejectQuarter() {
		console.log('You already turned the crank')
	}
	turnCrank() {
		console.log("TUrning twice doesn't get you another gumball")
	}
	dispense() {
		this.gumballMachine.releaseBall()
		if (this.gumballMachine.getCount() == 0) {
			this.gumballMachine.setState(this.gumballMachine.getSoldOutState())
		} else {
			this.gumballMachine.releaseBall()
			console.log("You're a winner, you got two gumballs")
			if (this.gumballMachine.getCount() > 0) {
				this.gumballMachine.setState(this.gumballMachine.getNoQuarterState())
			} else {
				console.log('Out of gumballs')
				this.gumballMachine.setState(this.gumballMachine.getSoldOutState())
			}
		}
	}
}

class SoldState implements State {
	gumballMachine: GumballMachine

	constructor(gumballMachine: GumballMachine) {
		this.gumballMachine = gumballMachine
	}

	insertQuarter() {
		console.log("Please wait, we're giving you a gumball")
	}
	ejectQuarter() {
		console.log('You already turned the crank')
	}
	turnCrank() {
		console.log("TUrning twice doesn't get you another gumball")
	}
	dispense() {
		this.gumballMachine.releaseBall()
		if (this.gumballMachine.getCount()) {
			this.gumballMachine.setState(this.gumballMachine.getNoQuarterState())
		} else {
			console.log('Oops, out of gumballs')
			this.gumballMachine.setState(this.gumballMachine.getSoldOutState())
		}
	}
}
class SoldOutState implements State {
	gumballMachine: GumballMachine

	constructor(gumballMachine: GumballMachine) {
		this.gumballMachine = gumballMachine
	}

	insertQuarter() {
		console.log('Sorry out of gumballs')
	}

	ejectQuarter() {
		console.log('Your quarter has been ejected')
	}

	turnCrank() {
		console.log('Crank turned')
	}

	dispense() {
		console.log('Sorry sold out')
	}
}

class GumballMachineTest {
	main() {
		const gumballMachine = new GumballMachine('Seattle', 5)
		const gumballMonitor = new GumballMonitor(gumballMachine)
		gumballMonitor.report()
	}
}

new GumballMachineTest().main()
