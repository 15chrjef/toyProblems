const minSequence = (myArr) => {
  var absoluteMaxValue = -Infinity;
  var absoluteMaxSubsequence = [];
  var absoluteMinValue = Infinity;
  var absoluteMinSubsequence = [];
  for(var i = 0; i < myArr.length; i++) {
    var tempMaxValue = 0;
    var tempMinValue = 0;
    for(var j = i; j < myArr.length; j++ ) {
      tempMaxValue += myArr[j];
      tempMinValue += myArr[j];
      if(tempMaxValue > absoluteMaxValue) {
        absoluteMaxValue = tempMaxValue;
        var newArr = [];
        for( var x = i; x <= j; x++){
          newArr.push(myArr[x]);
        }
        absoluteMaxSubsequence = newArr;
      } else if(tempMinValue < absoluteMinValue) {
        absoluteMinValue = tempMinValue;
        newArr = [];
        for(x = i; x <= j; x++){
          newArr.push(myArr[x])
        }
        absoluteMinSubsequence = newArr;
      }
    }
  }
  console.log(absoluteMaxValue, absoluteMaxSubsequence) // 9 [ 8, -2, 3 ]
  console.log(absoluteMinValue, absoluteMinSubsequence) // -6 [ -5, 1, -2 ]
  return absoluteMaxValue - absoluteMinValue;
}
var myArr = [3, -5, 1, -2, 8,-2, 3, -2, 1]
minSequence(myArr) //15
