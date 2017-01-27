const houzz = (url) => {
  var json = {};
  var newUrl = url.slice(url.indexOf('?') + 1)
  var urlArray = newUrl.split('&')
  for(var i = 0; i < urlArray.length; i++){
    var item = urlArray[i]
    var percentIndex = item.indexOf('%')
    if(percentIndex > -1){
      item = item.slice(0, percentIndex) + decodeURIComponent(item.slice(percentIndex))
    }
    urlArray[i] = item.split('=')
  }
  urlArray.forEach( (tuple) => {
    var key = tuple[0]
    var value = tuple[1]
    if(json[key] && json[key].length === 1){
      json[key] = [[json[key], value]]
    } else if(json[key]){
      json[key].push(value)
    } else {
      json[key] = value
    }
  })   
  return json
}

console.log(houzz('http://www.houzz.com/emerson?foo=1&bar=2&foo=3&decipher=zzno%C9%A5'))
 
