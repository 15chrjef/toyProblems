//find the quanity of perfect square numbers between a and b in sqrt(n) time
function solution(A, B) {
    // write your code in JavaScript (Node.js 6.4.0)
    var squareRoots = 0;
    var start = Math.floor(Math.sqrt(A))
    var end = Math.floor(Math.sqrt(B))
    for(var i = start; i<= end; i++){
       squareRoots ++
    }
    return squareRoots;
}
