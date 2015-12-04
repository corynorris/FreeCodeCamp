// Bonfire: Find the Longest Word in a String
// Author: @corynorris
// Challenge: http://www.freecodecamp.com/challenges/bonfire-find-the-longest-word-in-a-string#
// Learn to Code at Free Code Camp (www.freecodecamp.com)

function findLongestWord(str) {
  var words = str.split(" ");
  var longest = 0;
  for (var curWord = 0; curWord < words.length; curWord++ )
    {
      if (words[curWord].length > longest)
        { 
          longest = words[curWord].length
        }
    }
  return longest;
}

findLongestWord("The quick brown fox jumped over the lazy dog");