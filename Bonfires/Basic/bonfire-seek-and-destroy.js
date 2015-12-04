// Bonfire: Seek and Destroy
// Author: @corynorris
// Challenge: http://www.freecodecamp.com/challenges/bonfire-seek-and-destroy#
// Learn to Code at Free Code Camp (www.freecodecamp.com)

function destroyer(arr) {
  // Remove all the values
  

  var seek = Array.prototype.slice.call(arguments, 1, arguments.length);
  
  
  return arr.filter(function (value) {
    
    var accepted = true;    
    
    for (var i = 0; i < seek.length; i++)
    {

      if (value == seek[i]) {
        accepted = false;
      }
    }
    
    return accepted;
    
  });
}

destroyer([1, 2, 3, 1, 2, 3], 2, 3);