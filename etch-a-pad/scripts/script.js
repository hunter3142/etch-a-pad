rowCount = 64;
color = "black";
$(document).ready(function() {
  buildSketchPad(+rowCount);
});

var resetGridSize = function() {
  rowCount = prompt('Enter new grid width', rowCount);
  $('.container').empty();
  buildSketchPad(+rowCount);
}
 
var buildSketchPad = function(n) {
  $('.container').append(buildUnits(n));
  $('.unit').css(unitSize(n));
  $('.draw').click(function() {
    $('.unit').mouseenter(function () {
      $(this).css('background', 'white')
      $(this).css('background', 'black')
    });
  });
  $('.erase').click(function() {
    $('.unit').mouseenter(function() {
      $(this).css('background', 'white')
    });
  });
  $('.rainbow').click(function() {
    $('.unit').mouseenter(function() {
      $(this).removeClass('filled')
      $(this).css("background", getRandomColor());
    });
  });
 }

var unitSize = function(n) {
  var width = $('.container').width() / parseFloat(n);
  var height = $('.container').height() / parseFloat(.5 * n);
  return {'height' : height, 'width' : width};
}
var buildUnits = function(n) {
  var units = ''
  for (x = 0; x < n; x++) {
    for (y = 0; y < (.5 * n); y++) {
      units += "<div class='unit'></div>"
    }
  }
  return units;
}

var eraser = function() {
  $('.unit').on('click', function() {
    $(this).removeClass('filled');
  });
}

/*var getRandomClass = function() {
  var classes = new array("green", "purple", "blue", "teal", "violet", "pink", "yellow");
  var randomNumber = Math.floor(Math.random()*7);
  return classes[randomNumber];
}*/

function getRandomColor() {
    var letters = '0123456789ABCDEF';
    var color = '#';
    for (var i = 0; i < 6; i++ ) {
        color += letters[Math.floor(Math.random() * 16)];
    }
    return color;
}
