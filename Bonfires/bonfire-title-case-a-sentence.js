// Bonfire: Title Case a Sentence
// Author: @corynorris
// Challenge: http://www.freecodecamp.com/challenges/bonfire-title-case-a-sentence#
// Learn to Code at Free Code Camp (www.freecodecamp.com)

function titleCase(str) {
  return str.toLowerCase().split(' ').map(function(val) {
    return val.charAt(0).toUpperCase() + val.substr(1);
  }).join(' ');
}

titleCase("I'm a little tea pot");