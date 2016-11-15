/**
 * Write a function `f(a, b)` which takes two strings as arguments and returns a
 * string containing the characters found in both strings (without duplication), in the
 * order that they appeared in `a`. Remember to skip spaces and characters you
 * have already encountered!
 *
 * Example: commonCharacters('acexivou', 'aegihobu')
 * Returns: 'aeiou'
 *
 * Extra credit: Extend your function to handle more than two input strings.
 */



var commonCharacters = function(string1, string2) {
  // TODO: Your code here!
  var returnedString = '';
  string1.split('').forEach(function(letter) {
    if(string1.indexOf(letter) !== -1 && string2.indexOf(letter) !== -1 && returnedString.indexOf(letter === -1)) {
      returnedString += letter;
    }
  });
  return returnedString;
};


console.log(commonCharacters('acexivou', 'aegihobu'))