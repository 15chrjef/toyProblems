//iterate through two arrays and console log for 1 for every anagram match and a 0 for every failed anagram
const anagram = (wordList1, wordList2) => {
  var count = 0;
  wordList1.forEach((word, x) => {
    var obj = {};
    for(var i = 0; i < word.length ; i++) {
      if(obj[word[i]]) {
        obj[word[i]].push('0');
      }
      obj[word[i]] = ['0'];
    }
    for(var j = 0; j < wordList2[x].length; j++) {
      if(obj[wordList2[x][j]] && wordList2[x].length === wordList1[x].length){
        if(obj[wordList2[x][j]].length > 1) {
          obj[wordList2[x][j]].pop()
        } else {
          delete obj[wordList2[x][j]]
        }
        if(j === wordList2[x].length - 1) {
          console.log(1);
        }
      } else {
        console.log(0);
        j = wordList2[x].length;
      }
    }
  })
}

var words1 = ['cinema','host','aba', 'train'];
var words2 = ['iceman','shot', 'bab', 'rain']
anagram(words1, words2)
