// Bonfire: Search and Replace
// Author: @corynorris
// Challenge: http://www.freecodecamp.com/challenges/bonfire-search-and-replace
// Learn to Code at Free Code Camp (www.freecodecamp.com)

function myReplace(str, before, after) {
  
  if (before[0] == before[0].toUpperCase()) {
    after = after[0].toUpperCase() + after.slice(1); 
  }
  
  // This situation is actually not tested for
  if (before[0] == before[0].toLowerCase()) {
    after = after[0].toLowerCase() + after.slice(1); 
  }
  
  
 return str.replace(before, after);
}

myReplace("He is Sleeping on the couch", "Sleeping", "sitting")