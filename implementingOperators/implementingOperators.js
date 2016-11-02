// Implement multiply, divide, and modulo using only the addition and
// subtraction operators. start off my assuming all inputs are integers
//
// Step 2: Make divide produce answers to three decimal places
// (e.g. 2/3 => 0.667).
//
// Extra credit: Make multiply work with decimals
// (e.g. multiply(2.5, 10.2)
//
// Terror mode: Re-implement all three functions using only bitwise operators.


var multiply = function(x, y) {
  // TODO: should return the product of x * y
  //x groups of y
  var total = 0;
  var count = 0;
  while (count < x) {
    count++;
    total += y;
  }
  console.log(total);
  return total;
};

var divide = function(x, y) {
  // TODO: should return the quotient of x / y
  //x goes into y, z number of times
  var total = 0;
  var numer = x;
  while ( (numer - y) >= 0 ) {
    total ++;
    numer -= y;
  }
  if( numer !== 0){
    numer = multiply(numer,100);
    numer = divide(numer,10);
  }
  console.log(total);
  return total;
};

var modulo = function(x, y) {
    console.log(modulo);

  // TODO: should return the remainder of x / y
  var numer = x;
  while ( (numer - y) >= 0 ) {
    numer -= y;
  }
  console.log(numer);
  return numer;
};
multiply(100, 3);
divide(30, 3);
modulo(27, 4);
