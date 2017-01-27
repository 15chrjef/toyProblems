var Tree = function(value) {
  this.value = value
  this.children = []
  this.predecessor = null;
}

Tree.prototype.addChild = function(value) {
  var child = new Tree(value)
  this.children.push(child)
}



var root = new Tree(0)

root.addChild(1)
root.addChild(2)
root.addChild(3)
root.addChild(4)


root.children[0].addChild(5)
root.children[1].addChild(6)
root.children[2].addChild(7)
root.children[3].addChild(8)

Tree.prototype.bfs = function(value) {
  var queue = [root];
  while(queue.length > 0) {
    if(current && current.value === value) {
      queue = [];
      continue;
    }
    var current = queue.shift();
    console.log('current', current.value)
    current.children.forEach((child) => {
      queue.push(child)
      child.predecessor = current;
    })
  }
  if(current && current.value !== value) {
    return false;
  }
  var depths = 0;
  while(current.value !== root.value) {
    depths ++;
    current = current.predecessor
  }
  return depths;
}

console.log(root.bfs(5))//2
