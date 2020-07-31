import QuackObservable from './QuackObservable'

export default interface Observer {
	update(duck: QuackObservable): void
}
