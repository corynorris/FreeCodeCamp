// Bonfire: Arguments Optional
// Author: @corynorris
// Challenge: http://www.freecodecamp.com/challenges/bonfire-arguments-optional#
// Learn to Code at Free Code Camp (www.freecodecamp.com)

function add(a) {

    if (typeof(a) !== 'number') {
        return undefined;
    }

    var sum = a;

    if (arguments.length == 2) {
        if (typeof(arguments[1]) !== 'number') {
            return undefined;
        }
        return sum + arguments[1];
    } else {

        return function add(b) {
            if (typeof(b) !== 'number') {
                return undefined;
            }
            return sum + b;
        };
    }


}

add(2)(3);