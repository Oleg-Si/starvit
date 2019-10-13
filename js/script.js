const meta = document.querySelector('#meta-content');
const userScreenWidth = window.innerWidth;
if (userScreenWidth < 375) {
  const scale = userScreenWidth / 375;
  meta.setAttribute('content', 'width=' + userScreenWidth + ', initial-scale=' + scale + '');
}

$('.question__question_title').on('click', function () {
  $(this).next().slideToggle();
  $(this).toggleClass('active');
});

$('.order__order_btn').on('click', function () {
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

$('.order__description_bar_item--fn').on('click', function () {
  $('.order__description_bar_item').removeClass('order__description_bar_item--active');
  $(this).addClass('order__description_bar_item--active');
  $('.order__description_block').removeClass('order__description_block--active');
  $('.order__description_block--fn').addClass('order__description_block--active')
})

$('.order__description_bar_item--descr').on('click', function () {
  $('.order__description_bar_item').removeClass('order__description_bar_item--active');
  $(this).addClass('order__description_bar_item--active');
  $('.order__description_block').removeClass('order__description_block--active');
  $('.order__description_block--descr').addClass('order__description_block--active')
})

$('.order__select').on('click', function () {
  $(this).toggleClass('active');

  var order_wrapper = $($(this).closest('.order__wrapper'));
  var b_incart = order_wrapper.find('.order__btn_incart');
  var b_1click = order_wrapper.find('.order__btn_oneclick');

  if ($(this).hasClass('active')) {
    $(this).find('p').html('Без кофеина');
    $('.order__descr').html('Продлевает выносливость, идеально подходит во второй <br> половине дня, когда кофе уже не помогает.');
    $('.order__description_block--descr').html('Янтарная кислота 200мг (100% от РНП) <br> Женьшень <br> L-Теанин 100мг <br> Аскорбиновая кислота 30мг <br> Экстракт лимонника (120% от РНП) <br> Витамин D3 (120% от РНП) <br> ВИТАМИНЫ В1, В2, В3, В5, В6, В9, В12 (120% от РНП) <br>');

    b_incart.attr('data-id', '000002');
    b_1click.attr('data-id', '000002');
  } else {
    $(this).find('p').html('С кофеином');
    $('.order__descr').html('Полезная энергия в моменте, <br> на порядок эффективнее кофе.');
    $('.order__description_block--descr').html('Янтарная кислота 200мг (100% от РНП) <br> Кофеин (как в 1 чашке кофе) <br> L-Теанин 100мг <br> Аскорбиновая кислота 30мг <br> Экстракт лимонника (120% от РНП) <br> Витамин D3 (120% от РНП) <br> ВИТАМИНЫ В1, В2, В3, В5, В6, В9, В12 (120% от РНП) <br>');

    b_incart.attr('data-id', '000001');
    b_1click.attr('data-id', '000001');
  }
});

// Закрытие оверлея
$(function () {
  $('.overlay__close').on('click', function () {
    $('.overlay').removeClass('overlay--open');
    document.querySelector('.overlay__content').innerHTML = '';
  })

  // пока так, надо пофиксить
  $('.overlay__content').on('click', function (e) {
    e.stopPropagation();
  })

  $('.overlay').on('click', function () {
    $(this).removeClass('overlay--open');
    document.querySelector('.overlay__content').innerHTML = '';
  })
})

// клик по галерее
$(function () {
  $('.slider.slider--main img').on('click', function () {
    $('.overlay').addClass('overlay--open');
    const img = $(this).clone();
    $('.overlay__content').append(img);
  })
})

// Смена цвета ссылок меню
$(function () {
  const element = $('.promo');
  if (element.length && window.innerWidth > 1350) {
    const offset = element.height() - 80;
    $(window).scroll(function () {
      if ($(window).scrollTop() > offset) {
        $('.header').addClass('header--scroll');
      } else {
        $('.header').removeClass('header--scroll');
      }
    });
  }
})

// Аккордеон
$(function () {
  var Accordion = function (el, multiple) {
    this.el = el || {};
    // more then one submenu open?
    this.multiple = multiple || false;

    var dropdownlink = this.el.find('.page-faq__item_title');
    dropdownlink.on('click', {
      el: this.el,
      multiple: this.multiple
    }, this.dropdown);
  };

  Accordion.prototype.dropdown = function (e) {
    var $el = e.data.el,
      $this = $(this),
      //this is the ul.submenuItems
      $next = $this.next();

    $next.slideToggle();
    $this.toggleClass('page-faq__item_title--open');

    if (!e.data.multiple) {
      //show only one menu at the same time
      $el.find('.page-faq__item_list').not($next).slideUp().removeClass('page-faq__item_title--open');
    }
  }

  var accordion = new Accordion($('.page-faq__list'), false);
});

// Смена цифр в сайдбаре при скролле
(function () {
  let screenCount = $('.jsSidebarItem').length;

  if (screenCount > 0) {

    //Записываем общее количество экранов
    if (screenCount < 10) {
      $('.sidebar__all').html('0' + screenCount);
    } else {
      $('.sidebar__all').html(screenCount);
    }

    screenCount++;
    $(window).scroll(function () {
      for (let i = 1; i < screenCount; i++) {
        if ($(window).scrollTop() + ($(window).height() / 2 + 70) >= $('#jsSidebarItem-' + i).offset().top) {
          if (i < 10) {
            $('.sidebar__current').html('0' + i);
          } else {
            $('.sidebar__current').html(i);
          }
        }
      }
    });
  }
})();

// Главный слайдер
$('.slider').slick({
  asNavFor: '.slider__nav'
});

// Слайдер навигции для главного
$('.slider__nav').slick({
  slidesToShow: 3,
  slidesToScroll: 1,
  asNavFor: '.slider',
  focusOnSelect: true,
  centerMode: true
});

// Слайдер карусели
if ($(window).width() >= 1007) {
  $('.composition__items').slick({
    slidesToShow: 4,
    slidesToScroll: 1,
    infinite: false
  })
}

// Слайдер страницы сертификатов
$('.page-sertificate__slider_items').slick({
  slidesToShow: 3,
  slidesToScroll: 1,
  infinite: false,
  responsive: [{
      breakpoint: 1280,
      settings: {
        slidesToShow: 2,
        slidesToScroll: 1,
        arrows: true,
        dots: false,
      }
    },
    {
      breakpoint: 1024,
      settings: {
        slidesToShow: 1,
        slidesToScroll: 1,
        arrows: false,
        dots: true,
      }
    }
  ]
});

// Вкл/Выкл карусель при ресайзе экрана
let state;
($(window).width() >= 1007) ? state = 1: state = 0;

$(window).on('resize', function () {
  if ($(window).width() >= 1007) {
    if (!state) {
      $('.composition__items').slick({
        slidesToShow: 4,
        slidesToScroll: 1,
        infinite: false
      })
      state = 1;
    }
  } else {
    if (state) {
      $('.composition__items').slick('unslick');
      state = 0;
    }
  }
});

// Смена экранов
(function () {
  // Функция смены экранов
  const changeScreen = (direction) => {
    let value = parseInt(($('.sidebar__current').text()), 10);
    if (direction) {
      value++;
    } else {
      value--;
    }
    let top = $('#jsSidebarItem-' + value).offset().top;
    $('body,html').animate({
      scrollTop: top
    }, 500);
  }

  // Установка обработчиков для смены экранов
  $('.sidebar__arr').on('click', function () {
    if ($(this).hasClass('sidebar__next')) {
      changeScreen(1);
    } else {
      changeScreen(0);
    }
  });
})();

import svg4everybody from 'svg4everybody';
import checkout from './checkout.js';

svg4everybody();
checkout();

$('.js-share-fb').on('click', function (e) {
  e.preventDefault();
  const url = window.location.href;
  window.location = 'https://www.facebook.com/sharer/sharer.php?u=' + url;
})

$('.js-share-tw').on('click', function (e) {
  e.preventDefault();
  const url = window.location.href;
  window.location = 'https://twitter.com/intent/tweet?url=' + url + '';
})

$('.js-share-vk').on('click', function (e) {
  e.preventDefault();
  const url = window.location.href;
  window.location = 'https://vk.com/share.php?url=' + url + '';
})

$('.js-share-od').on('click', function (e) {
  e.preventDefault();
  const url = window.location.href;
  window.location = 'https://connect.ok.ru/offer?url=' + url + '';
})

$('.menu__btn').on('click', function () {
  $('.menu').toggleClass('menu--open');
})

const priceNew = parseInt($('.order__price_new').text(), 10);
const priceOld = parseInt($('.order__price_old').text(), 10);

$('.order__order_input').on('input', function () {
  const count = $(this).val();
  $('.order__price_new').text(priceNew * count + ' ₽');
  $('.order__price_old').text(priceOld * count + ' ₽');
})

$('.order__order_btn').on('click', function () {
  const count = $(this).parent().parent().parent().find('.order__order_input').val();
  $('.order__price_new').text(priceNew * count + ' ₽');
  $('.order__price_old').text(priceOld * count + ' ₽');
})

$(document).ready(function () {
  setTimeout(() => {
    const compositionDescrHeights = $('.composition__item_content_descr');
    if (compositionDescrHeights.length) {
      compositionDescrHeights.each((i, el) => {
        const height = $(el).height();
        $(el).css('height', '120px');
        $(el).next().on('click', function () {
          if (!$(this).hasClass('active')) {
            $(this).addClass('active');
            $(this).html('Закрыть');
            $(this).prev().animate({
              height: height
            }, 500, function () {
              $(this).toggleClass('active');
            });
          } else {
            $(this).removeClass('active');
            $(this).html('Подробнее');
            $(this).prev().animate({
              height: '120px'
            }, 500, function () {
              $(this).toggleClass('active');
            });
          }
        })
      })
    }
  }, 1000);
})

$('.cart__item_quantity_btn').on('click', function () {
  let value

  if ($(this).hasClass('cart__item_quantity_btn--add')) {
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
});
