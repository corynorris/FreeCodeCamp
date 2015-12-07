// Bonfire: Steamroller
// Challenge: http://www.freecodecamp.com/challenges/bonfire-steamroller#
// Learn to Code at Free Code Camp (www.freecodecamp.com)

function flatten(arr,ans) {
    
  for (var i = 0; i < arr.length; i++) {

    var val = arr[i];

    if (Array.isArray(val)) {
        flatten(val, ans);
    } else {
        ans.push(val);
    }
   

  }
  
  return ans;
}

function steamroller(arr) {

  
    return flatten(arr, []);


}
steamroller([1, [2],
    [3, [
        [4]
    ]]
]);