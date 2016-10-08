/**
 * Create a hash table with `insert()`, `retrieve()`, and `remove()` methods.
 * Be sure to handle hashing collisions correctly.
 * Set your hash table up to double the storage limit as
 * soon as the total number of items stored is greater than
 * 3/4th of the number of slots in the storage array.
 * Resize by half whenever utilization drops below 1/4.
 */

// This is a "hashing function". You don't need to worry about it, just use it
// to turn any string into an integer that is well-distributed between
// 0 and max - 1
var getIndexBelowMaxForKey = function(str, max) {
  var hash = 0;
  for (var i = 0; i < str.length; i++) {
    hash = (hash << 5) + hash + str.charCodeAt(i);
    hash = hash & hash; // Convert to 32bit integer
    hash = Math.abs(hash);
  }
  return hash % max;
};

var makeHashTable = function() {
  var result = {};
  var storage = [];
  var storageLimit = 4;
  var size = 0;
  var upper = .75;
  var lower = .25;
  
  result.insert = function(key, val) {
    var index = getIndexBelowMaxForKey(key, storageLimit);
    // TODO: implement `insert`
    //increment size
    //if the position of the index is not existant
    if(storage[index] === undefined){
      // push a bucket and a tuple
      storage[index] = [[key, val]]
      size++;
    }
    //else
    else{
      //if the bucket containts the exact key in a tuple, 
      for( var i = 0; i < storage[index].length; i++){
          if(storage[index][i][0] === key){
            //override the tuple
            storage[index][i] = [key, val];
          }
      }
      //else 
      else{
        //push the tuple into the bucket
        storage[index].push([key,val])
        size++;
      }
    }    
  };

  result.retrieve = function(key) {
    var index = getIndexBelowMaxForKey(key, storageLimit);
    //look up storage with index
    if(storage[index] !== undefined){
      //iterate through bucket
      for(i = 0; i < storage[index].length; i++ ){
        //if we find the key of the tuple
        if(storage[index][i][0] === key){
          //return the tuple
          return storage[index][i][1];
        }
      }
    }
  };

  result.remove = function(key) {
    var index = getIndexBelowMaxForKey(key, storageLimit);
    // TODO: implement `remove`
    //decrement size
    //if the bucket exitsts
      if(storage[index] !== undefined){
        //loop through the bucket
          for(var i = 0; i < storage[index].length; i++){
             //if the tuple exists
             if(storage[index][i][0] === key){
              //remove the tuple
                storage[index] = storage[index].filter(function(tuple){
                  return tuple[0] !== key;
                })
                size--;
             }
              
          }
      }
      
  };

  return result;
};
