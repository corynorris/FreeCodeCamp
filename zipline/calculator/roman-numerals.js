var romanNumber = [1000, 900, 500, 400, 100, 90, 50, 40, 10, 9, 5, 4, 1];
var romanLetter = ['M', 'CM', 'D', 'CD', 'C', 'XC', 'L', 'XL', 'X', 'IX', 'V', 'IV', 'I'];


/**
 * Checks to see if a string starts with another string.
 * @param  {String} string The string to check
 * @param  {String} prefix The prefix to look for
 * @return {Boolean}       
 */
function stringStartsWith (string, prefix) {
    return string.slice(0, prefix.length) == prefix;
}


/**
 * Converts a number to a Roman Numeral
 * @param  {Integer} num The number to convert
 * @return {String}      The Roman Numeral
 */
function convertNumberToRomanString(num) {

  var ans = "";

  //find the closest roman numeral
  for (var i = 0; i < romanNumber.length; i++) {

    if (num >= romanNumber[i]) {

      // Add the roman numeral
      ans += romanLetter[i];

      // subtract from digit being converted
      num -= romanNumber[i];

      //check again (alternately use modulus)
      i--;

    }
  }

  return ans;
}

/**
 * Converts a Roman Numeral to an integer
 * @param  {String}  str The Roman Numeral to convert
 * @return {Integer}     The integer representing the Roman Numeral
 */
function convertRomanStringToNumber(str) {
    var ans = 0;

  //find the closest roman numeral
  while (str.length > 0) {
      for (var i = 0; i < romanLetter.length; i++) {


            if (stringStartsWith(str, romanLetter[i]))
            {
                str = str.slice(romanLetter[i].length);
                ans += romanNumber[i];
                i=0;
            }


        }
      } 
    

  return ans;
}