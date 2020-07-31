import Quackable from './Quackable'
import Observer from './Observer'
import Observable from './Observable'

export default class Flock implements Quackable {
	quackers: Quackable[] = []

	registerObserver(observer: Observer): void {
		for (let quacker of this.quackers) {
			quacker.registerObserver(observer)
		}
	}

	notifyObservers(): void {
		for (let quacker of this.quackers) {
			quacker.notifyObservers()
		}
	}

	add(quacker: Quackable) {
		this.quackers.push(quacker)
	}

	quack() {
		for (let quacker of this.quackers) {
			quacker.quack()
		}
	}
}
