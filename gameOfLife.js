var matrix  = [];
const randomGeneration = () => {
  return Math.round(Math.random())
};
for(var i = 0; i < 10; i++) {
  matrix.push([])
  for( var j = 0; j < 10; j++) {
    var num = randomGeneration()
    matrix[i].push(num)
  }
}

const checkForSiblings = (i, j) => {
  var siblings = 0;
  if( i > 0 && matrix[i -1][j] && matrix[i -1][j] === 1){
    siblings ++;
  } 
  if( i > 0 && matrix[i -1][j+ 1] && matrix[i -1][j + 1] === 1){
    siblings ++;
  } 
  if( j < 10 && matrix[i][j + 1] && matrix[i][j + 1] === 1){
    siblings ++;
  } 
  if( i < 10 && matrix[i + 1]&& matrix[i + 1][j + 1] && matrix[i + 1][j + 1] === 1){
    siblings ++;
  } 
  if( i < 10 && matrix[i + 1] && matrix[i + 1][j] && matrix[i + 1][j] === 1){
    siblings ++;
  } 
  if( i < 10 && matrix[i + 1] &&  matrix[i + 1][j - 1] && matrix[i + 1][j -1] === 1){
    siblings ++;
  } 
  if( j > 0 && matrix[i] && matrix[i][j -1] && matrix[i][j -1] === 1){
    siblings ++;
  } 
  if( i > 10 && matrix[i -1] && matrix[i -1][j -1] && matrix[i -1][j - 1] === 1){
    siblings ++;
  }
  if( matrix[i][j] === 0 && siblings === 3) {
    matrix[i][j] = 1;
  } else if(matrix[i][j] === 1){
    if(siblings < 2) {
      matrix[i][j] = 0;
    } else if(siblings > 3) {
      matrix[i][j] = 0
    } 
  }
}




const  livingConditions = () => {
  for(var x = 0; x < matrix.length; x++) {
    for(var y = 0; y < matrix.length; y++) {
      checkForSiblings(x, y, matrix)
    }
  }
console.log(matrix)
}

setInterval(livingConditions, 500)
