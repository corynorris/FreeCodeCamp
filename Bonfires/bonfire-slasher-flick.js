// Bonfire: Slasher Flick
// Author: @corynorris
// Challenge: http://www.freecodecamp.com/challenges/bonfire-slasher-flick#
// Learn to Code at Free Code Camp (www.freecodecamp.com)

function slasher(arr, howMany) {
  // it doesn't always pay to be first
  return arr.slice(howMany, arr.length);
}

slasher([1, 2, 3], 2);