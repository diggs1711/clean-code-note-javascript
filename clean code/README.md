### Chapter 1

messy code => unproductive

What is clean code?

> I like my code to be elegant and efficient. The logic should be straightforward to make it hard for bugs to hide, the dependencies minimal to ease maintenance, error handling complete according to an articulated strategy, and performance close to optimal so as not to tempt people to make the code messy with unprincipled optimizations. Clean code does one thing well.

Bad code tries to do many things and becomes muddled. Clean code is focused.

### Chapter 2 - Meaningful Names
- Intention revealing names

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
- code in if blocks should be one line, should be a function call -> adds documentation value to function
- do ONE thing
How to know if a function is doing one thing?
```
If a function does only those steps that are one level below the stated name of the
function, then the function is doing one thing
```

- TO rules

#### Switch Statements
- bury them in low-level class and is never repeated. Use polymorphism

```Javascript
const calculatePay = (e) => {
    switch (e.type) {
        case COMMISSIONED:
            return calculateCommissionedPay(e);
        case HOURLY:
            return calculateHourlyPay(e);
        case SALARIED:
            return calculateSalariedPay(e);
        default:
            throw new InvalidEmployeeType(e.type);
    }
}

/***
- its large
- adding new types means it will grow and grow and grow
- does more than ONE thing

Violates Single Responsibility priniciple because there is more than one reason for it to change
Violates the Open Close Principle because it must change whenever new types are added

numerous other functions that can have the same structure(so it will be repeated)

***/
```

Solution is to create a factory method that creates appropiate instances of the employee class, various
methods will dispatched polymorphically through the interface
```Javascript
class Employee {
    const isPayDay = () => {}
    const calculatePay = () => {}
    const deliverPay = (pay) => {}
}

class EmployeeFactory {
    makeEmployee(r) {}
}

class EmployeeFactoryImpl extends EmployeeFactory {
    makeEmployee(p) {
        switch (r.type) {
            case COMMISSIONED:
                return new CommissionedEmployee(r) ;
            case HOURLY:
                return new HourlyEmployee(r);
            case SALARIED:
                return new SalariedEmploye(r);
            default:
                throw new InvalidEmployeeType(r.type);
        }
    }
}
```

- functions arguments -> as few as possible
- FLag arguments are UGLY, proclaims function does more than one thing -> split into two seperate functions if needs be
- when needs two or more arguments they probably should be in their own class


- NO side effects

NO output arguments
```JavaScript
appendFooter(s) //bad
report.appendFooter() //good
```

- Functions should either return info about an object or update it, not both.
- Extract bodies of try/catch block to its own function

### Don't repeat yourself
- reduce duplication

- start with cluttered code and then "massage" it until it follows the rules in this section

#### Conclusion
- short, well-named functions
- tell the story of the system


## Chapter 4: Comments
- Comments are always failures to express ourselves in code
- Good reasons for comments is clarification, TODO, Amplification
- Any other reason for a comment means code is not clean and expressive enough

## Chapter 5: Formatting

## Chapter 6: Objects and Data Structures
- don't blithely add getters and setters

Polymorphism
```Typescript
interface Shape {
    area(): number
}

class Square implements Shape {
    private topLeft: Point
    private side: number

    area() {
        return side*side
    }
}

class Rectangle implements Shape {
    private topLeft: Point
    private width: number
    private height: number

    area() {
        return width*height
    }
}

```

- do not ask about internals, tell it to do something
- Law of Demeter -> method f of a class C should only call the methods of these:
    -C
    - an object created by f
    - An object passes x

- DTOs -> communicating with DBs, parsing messages from streams,


## Chapter 9 - Unit tests

### TDD
- 1st law -> you may not write production code until you have written a failing unit test
- 2nd law -> You may not write a unit test than is sufficient to fail, and not compiling is failing
- 3rd law -> You may not write more production than is sufficient to a pass the currently failing test

- tests and production code is written together, with test just a few seconds ahead

### clean tests
- readability
- given, when, then
- one assert per test when possible

F.I.R.S.T
    - Fast - run quickly
    - Indepedent - tests shouldn't depend on one another
    - Repeatable -
    - Self-Validating
    - Timely

- write unit tests just before you write production code

## Chapter 10: Classes

Encapsulation - Like to keep our variables and utility functions private

- classes should be small
- Single Responsibility Principle -> a class or module should have one and only one reason to change
- small number of instance variables

Organising for change

A class should allows us to easily extend without breaking out methods
class below violates SRP
```Typescript
class Sql {
    public Sql(String table, Column[] columns)
    public create(): string
    public  insert(Object[] fields): string
    public  selectAll(): string
    public  findByKey(String keyColumn, String keyValue): string
    public  select(Column column, String pattern): string
    public  select(Criteria criteria): string
    public  preparedInsert(): string
    private  columnList(Column[] columns): string
    private  valuesList(Object[] fields, final Column[] columns): string
    private  selectWithCriteria(String criteria): string
    private  placeholderList(Column[] columns): string
}
```

Fix this by creating a derivative of the SQL class for each method and grouping the private variables

```Typescript
    class Sql {
        public Sql(String table, Column[] columns)
        abstract public String generate();
    }

    class CreateSql extends Sql {
        public CreateSql(String table, Column[] columns)
        @Override public String generate()
    }

    class SelectSql extends Sql {
        public SelectSql(String table, Column[] columns)
        @Override public String generate()
    }

    class InsertSql extends Sql {
        public InsertSql(String table, Column[] columns, Object[] fields)
        @Override public String generate()
        private String valuesList(Object[] fields, final Column[] columns)
    }

    class SelectWithCriteriaSql extends Sql {
        public SelectWithCriteriaSql(
        String table, Column[] columns, Criteria criteria)
        @Override public String generate()
    }

    class SelectWithMatchSql extends Sql {
        public SelectWithMatchSql(
        String table, Column[] columns, Column column, String pattern)
        public String generate()
    }

    class FindByKeySql extends Sql {
        public FindByKeySql(table: string, Column[] columns, String keyColumn, String keyValue)
        public String generate()

    }

    class PreparedInsertSql extends Sql {
        public PreparedInsertSql(String table, Column[] columns)
        @Override public String generate() {
        private String placeholderList(Column[] columns)
    }

    public class Where {
        public Where(String criteria)
        public String generate()
    }

```

- DIP(Dependency Inversion Principle) class should depend upon abstractions not contrete details


## Chapter 11: Systems
- seperation of concerns
- Inversion of Control, moves responsibility to other objects