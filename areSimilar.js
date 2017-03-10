function areSimilar(A, B) {
    if(A.length !== B.length){
        return false
    }
    var fA, fB
    for(var i = 0; i < A.length; i++){
        if(A[i] !== B[i]){
            var misMatch = i
            i = Infinity;
        }
    }
    for(var j = A.length -1; j >= 0; j--){
        if(A[j] !== B[j]){
            if(A[misMatch] === B[j] && B[misMatch] === A[j]){
                var temp = B[misMatch]
                B[misMatch] = B[j]
                B[j] = temp
            }else {
                return false
            }
        }
    }
    for(var x = 0; x < A.length; x++){
        if(A[x] !== B[x]){
            return false
        }
    }
    return true
}
