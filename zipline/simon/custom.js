var brighten = 60;

var Color = {
    red: ".red", blue: ".blue", green: ".green", yellow: ".yellow",
    isColor: function (value) {
        for (var k in this) {
            if (!this.hasOwnProperty(k)) continue;
            if (this[k] === value) {
                return true;
            }
        }
        return false;
    }
};

// This whole command thing wasn't really necessary, I just wanted to experiment
var Command = function (execute, undo, value) {
    this.execute = execute;
    this.undo = undo;
    this.value = value;
};

var press = function (value) {
    var originalColor = $(value).css("background");
    var lightColor = tintRGB(originalColor, brighten);
    console.log("LIGHTEN: " + originalColor + "transform to -> " + lightColor);
    $(value).css("background", lightColor);
    $(value).css("box-shadow", "0px 0px 5px #fff");

    $(value + "-sound").trigger('load');
    $(value + "-sound").trigger('play');

    return value;
};

var release = function (value) {
    var originalColor = $(value).css("background");
    var darkColor = tintRGB(originalColor, -brighten);
    console.log("DARKEN: " + originalColor + "transform to -> " + darkColor);
    $(value).css("background", darkColor);
    $(value).css("box-shadow", "none");

    return value;
};

var PressCommand = function (value) {
    return new Command(press, release, value)
};


var Simon = function () {
    var current = "";
    var commands = [];

    return {
        execute: function (command) {
            current = command.execute(command.value);
            commands.push(command);
        },
        undo: function () {
            var command = commands.pop();
            if (command === undefined) {
                current = "";
            } else {
                current = command.undo(command.value);
            }
        },
        getCurrentValue: function () {
            return current;
        },
        undoAll: function () {
            while (commands.length > 0) {
                this.undo();

            }
        }
    }
};

// Command handler
var curMove = 0;
var simon = new Simon();
var moves = [];
var speed = 900;
var showingMoves = false;
var gameStart = false;

// Player Controls
$(".pad").mousedown(function () {

    if (!showingMoves && gameStart) {
        var colorName = "." + $(this).attr('class').split(' ')[1];


        if (moves[curMove] === colorName) {
            // check if the move was correct
            simon.execute(new PressCommand(colorName));
            curMove++;
        } else {
            simon.execute(new PressCommand(".yellow"));
            simon.execute(new PressCommand(".red"));
            simon.execute(new PressCommand(".blue"));
            simon.execute(new PressCommand(".green"));


            // The player made a a mistake, so reset and show again
            setTimeout(function () {


                simon.undoAll();


                this.setTimeout(function () {
                    if ($("#strict-mode").prop('checked')) {
                        restart();
                    } else {
                        showMoves();
                        curMove = 0;
                    }
                }, 300);


            }, 500);
        }

        return false;
    }
});

$(document).mouseup(function () {

    function playerMove() {
        return !showingMoves && Color.isColor(simon.getCurrentValue()) && gameStart;
    }

    if (playerMove()) {
        simon.undo();
        if (curMove === moves.length) {
            if (moves.length === 20) {
                // WINNER
                $("#digit-1").attr("class", "win-left");
                $("#digit-2").attr("class", "win-right");
            } else {
                // All moves in current sequence input correctly, add another move and show
                curMove = 0;
                showingMoves = true;
                setTimeout(function () {
                    addMove();
                    showMoves();
                }, 1000);
            }
        }
    }
});

function restart() {
    curMove = 0;
    moves = [];
    speed = 900;
    showingMoves = false;
    simon.undoAll();
    $("#digit-1").attr("class", "");
    $("#digit-2").attr("class", "");

    gameStart = true;
    addMove();
    showMoves();
}

$("#start").find(".value").click(function () {
    if (!showingMoves) {
        restart();
    }
});

function showMoves() {
    showingMoves = true;
    var i = 0;
    simon.execute(new PressCommand(moves[i]));

    // Turn off and show next move
    (function myLoop() {
        setTimeout(function () {
            simon.undo();
            i++;
            if (i < moves.length) {
                simon.execute(new PressCommand(moves[i]));
                myLoop(i);
            } else {
                showingMoves = false;
            }
        }, speed)
    })();
}

function addMove() {
    moves.push(randomMove());
    setDisplay(moves.length);
    if (moves.length === 5) {
        speed = 600;
    }

    if (moves.length === 9) {
        speed = 400;
    }

    if (moves.length === 13) {
        speed = 200;
    }
}

function setDisplay(value) {
    var numbers = "zero one two three four five six seven eight nine".split(" ");
    value = value.toString();

    if (value.length == 2) {
        $("#digit-1").attr("class", numbers[value.charAt(0)]);
        $("#digit-2").attr("class", numbers[value.charAt(1)]);
    }
    else {
        $("#digit-2").attr("class", numbers[value]);
    }
}


// Utility functions
function tintRGB(color, amount) {
    var parts = color.split(",");
    var digit = /\d+/;

    for (var part = 0; part < parts.length; part++) {
        var value = parseInt(parts[part].match(digit));
        parts[part] = clamp(value + amount, 0, 255);
    }

    return "rgb(" + parts.join(",") + ")";
}

function clamp(num, min, max) {
    return num < min ? min : num > max ? max : num;
}

function random(start, end) {
    return Math.floor((Math.random() * end) + start);
}
function randomMove() {
    return Color[Object.keys(Color)[random(0, 4)]];
}