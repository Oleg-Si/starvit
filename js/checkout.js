export default () => {

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

  // обработчик смены первого шага, чисто для показа заказчику
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

      const currentSidebarItem = $('.checkout__sidebar_item--active');
      $('.checkout__sidebar_item').removeClass('checkout__sidebar_item--active');
      currentSidebarItem.next().addClass('checkout__sidebar_item--active');

      // показываем кнопку "выбери страну"
      $('.js-select-country-button').show();
    }
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

    // находим текущий шаг
    const currentStep = $('.checkout__form_item--active');

    // скрываем и показываем следующий
    currentStep.addClass('checkout__form_item--done');
    currentStep.removeClass('checkout__form_item--active');
    currentStep.next().addClass('checkout__form_item--active');

    $('.js-form-delivery').addClass('checkout__form_item-delivery--open');

    // скрываем кнопку "регистрация"
    $('.js-change-form').hide();

    $('.checkout__form_country').hide();

    // показываем кнопку "выбери страну"
    $('.js-select-country-button').hide();

    // показываем кнопку выбора 2 шага
    $('.checkout__delivery_select').show();

  })

  // обработчик смены второго шага
  $('.js-checkout-select-shipping-select').on('click', function (e) {
    e.preventDefault();

    // находим блок текущего шага
    const wrapper = $('.checkout__form_item--country');

    // находим текущий шаг
    const currentStep = $('.checkout__form_item--active');

    // скрываем и показываем следующий
    currentStep.addClass('checkout__form_item--done');
    currentStep.removeClass('checkout__form_item--active');
    currentStep.next().next().next().addClass('checkout__form_item--active');
    $('.js-form-delivery').removeClass('checkout__form_item-delivery--open');

    const currentSidebarItem = $('.checkout__sidebar_item--active');
    $('.checkout__sidebar_item').removeClass('checkout__sidebar_item--active');
    currentSidebarItem.next().addClass('checkout__sidebar_item--active');

    // скрываем кнопку выбора 2 шага
    $('.checkout__delivery_select').hide();
  });

  $('.js-delivery').on('click', function (e) {
    e.preventDefault();
    $(this).parent().parent().find('.checkout__delivery_house_wrap').slideUp();
    //$('.checkout__form_registration_form_wrap').slideUp();
    $(this).parent().parent().find('.checkout__form_registration_form_wrap').slideDown();
    //  $('.js-shipping-method').attr('checked', false)
    //  $(this).parent().parent().find('.js-shipping-method').attr('checked', true);
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

      const label = $(this).parent().parent().find('.checkout__delivery_house_items');

      const elem = `
        <div class="checkout__delivery_house_item">
          <input type="radio" name="dh1" id="dh3">
          <label for="dh3"></label>
          <div class="checkout__delivery_house_item_content">
            <p class="checkout__delivery_house_item_descr">Ivanov Ivan</p>
            <p class="checkout__delivery_house_item_descr">Rochdelskaya 14A building 1</p>
            <p class="checkout__delivery_house_item_descr">Moscow</p>
            <p class="checkout__delivery_house_item_descr">123022</p>
            <p class="checkout__delivery_house_item_descr">Russia</p>
            <p class="checkout__delivery_house_item_descr">8(999)9859430</p>
            <div class="checkout__delivery_house_item_control">
            <p class="checkout__delivery_house_item_control-btn js-delivery-house-item-edit">Редактировать</p>
            <p class="checkout__delivery_house_item_control-btn js-delivery-house-item-remove">Удалить адрес</p>
          </div>
        </div>
      </div>`

      label.append(elem);

      label.find('.js-delivery-house-item-remove').on('click', function () {
        $(this).parent().parent().parent().remove();
      })

      $('.checkout__delivery_house_wrap').slideDown();
      $(this).parent().parent().find('.checkout__form_registration_form_wrap').slideUp();

      $('.checkout__wrapper').addClass('fix-ship-row');
    }
  });

  $('.js-checkout-select-shipping-map').on('click', function () {

    const label = $(this).parent().parent().parent().find('.checkout__delivery_house_items');

    label.empty();

    const elem = `
    <div class="checkout__shipping_item">
      <input type="radio" name="r1" id="r5" checked>
      <label for="r5"></label>
      <div class="checkout__shipping_item_content">
        <p class="checkout__shipping_item_title"><span>0,5 Км.</span> Точка выдачи заказов</p>
        <p class="checkout__shipping_item_descr">Rochdelskaya 14A building 1</p>
        <p class="checkout__shipping_item_descr">8(999)6876588</p>
      </div>
    </div>`

    label.append(elem);

    $('.checkout__delivery_house_wrap').slideDown();
    $(this).parent().parent().slideUp();
  });

  $(document).ready(function () {
    if ($('.js-label-for-shipping').length) {
      const content = $('.js-label-for-shipping').clone(true);
      $('.js-label-for-shipping').remove();
      $('.js-wrap-label-for-shipping').prepend(content);
      $('.js-label-for-shipping').show();
    }
  })

  // удаление адреса доставки
  $('.js-delivery-house-item-remove').on('click', function () {
    $(this).parent().parent().parent().remove();
  })
}
