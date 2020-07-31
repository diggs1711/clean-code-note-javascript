import Observer from './Observer'
import QuackObservable from './QuackObservable'

export default class Quackologist implements Observer {
	update(quack: QuackObservable) {
		console.log('Quackologist: ' + quack + ' just quacked')
	}
}
