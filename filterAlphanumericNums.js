const chooseNumber = (digit, counter) => {
  if(digit > 1 && digit < 10){
      var letters = mapping[digit];
      listOfWords = listOfWords.filter((word) => {
          var flag = false;
          for(var i = 0; i < letters.length; i++) {
            if(word[counter] === letters[i]){
              flag = true;
            }
          }
          return flag
      })
  }
  counter++;
}

const fullInput = (myInput) => {
  var listOfWords = ['cat', 'cab', 'abacus', 'at', 'cat', 'cars', 'carts', 'aardvark', 'zoo', 'hat']; // maybe make object oriented
  var mapping = ["", "", "abc", "def", "ghi", "jkl", "mno", "pqrs", "tuv", "wxyz"]; // move into chooseNumber
  var counter = 0;
  
  myInput.split('').forEach((number) => {
    chooseNumber(Number(number), counter)
  })
  console.log(listOfWords)
  return listOfWords;
}

fullInput("9"); // [ 'zoo' ]
