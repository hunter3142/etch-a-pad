rowCount = 16;
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
      $(this).addClass('filled')
    });
  });
  $('.erase').click(function() {
    $('.unit').mouseenter(function() {
      $(this).removeClass('filled')
    });
  });
 }

var unitSize = function(n) {
  var width = $('.container').width() / parseFloat(n);
  var height = $('.container').height() / parseFloat(n);
  return {'height' : height, 'width' : width};
}
var buildUnits = function(n) {
  var units = ''
  for (x = 0; x < n; x++) {
    for (y = 0; y < n; y++) {
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
