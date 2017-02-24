function ksorted (lists){
  var listOfLists = []
  var stopHere = Infinity;
  for(var i = 0; i < lists.length; i++){
    var length = lists[i].length
    var posVal = lists[i][length-1]
    stopHere > posVal ? stopHere = posVal: '';
  }
  for(var i =0; i < lists.length; i++){
    listOfLists.push(0)
  }
  var maxAbs = -Infinity
  var minAbs = Infinity
  var maxI;
  var minI;
  var bestRange = Infinity
  var bestPair = ['','']
  //console.log(stopHere,listOfLists)
  function calMinMax(){
  //iterate over lists with var i
    for(var i = 0; i < lists.length; i++){
      var listIndex = listOfLists[i]
      var val = lists[i][listIndex]
      console.log(val)
      if(val > maxAbs){
        maxI = i
        maxAbs = val
      } else if (val < minAbs){
        minI = i
        minAbs = val
      }
    }
  }
  calMinMax()
  while(minAbs < stopHere){
    listOfLists[minI] ++
    minAbs = Infinity
    calMinMax()
    if(Math.abs(maxAbs - minAbs) < bestRange){
      bestRange = maxAbs - minAbs;
      bestPair[0] = minAbs
      bestPair[1] = maxAbs
    }
  }
  return bestPair
}

ksorted([[4, 10, 15, 24, 26,27,28,29], [0, 9, 12, 20, 37], [5, 18, 22, 30]])
