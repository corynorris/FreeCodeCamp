var animation = "animated pulse";

$("#result").bind("webkitAnimationEnd mozAnimationEnd MSAnimationEnd oanimationend animationend",
    function() {
        $("#result").removeClass(animation);
    });

function Result(strId) {

    this.strId = strId;
    this.total = [];
    this.current = "";



    this.updateScreen = function(str) {
        //TRUNCATE at 14 digits
        $(this.strId).val(this.current.toString().substring(0, 12));

    }

    this.clearAll = function() {
        this.total = [];
        this.set("");
    }

    this.clearScreen = function() {
        this.set("");
    }

    this.set = function(val) {
        this.current = val;
        this.updateScreen();
    }

    this.append = function(val) {
        this.current += val;
        this.set(this.current);
    }

    this.operator = function(operator) {

        var num = convertRomanStringToNumber(this.current);
        this.total.push(num);

        if (operator === "=") {
            this.set(this.equals());
        } else {
            this.total.push(operator);
            this.clearScreen();
        }
    }

    this.equals = function() {
        $(strId).addClass(animation);

        var answer = eval(this.total.join(''));
        this.clearAll();
        return convertNumberToRomanString(answer);
    }


};

var result = new Result("#result");

$("button").click(function() {


    var pressed = $(this).text();


    // Clear everything
    if (pressed === "AC") {
        result.clearAll();
    }
    // Only clear screen
    else if (pressed === "CE") {
        result.clearScreen();
    }
    // If it's a character
    else if (/[A-Z]+/.test(pressed)) {
        result.append(pressed);
    }
    // If it's a command
    else {
        result.operator(pressed);
    }
});