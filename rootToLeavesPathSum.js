// Definition for a  binary tree node
//			function TreeNode(data){
//				this.data = data
//				this.left = null
//				this.right = null
//			}

module.exports = { 
	//param A : root node of tree
	//param B : integer
	//return a array of array of integers
	pathSum : function(A, B){
	    //arr
	    var masterArr = []
        //create subroutine that takes cur path sum
        function subRoutine(cur, path, sum){
            //add cur to path
            path.push(cur.data)
            //add cur to sum
            sum += cur.data
            //if sum === B
            if(sum === B){
                //push path to arr
                if(!cur.left && !cur.right){
                    masterArr.push(path)
                }
            }
            //if cur.left
            if(cur.left){
                // call subRoutine with cur.left, newPath, newSum
                subRoutine(cur.left, path.slice(), sum)
            }
            //if cur.right
            if(cur.right){
                //call subRoutine with cur.right, newPath, newSum
                subRoutine(cur.right, path.slice(), sum)
            }
        }
        //cal subroutine with root [] and 0 as args
        subRoutine(A, [], 0)
        return masterArr
	}
};
