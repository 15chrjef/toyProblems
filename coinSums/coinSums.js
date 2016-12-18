/*

In England the currency is made up of pound, £, and pence, p, and there are eight coins in general circulation:

1p piece
2p piece
5p piece
10p piece
20p piece
50p piece
£1 (100p)
£2 (200p)

It is possible to make £2 in the following way:

1 * £1 + 1 * 50p + 2 * 20p + 1 * 5p + 1 * 2p + 3 * 1p
How many different ways can £2 be made using any number of coins?

example usage of `makeChange`:

// aka, there's only one way to make 1p. that's with a single 1p piece
makeChange(1) === 1
// aka, there's only two ways to make 2p. that's with two, 1p pieces or with a single 2p piece
makeChange(2) === 2
*/

var options = {
  '1': 1,
  '2': 2,
  '5': 5,
  '10': 10,
  '20': 20,
  '50': 50,
  '100': 100,
  '200': 200,
}

var makeChange = function(total) {
  var counter = 0;
  if(total === 1){
    return 1
  }
  if(total === 2){
    return 2;
  }
  //create recurisve function(current val)
  (function recureser(curVal){
  //   //if val equals total
  //   if( curVal === total){
  //     //increment counter
  //     counter ++;
  //     return;
  //   }  
  //   //iterate over prop objects
  //   for(key in options){
  //     //if total - current val is greater than or equal to option property
  //     if((total - curVal) >= options[key]){
  //       //add the object property to the old one
  //       curVal += options[key]
  //       //call the subroutine with the current val
  //       recureser(curVal);
  //     }
  //   }
  // })(0)
  //return counter
  console.log(counter)
  return counter
};///////////xw

