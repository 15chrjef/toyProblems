function tvCommands(title, gridWidth){
  var lets = 'abcdefghijklmnopqrstuvwxyz'
  var cur = 'a'
  var commands = ''
  function getCurIndex(char){
    return lets.indexOf(char)
  }
  for(var i = 0; i < title.length; i++){
    var target = title[i];
    while(cur !== target){
      //cur is behind/above target
      if(cur < target){
        //move down row if the target is more than a row away
        while(getCurIndex(cur) + gridWidth <= getCurIndex(target)){
          cur = lets[getCurIndex(cur) + gridWidth]
          commands += 'd'
          console.log('cur', cur)
        }
        //move right column if target is less than row away
        while(cur < target){
          cur = lets[getCurIndex(cur) + 1]
          console.log(cur)
          commands += 'r'
        }
        //cur is in front of/below target
      }else if(cur > target){
        //moving up/left
        //move up row if the target is more than a row away
        while(getCurIndex(cur) >= getCurIndex(target) + gridWidth){
          cur = lets[getCurIndex(cur) - gridWidth]
          commands += 'u'
        }
        //move left column if target is less than row away
        while(cur > target ){
          cur = lets[getCurIndex(cur) - 1]
          commands += 'l'
        }
      }
    }
    commands += '!'
  }
  return commands
}
/*
A B C D E F G H I J
K L M N O P Q R S T 
U V W X Y Z
*/
tvCommands('ef', 10) //'rrrr!r!'

/*
A B C D E
F G H I J
K L M N O
P Q R S T 
U V W X Y
Z
*/
tvCommands('ef', 5) //'rrrr!r!'

/*
A B C D E
F G H I J
K L M N O
P Q R S T 
U V W X Y
Z
*/

tvCommands('up', 5) //'dddd!u!'

tvCommands('ze', 5) //=> 'ddddd!uuuul!'


