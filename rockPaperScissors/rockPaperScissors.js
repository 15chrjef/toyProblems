/*
* Write a function that generates every sequence of throws a single
* player could throw over a three-round game of rock-paper-scissors.
*
* Your output should look something like:
*   [["rock", "rock", "rock"],
*    ["rock", "rock", "paper"],
*    ["rock", "rock", "scissors"],
*    ["rock", "paper", "rock"],
             ...etc...
     ]
*
* Extra credit:
*   - Make your function return answers for any number of rounds.
* Example:
* rockPaperScissors(5); // => [['rock', 'rock', 'rock', 'rock', 'rock'], etc...]
*
*/
debugger
var rockPaperScissors = function (limit) {
  // TODO: your solution here
  var possibilities = ['rock','paper','scissors']

  var arr = [];
    function shoot(limit, result){
      if(limit === 0){
        arr.push(result)
        return ''
      }
      for(var i = 0; i < possibilities.length; i++){
        shoot((limit - 1), result.concat(possibilities[i]))
      }
    }
        


  shoot(limit,[])
  return arr;
}

console.log(rockPaperScissors(3))