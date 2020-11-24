$(window).on('load', function () {
  $("button").on("click", function () {
    hypotenuse();
  });
});

function hypotenuse() {
  l1 = parseFloat($('#leg1').val());
  l2 = parseFloat($('#leg2').val());

  if (l1 >= 0 && l2 >= 0 && l1 != '' && l2 != '') {
    result = Math.sqrt(l1 ** 2 + l2 ** 2).toFixed(2);
    $('#message').text('Гіпотенуза: ');
    $('#result').text(result);
  }
  else {
    $('#message').text('Помилка!');
    $('#result').text('Введіть сторони ще раз');
  }
}