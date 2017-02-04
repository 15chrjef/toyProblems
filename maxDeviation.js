//find the max deviation

var inputArray = [6,9,4,7,4,1];
const maxDeviation = (array) => {
  var maxDeviation = 0;
  for(var i = 0; i < array.length; i++) {
    var min = array[i];
    var max = array[i]
    for (var j = i + 1; j < i + 3; j++) {
      if(array[j] > max) {
        max = array[j];
      } else if(array[j] < min) {
        min = array[j];
      }
    }
    if (Math.abs(max - min) > maxDeviation){
      maxDeviation = Math.abs(max - min);
    }
  }
  console.log(maxDeviation)
  return maxDeviation;
}

maxDeviation(inputArray);
