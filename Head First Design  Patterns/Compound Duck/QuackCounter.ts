import Quackable from './Quackable'
import Observer from './Observer'

export default class QuackCounter implements Quackable {
	duck: Quackable
	static quacks = 0

	constructor(duck: Quackable) {
		this.duck = duck
	}
	registerObserver(observer: Observer): void {
		this.duck.registerObserver(observer)
	}
	notifyObservers(): void {
		this.duck.notifyObservers()
	}

	quack() {
		this.duck.quack()
		QuackCounter.quacks++
	}

	static getCount() {
		return this.quacks
	}
}
