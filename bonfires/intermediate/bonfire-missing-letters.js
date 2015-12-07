// Bonfire: Missing letters
// Author: @corynorris
// Challenge: http://www.freecodecamp.com/challenges/bonfire-missing-letters
// Learn to Code at Free Code Camp (www.freecodecamp.com)

function fearNotLetter(str) {
  
  var prevVal = str.charCodeAt(0);
  for (var i = 1; i < str.length; i++) 
  {
    if (++prevVal !== str.charCodeAt(i)) {
      return String.fromCharCode(prevVal);
    }
  }
  return undefined;
}

fearNotLetter("abce");