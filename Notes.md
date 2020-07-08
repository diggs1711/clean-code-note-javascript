### Chapter 1

messy code => unproductive

What is clean code?

> I like my code to be elegant and efficient. The logic should be straightforward to make it hard for bugs to hide, the dependencies minimal to ease maintenance, error handling complete according to an articulated strategy, and performance close to optimal so as not to tempt people to make the code messy with unprincipled optimizations. Clean code does one thing well.

Bad code tries to do many things and becomes muddles. Clean code is focused.

### Chapter 2 - Meaningful Names
- use intention revealing names

```Javascript
const d = 10; // bad code, name doesn't reveal intention
const daysSinceCreation = 10; // clean
```

- Use distinguishable names
  ```CustomerInfo``` is indistinguishable from ```customer```

- Use searchable name
  single letter names and numerical constants are hard to search for

  ```Javascript
  // Bad
  class Student {
      maxClasses = 0
  }

  const student = new Student()
  student.maxClasses = 7
  ```

  ```Javascript
  // Good
  const MAX_CLASS_PER_STUDENT = 7;

  class Student {
      maxClasses = 0
  }
  const student = new Student()
  student.maxClasses = MAX_CLASS_PER_STUDENT;

  ```

- Class names should be nouns or noun phrases like `Customer`, `WikiPage`

- Method names should have a verb or verb phrase `postPayment`, `save`

- Add meaningful context
```Javascript
// Bad code
// lack of context, meaning must be infered, not explicit
// function is too long, variables used throughout
// need to split into smaller chunks
const printGuessStatistics = (candidate, count) => {
    let number;
    let verb;
    let pluralModifier;
    if(count == 0) {
        number = 'No'
        verb = 'are'
        pluralModifier = 's'
    }  else if (count == 1) {
        number = "1";
        verb = "is";
        pluralModifier = "";
    } else {
        number = String(count);
        verb = "are";
        pluralModifier = "s";
    }

    const guessMessage = `There ${verb} ${number} ${candidate}${pluralModifier}`
    console.log(guessMessage)
}
```
```Javascript
//Good code
class GuessStatisticMessage {
    number = 0;
    verb = "";
    pluralModifier = "";

    make(candidate, count) {
        createPluralDependantMessageParts(count)
        return `There ${this.verb} ${this.number} ${this.candidate}${this.pluralModifier}`
    }

    createPluralDependantMessageParts(count) {
        if(count == 0) {
            thereAreNoLettes()
        } else if(count == 1) {
            thereIsOneLetter()
        } else {
            thereAreManyLetters(count)
        }
    }

    thereAreManyLetters(count) {
        this.number = String(count)
        this.verb = 'are'
        this.pluralModifier = 's'
    }

    thereIsOneLetter() {
        this.number = "1"
        this.verb = "is"
        this.pluralModifier = "";
    }

    thereAreNoLetters() {
        this.number = "No"
        this.verb = "are"
        this.pluralModifier = ""
    }
}
```

### Chapter 3 - Functions
- small
- smaller than that
= code in if blocks should be one line, should be a function call -> adds documentation value to function
- do ONE thing
How to know if a function is doing one thing?
```
If a function does only those steps that are one level below the stated name of the
function, then the function is doing one thing
```
