/*
 * Implement a linked list using the pseudoclassical instantiation pattern.
 *
 * Your linked list should have methods called "addToTail", "removeHead", and "contains."
 *
 */

// EXAMPLE USAGE:
// var list = new LinkedList();
// list.tail;         //yields 'null'
// list.addToTail(4);
// list.addToTail(5);
// list.head.value;   //yields '4';
// list.contains(5);  //yields 'true';
// list.contains(6);  //yields 'false';
// list.removeHead(); //yields '4'
// list.tail.value;   //yields '5';


var LinkedList = function() {
  this.tail = null;
  this.head = null;
};

//write methods here!

LinkedList.prototype.addToTail = function(value
) {
  var nodey = this.makeNode(value);
  if (!this.tail) {
    this.tail = nodey;
    this.head = nodey;
  }
  else {
    this.tail.next = nodey;
    this.tail = nodey;
  }
};

LinkedList.prototype.removeHead = function() {
  if (this.head) {
    var tempHead = this.head.value;
    this.head.next = this.head;
    return tempHead;
  }
  return null;
};

LinkedList.prototype.contains = function(val
) {
    var myNode = this.head;
    while (myNode) {
      if (myNode.value === val) {
        return true;
      } else {
        myNode = myNode.next;
      }
    }
  return false;
};

LinkedList.prototype.makeNode = function(value
) {
  var node = {
    next: null,
    value: value
  };
  return node;
};
