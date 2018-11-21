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

###### An expression can also be a statement, if are a major group (ex: `(a = b * 2);`, all inside parentesis is a expression and has nothing outside, ***semicolon doesn't count*** ), what we call an expression statement.
---
##### Exercise 1 - `fundamentals.md`
---


