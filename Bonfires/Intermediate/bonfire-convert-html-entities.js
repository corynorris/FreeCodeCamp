// Bonfire: Convert HTML Entities
// Author: @corynorris
// Challenge: http://www.freecodecamp.com/challenges/bonfire-convert-html-entities#
// Learn to Code at Free Code Camp (www.freecodecamp.com)

function convert(str) {
  
  // char  entity
  // &      &amp;
  // <      &lt;
  // >      &gt;
  // '      &apos;
  
  var ampersand = /&/ig;
  var gt = />/ig;
  var lt = /</ig;
  var apostrophe = /'/gi;
  var quotation = /"/gi;
  
  return str.replace(ampersand, '&amp;').replace(gt, '&gt;').replace(lt, '&lt;').replace(apostrophe, '&apos;').replace(quotation, '&quot;');
}

convert('Stuff in "quotation marks"');