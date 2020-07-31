import QuackObservable from './QuackObservable'
import Observer from './Observer'

export default class Observable implements QuackObservable {
	duck: QuackObservable
	observers: Observer[] = []

	constructor(duck: QuackObservable) {
		this.duck = duck
	}
	registerObserver(observer: Observer): void {
		this.observers.push(observer)
	}

	notifyObservers(): void {
		for (let observer of this.observers) {
			observer.update(this.duck)
		}
	}
}
