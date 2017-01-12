//given a sum(num), and a array of coin denominations(arr) find the minimun number of coins you can use to make a certain sum

const arrs = (num, arr) => {
  var keptArr = [1];
  for(var x = 1; x < num; x++) {
    keptArr.push(Infinity)
  } 
  console.log(keptArr)
  for (var i = 1; i < num; i++) {
    for(var j = 0; j < arr.length; j++) {
      var currentCoin = arr[j]
      var minNumOfCoins = keptArr[i]
      console.log('data', i, currentCoin, minNumOfCoins)
      if(currentCoin <= i && keptArr[i - currentCoin] + 1 < minNumOfCoins) {
          console.log('dfasd')
          keptArr[i] = keptArr[i - currentCoin] + 1
      }
    }
  }
  return keptArr
}

// run your function through some test cases here
// remember: debugging is half the battle!
console.log(arrs(10, [1,2]));
//
