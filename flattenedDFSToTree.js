var list = [
  {
    title: 'A',
    depth: 0
  },
  {
    title: 'B',
    depth: 1
  },
  {
    title: 'C1',
    depth: 2
  },
  {
    title: 'C2',
    depth: 2
  },
  {
    title: 'D',
    depth: 3
  },
  {
    title: 'E',
    depth: 0
  },
  {
    title: 'F',
    depth: 1
  },
  {
    title: 'G',
    depth: 0
  },
  {
    title: 'H1',
    depth: 1
  },
  {
    title: 'H2',
    depth: 1
  },
  {
    title: 'I',
    depth: 2
  }
];


function listToTree(list) {
  //full branch that we push to our array of trees arr
  var superParent = list[0];
  //branch of current parent at traversal point;
  var tempParent = list[0];
  //array that full branches are pushed to
  var arr = [];
  for(var i = 1; i < list.length; i++) {
    var currentNode = list[i];
    //if the current node is a root
    if(currentNode.depth === 0) {
      //add our completed branch to the full branch array
      arr.push(superParent);
      //set the master parentpointer and traversal parentpointer to our new root
      tempParent = currentNode
      superParent = currentNode
    } else {
      //if our currentNode is not a child of our traversal parent
      if(currentNode.depth - tempParent.depth !== 1){
        //make the most recently added child the parent of our currentNode
        tempParent = tempParent.children[tempParent.children.length -1]
      }
      //if our traversal parent has other children
      if(tempParent.children){
        //add currentNode to parent's children array
        tempParent.children.push(currentNode)
      } else {
        //create a children property on our parent with currentNode as the only index
        tempParent.children = [currentNode];
      } 
      //if we are at the last point in our initial nodelist add our branch to the completed branch array
      if( i === list.length - 1) {
      arr.push(superParent)
      }
    }
  } 
  console.log(JSON.stringify(arr))
  return arr
}

listToTree(list)
// https://repl.it/Fchl
