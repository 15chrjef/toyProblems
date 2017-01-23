/* given an array of numbers find the smallest sum of each sum of pairs in the  array i.e. given an array
of [1,2,3] you would add 1 and 2 and then 3 and 3 for a total of 9 rather than adding 3 and 2 and then 5 and 1 for a total of 11
*/

const smallestSumOfSums = (array) => {
  array = array.sort((a,b) => b < a)
  var sum = 0;
  var latestSum = array.shift() + array.shift();
  sum += latestSum;
  while(array.length > 0) {
    if(array[1] < latestSum){
      array.push(latestSum)
      array = array.sort((a,b) => b < a)
      latestSum = array.shift() + array.shift();
    } else {
      latestSum = array.shift() + latestSum;
    }
    sum += latestSum;
  }
  return(sum)
}

const myArr = [3,4,5,1,2,6,7,10]

smallestSumOfSums(myArr)
