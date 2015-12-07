// Bonfire: Where do I belong
// Author: @corynorris
// Challenge: http://www.freecodecamp.com/challenges/bonfire-where-do-i-belong#
// Learn to Code at Free Code Camp (www.freecodecamp.com)

function where(arr, num) {
  // Sort the array.
  arr.sort(function(a, b) {
    return a > b;
  });
  
  //find the correct index
  for (var index = 0; index < arr.length; index++)
  {
      if(num <= arr[index])
        {
          return index;
        }
  }
  
  return arr.length;
}

where([10, 20, 30, 40, 50], 30);