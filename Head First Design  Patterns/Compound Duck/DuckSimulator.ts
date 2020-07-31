import MallardDuck from './MallardDuck'
import RedHeadDuck from './RedHeadDuck'
import RubberDuck from './RubberDuck'
import Quackable from './Quackable'
import GooseAdapter from './GooseAdapter'
import Goose from './Goose'
import QuackCounter from './QuackCounter'
import CountingDuckFactory from './CountingDuckFactory'
import AbstractDuckFactory from './AbstractDuckFactory'
import Flock from './Flock'
import Quackologist from './Quackologist'

class DuckSimulator {
	abstractDuckFactory: AbstractDuckFactory

	constructor() {
		this.abstractDuckFactory = new CountingDuckFactory()
		this.simulate(this.abstractDuckFactory)
	}

	simulate(duckFactory: AbstractDuckFactory) {
		const mallardDuck: Quackable = duckFactory.createMallardDuck()
		const redHeadDuck: Quackable = duckFactory.createRedHeadDuck()
		const rubberDuck: Quackable = duckFactory.createRubberDuck()
		const goose: Quackable = new GooseAdapter(new Goose())

		const flockOfDucks = new Flock()
		flockOfDucks.add(mallardDuck)
		flockOfDucks.add(rubberDuck)
		flockOfDucks.add(redHeadDuck)

		const quackologist = new Quackologist()
		const flockOfMallards = new Flock()
		flockOfMallards.add(duckFactory.createMallardDuck())
		flockOfMallards.add(duckFactory.createMallardDuck())
		flockOfMallards.add(duckFactory.createMallardDuck())
		flockOfMallards.add(duckFactory.createMallardDuck())

		flockOfDucks.add(flockOfMallards)
		flockOfDucks.registerObserver(quackologist)

		this.simulateQuack(flockOfDucks)
		// this.simulateQuack(flockOfMallards)

		console.log(QuackCounter.getCount())
	}

	simulateQuack(duck: Quackable) {
		duck.quack()
	}
}

new DuckSimulator()
