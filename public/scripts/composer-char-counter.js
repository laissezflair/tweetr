$(document).ready (function () {
  $('textarea').on('keydown', function() {
    var max = 140;
    var len = $(this).val().length;
    var character = max - len;
    $(this).next().next().text(character);
    $(this).next().next().each(function() {
      if(character < 0) {
        $(this).addClass('red');
      } else {
        $(this).removeClass('red');
      }
    });
  });
});