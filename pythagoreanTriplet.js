var arr = [3,1,4,6,5];

const findTriplet = (array) => {
  array = array.map(val => Math.pow(val, 2)).sort((a,b) => a - b)
  for(var i = array.length -1; i >= 0; i--){
    var start = 0;
    var end = i - 1;
    var val = array[i]
    while(start < end){
      var startV = array[start], endV = array[end]
      if(startV + endV === val){
        return true
      }else if(startV + endV > val){
        end --
      }else {
        start ++ 
      }
    }
  }
  return false
}

findTriplet(arr) //true
findTriplet([10, 4, 6, 12, 5]) //false
