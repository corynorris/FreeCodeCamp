// Bonfire: Factorialize a Number
// Author: @corynorris
// Challenge: http://www.freecodecamp.com/challenges/bonfire-factorialize-a-number#
// Learn to Code at Free Code Camp (www.freecodecamp.com)

function factorialize(num) {
  var ans = 1;
  for (var start = 1; start <= num; start++) {
    ans =ans * start;
  }
  return ans;
}

factorialize(5);