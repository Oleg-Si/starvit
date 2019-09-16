export default () => {

  console.log("модуль есть");

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

  // обработчик смены первого шага, чисто для показа заказчику
  $('.checkout__form_registration_btn').on('click', function () {

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

    // показываем кнопку "выбери страну"
    $('.js-select-country-button').show();
  })

  // обработчик клика по кнопке "выбери страну"
  $('.js-select-country-button').on('click', function (e) {
    e.preventDefault();

    // показываем список стран
    $('.checkout__form_country').show();
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

    // скрываем кнопку "выбери страну"
    $('.js-select-country-button').hide();

    // показываем кнопку "пропустить"
    $('.js-delivery').show();
  })

  // обработчик смены третьего шага
  $('.js-delivery').on('click', function (e) {
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

  // обработчик показа кнопки добавить карту
  $('.checkout__form_pay #pay-type-2').on('change', function () {
    const addCardBtn = $('.js-add-paycard');
    addCardBtn.on('click', function () {

    })
  });
}
