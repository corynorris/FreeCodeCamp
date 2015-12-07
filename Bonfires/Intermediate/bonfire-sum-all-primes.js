// Bonfire: Sum All Primes
// Author: @corynorris
// Challenge: http://www.freecodecamp.com/challenges/bonfire-sum-all-primes#
// Learn to Code at Free Code Camp (www.freecodecamp.com)

function isPrime(num) {
  
  if (num <= 3) return true;
  
  var top = Math.ceil(Math.sqrt(num));
  for (var i = 2; i <= top; i++) {
    if ((num % i) === 0) {
      return false;
    }
  }
  return true;
}

// 1 isn't a prime.
function sumPrimes(num) {
  
  var total = 0;
  for (var i = 2; i <= num; i++) {
    if (isPrime(i)) {
      total += i;
    }
  }
  return total;
}

sumPrimes(10);