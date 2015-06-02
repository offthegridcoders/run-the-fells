$('input').on('input propertychange paste', function() {
  if ($(this).val()) {
    $(this).prev().addClass('show-label');
    $(this).prev().removeClass('hide-label');
  } else {
    $(this).prev().removeClass('show-label');
    $(this).prev().addClass('hide-label');
  }
});

$('textarea').on('input propertychange paste', function() {
  if ($(this).val()) {
    $(this).prev().addClass('show-label');
    $(this).prev().removeClass('hide-label');
  } else {
    $(this).prev().removeClass('show-label');
    $(this).prev().addClass('hide-label');
  }
});