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
    const img = $(this).parent().prev().find('img:first-child').clone(true);
    if (value < 5) {
      $(this).parent().prev().append(img);
    }
  } else {
    let value = $(this).prev().text();
    if (value > 1) {
      value--;
      $(this).prev().html(value);
      if (value == 3 || value == 2 || value == 1) {
        $(this).parent().prev().find('img:last-child').remove();
      }
    } else {
      $(this).parent().removeClass('promo__product_buttons--active'); $(this).parent().parent().find('a.btn').html('Купить').css('background-color', '#000');
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

$('.order__select').on('click', function() {
  $(this).toggleClass('active');
  if ($(this).hasClass('active')) {
    $(this).find('p').html('Без кофеина');
  } else {
    $(this).find('p').html('С кофеином');
  }
})


$(window).scroll(function() {
  if ($(window).scrollTop() + ($(window).height() / 2 + 70) >= $('#jsSidebarItem-6').offset().top) {
    $('.sidebar__current').html('06');
  } else if ($(window).scrollTop() + ($(window).height() / 2 + 70) >= $('#jsSidebarItem-5').offset().top) {
    $('.sidebar__current').html('05');
  } else if ($(window).scrollTop() + ($(window).height() / 2 + 70) >= $('#jsSidebarItem-4').offset().top) {
    $('.sidebar__current').html('04');
  } else if ($(window).scrollTop() + ($(window).height() / 2 + 70) >= $('#jsSidebarItem-3').offset().top) {
    $('.sidebar__current').html('03');
  } else if ($(window).scrollTop() + ($(window).height() / 2 + 70) >= $('#jsSidebarItem-2').offset().top) {
    $('.sidebar__current').html('02');
  } else if ($(window).scrollTop() + ($(window).height() / 2 + 70) >= $('#jsSidebarItem-1').offset().top) {
    $('.sidebar__current').html('01');
  }
});

$('.sidebar__arr').on('click', function() {
  if ($(this).hasClass('sidebar__next')) {
    let value = parseInt(($('.sidebar__current').text()), 10);
    value++;
    let top = $('#jsSidebarItem-' + value).offset().top;
    if (value == 7) {
      top -= 70;
    }
    $('body,html').animate({scrollTop: top}, 500);
  } else {
    let value = parseInt(($('.sidebar__current').text()), 10);
    value--;
    let top = $('#jsSidebarItem-' + value).offset().top;
    if (value == 7) {
      top -= 70;
    }
    $('body,html').animate({scrollTop: top}, 500);
  }
})
