import AbstractDuckFactory from './AbstractDuckFactory'
import Quackable from './Quackable'
import MallardDuck from './MallardDuck'
import RedHeadDuck from './RedHeadDuck'
import RubberDuck from './RubberDuck'
import QuackCounter from './QuackCounter'

export default class CountingDuckFactory extends AbstractDuckFactory {
	createMallardDuck(): Quackable {
		return new QuackCounter(new MallardDuck())
	}
	createRedHeadDuck(): Quackable {
		return new QuackCounter(new RedHeadDuck())
	}
	createRubberDuck(): Quackable {
		return new QuackCounter(new RubberDuck())
	}
}
