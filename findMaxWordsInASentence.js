//parse the test for sentences(.,?,!) then count words in each sentence and return the max words
function solution(S) {
    // write your code in JavaScript (Node.js 6.4.0)
    var letters = 'qwertyuiopasdfghjklzxcvbnm'
    var sentences = S.split(/[\\.!\?]/)
    var maxWordsInSentence = 0;
    for(var i = 0; i < sentences.length; i++) {
        var sentence = sentences[i].split(' ')
        var words = 0;
        for(var j = 0; j < sentence.length; j++){
            var word = sentence[j]
            for(var x = 0; x < word.length; x++){
                if(letters.indexOf(word[x]) > -1){
                    x = word.length;
                    words ++;
                }
            }
        }
        if(words > maxWordsInSentence){
            maxWordsInSentence = words;
        }
    }
    return maxWordsInSentence
}
