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

$('.slider').on('beforeChange', function (event, slick, currentSlide, nextSlide) {
  if (currentSlide > nextSlide) {
    let allSlidesCount = $('.slider__nav .slider__slide').length;
    allSlidesCount--;
    const currentSlide = $('.slider__nav .slick-current');
    const currentSlideIndex = currentSlide.attr('data-slick-index');


    currentSlide.removeClass('slick-current');

    if (currentSlideIndex == 0) {
      $('.slider__nav [data-slick-index=' + allSlidesCount + ']').addClass('slick-current');
    } else {
      currentSlide.prev().addClass('slick-current');
    }
  } else {
    let allSlidesCount = $('.slider__nav .slider__slide').length;
    allSlidesCount--;
    const currentSlide = $('.slider__nav .slick-current');
    const currentSlideIndex = currentSlide.attr('data-slick-index');


    currentSlide.removeClass('slick-current');

    if (currentSlideIndex >= allSlidesCount) {
      $('.slider__nav [data-slick-index="0"]').addClass('slick-current');
    } else {
      currentSlide.next().addClass('slick-current');
    }
  }

});

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
  adaptiveHeight: true
});

// Слайдер навигции для главного
$('.slider__nav').slick({
  slidesToShow: 3,
  slidesToScroll: 1,
  asNavFor: '.slider',
  focusOnSelect: true
});

// Слайдер карусели
if ($(window).width() > 1400) {
  $('.composition__items').slick({
    slidesToShow: 4,
    slidesToScroll: 1
  })
}

// Вкл/Выкл карусель при ресайзе экрана
$(window).on('resize', function () {
  if ($(window).width() > 1400) {
    $('.composition__items').slick({
      slidesToShow: 4,
      slidesToScroll: 1
    })
  } else {
    $('.composition__items').slick('unslick');
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

// Чекаут авторизация/регистрация
const changeLoginRegistration = (e) => {
  e.preventDefault();

  // находим блок текущего шага
  const wrapper = $('.checkout__form_item--auth');

  // меняем авторизация/регистрация
  if (wrapper.hasClass('changed')) {
    wrapper.find('.checkout__form_title_title:first-child').text('Залогиньтесь');
    wrapper.find('.checkout__form_title_link').text('Регистрация');
    wrapper.find('.checkout__form_descr span').text('Если у вас еще нет учетной записи то')
    wrapper.find('.checkout__form_descr a').text('зарегистрируйтесь')
    wrapper.removeClass('changed');
  } else {
    wrapper.find('.checkout__form_title_title:first-child').text('Представтесь');
    wrapper.find('.checkout__form_title_link').text('Логин');
    wrapper.find('.checkout__form_descr span').html('Если вы уже являетесь зарегистрированным пользователем то')
    wrapper.find('.checkout__form_descr a').html('залогиньтесь')
    wrapper.addClass('changed');
  }

  // показываем/скрываем блоки авторизация/регистрация
  $('.checkout__form_login').toggle();
  $('.checkout__form_registration').toggle();
}

// устанавливаем обработчик смены авторизация/регистрация
$('.checkout__form_item--auth .js-change-form').on('click', changeLoginRegistration);

// обработчик смены первого шага, чисто для показа заказчику
$('.checkout__form_login_form input[type="password"]').on('change', function () {
  if($(this).val() == '+') {

    // находим блок текущего шага
    const wrapper = $('.checkout__form_item--auth');

    // находим и записываем имя пользователя
    wrapper.find('.checkout__form_title_title:first-child').text('e-mail');
    const userName = $('#userName').val();
    wrapper.find('.js-user-name').text(userName);

    // находим текущий шаг
    const currentStep = $('.checkout__form_item--active');

    // скрываем и показываем следующий
    currentStep.addClass('checkout__form_item--done');
    currentStep.removeClass('checkout__form_item--active');
    currentStep.next().addClass('checkout__form_item--active');

    // скрываем кнопку "регистрация"
    $('.js-change-form').hide();

    // показываем список стран
    $('.checkout__form_country').show();
  }
})

// обработчик смены второго шага
$('.checkout__form_country p').on('click', function () {

  // находим блок текущего шага
  const wrapper = $('.checkout__form_item--country');

  // находим и записываем страну
  const country = $(this).text();
  wrapper.find('.js-country').text(country);

  // скрываем выбор страны
  wrapper.find('.checkout__form_country').hide();

  // находим текущий шаг
  const currentStep = $('.checkout__form_item--active');

  // скрываем и показываем следующий
  currentStep.addClass('checkout__form_item--done');
  currentStep.removeClass('checkout__form_item--active');
  currentStep.next().addClass('checkout__form_item--active');
})
