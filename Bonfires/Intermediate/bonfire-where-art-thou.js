// Bonfire: Where art thou
// Author: @corynorris
// Challenge: http://www.freecodecamp.com/challenges/bonfire-where-art-thou
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

where([{
    first: "Romeo",
    last: "Montague"
}, {
    first: "Mercutio",
    last: null
}, {
    first: "Tybalt",
    last: "Capulet"
}], {
    last: "Capulet"
});