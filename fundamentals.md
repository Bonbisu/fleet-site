## Exercises
1. Identify all expressions:
 
```js
a = b * 2 + foo(c * 3);
```

- Solution:

```js
[[a] = [ [[b] * [2]] + [[foo]( [[c] * [3]] )] ] ];
```

Where:
- `2` and `3` are literal expressions
- `a`, `b` and `c` are variable expressions
- `foo` is a function expression
- `c * 3` is an arithmetic expression
- `foo(c * 3)` is a call function expression
- `b * 2` is an arithmetic expression too \*
- `b * 2 + foo(c * 3)` is also an arithmetic expression
- `a = b * 2 + foo(c * 3);` is an entire assignment expression (AKA assignment statement)

\* `b * 2` is a first expression, because programming languages usually follows arithmetic's operation priority rule. To force priority on some part of expression to evaluates first than default priority, we can use parentesis llike this:

```js
a = b * (2 + foo(c * 3));
```

Now `2 + foo(c * 3)` will be calculate _before_ `b * ` and the priority is satisfying expressions where:
- `2` and `3` are literal expressions
- `a`, `b` and `c` are variable expressions
- `foo` is a function expression
- `c * 3` is an arithmetic expression
- `foo(c * 3)` is a call function expression
- `2 + foo(c * 3)` is an arithmetic expression too \*
- `b * (2 + foo(c * 3))` is also an arithmetic expression
- `a = b * (2 + foo(c * 3));` is an entire assignment expression (AKA assignment statement)

*The statement `a = b * 2 + foo(c * 3);` doesn't need a parentesis on `b * 2` to mark operator precedence, it's optional in those cases. But in order to make our code more __understandable__, we can write to increase human readability.*
Ex:

```js
a = (b * 2) + foo(c * 3);
```

