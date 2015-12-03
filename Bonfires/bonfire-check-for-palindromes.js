// Bonfire: Check for Palindromes
// Author: @corynorris
// Challenge: http://www.freecodecamp.com/challenges/bonfire-check-for-palindromes#
// Learn to Code at Free Code Camp (www.freecodecamp.com)

function reverse(str) {
  return str.split('').reverse().join('');
}

function palindrome(str) {
  // \W replace non word characters
  // \s replace space characters
  // /g global, not just first instance
  //
  str = str.toLowerCase().replace(/[\W\s_]/g, '');
  return str == reverse(str);
}



"0_0 (: /-\ :) 0-0".toLowerCase().replace(/[\W\s]/g, '');