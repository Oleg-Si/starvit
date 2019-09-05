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

$('.slider').slick({
  adaptiveHeight: true
});
$('.slider__nav').slick({
  slidesToShow: 3,
  slidesToScroll: 1,
  asNavFor: '.slider',
  focusOnSelect: true
});

$('.order__order_btn').on('click', function() {
  let value

  if ($(this).hasClass('order__order_btn--add')) {
    value = $(this).prev().val();
    value++;
    $(this).prev().val(value);
  } else {
    value = $(this).next().val();
    if (value > 1) {
      value--;
      $(this).next().val(value);
    }
  }

  var order_wrapper = $($(this).closest('.order__wrapper'));
  var b_incart = order_wrapper.find('.order__btn_incart');

  b_incart.attr('data-q', value);
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

  var order_wrapper = $($(this).closest('.order__wrapper'));
  var b_incart = order_wrapper.find('.order__btn_incart');
  var b_1click = order_wrapper.find('.order__btn_oneclick');

  if ($(this).hasClass('active')) {
    $(this).find('p').html('Без кофеина');
    $('.order__descr').html('Продлевает выносливость, идеально подходит во второй <br> половине дня, когда кофе уже не помогает.');
    $('.order__description_block--descr').html('Янтарная кислота 200мг (100% от РНП) <br> Женьшень <br> L-Теанин 100мг <br> Аскорбиновая кислота 30мг <br> Экстракт лимонника (120% от РНП) <br> Витамин D3 (120% от РНП) <br> ВИТАМИНЫ В1, В2, В3, В5, В6, В9, В12 (120% от РНП) <br>');

    b_incart.attr('data-id', '00030');
    b_1click.attr('data-id', '00030');
  } else {
    $(this).find('p').html('С кофеином');
    $('.order__descr').html('Полезная энергия в моменте, <br> на порядок эффективнее кофе.');
    $('.order__description_block--descr').html('Янтарная кислота 200мг (100% от РНП) <br> Кофеин (как в 1 чашке кофе) <br> L-Теанин 100мг <br> Аскорбиновая кислота 30мг <br> Экстракт лимонника (120% от РНП) <br> Витамин D3 (120% от РНП) <br> ВИТАМИНЫ В1, В2, В3, В5, В6, В9, В12 (120% от РНП) <br>');

    b_incart.attr('data-id', '00035');
    b_1click.attr('data-id', '00035');
  }
});

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
});

$('.slider').on('beforeChange', function(event, slick, currentSlide, nextSlide){
  if (currentSlide > nextSlide) {
    let allSlidesCount = $('.slider__nav .slider__slide').length;
    allSlidesCount--;
    const currentSlide =$('.slider__nav .slick-current');
    const currentSlideIndex = currentSlide.attr('data-slick-index');


    currentSlide.removeClass('slick-current');

    if (currentSlideIndex == 0) {
      $('.slider__nav [data-slick-index='+ allSlidesCount +']').addClass('slick-current');
    } else {
      currentSlide.prev().addClass('slick-current');
    }
  } else {
    let allSlidesCount = $('.slider__nav .slider__slide').length;
    allSlidesCount--;
    const currentSlide =$('.slider__nav .slick-current');
    const currentSlideIndex = currentSlide.attr('data-slick-index');


    currentSlide.removeClass('slick-current');

    if (currentSlideIndex >= allSlidesCount) {
      $('.slider__nav [data-slick-index="0"]').addClass('slick-current');
    } else {
      currentSlide.next().addClass('slick-current');
    }
  }

});
