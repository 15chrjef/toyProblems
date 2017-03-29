function sum(num1, num2){
  if(arguments.length === 2){
    return num1 + num2
  }else {
    return function(x){
      return function(y){
        return sum(sum(x,num1), y)
      }
    }
  }
}

sum(5)(4)(3)//12
https://repl.it/Gj6U

