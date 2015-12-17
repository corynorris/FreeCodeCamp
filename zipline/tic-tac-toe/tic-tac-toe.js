// Logging function for debugging
function log() {

  var logItem = "<div class=\"log-item\">";

  for (var i = 0; i < arguments.length; i++) {
    if (typeof arguments[i] === 'object') {
      logItem += JSON.stringify(arguments[i]);
    } else {
      logItem += arguments[i];
    }

    if (i !== arguments.length - 1) {
      logItem += ", ";
    }

  }

  $(".log").append(logItem + "</div>");

}

function compare() {
  if (arguments.length === 0) {
    return false;
  }
  var equal = true;
  for (var i = 0; i < arguments.length - 1; i++) {
    if (arguments[i] !== arguments[i + 1]) {
      equal = false;
    }
  }
  return equal;
}

// Grid square
function Square(x, y, width, height) {
  this.x = x;
  this.y = y;
  this.width = width;
  this.height = height;
  this.mark = "";
}

Square.prototype.contains = function(x, y) {
  return this.x <= x && this.y <= y && (this.x + this.width) >= x && (this.y + this.height) >= y;
};

Square.prototype.marked = function() {
  return this.mark !== "";
};

Square.prototype.centerX = function() {
  return this.x + this.width / 2;
}

Square.prototype.centerY = function() {
  return this.y + this.height / 2;
}

// store + render a tic tac toe grid
function TicTacToe(width, height, padding) {
  this.width = width;
  this.height = height;
  this.padding = padding;
  this.tiles = [];
};

TicTacToe.prototype.makeGrid = function() {
  for (var y = 0; y < this.height; y += this.height / 3) {
    for (var x = 0; x < this.width; x += this.width / 3) {

      this.tiles.push(
        new Square(x, y, (this.width / 3) - this.padding, (this.height / 3) - this.padding)
      );
    }
  }
};

TicTacToe.prototype.drawGrid = function(ctx) {
  for (var i = 0; i < this.tiles.length; i++) {
    var tile = this.tiles[i];
    ctx.fillStyle = "#FAC51C";
    ctx.fillRect(tile.x, tile.y, tile.width, tile.height);
  }
};

TicTacToe.prototype.drawMarks = function(ctx) {
  for (var i = 0; i < this.tiles.length; i++) {
    var tile = this.tiles[i];
    ctx.fillStyle = "#475577";
    ctx.fillText(tile.mark, tile.centerX(), tile.centerY() + 30);
  }
}

TicTacToe.prototype.isFull = function() {
  var count = 0;
  for (var i = 0; i < this.tiles.length; i++) {
    if (this.tiles[i].mark !== "") {
      count = count + 1;
    }
  }
  return (count === this.tiles.length);
};

TicTacToe.prototype.tryOrFail = function(x, y, mark, ctx) {

  if (grid.hasWinner(computerMarker) || grid.hasWinner(userMarker) || grid.isFull()) {
    grid.restart();
    return;
  }

  for (var i = 0; i < this.tiles.length; i++) {
    var tile = this.tiles[i];
    if (tile.contains(x, y) && !tile.marked()) {
      tile.mark = mark;
      return true;
    }
  }

  return false;

};

TicTacToe.prototype.checkRow = function(row, mark) {
  return compare(this.tiles[row * 3].mark, this.tiles[row * 3 + 1].mark, this.tiles[row * 3 + 2].mark, mark);
};

TicTacToe.prototype.checkColumn = function(col, mark) {
  return compare(this.tiles[col].mark, this.tiles[col + 3].mark, this.tiles[col + 6].mark, mark);
};

TicTacToe.prototype.checkAscendingDiagonal = function(mark) {
  return compare(this.tiles[2].mark, this.tiles[4].mark, this.tiles[6].mark, mark);
};

TicTacToe.prototype.checkDescendingDiagonal = function(mark) {
  return compare(this.tiles[0].mark, this.tiles[4].mark, this.tiles[8].mark, mark);
};

TicTacToe.prototype.hasWinner = function(mark) {
  // check for diagonal wins
  if (this.checkAscendingDiagonal(mark) || this.checkDescendingDiagonal(mark)) {
    return true;
  }

  // Check vertical & horizontal lines
  for (var x = 0; x < 3; x++) {
    if (this.checkColumn(x, mark)) {
      return true;
    }
    if (this.checkRow(x, mark)) {
      return true;
    }
  }
  return false;
};

TicTacToe.prototype.aiRespond = function() {

  // win
  for (var i = 0; i < this.tiles.length; i++) {
    if (this.tiles[i].mark === "") {
      this.tiles[i].mark = computerMarker;
      if (this.hasWinner(computerMarker)) {
        return;
      } else {
        this.tiles[i].mark = "";
      }
    }
  }

  // block wins
  for (var i = 0; i < this.tiles.length; i++) {
    if (this.tiles[i].mark === "") {
      this.tiles[i].mark = userMarker;
      if (this.hasWinner(userMarker)) {
        this.tiles[i].mark = computerMarker;
        return;
      } else {
        this.tiles[i].mark = "";
      }
    }
  }

  // go middle
  if (this.tiles[4].mark === "") {
    this.tiles[4].mark = computerMarker;
    return;
  }

  // check for straddle strat
  if ((this.tiles[0].mark === userMarker && this.tiles[8].mark === userMarker) 
      || (this.tiles[2].mark === userMarker && this.tiles[6].mark === userMarker)) {
    // edge
    for (i = 1; i < this.tiles.length; i += 2) {
      if (this.tiles[i].mark == "") {
        this.tiles[i].mark = computerMarker;
        return;
      }
    }

  }

  // corners 
  for (i = 0; i < this.tiles.length; i += 2) {
    if (this.tiles[i].mark == "") {
      this.tiles[i].mark = computerMarker;
      return;
    }
  }

  // next available
  for (var i = 0; i < this.tiles.length; i++) {
    if (this.tiles[i].mark == "") {
      this.tiles[i].mark = computerMarker;
      return;
    }
  }
};

TicTacToe.prototype.restart = function() {

  this.active = true;
  for (var i = 0; i < this.tiles.length; i++) {
    this.tiles[i].mark = "";
  }
  this.drawGrid(ctx);

};

// Returns the mouse position.
function getMousePos(canvas, evt) {
  var rect = canvas.getBoundingClientRect();
  return {
    x: evt.clientX - rect.left,
    y: evt.clientY - rect.top
  };
}

// Submit a move when things are clicked
$("#canvas").click(function(evt) {

  $("#user-marker").attr("readonly", true);
  userMarker = $("#user-marker").val();
  if (userMarker === "O") {
    computerMarker = String.fromCharCode(userMarker.charCodeAt(0) + 1);
  } else {
    computerMarker = "O";
  }

  var pos = getMousePos(canvas, evt);

  if (!grid.tryOrFail(pos.x, pos.y, userMarker, ctx)) {
    return;
  }

  if (grid.hasWinner(userMarker)) {
    log("Round #" + round, "you won!");
    round++;
  } else {
    grid.aiRespond();

    if (grid.hasWinner(computerMarker)) {
      log("Round #" + round, "you lost!");
      round++;
    } else if (grid.isFull()) {
      log("Round #" + round, "tie!");
      round++;
    }
  }

  grid.drawMarks(ctx);

});

$("#reset").click(function() {
  grid.restart();
  $(".log").text("");
  round = 1;
  $("#user-marker").attr("readonly", false);

});

// Instantiate canvas and set its size attributes
var width = 400;
var height = 400;
var round = 1;
var userMarker = "X";
var computerMarker = "O";

$('canvas').attr({
  'width': width,
  'height': height
});
var canvas = document.getElementById("canvas");
var ctx = canvas.getContext("2d");

// Create a grid and fill it 
var grid = new TicTacToe(width, height, 10);
ctx.font = "80px Arial";
ctx.textAlign = "center";

grid.makeGrid();
grid.drawGrid(ctx);