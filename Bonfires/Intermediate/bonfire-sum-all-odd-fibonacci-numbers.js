// Bonfire: Sum All Odd Fibonacci Numbers
// Author: @corynorris
// Challenge: http://www.freecodecamp.com/challenges/bonfire-sum-all-odd-fibonacci-numbers#
// Learn to Code at Free Code Camp (www.freecodecamp.com)

function isOdd(num) {
  return num%2===1;
}

function sumFibs(num) {
  
  var prev = 1;
  var cur = 1;
  var temp = 0;
  
  var oddSum = 1;
  
  while (cur <= num) {
    
    if (isOdd(cur)) {
      oddSum += cur;
    }
    

    temp = cur;
    cur = prev+cur;
    prev = temp;
  }
  
  return oddSum;
}

sumFibs(4);