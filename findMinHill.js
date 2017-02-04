//find the minimum value(xValue) that can be used on each value in the array so that you can return a ascending valued array
const findMinHill = (inputArray) => {
  var flag = false;
  var xValue = 1;
  while(!flag) {
    var array = inputArray.slice();
    for(var i = 0; i <= array.length; i++){
      console.log('iterating', i, array, 'xvalue', xValue)
      if(i === array.length - 1 && array[i] > array[i -1]) {
        console.log('the min is' + xValue)
        return xValue
      } else if( i === 0 ) {
        array[0] = Math.max(1, array[0] - xValue)
      } else if (array[i] >= array[i - 1] && (array[i]  - array[i - 1]) < xValue ) {
        console.log('hereq')
        array[i] = Math.max( array[i -1] + 1, array[i] - xValue)
      } else if(array[i] < array[i -1] && (array[i - 1] - array[i]) < xValue) {
                console.log('here111')

        var catchUpDistance = array[i - 1] - array[i]
        array[i] = array[i - 1] + 1
      } else {
        i = array.length + 1;
        xValue++;
      }
    }
  }
}

findMinHill([5,4,3,2,8])
