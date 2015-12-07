// Bonfire: Roman Numeral Converter
// Author: @corynorris
// Challenge: http://www.freecodecamp.com/challenges/bonfire-roman-numeral-converter
// Learn to Code at Free Code Camp (www.freecodecamp.com)

var romanNumber = [1000,900,500,400,100,90,50,40,10,9,5,4,1];
var romanLetter = ['M','CM','D','CD','C','XC','L','XL','X','IX','V','IV','I'];

function convert(num) {
 
  var ans = "";
    
    //find the closest roman numeral
    for (var i = 0; i < romanNumber.length; i++)  {      
      
      
      if (num >= romanNumber[i]) {

        // Add the roman numeral
        ans +=  romanLetter[i];     

        // subtract from digit being converted
        num -= romanNumber[i];

        //check again (alternately use modulus)
        i--;

      }
    }

  
  return ans;
}

convert(80);