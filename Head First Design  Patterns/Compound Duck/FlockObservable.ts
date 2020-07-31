import QuackObservable from './QuackObservable'
import Observer from './Observer'

export default class FlockObservable implements QuackObservable {
	flock: QuackObservable

	constructor(flock: QuackObservable) {
		this.flock = flock
	}

	registerObserver(observer: Observer): void {
		this.flock.registerObserver(observer)
	}
	notifyObservers(): void {
		this.flock.notifyObservers()
	}
}
