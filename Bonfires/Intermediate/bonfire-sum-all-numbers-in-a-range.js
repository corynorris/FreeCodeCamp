// Bonfire: Sum All Numbers in a Range
// Author: @corynorris
// Challenge: http://www.freecodecamp.com/challenges/bonfire-sum-all-numbers-in-a-range
// Learn to Code at Free Code Camp (www.freecodecamp.com)

function sumAll(arr) {
  
  var sum = 0;
  
  for(var i = Math.min(arr[0], arr[1]);
       i<=Math.max(arr[0],arr[1]); i++) {
      sum+=i;
  }
  
  return sum;
}

sumAll([1, 4]);