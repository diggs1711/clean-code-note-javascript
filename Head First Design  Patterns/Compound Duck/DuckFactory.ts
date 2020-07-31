import AbstractDuckFactory from './AbstractDuckFactory'
import Quackable from './Quackable'
import MallardDuck from './MallardDuck'
import RedHeadDuck from './RedHeadDuck'
import RubberDuck from './RubberDuck'

export default class DuckFactory extends AbstractDuckFactory {
	createMallardDuck(): Quackable {
		return new MallardDuck()
	}
	createRedHeadDuck(): Quackable {
		return new RedHeadDuck()
	}
	createRubberDuck(): Quackable {
		return new RubberDuck()
	}
}
