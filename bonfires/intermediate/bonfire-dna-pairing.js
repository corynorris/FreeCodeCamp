// Bonfire: DNA Pairing
// Author: @corynorris
// Challenge: http://www.freecodecamp.com/challenges/bonfire-dna-pairing
// Learn to Code at Free Code Camp (www.freecodecamp.com)

function pair(str) {

    var dna = [];

    //Pairs: AT CG
    var pairs = {
        'A': ['A', 'T'],
        'C': ['C', 'G'],
        'T': ['T', 'A'],
        'G': ['G', 'C']

    };
    var sequence = str.split('');

    for (var i = 0; i < sequence.length; i++) {
        dna.push(pairs[sequence[i]]);
    }

    return dna;
}

pair("ATCGA");