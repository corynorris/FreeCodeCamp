// Bonfire: Repeat a string repeat a string
// Author: @corynorris
// Challenge: http://www.freecodecamp.com/challenges/bonfire-repeat-a-string-repeat-a-string#
// Learn to Code at Free Code Camp (www.freecodecamp.com)

function repeat(str, num) {
  // repeat str for 'num' times
  var result = "";

  while (  num > 0 ) {
    result = result.concat(str);
    num--;
  }

  return result; 
}


repeat("abc", 3);