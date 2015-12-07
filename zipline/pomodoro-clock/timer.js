/* Timer */
var Time = function(minutes) {
    var seconds = 0;
    var minutes = minutes;

    /* Assumes positive values */
    this.setTime = function(value) {
        minutes = value;
        seconds = 0;
    };

    this.getTime = function() {
        if (seconds < 10)
            return minutes + ":0" + seconds;
        return minutes + ":" + seconds;
    };

    this.decrement = function() {
        seconds--;
        if (seconds < 0) {
            minutes--;
            seconds = 59;
        }
    };
    this.isEmpty = function() {
        if (minutes <= 0 && seconds <= 0) {
            return true;
        }
        return false;
    };
};

var Mode = function() {
    var curMode = 0;
    var modes = ['session', 'break'];

    this.setMode = function(newMode) {
        curMode = modes.indexOf(newMode);
        // update the label
        $('#timer #label').text(mode.getMode());
    }

    this.changeMode = function() {
        if (++curMode > modes.length) {
            curMode = 0;
        }
        // update the label
        $('#timer #label').text(mode.getMode());
    };

    this.getMode = function() {
        return modes[curMode];
    };
};

/* Keep track of our timer and if it's running */
var running = false;
var timer = 0;
var time = new Time($("#session-length-value").text());
var mode = new Mode();

/* Limit the time selection to resonable amounts */
function bound(value) {
    if (value < 1) return 1;
    if (value > 100) return 100;
    return value;
}

/* Make the buttons increment/decrement the value */
/* note: could probably have generalized this */

$("#break button.minus-break-length").click(function() {
    if (running) return;
    var value = $("#break-length-value").text();
    $("#break-length-value").text(bound(--value));
    mode
});

$("#break button.plus-break-length").click(function() {
    if (running) return;
    var value = $("#break-length-value").text();
    $("#break-length-value").text(bound(++value));
});

$("#session button.minus-session-length").click(function() {
    if (running) return;
    var value = $("#session-length-value").text();
    value = bound(--value);
    $("#session-length-value").text(value);
});

$("#session button.plus-session-length").click(function() {
    if (running) return;
    var value = $("#session-length-value").text();
    value = bound(++value);
    $("#session-length-value").text(value);
});

$("#break").click(function() {
    if (running) return;
    mode.setMode("break");
    var value = $("#break-length-value").text();
    $("#time").text(value);
    time.setTime(value);
});

$("#session").click(function() {
    if (running) return;
    mode.setMode("session");
    var value = $("#session-length-value").text();
    $("#time").text(value);
    time.setTime(value);
})

function countDown() {
    time.decrement()

    // decrement time by 1 second & draw the new time
    $("#time").text(time.getTime());

    // check for end
    if (time.isEmpty()) {

        // stop current timer 
        clearInterval(timer);

        // play sound (can't upload assests)

        // change modes
        mode.changeMode();

        // Setup new time
        value = $("#" + mode.getMode() + "-length-value").text();
        time.setTime(value);

        //being the new timer
        timer = setInterval(countDown, 1000);

    }

};

$("#timer .circle").click(function() {

    if (!running) {
        timer = setInterval(countDown, 1000);
    } else {
        clearInterval(timer);
    }
    running = !running;

});