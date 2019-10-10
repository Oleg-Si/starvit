export default

console.log("подключен модуль чекаута");

// Чекаут авторизация/регистрация
const changeLoginRegistration = (e) => {
  e.preventDefault();

  // находим блок текущего шага
  const wrapper = $('.checkout__form_item--auth');

  // меняем авторизация/регистрация
  if (wrapper.hasClass('changed')) {
    wrapper.find('.checkout__form_title_title:first-child').text('Представтесь');
    wrapper.find('.checkout__form_title_link').text('Логин');
    wrapper.find('.checkout__form_descr span').html('Если вы уже являетесь зарегистрированным пользователем то');
    wrapper.find('.checkout__form_descr a').html('залогиньтесь');
    wrapper.removeClass('changed');
  } else {
    wrapper.find('.checkout__form_title_title:first-child').text('Залогиньтесь');
    wrapper.find('.checkout__form_title_link').text('Регистрация');
    wrapper.find('.checkout__form_descr span').text('Если у вас еще нет учетной записи то');
    wrapper.find('.checkout__form_descr a').text('зарегистрируйтесь');
    wrapper.addClass('changed');
  }

  // показываем/скрываем блоки авторизация/регистрация
  $('.checkout__form_login').toggle();
  $('.checkout__form_registration').toggle();
}

// устанавливаем обработчик смены авторизация/регистрация
$('.checkout__form_item--auth .js-change-form').on('click', changeLoginRegistration);

// обработчик смены первого шага
$('.js-checkout-first-step-end').on('click', function () {

  const inner = $(this).parent().find('.checkout__form_registration_form input');
  let errors = [];
  inner.each((i, el) => {
    if (!$(el).val()) {
      $(el).css('border-color', 'red');
      errors.push(1);
    } else {
      $(el).css('border-color', '#e1e0df');
    }
  })

  if (errors.length) {
    return;
  } else {
    // находим блок текущего шага
    const wrapper = $('.checkout__form_item--country');

    // находим текущий шаг
    const currentStep = $('.checkout__form_item--active');

    // скрываем и показываем следующий
    currentStep.addClass('checkout__form_item--done');
    currentStep.removeClass('checkout__form_item--active');
    currentStep.next().addClass('checkout__form_item--active');
    $('.js-form-delivery').addClass('checkout__form_item-delivery--open');
  }

  // скрываем кнопку "регистрация"
  $('.js-change-form').hide();

})

// обработчик клика по кнопке "выбери страну"
/*
$('.js-select-country-button').on('click', function (e) {
    e.preventDefault();

    // показываем список стран
    $('.checkout__form_country').show();
  })

  // обработчик смены второго шага
$('.checkout__form_country p').on('click', function () {

  })
*/
// обработчик смены третьего шага
$('.js-delivery-').on('click', function (e) {
  e.preventDefault();

  // находим текущий шаг
  const currentStep = $('.checkout__form_item--active');

  // скрываем и показываем следующий
  currentStep.addClass('checkout__form_item--done');
  currentStep.removeClass('checkout__form_item--active');
  currentStep.next().next().addClass('checkout__form_item--active');

  // скрываем кнопку "выбери страну"
  $('.js-delivery').hide();
});

$('.js-delivery').on('click', function (e) {
  e.preventDefault();
  $('.checkout__form_registration_form_wrap').slideUp();
  $(this).parent().parent().find('.checkout__form_registration_form_wrap').slideToggle();
  //  $('.js-shipping-method').attr('checked', false)
  //  $(this).parent().parent().find('.js-shipping-method').attr('checked', true);
});

$('.js-checkout-select-').on('click', function (e) {
  e.preventDefault();

  $(this).parent().slideUp();

  // находим блок текущего шага
  const wrapper = $('.checkout__form_item--country');

  // находим текущий шаг
  const currentStep = $('.checkout__form_item--active');

  // скрываем и показываем следующий
  currentStep.addClass('checkout__form_item--done');
  currentStep.removeClass('checkout__form_item--active');
  currentStep.next().next().addClass('checkout__form_item--active');
  $('.js-form-delivery').removeClass('checkout__form_item-delivery--open');
});

$('.js-checkout-select-shipping').on('click', function () {

  const inner = $(this).parent().find('.checkout__form_registration_form input');
  let errors = [];
  inner.each((i, el) => {
    if (!$(el).val()) {
      $(el).css('border-color', 'red');
      errors.push(1);
    } else {
      $(el).css('border-color', '#e1e0df');
    }
  })

  if (errors.length) {
    return;
  } else {
    // находим блок текущего шага
    const wrapper = $('.checkout__form_item--country');

    // находим текущий шаг
    const currentStep = $('.checkout__form_item--active');

    // скрываем и показываем следующий
    currentStep.addClass('checkout__form_item--done');
    currentStep.removeClass('checkout__form_item--active');
    currentStep.next().next().addClass('checkout__form_item--active');
    $('.js-form-delivery').removeClass('checkout__form_item-delivery--open');

    $('.checkout__wrapper').addClass('fix-ship-row');
  }
})

$(document).ready(function () {
  if ($('.js-label-for-shipping').length) {
    const content = $('.js-label-for-shipping').clone(true);
    $('.js-label-for-shipping').remove();
    $('.js-wrap-label-for-shipping').prepend(content);
    $('.js-label-for-shipping').show();
  }
})
