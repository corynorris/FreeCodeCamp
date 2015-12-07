// Bonfire: Smallest Common Multiple
// Author: @corynorris
// Challenge: http://www.freecodecamp.com/challenges/bonfire-smallest-common-multiple#
// Learn to Code at Free Code Camp (www.freecodecamp.com)

function gcd(v1, v2) {
  
  var dividend = (v1>v2)? v1:v2;
  var divisor = (v1>v2)? v2:v1;
  
  var quotient = Math.floor(dividend / divisor);
  var remainder = dividend % divisor;

  
  while (remainder > 0) {
  
    dividend = divisor;
    divisor = remainder;
    
    quotient = Math.floor(dividend/divisor);
    remainder = dividend % divisor;
    
    
  }
  
  return divisor;
  
}

function lcm(a,b) {

  return a*b/gcd(a,b);
  
}


function smallestCommons(arr) {

  arr.sort();
  
  var ans = arr[0];
  for (var n = arr[0]; n <= arr[1]; n++) {
    ans = lcm(ans,n);
  }
  
  
  return ans;
}

smallestCommons([1,5]);