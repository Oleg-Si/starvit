$('.composition__item_content_open').on('click', function () {
  $(this).prev().slideToggle();
  $(this).toggleClass('active');
  if ($(this).hasClass('active')) {
    $(this).html('Закрыть');
  } else {
    $(this).html('Подробнее');
  }
});

$('.question__question_title').on('click', function () {
  $(this).next().slideToggle();
  $(this).toggleClass('active');
});
