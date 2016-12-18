 var Stack = function() {
    this.storage = {};
    this.count = 0;
  };
  // add an item to the top of the stack
  Stack.prototype.push = function(value) {
    this.storage[this.count++] = value;
  };

  // remove an item from the top of the stack
  Stack.prototype.pop = function() {
    if (this.size() > 0) {
      return this.storage[--this.count];
    }
  };

  // return the number of items in the stack
  Stack.prototype.size = function() {
    return this.count;
  };


  var Queue = function() {
    // Use two `stack` instances to implement your `queue` Class
    this.inbox = new Stack();
    this.outbox = new Stack();
  };
  // called to add an item to the `queue`
  Queue.prototype.enqueue = function(value) {
    if (this.outbox.size() === 0) {
      this.outbox.push(value);
    } else {
      this.inbox.push(value);
    }
    // TODO: implement `enqueue`
  };

  // called to remove an item from the `queue`
  Queue.prototype.dequeue = function() {
    var popped = this.outbox.pop();
    if (this.inbox.size() === 1) {
      var newToPop = this.inbox.pop();
      this.outbox.push(newToPop);
    } else {
      while (this.inbox.size() > 1) {
        var transfer = this.inbox.pop();
        this.outbox.push(transfer);
      }
      var tempOut = this.outbox;
      this.outbox = this.inbox;
      this.inbox = tempOut;
    }
    return popped;
  };

  // should return the number of items in the queue
  Queue.prototype.size = function() {
    return this.inbox.size() + this.outbox.size();
  };


