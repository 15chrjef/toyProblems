//create a queue with one stack, and with using only push and pop array methods

var Queue = function() {
  this.storage = [];
}

Queue.prototype.dequeue = function() {
  return this.storage.pop();
}

Queue.prototype.isEmpty = function() {
  return this.storage[0] === undefined
}

Queue.prototype.enqueue = function(obj) {
  var st = this.storage;
  if(this.isEmpty()) {
    return st.push(obj);
  }
  const heldItem = this.dequeue();
  this.enqueue(obj)
  st.push(heldItem)
}


var queue = new Queue();
// console.log(queue.isEmpty())
queue.enqueue(0)
queue.enqueue(1)
queue.enqueue(2)
queue.enqueue(3)
queue.enqueue(4)
queue.enqueue(5)
console.log(queue.storage)//[ 5, 4, 3, 2, 1, 0 ]
