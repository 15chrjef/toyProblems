/*
 * Given an array of numbers, calculate the greatest contiguous sum of numbers in it.
 * A single array item will count as a contiguous sum.
 *
 * example 1: sumArray([1, 2, 3]); // => 6
 * example 2: sumArray([1, 2, 3, -4]); // 6
 * example 3: sumArray([1, 2, 3, -4, 5]); // 7
 * example 4: sumArray([4, -1, 5]); // => 8
 * example 5: sumArray([10, -11, 11]); // 11
 */

// Solved in O(n) time with O(1) memory
var sumArray = function(array) {

  var counter = array[0]
  var saved = array.reduce(function(item, accumualtor){
    return accumualtor += item
  }, 0)
  for(var i = 1; i < array.length; i++){
    if(array[i] >= 0){
      counter += array[i];
      if(i === array.length -1){
        if(counter > saved){
          saved = counter;
        } 
      }
    }
    //else see if our current is larger than saved, 
      //if it is override saved and set counter to zero , 
      //else set counter to 0
    else{
      if(counter > saved){
        saved = counter;
      } 
      counter = 0;
    }
  }
  if(saved <= 0){
    return 0
  }
  return saved;
};
