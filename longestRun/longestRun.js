/**
 * Write a function that, given a string, Finds the longest run of identical
 * characters and returns an array containing the start and end indices of
 * that run. If there are two runs of equal length, return the first one.
 * For example:
 *
 *   longestRun("abbbcc") // [1, 3]
 *   longestRun("aabbc")  // [0, 1]
 *   longestRun("abcd")   // [0, 0]
 *   longestRun("")       // [0, 0]
 *
 * Try your function with long, random strings to make sure it handles large
 * inputs well.
 */
var longestRun = function (string) {
  var longestIndex = 0
  var longestCounter = 1;
  var tempCounter = 1;
  var last = string.slice(0,1)
  for(var index = 1; index < string.length; index++){
    if(string[index] === last){
      tempCounter ++;
      if(tempCounter > longestCounter){
        longestCounter = tempCounter;
        longestIndex = index - (longestCounter -1)
      }
    }
    else {
      tempCounter = 1
      last = string[index]
    }
  }     
  console.log(string, [longestIndex, longestIndex + (longestCounter -1)])
  return [longestIndex, longestIndex + (longestCounter -1)]
};


// If you need a random string generator, use this!
// (you wont need this function for your solution but it may help with testing)
function randomString (len) {
  var text = '';
  var possible = 'abcdefghijklmnopqrstuvwxyz';

  for (var i = 0; i < len; i++) {
    text += possible.charAt(Math.floor(Math.random() * possible.length));
  }

  return text;
};
longestRun(randomString(10))
