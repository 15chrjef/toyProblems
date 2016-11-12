/**
 *  
 *  A robot located at the top left corner of a 5x5 grid is trying to reach the 
 *  bottom right corner. The robot can move either up, down, left, or right, 
 *  but cannot visit the same spot twice. How many possible unique paths are 
 *  there to the bottom right corner? 
 *  
 *  make your solution work for a grid of any size.
 *
 */

// A Board class will be useful

var makeBoard = function(n) {
  var board = [];
  for (var i = 0; i < n; i++) {
    board.push([]);
    for (var j = 0; j < n; j++) {
      board[i].push(false);
    }
  }
  board.togglePiece = function(i, j) {
    this[i][j] = !this[i][j];
  };
  board.hasBeenVisited = function(i, j) {
    return !!this[i][j];
  };
  return board;
};

var robotPaths = function(n, board, i, j, counter) {
  counter = counter || 0;
  i = i || 0;
  j = j || 0;
  //if the robothas gotten to the bottom right corner return counter +1
  if ( i === n - 1 && j === n - 1) {
    return counter + 1;
  }
  board.togglePiece(i, j);
  //iterate over all possible options(l,r,u,d)
      if (i + 1 < n && board[i + 1][j] === false) {
        counter += robotPaths(n, board, i + 1, j);      
      }
 
      if (i - 1 >= 0 && board[i + -1][j] === false) {
        counter += robotPaths(n, board, i - 1, j);      
      }

      if (j + 1 < n && board[i][j + 1] === false) {
        counter += robotPaths(n, board, i, j + 1);      
      }
   
      if (j - 1 >= 0 && board[i][j - 1] === false) {
        counter += robotPaths(n, board, i, j -1);      
      }

  //write cases for l,r,u,d respectively
  //if there is a space available by moving in that direction move
  //call the function
  board.togglePiece(i, j);
  return counter;
};

robotPaths(5, makeBoard(5))
