/**
* Extend the Number prototype with a new method called `toEnglish`.
* It should return the number as a string using English words.
* Examples:
*   (7).toEnglish(); // > "seven"
*   (575).toEnglish(); // > "five hundred seventy-five"
*   (78193512).toEnglish(); // > "seventy-eight million one hundred ninety-three thousand five hundred twelve"
*
* Extra credit: Make your function support decimals.
* Example:
*   (150043.273).toEnglish() // > "one hundred fifty thousand forty-three and two hundred seventy three thousandths"
*
 */

var numbersToWords = {
  0: 'zero',
  1: 'one',
  2: 'two',
  3: 'three',
  4: 'four',
  5: 'five',
  6: 'six',
  7: 'seven',
  8: 'eight',
  9: 'nine',
  10: 'ten',
  11: 'eleven',
  12: 'twelve',
  13: 'thirteen',
  14: 'fourteen',
  15: 'fifteen',
  16: 'sixteen',
  17: 'seventeen',
  18: 'eighteen',
  19: 'nineteen',
  20: 'twenty',
  30: 'thirty',
  40: 'forty',
  50: 'fifty',
  60: 'sixty',
  70: 'seventy',
  80: 'eighty',
  90: 'ninety',
};
var numbersToPlace = {
  10: 'ten',
  100: 'hundred',
  1000: 'thousand',
  1000000: 'million',
  1000000000: 'billion',
  1000000000000: 'trillion',
  1000000000000000: 'quadrillion',
  1000000000000000000: 'quintillion',
};

Number.prototype.toEnglish = function (number1) {
  var number1 = num
  //if we are not given a number return ''
  if(typeof num !== 'number'){
    return ''
  }
  var ones = ['zero','one','two','three','four', 'five','six','seven','eight','nine'];
  var tweens = ['ten','eleven','twelve','thirteen', 'fourteen','fifteen','sixteen', 'seventeen','eighteen','nineteen'];
  var tens = ['twenty','thirty','forty','fifty', 'sixty','seventy','eighty','ninety'];
  var bigs = ['','thousand','million', 'billion','trillion'];
  var string = '';
  var sequence = (num.match(/.{1,3}/g));
  //if the number is in the hundreds place return ''
  var current = sequence[0];
  if( sequence[sequence.length-1].length === 1){
    string.push(ones[current] + ',')
  }
  if(sequence[sequence.length-1].length === 2){
    
  }
  if(sequence[sequence.length-1].length === 3){
    r
  }

};
