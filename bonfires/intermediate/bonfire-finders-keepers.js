// Bonfire: Finders Keepers
// Author: @corynorris
// Challenge: http://www.freecodecamp.com/challenges/bonfire-finders-keepers#
// Learn to Code at Free Code Camp (www.freecodecamp.com)

function find(arr, func) {
  return arr.filter(func)[0];
}

find([1, 2, 3, 4], function(num){ return num % 2 === 0; });