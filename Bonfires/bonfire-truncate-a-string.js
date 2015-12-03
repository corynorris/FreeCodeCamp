// Bonfire: Truncate a string
// Author: @corynorris
// Challenge: http://www.freecodecamp.com/challenges/bonfire-truncate-a-string#
// Learn to Code at Free Code Camp (www.freecodecamp.com)

function truncate(str, num) {
  // Clear out that junk in your trunk
  if (num >= str.length) {
    return str;
  }
  
  if (num <= 3) {
    return str.slice(0,num).concat("...")
  }
  
  return str.slice(0,num-3).concat("...");
}

truncate("A-tisket a-tasket A green and yellow basket", 11);