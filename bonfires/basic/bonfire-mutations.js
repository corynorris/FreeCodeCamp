// Bonfire: Mutations
// Author: @corynorris
// Challenge: http://www.freecodecamp.com/challenges/bonfire-mutations#
// Learn to Code at Free Code Camp (www.freecodecamp.com)

function sort(first, second) {
  return first.localeCompare(second);
}

function mutation(arr) {

  // uhh... maybe innefficient?
  var firstWord = arr[0].toLowerCase().split("").sort(sort);
  var secondWord = arr[1].toLowerCase().split("").sort(sort);
  
  console.log(firstWord);
  console.log(secondWord);
  
  var firstWordLetter = 0;
  var secondWordLetter = 0;
  
  while(firstWordLetter < firstWord.length && secondWordLetter < secondWord.length)
    {
      if (firstWord[firstWordLetter] === secondWord[secondWordLetter] )
        {
          console.log("found: " + firstWord[firstWordLetter]);
          secondWordLetter++;
        }
      else {
        firstWordLetter++;
      }
    }
  
  
  
  return secondWordLetter == secondWord.length;
}
console.log("start");
mutation(["zyxwvutsrqponmlkjihgfedcba", "qrstu"]);