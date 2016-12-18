/*
 * Find the first item that occurs an even number of times in an array.
 * Remember to handle multiple even-occurrence items and return the first one. 
 * Return null if there are no even-occurrence items.
*/



debugger;

var evenOccurrence = function(arr) {
  debugger
  //create a main storage array
  var newArr = [];
  //loop through given arr
  for(var i = 0; i < arr.length; i++){
    for(var j = 0; j <= arr.length; j++){
      if(newArr[j] && newArr[j].indexOf(arr[i]) >= 1){
        newArr[j][1] += 1;
      }
    newArr.push([arr[i],0])
    }
  }

  for(var v = newArr.length -1; v >= 0; v--){
    if(newArr[v][1] % 2 === 0){
      return newArr[v][0]
    }
  }
  return null
    //if the number in arr is not in storage push it to the array with as a tuple with the # and 0
    //else if the number is in the array, add 1 to its counter 
  //loop thorugh storage backwards and return the first value of a tuple whos second value is divisible by 2
};
debugger;
  var onlyEven = evenOccurrence([1, 7, 2, 4, 5, 6, 8, 9, 6, 4]);
  console.log(onlyEven); //  4
