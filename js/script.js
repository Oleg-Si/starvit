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

const compactHover = (el, arr, isHover) => {
  if (isHover) {
    arr.find('.compact__item_title').removeClass('compact__item_title--active');
    arr.find('.compact__item_descr').removeClass('compact__item_descr--active');
    arr.find('img').removeClass('active');
    el.find('.compact__item_title').addClass('compact__item_title--active');
    el.find('.compact__item_descr').addClass('compact__item_descr--active');
    el.find('img').addClass('active');
  } else {
    el.find('.compact__item_title').removeClass('compact__item_title--active');
    el.find('.compact__item_descr').removeClass('compact__item_descr--active');
    el.find('img').removeClass('active');
  }
}

const compactItems = $('.compact__item');

compactItems.hover(function() {
  compactHover($(this), compactItems, true);
}, function () {
  compactHover($(this), compactItems, false);
})
