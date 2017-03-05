function rollingString(s, operations) {
  console.log(s, operations)
  var chars = 'abcdefghijklmnopqrstuvwxyz'
  operations.forEach((o) => {
    o = o.split(' ')
    var start = Number(o[0])
    var end = Number(o[1]) + 1
    var type = o[2] 
    var newStr = s.split('')
    var subStr = newStr.slice(start, end)
    subStr = subStr.map((char) => {
      var index = chars.indexOf(char)
      if(type === 'L'){
        if(char === 'a'){
          return 'z'
        }else {
          return chars[index - 1]
        }
      }else {
        if(char === 'z'){
          return 'a'
        }else {
          return chars[index + 1]
        }
      }
    })
    newStr = newStr.slice(0,start).concat(subStr).concat(newStr.slice(end)).join('')
    s = newStr
  })
  return s
}
