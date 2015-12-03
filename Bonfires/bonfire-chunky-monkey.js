// Bonfire: Chunky Monkey
// Author: @corynorris
// Challenge: http://www.freecodecamp.com/challenges/bonfire-chunky-monkey#
// Learn to Code at Free Code Camp (www.freecodecamp.com)

function chunk(arr, size) {
  var ans  = [];
  var numChunks = Math.ceil(arr.length  / size);
  
  for (var chunks = 0; chunks < numChunks; chunks++)
    {
      ans.push(arr.slice(chunks*size, chunks*size+size));
    }
  
  return ans;
}

chunk(["a", "b", "c", "d"], 2);