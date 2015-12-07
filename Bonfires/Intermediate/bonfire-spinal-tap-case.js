// Bonfire: Spinal Tap Case
// Author: @corynorris
// Challenge: http://www.freecodecamp.com/challenges/bonfire-spinal-tap-case#
// Learn to Code at Free Code Camp (www.freecodecamp.com)

function spinalCase(str) {
    /**
      Matches 'x' and remembers the match, as the following example shows. The parentheses are called capturing parentheses.
      The '(foo)' and '(bar)' in the pattern /(foo) (bar) \1 \2/ match and remember the first two words in the string "foo bar foo bar". The \1 and \2 in the pattern match the string's last two words. Note that \1, \2, \n are used in the matching part of the regex. In the replacement part of a regex the syntax $1, $2, $n must be used, e.g.: 'bar foo'.replace( /(...) (...)/, '$2 $1' ).
``  **/
    return str.replace(/([a-z])([A-Z])/g, '$1 $2').replace(/\s|_/g, '-').toLowerCase();
}

spinalCase("This Is Spinal Tap");