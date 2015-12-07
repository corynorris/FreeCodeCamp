// Bonfire: Diff Two Arrays
// Author: @corynorris
// Challenge: http://www.freecodecamp.com/challenges/bonfire-diff-two-arrays
// Learn to Code at Free Code Camp (www.freecodecamp.com)

/* splice is broken and behaves like slice */
function cuts(arr, val1, val2) {
  return arr.slice(0,val1).concat(arr.slice(val1+val2,arr.length));
}

function cut(arr, val) {
  return arr.slice(0,val).concat(arr.slice(val+1,arr.length));
}

function diff(arr1, arr2) {
  
  for (var i = 0; i < arr1.length; i++) {
    
    var find = arr2.indexOf(arr1[i]);
    
    
    if (find >= 0) {
      arr1 = cut(arr1,i);
      arr2 = cut(arr2,find);
      i--;
    }
  }

  return arr1.concat(arr2);
}

diff([1, 2, 3, 5], [1, 2, 3, 4, 5]);