// Bonfire: Falsy Bouncer
// Author: @corynorris
// Challenge: http://www.freecodecamp.com/challenges/bonfire-falsy-bouncer#
// Learn to Code at Free Code Camp (www.freecodecamp.com)

function bouncer(arr) {
  // Don't show a false ID to this bouncer.
  return arr.filter(function(val) {
    return Boolean(val) !== false;
  });
}

 bouncer([false, null, 0, NaN, undefined, ""]);