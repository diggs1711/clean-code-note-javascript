import Quackable from './Quackable'
import Goose from './Goose'
import Observer from './Observer'

export default class GooseAdapter implements Quackable {
	goose: Goose

	constructor(goose: Goose) {
		this.goose = goose
	}
	registerObserver(observer: Observer): void {
		throw new Error('Method not implemented.')
	}
	notifyObservers(): void {
		throw new Error('Method not implemented.')
	}
	quack() {
		this.goose.honk()
	}
}
