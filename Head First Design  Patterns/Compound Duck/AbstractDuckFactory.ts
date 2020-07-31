import Quackable from './Quackable'

export default abstract class AbstractDuckFactory {
	abstract createMallardDuck(): Quackable
	abstract createRedHeadDuck(): Quackable
	abstract createRubberDuck(): Quackable
}
