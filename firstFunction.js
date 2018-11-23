// a litle 60 seconds homework :)

/* declare a function with a couple statements and repeat some times through the program */

function calculateDiscount(rate) {
  var rate = rate / 100; // transform percentage in decimal
  var discount = price * rate;
  price = price - discount; // update price
  console.log(price.toFixed(2) ); // print in console just for didactic reasons
}

var price = 159.99;

calculateDiscount(10); // loyalty card 10% discount

calculateDiscount(5); // cash payment 5% discount



console.log('\nKyle\'s function : '); // Kyle's function begins

function foo() {
  a = a * 2;
  a = a + 3;
}

var a = 10;

foo();

console.log(a);

foo();
foo();

console.log(a);
