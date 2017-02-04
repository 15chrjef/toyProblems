//iterate through strings and console .log 1 for strings for an entirely matched string and 0 for a string not entirely matched
const matchingBraces = (strings) => {
  var openers = ['{', '[', '('];
  var closers = [ '}', ']', ')'];
  strings.forEach(string => {
    var open = [];
    var close = [];
    for(var i = 0; i < string.length; i++){
      var character = string[i];
      if(openers.indexOf(character) > -1) {
        open.push(character)
      } else if( closers.indexOf(character) > -1 ) {
          if(openers.indexOf(open[open.length - 1]) === closers.indexOf(character)){
            open.pop()
            if(i === string.length - 1) {
              console.log(1)
            }
          } else {
            console.log(0)
            i = string.length;
          }
      }
    }
  })
}
matchingBraces([ ')(){}', '[]({})', ' ([])', '{()[]}', '([)]' ])
