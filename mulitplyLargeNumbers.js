
function multiply(a, b) {
    var digits = [0]
    //turn numbers into arrays
    a = a.split('').map(Number)
    b = b.split('').map(Number)
    //iterate over each digit in b
    for (var i = b.length-1; i >= 0; i--) {
        var carry = 0;
        var digit;
        //iterate over each digit of a
        for (var j = a.length-1; j >= 0 ; j--) {
            //get new digit by adding any previous carry 
            digit = digits[j+i] || 0;
            //add the product of a[j]/b[i]
            digit += a[j] * b[i]
            //new carry
            carry = Math.floor(digit / 10); 
            //new digit
            digit = digit % 10;
            // Put the modified digit back into the digits array
            digits[j+ i] = digit
            if (carry > 0) {
              if(i !== 0 || j !== 0){
                digits[j+i-1] = digits[j+i-1] === undefined ? carry : digits[j+i -1] + carry
              }else {
                digits.unshift(carry)
              }
            }
        }
    }
    return digits;
}
 multiply(
   '3141592653589793238462643383279502884197169399375105820974944592','2718281828459045235360287471352662497757247093699959574966967627').join('')
/*
'8539734222673567065463550869546574495034888535765114961879601127067743044893204848617875072216249073013374895871952806582723184'
*/
