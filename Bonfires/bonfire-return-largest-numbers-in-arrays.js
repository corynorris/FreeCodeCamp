// Bonfire: Return Largest Numbers in Arrays
// Author: @corynorris
// Challenge: http://www.freecodecamp.com/challenges/bonfire-return-largest-numbers-in-arrays#
// Learn to Code at Free Code Camp (www.freecodecamp.com)

function largestNumberInArray(array) {
  return array.sort(function (prev, cur) {
    return prev < cur;
  })[0];
}

function largestOfFour(arr) {
  // He he he heeh
  var largestArr = [];
  for (var cur = 0; cur < arr.length; cur++) {
    largestArr.push(largestNumberInArray(arr[cur]));
  }
  return largestArr;
}

largestOfFour([[4, 5, 1, 3], [13, 27, 18, 26], [32, 35, 37, 39], [1000, 1001, 857, 1]]);