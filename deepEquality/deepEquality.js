
var deepEquals = function(apple, orange) {
  if (typeof apple === 'object' && typeof orange === 'object') {
    var apples = Object.values(apple);
    var oranges = Object.values(orange);
    console.log(apples, oranges)
    var equals = true;
    apples.forEach(function(apple, i) {
      console.log('forEaching', apples[i], oranges[i], i)
        if (typeof apples[i] ==='object' && typeof oranges[i]=== 'object') {
          console.log('objects')
          console.log('deepply equeling',deepEquals(apples[i], oranges[i]))
          if(!deepEquals(apples[i], oranges[i])){
            console.log('children',apple[i], orange[i], i)
            equals = false;
          }
        }else if ( apples[i] !== oranges[i]) {
        equals = false
      }
    });
    console.log(equals)
    return equals;
  }
  return false
};