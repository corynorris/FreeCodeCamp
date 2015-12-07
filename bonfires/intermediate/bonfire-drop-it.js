// Bonfire: Drop it
// Author: @corynorris
// Challenge: http://www.freecodecamp.com/challenges/bonfire-drop-it#
// Learn to Code at Free Code Camp (www.freecodecamp.com)

function drop(arr, func) {

  
  while (!func(arr[0])) {
    arr.shift();
  }
  
  // Drop them elements.
  return arr;
}

drop([1, 2, 3], function(n) {return n < 3; });