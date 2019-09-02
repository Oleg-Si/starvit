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

const compactHover = (el, arr) => {
  arr.find('.compact__item_title').removeClass('compact__item_title--active');
  arr.find('.compact__item_descr').removeClass('compact__item_descr--active');
  arr.find('img').removeClass('active');
  el.find('.compact__item_title').addClass('compact__item_title--active');
  el.find('.compact__item_descr').addClass('compact__item_descr--active');
  el.find('img').addClass('active');
}

const compactItems = $('.compact__item');

compactItems.hover(function() {
  compactHover($(this), compactItems);
})

$('.promo__product .btn').on('click', function(e) {
  e.preventDefault();
  $(this).html('В корзину');
  $(this).css('background-color', '#f6492d');
  $(this).parent().parent().find('.promo__product_buttons').addClass('promo__product_buttons--active');
  if($(window).width() < 768) {
    $(this).parent().parent().find('img').css('width', '135px');
  }
})

$('.slider').slick({});
$('.slider__nav').slick({
  slidesToShow: 3,
  slidesToScroll: 1,
  asNavFor: '.slider',
  focusOnSelect: true
});

$('.promo__product_button').on('click', function() {
  if ($(this).hasClass('promo__product_button--add')) {
    let value = $(this).next().text();
    value++;
    $(this).next().html(value);
  } else {
    let value = $(this).prev().text();
    if (value > 1) {
      value--;
      $(this).prev().html(value);
    } else {
      $(this).parent().removeClass('promo__product_buttons--active');
      $(this).parent().parent().find('a.btn').html('Купить').css('background-color', '#000');
      if($(window).width() < 768) {
        $(this).parent().parent().find('img').css('width', '172px');
      }
    }
  }
});

$('.order__order_btn').on('click', function() {
  if ($(this).hasClass('order__order_btn--add')) {
    let value = $(this).prev().val();
    value++;
    $(this).prev().val(value);
  } else {
    let value = $(this).next().val();
    if (value > 1) {
      value--;
      $(this).next().val(value);
    }
  }
});

$('.order__description_bar_item--fn').on('click', function() {
  $('.order__description_bar_item').removeClass('order__description_bar_item--active');
  $(this).addClass('order__description_bar_item--active');
  $('.order__description_block').removeClass('order__description_block--active');
  $('.order__description_block--fn').addClass('order__description_block--active')
})

$('.order__description_bar_item--descr').on('click', function() {
  $('.order__description_bar_item').removeClass('order__description_bar_item--active');
  $(this).addClass('order__description_bar_item--active');
  $('.order__description_block').removeClass('order__description_block--active');
  $('.order__description_block--descr').addClass('order__description_block--active')
})

/*
$('.composition__item').hover(function() {
  $('.composition__item').removeClass('composition__item--active');
  $(this).addClass('composition__item--active');

  const component = $(this).find('.composition__item_content_open');
  component.toggleClass('active');

  component.prev().slideToggle();
  if (component.hasClass('active')) {
    component.html('Закрыть');
  } else {
    component.html('Подробнее');
  }
})
*/
