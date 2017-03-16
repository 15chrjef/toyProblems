const stringReverse = (array) => {
  var vowels = 'aeiouy'
  var start = 0;
  var end = array.length -1;
  while(start < end ) {
    console.log(start, end)
    if(vowels.indexOf(array[start]) !== -1 && start < end){
      while(vowels.indexOf(array[end]) === -1 && start < end){
        end --
      }
      var temp = array[start]
      array[start] = array[end]
      array[end] = temp
      start ++
      end --
    }else {
      start ++
    }
    if(vowels.indexOf(array[end]) !== -1 && start < end){
       while(vowels.indexOf(array[start]) === -1 && start < end){
        start ++
      }
      var temp = array[start]
      array[start] = array[end]
      array[end] = temp
      start ++
      end --
    }else{
      end--
    }
  }
  return array
}

console.log(stringReverse('aeio'.split('')))

console.log(stringReverse('fff'.split('')))

console.log(stringReverse('aebbbbbbb'.split('')))

console.log(stringReverse('osdfjasdfhasd'.split('')))

console.log(stringReverse('aiuoye'.split('')))

function mergeSort(arr1, arr2) {
  var i = 0;
  var j = 0;
  var newArr = []
  while(arr1.length > j || arr2.length > i){
    if(arr1.length === j){
      newArr.push(arr2[i])
      i++
    }else if (arr2.length === i){
      newArr.push(arr1[j])
      j++
    }else if( arr1[j] < arr2[i]){
      newArr.push(arr1[j])
      j++
    }else {
      newArr.push(arr2[i])
      i++
    }
  }
  return newArr
}

mergeSort('123678'.split(''), '2'.split(''))



