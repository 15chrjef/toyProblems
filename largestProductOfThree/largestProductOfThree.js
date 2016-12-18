/* Write a function that finds the largest possible product of any three numbers
 * from an array.
 * 
 * Example:
 * largestProductOfThree([2, 1, 3, 7]) === 42
 *
 * Extra credit: Make your function handle negative numbers.
 */


var largestProductOfThree = function(array) {
  array.sort(function(a, b){
    return a > b;
  });
  var negatives = 0;
  var resort = false;

  for (var j = 0; j < array.length; j++) {
    if (array[j] < 0) {
      negatives ++;
    }
    if (negatives > 1) {
      var resort = true;
    }
  }
  console.log(array)
  if (resort === true) {
    if ( negatives % 2 !== 0) {
      console.log('slicing')
      array.splice(negatives -1, 1);
      console.log('spliced ', array)
    }
    for (var x = 0; x < array.length; x++) {
      if (array[x] < 0) {
        array[x] = array[x] * -1;
      } else {
      }
    }
  }
  array.sort(function(a, b){
    return a > b;
  });
console.log(array)
  var newArray = [];
  newArray.push(array.pop());
  newArray.push(array.pop());
  newArray.push(array.pop());
  var num = 1;
  for (var i = 0; i < newArray.length; i++) {
    num = num * newArray[i];
  }
  console.log(num)
  console.log(newArray);
  return num;
};

    largestProductOfThree([2, 3, -11, 7, 5, -13])
    largestProductOfThree([-31, 41, 34, -37, -17, 29])
