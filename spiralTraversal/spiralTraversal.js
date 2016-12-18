/*
 * Write a function that accepts a 2-dimensional array (that is, an array containing many same-length arrays),
 * and prints out every value found, but in a spiral from the upper left in to the center
 * Please write some form of specs, tests, or assertions for your code, and check as many edge cases as you can think of
 *
 * example:

    spiralTraversal([
      [1,2,3],
      [4,5,6],
      [7,8,9]
    ]);

    returns [1, 2, 3, 6, 9, 8, 7, 4, 5]
 */


// var myWhile = function(myArr, myMatrix, myI, myJ, inc, letter) {
//   var change;
//   if(inc && letter === 'j') {
//     change = myJ++
//   } else if (!inc && letter === 'j') {
//     change = myJ--
//   } else if (inc && letter === 'i') {
//     change = myI++
//   } else if (!inc && letter === 'i') {
//     change = myI--
//   }
//   var condition = letter === 'j' ? JSON.stringify(matrix2[i][j] && typeof matrix2[i][j] === 'number') : JSON.stringify((matrix2[i] && matrix2[i][j]) && typeof matrix2[i][j] === 'number')
//   while(JSON.parse(condition)) {
//     myArr.push(myMatrix[myI][myJ])
//     myMatrix[myI][myJ] = '';
//     change
//   }
//   return [myArr, myMatrix, myI, myJ]
// }
var spiralTraversal = function(matrix) {
  var arr = []
  var matrix2 = matrix.slice();
  var arrsLength = matrix2[0].length
  var i = 0;
  var j = 0;
  while( matrix2[i][j] && typeof matrix2[i][j] === 'number'){
    while(matrix2[i][j]){
      arr.push(matrix2[i][j])
      matrix2[i][j] = '';
      j++
    }
    var result = myWhile(myArr, matrix2, i, j, true, 'j')

    j-- 
    i++
    while((matrix2[i] && matrix2[i][j]) && typeof matrix2[i][j] === 'number') {
      arr.push(matrix2[i][j])
      matrix2[i][j] = '';
      i++
    }
    i-- 
    j--
    while(matrix2[i][j] && typeof matrix2[i][j] === 'number') {
      arr.push(matrix2[i][j])
      matrix2[i][j] = '';
      j--
    }
    j++ 
    i--
    while((matrix2[i] && matrix2[i][j]) && typeof matrix2[i][j] === 'number') {
      arr.push(matrix2[i][j])
      matrix2[i][j] = ''
      i--
    }
    i++;
    j++;
  }
  console.log(arr, matrix2)
};

spiralTraversal([
  [1,2,3],
  [4,5,6],
  [7,8,9]
]);

spiralTraversal([
  [4,5,6,10],
  [1,2,3,11],
  [7,8,9,12],
  [20,21,22,23]

]);
