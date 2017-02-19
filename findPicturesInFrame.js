var image = [
  [1, 1, 1, 1, 1, 1, 1],
  [1, 1, 1, 1, 1, 1, 1],
  [1, 1, 1, 0, 0, 0, 1],
  [1, 0, 1, 0, 0, 0, 1],
  [1, 0, 1, 1, 1, 1, 1],
  [1, 0, 1, 0, 0, 1, 1],
  [1, 1, 1, 0, 0, 1, 1],
  [1, 1, 1, 1, 1, 1, 1],
];


/* 
Imagine we have an image. We’ll represent this image as a simple 2D array where every pixel is a 1 or a 0. 

The image you get is known to have N rectangles of 0s on a background of 1s. Write a function that takes in the image and outputs the coordinates of all the 0 rectangles -- top-left and bottom-right; or top-left, width and height.
 */
 
 
const helperTest = (i, j) => {
  if( image[i][j] === 0 && (i === image.length -1 || image[i+1][j] === 1) && (j === image[0].length - 1 || image[i][j+1] === 1) ){
        return true
      }
  return false
}

const helper = (obj, topLeft, i, j) => {
  if(image[i][j+1] === 0 && obj[`${i}${j + 1}`] === undefined){
    obj[`${i}${j + 1}`] = true;
    if(helperTest(i, j + 1)){
      return [[topLeft, [i,j + 1]], obj]
    } else {
      return helper(obj, topLeft, i, j + 1)
    }
  }
  if(image[i+ 1][j] === 0 && obj[`${i + 1}${j}`] === undefined){
    obj[`${i + 1}${j}`] = true;
    if(helperTest(i + 1, j)){

      return [[topLeft, [i + 1,j]], obj]
    } else {
      return helper(obj, topLeft, i + 1, j)
    }
  }
}

function findPic(){
  var obj = {}
  var pictures = [];
  for(var i = 0; i < image.length; i++){
    for(var j = 0; j < image[0].length; j++){
      console.log(obj)
      if(image[i][j] === 0 && obj[`${i}${j}`] === undefined){
        var returnedImage = helper(obj, [i,j], i, j)
        if(returnedImage){
          pictures.push(returnedImage[0]) 
        }
      }
    }
  }
  return pictures
}

console.log(findPic())
/*
[ [ [ 2, 3 ], [ 3, 5 ] ],
  [ [ 3, 1 ], [ 5, 1 ] ],
  [ [ 5, 3 ], [ 6, 4 ] ] ]
*/
