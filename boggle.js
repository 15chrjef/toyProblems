var input = ["GEEKS", "FOR", "QUIZ", "GO", 'hello', 'hi', 'food', 'boo', 'jeff', 'mom', 'dad', 'bro','dude']
//geeks quiz mom bro boo hi
var maze = [['G','I','Z','b'],
           ['U','E','K', "o"],
           ['Q','o','E', 'o'],
           ['m','S','m', 'h'],
           ['b','r','o', 'i'],
           ['f','o','o', 'd']];


function boggleIt(dic, letters){
  var masterWords = []
  
  function filterWords(words, cur){
    return words.filter((val) =>{
      if(cur.length > val.length){
        return false
      }else {
        if(cur.length > 0){
          for(var i = 0; i < cur.length; i++){
            if(cur[i] !== val[i]){
              return false
            }
          }
          if(cur.length === val.length){
            masterWords.indexOf(cur) === -1 ? masterWords.push(cur) : '';
          }
        }
      }
      return true
    })
  }
  
  
  function togglePiece(i,j, board){
    board = board.slice()
    board[i][j] = 'x'
    return board
  }
  function findWords(row, col, board, words, cur){
    cur = cur === undefined? '' : cur;
    cur += board[row][col]
    words = words === undefined ? dic.slice(): words;
    words = filterWords(words, cur)
    if(row === 5){
    }
    if(words.length > 0){

      var board = togglePiece(i,j, board)
      var l = letters.length
      var w = letters[0].length
      if(col - 1 > -1 && board[row][col -1] !== 'x'){
        findWords(row, col-1, board.slice(), words.slice(), cur)
      }
      if(col + 1 < w && board[row][col + 1] !== 'x'){
        newBoard = board.slice()
        newWords = words.slice()
        findWords(row, col+1, newBoard, newWords, cur)
      }
      if(col - 1 > -1 && row - 1 > -1 && board[row -1][col -1] !== 'x'){
        newBoard = board.slice()
        newWords = words.slice()
        findWords(row-1, col-1, newBoard, newWords, cur)
      }
      if(row - 1 > -1 && board[row-1][col] !== 'x'){
        newBoard = board.slice()
        newWords = words.slice()
        findWords(row-1, col, newBoard, newWords, cur)
      }
      if(row + 1 < l && board[row+1][col] !== 'x'){
        newBoard = board.slice()
        newWords = words.slice()
        findWords(row+1, col, newBoard, newWords, cur)
      }
      if(col + 1 < w && row + 1 < l && board[row+1][col +1] !== 'x'){
        newBoard = board.slice()
        newWords = words.slice()
        findWords(row+1, col+1, newBoard, newWords, cur)
      }
      if(col - 1 > -1 && row + 1 < l && board[row+1][col -1] !== 'x'){
        newBoard = board.slice()
        newWords = words.slice()
        findWords(row+1, col-1, newBoard, newWords, cur)
      }
      if(col + 1 < w && row - 1 > -1 && board[row-1][col+1] !== 'x'){
        newBoard = board.slice()
        newWords = words.slice()
        findWords(row-1, col+1, newBoard, newWords, cur)
      }
    }
  }
  
  for(var i = 0; i < maze.length; i++){
    for(var j = 0; j < maze[0].length; j++){
      var newBoard = maze.slice()
      findWords(i,j, newBoard)
    }
  }
  return masterWords
}

boggleIt(input, maze)

https://repl.it/GBov/1
