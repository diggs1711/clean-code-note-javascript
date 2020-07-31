import QuackObservable from './QuackObservable'

export default interface Quackable extends QuackObservable {
	quack(): void
}
