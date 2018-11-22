# js-study

###### _Based on Kyle Simpson's (AKA Getify) book series You Don't Know JS, here are some notes about JS studies._

### About Code

Code is a set of files writted by developers to developers, in order to do some task in computer.

> A program, often referred to as source code or just code, is a set of special instructions to tell the computer what tasks to perform.
In JS, and others high level languages, are writen for developers, not to computers, this means that all code must be more comprehensive as possible for other developer, or a future yourself without references about the code or forget about(tmm).

### Syntax and grammar

Thinking of mantaining a standard, languages have rules called syntax. Syntaxes are composed of expressions, and compose language grammar. It's similar to _human languages_.

> The rules for valid format and combinations of instructions is called a computer language, sometimes referred to as its **SYNTAX**, much the same as English tells you how to spell words and how to create valid sentences using words and punctuation.

### Statements

A group of expressions that can perform a task are called **STATEMENT**. Languages have many types of statements, can be simple such as assignment statements, assertion statements,and compound, like blocks, loops, if-then, etc.
> In a computer language, a group of words, numbers, and operators that performs a specific task is a statement.

### Expressions

Every element within a statement can be considered an expression, except for the semicolon.
Example:

```js
a = b * 2;
```

The statement above has 4 expressions:
- `2` is a literal value expression
- `b` is a variable expression, which means to retrieve its current value
- `b * 2` is an arithmetic expression, which means to do the multiplication
- `a = b * 2` is an assignment expression, which means to assign the result of the b * 2 expression to the variable a (more on assignments later)

Another view is separating expressions by `parentheses/brackets`:

```js
((a) = ((b) * (2)) );
```

#### Types of Expressions
##### 1. Literal value expression
Only literal values.
Ex:
- `2`
- `5`

##### 2. Variable expression
Characters that can stores values.
Ex:
- `a`
- `b`
- `mean`

##### 3. Arithmetic expression
Math expressions.
Ex:
- `2 + 2`
- `21 * 2`
- `a / 3`
- `b * a`

##### 4. Assignment expression
Assign some expression or value to a variable.
Ex:
- `b = 21;`
- `a = b * 2;`


_An expression can also be a statement, if are a major group (ex: `(a = b * 2);`, all inside `parentheses/brackets` is a expression and has nothing outside,_ **semicolon doesn't count** _), what we call an expression statement._

---
##### Exercise 1 - `fundamentals.md`
---

### Executing a Program

In order to execute a program, compilers and interpreters _'transform'_ human readable statements into low-level instructions (0's and 1's), layer by layer, so CPU can understand and process the program.
JavaScript is _interpreted_ by JavaScript engine, and is built in on most of browser and can be accessed through developer tools.

Interpreted languages (usually script languages) are interpreted line by line, essentially. In other hand, compiled languages first pass through the program (also, line by line) to validate the syntax, before really compile, transforming into binaries, and then we are able to run.

Thus JavaScript is closer to compiled languages because it verify each line before run on interpreter. Even don't generating binaries, _JS_ compile our application, checking for errors, and run(or not, if syntax errors was found).

> It's typically asserted that JavaScript is interpreted, because your JavaScript source code is processed each time it's run. But that's not entirely accurate. The JavaScript engine actually compiles the program on the fly and then immediately runs the compiled code.

#### Browser console

The easiest way to master all languages is `coding` and `running`. We can pass all day writing code, but if we don't run them, we really don't know it behavior. Most browsers today have a _JS_ console that runs JavaScript codes. Another way is finding some JavaScript IDE, online editor (JSFiddle, JSBin) or installing nodeJS.

> The easiest way to do that is to open up the developer tools console in your nearest browser (Firefox, Chrome, IE, etc.). You can launch the developer console with a keyboard shortcut or from a menu item.

#### Output

JavaScript have two basic outputs, the most traditional of all is `alert()`. Alert statement pops up a message box, but alert is not part of JavaScript, it comes from the browser.
Ex:

```js
alert('Hello World');
```

_If we try to run `alert()` in Node, probably will not work, because Node doesn't have this function built in._

Is more common to use `console.log()` statement as output. Console.log logs a message through console.
Ex:

```js
console.log('Hello World');
```

###### _We can assume now that everything printed by console is returned like a string._
Also, _JS_ can _'print'_ our outputs on a page with HTML.

> If you run that, you'll notice that instead of printing the output to the console, it shows a popup "OK" box with the contents of the `b` variable. However, using `console.log(..)` is generally going to make learning about coding and running your programs in the console easier than using `alert(..)`, because you can output many values at once without interrupting the browser interface.

> For this book, we'll use `console.log(..)` for output.

#### Inputs

Because we often uses JS _outside_ console, normally is not needed an input popping up. Actually applications usually capture values by the _user interface_ with buttons, forms, etc.

To takes input through the console we can use`prompt`:

```js
var age = prompt("What is your age?")
```

This will pop up a message box (like `alert`) showing "What is your age?", one _InputBox_, and the buttons _OK_ and _Cancel_.

> To keep things simple while we're learning basic programming concepts, the examples in this book will not require input. But now that you've seen how to use `prompt(..)`, if you want to challenge yourself you can try to use input in your explorations of the examples.

#### Operators

Operators are how we perform actions on variables and values. Kyle made a list of the most commons operators and put on his book:

> Here are some of the most common operators in JavaScript:
>
> * Assignment: `=` as in `a = 2`.
> * Math: `+` (addition), `-` (subtraction), `*` (multiplication), and `/` (division), as in `a * 3`.
> * Compound Assignment: `+=`, `-=`, `*=`, and `/=` are compound operators that combine a math operation with assignment, as in `a += 2` (same as `a = a + 2`).
> * Increment/Decrement: `++` (increment), `--` (decrement), as in `a++` (similar to `a = a + 1`).
> * Object Property Access: `.` as in `console.log()`.
>
>    Objects are values that hold other values at specific named locations called properties. `obj.a` means an object value called `obj` with a property of the name `a`. Properties can alternatively be accessed as `obj["a"]`. See Chapter 2.
> * Equality: `==` (loose-equals), `===` (strict-equals), `!=` (loose not-equals), `!==` (strict not-equals), as in `a == b`.
>
>    See "Values & Types" and Chapter 2.
> * Comparison: `<` (less than), `>` (greater than), `<=` (less than or loose-equals), `>=` (greater than or loose-equals), as in `a <= b`.
>
>    See "Values & Types" and Chapter 2.
> * Logical: `&&` (and), `||` (or), as in `a || b` that selects either `a` *or* `b`.
>
>    These operators are used to express compound conditionals (see "Conditionals"), like if either `a` *or* `b` is true.
>
> **Note:** For much more detail, and coverage of operators not mentioned here, see the Mozilla Developer Network (MDN)'s "Expressions and Operators" (https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide/Expressions_and_Operators).

#### Values and Types

In human languages have several ways of saying the same thing. For instance, _half_ can mean `0.50` if talk about currency, also can be `30 minutes` talking about hours. Similarly, in programming the same idea can be expressed in different representations based on what planned to do with them.

> These different representations for values are called *types* in programming terminology. JavaScript has built-in types for each of these so called *primitive* values:
>
> * When you need to do math, you want a `number`.
> * When you need to print a value on the screen, you need a `string` (one or more characters, words, sentences).
> * When you need to make a decision in your program, you need a `boolean` (`true` or `false`).
>
> Values that are included directly in the source code are called *literals*. `string` literals are surrounded by double quotes `"..."` or single quotes (`'...'`) -- the only difference is stylistic preference. `number` and `boolean` literals are just presented as is (i.e., `42`, `true`, etc.).

#### Converting Between Types

However, programming provides converting values if needed (_some functions automatically converts when called_). In JavaScript have a feature called coercion that differs from conversion in explicitness level. _JS_ have literal, explicit conversion functions like `String(a)` or `Number(b)`, also have implicit conversion(coercion):

```js
a = 42;
a = a + ""; // 'adding'(concatenating) an empty string
```

For example, concatenating a number with a string, force the number coercion to an string before concatenation.

> If you have a number but need to print it on the screen, you need to convert the value to a string, and in JavaScript this conversion is called "coercion." Similarly, if someone enters a series of numeric characters into a form on an ecommerce page, that's a string, but if you need to then use that value to do math operations, you need to coerce it to a number.

> Using `Number(..)` (a built-in function) as shown is an explicit coercion from any other type to the number type. That should be pretty straightforward.

> But a controversial topic is what happens when you try to compare two values that are not already of the same type, which would require *implicit* coercion.

> When comparing the string `"99.99"` to the number `99.99`, most people would agree they are equivalent. But they're not exactly the same, are they? It's the same value in two different representations, two different *types*. You could say they're "loosely equal," couldn't you?

> To help you out in these common situations, JavaScript will sometimes kick in and *implicitly* coerce values to the matching types.

> So if you use the `==` loose equals operator to make the comparison `"99.99" == 99.99`, JavaScript will convert the left-hand side `"99.99"` to its `number` equivalent `99.99`. The comparison then becomes `99.99 == 99.99`, which is of course `true`.
