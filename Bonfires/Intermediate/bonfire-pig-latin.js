// Bonfire: Pig Latin
// Author: @corynorris
// Challenge: http://www.freecodecamp.com/challenges/bonfire-pig-latin
// Learn to Code at Free Code Camp (www.freecodecamp.com)

function translate(str) {
 
  // if it begins with a vowel, ad "way"  
  var vowel = /[aeoiu]/i;  
  if (vowel.test(str[0])) {
    return str+"way";
  }
  
  
  // if it begins with a consonant cluster, take that cluster move it to the end, and suffix ay 
  var consonants = /[^aeiou]+/i;
  var consonantCluster = str.match(consonants)[0];  
  return str.slice(consonantCluster.length) + consonantCluster + "ay";
  
  }

translate("glove");