//call the bind method on it

//write a bind Function
Function.prototype.bind = function(context) {
  //take a function
  var assignedFunction = this;
  var boundArguments = Array.prototype.slice.call(arguments, 1)
  //return a function that when invoked returns the initial function with a specific context applied to it
  return function(){ 
    return assignedFunction.apply(context, boundArguments)
  }
}

var returnTheFoo = function() {
  return this.foo;
}

var obj = {
  foo: 1
}

returnTheFoo.bind(obj)()
