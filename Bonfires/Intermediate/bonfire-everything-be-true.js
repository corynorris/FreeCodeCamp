// Bonfire: Everything Be True
// Author: @corynorris
// Challenge: http://www.freecodecamp.com/challenges/bonfire-everything-be-true#
// Learn to Code at Free Code Camp (www.freecodecamp.com)

function where(collection, source) {

    var ans = [];


    for (var i = 0; i < collection.length; i++) {

      
        var sourceKeys = Object.keys(source);
        var allEqual = true;
      
      
        // Check all keys from the source object
        for (var t = 0; t < sourceKeys.length; t++) {

            var key = sourceKeys[t];
            
            if (!collection[i].hasOwnProperty(key) || 
                   collection[i][key] !== source[key]) {
              allEqual = false;
            }
          
        }

        if (allEqual) {
            ans.push(collection[i]);

        }
    }


    // What's in a name?
    return ans;
}

function every(collection, pre) {
  
  // Is everyone being true?
  return collection.reduce(function(prev, cur) {
  

    if (cur[pre]) {
      return prev && true;
    } else {
      return false;
    }
    
  }, true);
}

every([{"user": "Tinky-Winky", "sex": "male"}, {"user": "Dipsy", "sex": "male"}, {"user": "Laa-Laa", "sex": "female"}, {"user": "Po", "sex": "female"}], "sex");