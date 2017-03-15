function Node(data, left, right) { 
    this.data = data; 
    this.left = left; 
    this.right = right; 
} 

/*    10
  12      15
25  30  36  50
25-12-30-10-36-15-50
*/

var root = new Node(10);
root.left = new Node(12);
root.left.left = new Node(25);
root.left.right = new Node(30);
root.right = new Node(15);
root.right.left = new Node(36);
root.right.right = new Node(50);
var flattenTree = function(node){
    // if left child
    if(!node || !node.data){
      return false
    }
    var left = node
    var right = node
    if(node.left){
        left = flattenTree(node.left)
        left[1].right = node
        node.left = left[1]
        left = left[0]
    }
    if(node.right){
      right = flattenTree(node.right)
      node.right = right[0]
      right[0].left = node
      right = right[1]
    }
    return [left, right]
}
console.log(flattenTree(root))
