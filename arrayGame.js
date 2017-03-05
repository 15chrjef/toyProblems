function countMoves(numbers) {
  var count = 0;
  function checkEqual(arr){
    var val = arr[0]
    for(var i = 1; i < arr.length; i++){
      if(arr[i] !== val){
        return false
      }
    }
    return true
  }
  numbers = numbers.sort((a, b) => b - a)
  while(!checkEqual(numbers)){
    count++
    numbers = numbers.map((val, i) => {
      if(i === 0){
        return val
      }
      return val + 1
    })
    var start = 0;
    while(numbers[start] < numbers[start + 1]){
      var newF = numbers[start + 1]
      numbers[start + 1] = numbers[start]
      numbers[start] = newF
      start ++
    }
  }
  return count
}
