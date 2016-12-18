/*
 *  Write a function that takes as its input a string and returns an array of
 *  arrays as shown below sorted in descending order by frequency and then by
 *  ascending order by character.
 *
 *       :: Example ::
 *
 *  characterFrequency('mississippi') ===
 *  [
 *    ['i', 4],
 *    ['s', 4],
 *    ['p', 2],
 *    ['m', 1]
 *  ]
 *
 *       :: Example2 ::
 *
 *  characterFrequency('miaaiaaippi') ===
 *  [
 *    ['a', 4],
 *    ['i', 4],
 *    ['p', 2],
 *    ['m', 1]
 *  ]
 *
 *       :: Example3 ::
 *
 *  characterFrequency('mmmaaaiiibbb') ===
 *  [
 *    ['a', 3],
 *    ['b', 3],
 *    ['i', 3],
 *    ['m', 3]
 *  ]
 *
 */

debugger;
 var characterFrequency = function(string) {
  var obj = {}
  var firstArr = []
  var arr = []
  for(var i = 0; i < string.length; i++){
    if(obj[string[i]]){
      obj[string[i]] ++
    }else {
      obj[string[i]] = 1;
    }
  }
  for(var key in obj){
    firstArr.push([key, obj[key]])
  }
  while(firstArr.length > 0){
    var first = firstArr[0]
    for(var j = 1; j < firstArr.length; j++){
      if(first[1] < firstArr[j][1]){
        first = firstArr[j];
      }
    }
    arr.push(first)
    firstArr = firstArr.filter(function(item){
      return item[0] !== first[0]
    })
    }
    console.log(arr)
    return arr;
  }


characterFrequency('mississippi')