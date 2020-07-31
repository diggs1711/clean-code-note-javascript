import Quackable from './Quackable'
import Observable from './Observable'
import Observer from './Observer'

export default class MallardDuck implements Quackable {
	observable: Observable
	name = 'Mallard'

	constructor() {
		this.observable = new Observable(this)
	}

	getName() {
		return this.name
	}

	registerObserver(observer: Observer): void {
		this.observable.registerObserver(observer)
	}
	notifyObservers(): void {
		this.observable.notifyObservers()
	}

	quack() {
		console.log('Quack')
		this.notifyObservers()
	}
}
