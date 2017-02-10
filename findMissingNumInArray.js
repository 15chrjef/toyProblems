// you can write to stdout for debugging purposes, e.g.
// console.log('this is a debug message');

function solution(A) {
    // write your code in JavaScript (Node.js 6.4.0)
    if(A.length === 0){
        return 1
    }
    var sum = 0
    for(var i = 1; i <= A.length + 1; i++){
        sum += i;
    }
    var fakeSum = A.reduce((initial, cur) => initial += cur, 0)
    return (sum - fakeSum)
}
