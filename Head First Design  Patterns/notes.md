Tips for memorizing:
    - Slow down. Stop and think.
    - Do the excercises
    - Read there are no dumb questions
    - DESIGN SOMETHING!

### Chapter 1: Intro

disadvantages of using inheritance to provide duck behaviour
    <!-- - Code is duplicated across subclasses -->
    - hard to gain knowledge of all duck behaviours
    - changes can unintentionally affect other ducks

Inheritance
    - Inheritance isn't the answer when not all subclasses have the same behaviour
    - have no implementation details so no code reuse. Will need to change functionality in all class that implement the interface

###### Design Principle 1
- Identify aspects of your application that vary and seperate them from what stays the same
- Take what varies and encapsulate it so you can extend later

Over time application will grow and change
    - customer or user decide they want something else
    - company using new vendor/tech
    - management want to new feature
    - competitor created a new feature and now your boss wants the same feature


###### Design Principle 2
- Program to interface, not to an implementation

```Java
// Programming to an implementation
Dog d = new Dog()
d.bark()

// Programming to an interface
Animal dog = new Animal()
animal.makeSound()

```

Duck behaviours live in a seperate class
- Make a class to represent behaviour

Integrating duck behaviour
    - duck will now *delegate* its' flying and quacking behaviour

    - Add two instance variables to Duck class called FlyBehaviour and QuackBehaviour
    - replace fly() and quack() method on Duck class with performFly() and performQuack()

###### Design Principle 3
- Favour composition over inheritance

Composition gives much more flexibility, allows to change behaviour at runtime

#### Strategy Pattern
- The Strategy Pattern defines a family of algorithms,
encapsulates each one, and makes them interchangeable. Strategy
lets the algorithm vary independently from clients that use it.


### Chaper 2 - Observer Pattern
- defines a one-to-many dependency between objects so that when
one object changes state, all of its dependents are notified and updated automatically

##### Design Principle
- Strive for loosely coupled designs between objects that interact
- allows us to build flexible OO systems

- seperates things that change(the subject)
- Program to interface is used in the observer because to be an observer you must implement the Observer
interface, while the observers register with a subject interface

- Composition over Inheritance =>
    The observer's subject is composed at runtime
    The observers are established at runtime


- Inherit at runtime with composition and delegation

##### Design Principle
- Classes should be closed modification and open for extension

### The Decorator Pattern
- attaches additional responsibility to an object dynamically. Decorators provide a flexibile alternative
    to subclassing for extending functionality

- Flexible, aheres to Open-Close principle
- Leads lots of small classes which can be difficult to understand
- Complexity when instantiating components

### Chapter 4 - Factory Pattern
- more to creating objects than 'new' operator. Use can lead to coupling problems
- when code is written to an interface, then it will work with any new cases implementing that interface through polymorphism
- Less concrete classes, promotes coupling between classes => Code will be 'open for modifiction'(Not good!)
-


- The factory method defines an interface for a creating an object
    but lets subclasses decide which class to instantiate. Factory method lets a class defer instantiation to subclasses.

##### Design Principle
- Depend upon abstractions. Do not depend upon concrete classes


Guidelines
- No variable should hold a reference to a concrete class(don't use new)
- No class should derive from a concrete class
- No method should override an implemented method from it's lower classes

##### Abstract Factory Pattern
- provides an interface for creating families of related or dependent objects without specifying a concrete class

###### Difference between Factory Method and Abstract Factory?
- Factory uses classes and abstract uses objects to decouple
- Factory method creates objects through inheritance whereas abstract factory method does it through composition
- To create objects using the Factory Method, you need to extend a class and provide an implementation for a factory method
- Use of abstract method if you have a family of related products


#### Chapter 5 - Singleton Pattern
- The Singleton Pattern ensures a class has only one instance, and provides
a global point of access to it.

Issues
    - synchronization issues
        - use synchronized keyword => can degrade performance by factor of 100!!
        - if application always uses Singleton and is not resource intensive move creation to top of class(eager instantitation)
        - double checked locking

#### Chapter 6 - Command Pattern: Encapulating Invocation
- encapsulate method invocation
- The Command Pattern encapsulates a request in an object, thereby letting you parameritize other object with different requests, queue or log requests, and support undoable operations

#### Chapter 7 - Adapter and Facade
- An intermediate class that maps from one interface to another

- The Facade Pattern provides a unified interface to a set of interfaces in a subsystem.
Facade defines a higher-level interface that makes the subsystem easier to use.

#### Principle of Least Knowledge
- talk only to your immediate friends

#### Chapter 8 - Template Method
- defines the skeleton of an algorithm in a method,
deferring some steps to subclasses. Template Method lets subclasses redefine certain
steps of an algorithm without changing the algorithm’s structure.

- A hook is a method that is declared in the abstract class, but only given an
empty or default implementation. This gives subclasses the ability to “hook
into” the algorithm at various points
