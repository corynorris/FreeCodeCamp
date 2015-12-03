// Bonfire: Confirm the Ending
// Author: @corynorris
// Challenge: http://www.freecodecamp.com/challenges/bonfire-confirm-the-ending#
// Learn to Code at Free Code Camp (www.freecodecamp.com)

function end(str, target) {
  // check if str ends with target
  return str.substr(str.length - target.length) === target;
}

end("Bastian", "n");