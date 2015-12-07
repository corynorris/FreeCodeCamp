// Bonfire: Reverse a String
// Author: @corynorris
// Challenge: http://www.freecodecamp.com/challenges/bonfire-reverse-a-string
// Learn to Code at Free Code Camp (www.freecodecamp.com)

function reverseString(str) {
  return str.split('').reverse().join('');
}

reverseString("hello");