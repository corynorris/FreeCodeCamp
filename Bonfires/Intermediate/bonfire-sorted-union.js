// Bonfire: Sorted Union
// Author: @corynorris
// Challenge: http://www.freecodecamp.com/challenges/bonfire-sorted-union#
// Learn to Code at Free Code Camp (www.freecodecamp.com)

function unite() {

  // for each array, check the value agains the other arrays
  var answer = [];
  for (var i = 0; i < arguments.length; i++)
    {
      for (var t = 0; t < arguments[i].length; t++)
        {
          if (answer.indexOf(arguments[i][t]) < 0) {
            answer.push(arguments[i][t]);
          }
        }
    }
  
  return answer;
}

unite([1, 3, 2], [5, 2, 1, 4], [2, 1]);