# js-study

###### *Based on Kyle Simpson's (AKA Getify) book series You Don't Know JS, here are some notes about JS studies.*

### About Code

Code is a set of files writted by developers to developers, in order to do some task in computer.
> A program, often referred to as source code or just code, is a set of special instructions to tell the computer what tasks to perform.
In JS, and others high level languages, are writen for developers, not to computers, this means that all code must be more comprehensive as possible for other developer, or a future yourself without references about the code or forget about(tmm).

### Syntax and grammar

Thinking of mantaining a standard, languages have rules called syntax. Syntaxes are composed of expressions, and compose language grammar. It's similar to *human languages*.
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

Another view is separating expressions by parentesis:

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
Characteres that can stores values.
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


*An expression can also be a statement, if are a major group (ex: `(a = b * 2);`, all inside parentesis is a expression and has nothing outside,* __semicolon doesn't count__ *), what we call an expression statement.*

---
##### Exercise 1 - `fundamentals.md`
---

### Executing a Program

In order to execute a program, compilers and interpreters _'transform'_ human readable statements into low-level instructions (0's and 1's), layer by layer, so CPU can understand and process the program.
JavaScript is *interpreted* by JavaScript engine, and is built in on most of browser and can be accessed through developer tools.

Interpreted languages (usually script languages) are interpreted line by line, essentially. In other hand, compiled languages first pass through the program (also, line by line) to validate the syntax, before really compile, transforming into binaries, and then we are able to run.

Looking with this eyes, JavaScript is close to compiled languages, because it verify each line before run on interpreter. Even don't generating binaries, JS compile our application, checking for errors, and run(or not, if syntax errors was found).

#### Browser console

The easiest way to master all languages is coding and running. We can pass all day writing code, but if we don't run them, we don't really know it behavior. Most browsers today have a JS console that runs JavaScript codes. Another way is finding some JavaScript IDE, online editor (JSFiddle, JSBin) or installing nodeJS.
