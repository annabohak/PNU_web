$(window).on('load', function () {
  $("button").on("click", function () {
    hypotenuse();
  });
});

function hypotenuse() {
  l1 = parseFloat($('#leg1').val());
  l2 = parseFloat($('#leg2').val());

  if (l1 >= 0 && l2 >= 0 && l1 != '' && l2 != '') {
    result = (l1 ** 2) + (l2 ** 2).toFixed(2);
    $('.result-box').css('background-color', 'forestgreen');
    $('#message').text('Результат: ');
    $('#result').text(result);
  }
  else {
    $('.result-box').css('background-color', 'indianred');
    $('#message').text('Помилка: ');
    $('#result').text('не правильні сторони!');
  }
}