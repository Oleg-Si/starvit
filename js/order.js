(function () {
  if (typeof window.CustomEvent !== "function") {
    function CustomEvent(event, params) {
      params = params || {
        bubbles: false,
        cancelable: false,
        detail: undefined
      };
      var evt = document.createEvent('CustomEvent');
      evt.initCustomEvent(event, params.bubbles, params.cancelable, params.detail);
      return evt;
    }
    CustomEvent.prototype = window.Event.prototype;
    window.CustomEvent = CustomEvent;
  }
  if (!String.prototype.trim) {
    (function () {
      var rtrim = /^[\s\uFEFF\xA0]+|[\s\uFEFF\xA0]+$/g;
      String.prototype.trim = function () {
        return this.replace(rtrim, '');
      };
    })();
  }!window.addEventListener && function (e, t, n, r, i, s, o) {
    e[r] = t[r] = n[r] = function (e, t) {
      var n = this;
      o.unshift([n, e, t, function (e) {
        e.currentTarget = n, e.preventDefault = function () {
          e.returnValue = !1
        }, e.stopPropagation = function () {
          e.cancelBubble = !0
        }, e.target = e.srcElement || n, t.call(n, e)
      }]), this.attachEvent("on" + e, o[0][3])
    }, e[i] = t[i] = n[i] = function (e, t) {
      for (var n = 0, r; r = o[n]; ++n)
        if (r[0] == this && r[1] == e && r[2] == t) return this.detachEvent("on" + e, o.splice(n, 1)[0][3])
    }, e[s] = t[s] = n[s] = function (e) {
      return this.fireEvent("on" + e.type, e)
    }
  }(Window.prototype, HTMLDocument.prototype, Element.prototype, "addEventListener", "removeEventListener", "dispatchEvent", []);
})();

function JCShiptorWidgetOrder() {
  if (JCShiptorWidgetOrder.instance) {
    return JCShiptorWidgetOrder.instance;
  }
  JCShiptorWidgetOrder.instance = this;
  var XMLHTTPREQUEST_READY = 4,
    HTTP_SUCCESS = "200",
    VERSION = "1.8.2.1",
    SECONDS = {
      HOUR: 3600,
      DAY: 86400,
      WEEK: 604800,
      MONTH: 2592000
    },
    LANG = {
      basket: {
        head_text: "Товары в корзине",
        delete_item: "Удалить позицию",
        'continue': 'Вернуться',
        clean_text: "Очистить",
        order_text: "Оформить заказ",
        m: "м",
        t: "т",
        in_the_basket: "В корзине",
        items1: "товар",
        items2: "товара",
        items5: "товаров",
        to_the_basket: "Перейти",
        added: "Добавлено"
      },
      head_text: "Доставка и оплата",
      moscow: "Москва",
      russia: "Россия",
      settlement_name: "Название населенного пункта",
      settlement_placeholder: "Введите здесь название Вашего населенного пункта",
      settlement: "Населенный пункт",
      no_settlement: "Не найдено подходящего населенного пункта!",
      shipment: "Доставка",
      shipment_method: "Способ доставки",
      show_map: "Карта",
      show_list: "Список",
      from: "от",
      rub: "р.",
      r: " р.",
      courier: "Курьером до двери",
      courier_variant: "Курьерская служба",
      choose_variant: "Выберите вариант",
      receiver_section: "Получатель",
      receiver_address: "Адрес доставки",
      pvz: "Пункт выдачи заказов",
      pick_pvz_head: "Пункт выдачи",
      pick_pvz: "Выбрать",
      change_pvz: "Выбрать другой",
      closeText: "Оформить заказ",
      toggle_desc: "Подробнее",
      back: "Назад",
      day1: "рабочий день",
      day2: "рабочих дня",
      day5: "рабочих дней",
      post: "Отделение Почты РФ",
      services: "Стоимость услуг",
      shipping: "Доставка",
      cod: 'Комиссия за наложенный платеж',
      cost_declaring: 'Комиссия за объявленную стоимость',
      zip: 'Почтовый индекс',
      street: 'Улица',
      street_short: 'ул',
      house: 'Дом',
      flat: 'Квартира',
      receiver: 'ФИО получателя',
      fio_name: 'Имя',
      fio_surname: 'Фамилия',
      phone: 'Телефон',
      email: 'E-mail',
      comment: 'Комментарий к доставке (по желанию)',
      payment: {
        method: 'Способ оплаты',
        head: 'Оплата',
        cash: 'Наличными при получении',
        card: 'Банковской картой при получении',
        card_online: 'Банковской картой онлайн',
        text_cash: 'Возможна оплата наличными при получении',
        text_card: 'Возможна оплата картой при получении',
        wares: 'Товары',
        delivery: 'Доставка',
        total: 'Итого'
      },
      validation: {
        methods: 'выберите метод доставки',
        field: 'поле обязательно',
        email: 'неверный email',
        zip: 'неверный почтовый код',
        house: 'неверный номер дома',
        flat: 'неверный номер квартиры',
        phone: "неверный формат",
        pvz: 'выберите пункт самовывоза',
        mkad: 'курьер Shiptor не доставляет за МКАД',
        agreement: 'необходимо подтвердить согласие'
      },
      global_error: 'произошла ошибка расчета доставки',
      pvz_map_legend: 'Фильтр',
      pvz_map_legend_all: 'Все',
      ymaps_troubles: 'Возникла проблема при построении карты',
      shiptor_terminal: 'Shiptor',
      shiptor_regions_delivery_point: 'Shiptor',
      pickpoint: 'Pickpoint',
      boxberry_delivery_point: 'BoxBerry',
      dpd_eparcel_delivery: 'DPD',
      dpd_economy_delivery: 'DPD Габарит-Economy',
      cdek_delivery_point: 'CDEK',
      cdek_economy_delivery_point: 'CDEK',
      iml_delivery: 'IML',
      no_pvz: 'Нет доступных ПВЗ в данном населенном пункте!',
      no_head: 'Верстка страницы некорректна! Не найдена секция head.',
      no_city: 'Не найден город!',
      success: 'Заказ успешно оформлен! Номер вашего заказа ',
      if_card_text: 'Сейчас вы будете перенаправлены на страницу оплаты заказа',
      goto_payment: 'Перейти к оплате',
      pd_processing: 'Я даю согласие на обработку персональных данных в соответствии с ФЗ "О применении контрольно-кассовой техники при осуществлении расчетов в РФ"',
      ok: 'OK',
      placeholder: {
        zip: '105210',
        street: 'например, Транспортная',
        house: 'например, 12а',
        flat: 'например, 2',
        name: 'Иван',
        surname: 'Петров',
        phone: {
          RU: '89123456789',
          BY: '+375132456798',
          KZ: '+77324657896'
        },
        email: 'test@testmail.ru'
      },
      countries: {
        BY: 'Беларусь',
        BY2: 'Белорусия',
        KZ: 'Казахстан',
        RU: 'Россия'
      }
    },
    CACHE = {},
    id = 'shiptor_widget',
    orderSent = false,
    methods = {},
    deliveries = {
      courier: null,
      pvz: null,
      post: null,
      flush: function () {
        this.courier = {
          cost: 0,
          time: 0,
          name: LANG.courier,
          list: []
        };
        this.pvz = {
          cost: 0,
          time: 0,
          name: LANG.pvz,
          list: []
        };
        this.post = {
          cost: 0,
          time: 0,
          name: LANG.post,
          list: []
        };
      },
      get: function (type, id) {
        var result = null,
          i;
        if (!!this[type]) {
          for (i = 0; i < this[type].list.length; i++) {
            if (this[type].list[i].method.id == id) {
              result = this[type].list[i];
              break;
            }
          }
        }
        return result;
      },
      getCourier: function (id) {
        return this.get('courier', id);
      },
      getPvz: function (id) {
        return this.get('pvz', id);
      },
      getPost: function (id) {
        return this.get('post', id);
      },
      add: function (type, method) {
        if (['courier', 'pvz', 'post'].indexOf(type) !== -1) {
          this[type].list.push(method);
        }
      },
      addCourier: function (method) {
        this.add('courier', method);
      },
      addPvz: function (method) {
        this.add('pvz', method);
      },
      addPost: function (method) {
        this.add('post', method);
      }
    },
    payments = [],
    oPvz = {
      list: [],
      current: null,
      length: 0,
      count: function () {
        if (this.length === 0) {
          this.length = this.list.length;
        }
        return this.length;
      },
      setCurrent: function (id) {
        this.current = id;
      },
      getCurrent: function () {
        if (this.current !== null) {
          for (var i = 0; i < this.count(); i++) {
            if (this.list[i].id == this.current && this.list[i].shipping_method == params.deliveryMethod) {
              return this.list[i];
            }
          }
        }
        return null;
      },
      add: function (pvzList) {
        for (var id in pvzList) {
          if (pvzList.hasOwnProperty(id)) {
            this.list = this.list.concat(pvzList[id]);
          }
        }
      },
      flush: function () {
        this.list = [];
        this.length = 0;
      }
    },
    MOSCOW = {
      kladr_id: '77000000000',
      city: LANG.moscow,
      parents: [LANG.russia]
    },
    params = {
      debug: false,
      wk: null,
      url: 'https://checkout.shiptor.ru/api',
      externalId: null,
      basket: {
        showOnAdd: true
      },
      dimensions: {},
      cod: true,
      price: 0,
      weight: 0,
      location: {
        kladr_id: MOSCOW.kladr_id,
        city: MOSCOW.city,
        parents: MOSCOW.parents
      },
      mode: 'popup',
      courier: null,
      detail: false,
      declaredCost: null,
      closeText: LANG.closeText,
      fixedDeliveryPrice: null,
      round: null,
      addDays: 0,
      markup: null,
      wareList: [],
      zip: null,
      street: null,
      house: null,
      flat: null,
      name: null,
      surname: null,
      phone: null,
      email: null,
      comment: null,
      payment: null,
      deliveryType: null,
      deliveryMethod: null,
      country: null,
      linkYmaps: true,
      domain: null,
      basketPos: 'right',
      analytics: {}
    },
    allowedBasketPos = ['right', 'bottom'],
    sendRequest = function (data, callback) {
      data.wk = params.wk;
      if (params.domain !== null) {
        data.domain = params.domain;
      }
      var xhr = new XMLHttpRequest();
      xhr.open("POST", params.url);
      xhr.setRequestHeader('Content-Type', 'application/json');
      var sData = JSON.stringify(data);
      xhr.send(sData);
      xhr.onreadystatechange = function (response) {
        if (xhr.readyState == XMLHTTPREQUEST_READY && xhr.status == HTTP_SUCCESS) {
          var jsonResponse = JSON.parse(xhr.responseText);
          if (!!jsonResponse.error) {
            console.warn(jsonResponse.error.message);
            JCShiptorWidgetOrder.instance.error(LANG.global_error);
          } else {
            var result = {
              result: jsonResponse.result,
              source: data
            };
            callback.call(JCShiptorWidgetOrder.instance, result);
          }
        }
      };
    },
    isEmptyObj = function (obj) {
      return Boolean(JSON.stringify(obj) == JSON.stringify({}));
    },
    wareHandlers = {
      quantityChange: function (event) {
        var itemContainer = event.target.parentNode.parentNode,
          wareId = itemContainer.getAttribute("data-item"),
          quantity = parseInt(itemContainer.querySelector("._shiptor_widget_wi_quantity").value);
        if (!isNaN(quantity)) {
          event.target.value = (quantity > 0 ? quantity : 1);
          basket.changeQuantity(wareId, quantity);
          htmlBuilder.conts.wareList.querySelector("._shiptor_widget_wi_quantity").focus();
        } else {
          var bask = basket.get();
          event.target.value = bask[wareId].quantity;
        }
      },
      quantityUp: function (event) {
        var itemContainer = event.target.parentNode.parentNode,
          wareId = itemContainer.getAttribute("data-item"),
          quantity = parseInt(itemContainer.querySelector("._shiptor_widget_wi_quantity").value);
        basket.changeQuantity(wareId, ++quantity);
        itemContainer.querySelector("._shiptor_widget_wi_quantity").value = quantity;
        event.preventDefault();
      },
      quantityDown: function (event) {
        var itemContainer = event.target.parentNode.parentNode,
          wareId = itemContainer.getAttribute("data-item"),
          quantity = parseInt(itemContainer.querySelector("._shiptor_widget_wi_quantity").value);
        basket.changeQuantity(wareId, --quantity);
        itemContainer.querySelector("._shiptor_widget_wi_quantity").value = quantity;
        event.preventDefault();
      },
      remove: function (event) {
        var itemContainer = event.target.parentNode.parentNode,
          wareId = itemContainer.getAttribute("data-item");
        basket.remove(wareId);
        if (basket.isEmpty()) {
          htmlBuilder.hide.basket();
          if (!!params.overflow) {
            document.body.style.overflow = params.overflow;
          } else {
            document.body.style.overflow = 'unset';
          }
        }
        event.preventDefault();
      }
    },
    validationHandlers = {
      agreement: function (event) {
        var value = event.target.checked;
        if (validate.checkAgreement(event.target)) {
          validate.removeErrorClass(event.target.parentNode);
        }
        params.agreement = value;
      },
      cityChange: function (event) {
        var city2Search = event.target.value;
        event.target.setAttribute('data-kladr', '');
        if (validate.checkText(event.target)) {
          validate.removeErrorClass(event.target.parentNode);
        } else {
          htmlBuilder.hide.deliveriesGroup();
          return false;
        }
        city2Search = city2Search.trim();
        if (city2Search.length < 3) {
          clearTimeout(this.timer);
          return false;
        }
        if (parseInt(this.timer) > 0) {
          clearTimeout(this.timer);
        }
        this.timer = setTimeout(function () {
          htmlBuilder.hide.settlementsVariants();
          suggestSettlement({
            query: city2Search
          });
        }, 700);
      },
      zip: function (event) {
        var value = event.target.value;
        if (validate.checkZip(event.target)) {
          validate.removeErrorClass(event.target.parentNode);
        }
        params.zip = value;
      },
      street: function (event) {
        var value = event.target.value;
        validate.duplicate(['courierStreet', 'postStreet'], value);
        if (validate.checkText(event.target)) {
          validate.removeErrorClass(event.target.parentNode);
        }
        params.street = value;
      },
      house: function (event) {
        var value = event.target.value;
        validate.duplicate(['courierHouse', 'postHouse'], value);
        if (validate.checkHouse(event.target)) {
          validate.removeErrorClass(event.target.parentNode);
        }
        params.house = value;
      },
      flat: function (event) {
        var value = event.target.value;
        validate.duplicate(['courierFlat', 'postFlat'], value);
        if (validate.checkFlat(event.target)) {
          validate.removeErrorClass(event.target.parentNode);
        }
        params.flat = value;
      },
      name: function (event) {
        var value = event.target.value;
        validate.duplicate(['courierFioName', 'pvzFioName', 'postFioName'], value);
        if (validate.checkText(event.target)) {
          validate.removeErrorClass(event.target.parentNode);
        }
        params.name = value;
      },
      surname: function (event) {
        var value = event.target.value;
        validate.duplicate(['courierFioSurname', 'pvzFioSurname', 'postFioSurname'], value);
        if (validate.checkText(event.target)) {
          validate.removeErrorClass(event.target.parentNode);
        }
        params.surname = value;
      },
      phone: function (event) {
        var value = event.target.value;
        validate.duplicate(['courierPhone', 'pvzPhone', 'postPhone'], value);
        if (validate.checkPhone(event.target)) {
          validate.removeErrorClass(event.target.parentNode);
        }
        params.phone = value;
      },
      focusPhone: function (event) {
        var value = event.target.value;
        if (!value && params.country == 'BY') {
          event.target.value = '+';
        }
      },
      email: function (event) {
        var value = event.target.value;
        validate.duplicate(['courierEmail', 'pvzEmail', 'postEmail'], value);
        if (validate.checkEmail(event.target)) {
          validate.removeErrorClass(event.target.parentNode);
        }
        params.email = value;
      },
      comment: function (event) {
        var value = event.target.value.substring(0, 400);
        validate.duplicate(['courierComment', 'pvzComment', 'postComment'], value);
        params.comment = value;
      }
    },
    nullPvz = function () {
      oPvz.setCurrent(null);
      htmlBuilder.conts.pvzItem.innerHTML = '';
    },
    handlers = {
      city: {
        input: validationHandlers.cityChange,
        propertychange: validationHandlers.cityChange,
        focus: function (event) {
          var city = event.target.value,
            kladr = event.target.getAttribute('data-kladr');
          if (!!city) {
            var arCity = city.split(',');
            event.target.value = arCity[0];
          }
          if (!kladr) {
            htmlBuilder.show.settlementsVariants();
          }
        },
        blur: function (event) {
          var city = event.target.value;
          if (city.replace(params.location.type + ' ', '') == params.location.city) {
            event.target.value = city + (params.location.parents.length > 0 ? ', ' + params.location.parents.join(', ') : '');
          }
          setTimeout(function () {
            htmlBuilder.hide.settlementsVariants();
          }, 600);
        }
      },
      settlementSuggestions: {
        click: function (event) {
          var target = event.target;
          if (target.className.indexOf('_shiptor_widget_mute') !== -1) {
            target = target.parentNode;
          }
          var kladr = target.getAttribute('data-kladr'),
            arLocation = [target.getAttribute('data-city'), target.getAttribute('data-region'), target.getAttribute('data-country')];
          if (!!kladr && arLocation.length > 0) {
            params.location.kladr_id = kladr;
            params.location.city = arLocation[0];
            params.location.type = target.getAttribute('data-type');
            params.location.parents = [];
            for (var i = 1; i < arLocation.length; i++) {
              if (arLocation[i].length > 0) {
                params.location.parents.push(arLocation[i]);
              }
            }
            htmlBuilder.setCity();
            htmlBuilder.hide.settlementsVariants();
            nullPvz();
            oPvz.flush();
            calculateShipping();
          }
        }
      },
      deliveryMethods: {
        change: function (event) {
          var type = event.target.value;
          htmlBuilder.hide.courierVariants();
          htmlBuilder.hide.deliveryPoint();
          htmlBuilder.hide.russianPost();
          params.deliveryType = type;
          switch (type) {
            case 'courier':
              htmlBuilder.create.courierVariants();
              fireEvent('onMethodSelect', deliveries.courier.list);
              htmlBuilder.show.courierVariants();
              validate.removeErrorClass(event.target.parentNode.parentNode);
              scrollAnimate(htmlBuilder.conts.content, htmlBuilder.conts.courier.offsetTop - 80, 200);
              break;
            case 'pvz':
              htmlBuilder.create.pvzList();
              fireEvent('onMethodSelect', deliveries.pvz.list);
              htmlBuilder.show.deliveryPoint();
              htmlBuilder.show.wait();
              if (oPvz.getCurrent() === null) {
                htmlBuilder.show.pvzPicker();
                htmlBuilder.map.init();
              }
              htmlBuilder.hide.wait();
              validate.removeErrorClass(event.target.parentNode.parentNode);
              scrollAnimate(htmlBuilder.conts.content, htmlBuilder.conts.pvz.offsetTop - 80, 200);
              break;
            case 'post':
              fireEvent('onMethodSelect', deliveries.post.list);
              params.deliveryPrice = parseFloat(deliveries.post.cost);
              for (var i = 0; i < deliveries.post.list.length; i++) {
                params.deliveryMethod = deliveries.post.list[i].method.id;
              }
              showPrices();
              htmlBuilder.show.russianPost();
              htmlBuilder.create.payGroup([{
                type: 'cash',
                name: LANG.payment.cash
              }]);
              validate.removeErrorClass(event.target.parentNode.parentNode);
              scrollAnimate(htmlBuilder.conts.content, htmlBuilder.conts.russianPost.offsetTop - 120, 200);
              break;
          }
        }
      },
      courier: {
        change: function (event) {
          var value = event.target.value,
            courierMethod = null;
          if (event.target.tagName === 'SELECT') {
            courierMethod = deliveries.getCourier(value);
            fireEvent('onCourierSelect', courierMethod);
            params.deliveryPrice = parseFloat(courierMethod.cost.total.sum);
            params.deliveryMethod = value;
            showPrices();
            htmlBuilder.create.payGroup([{
              type: 'cash',
              name: LANG.payment.cash
            }, {
              type: 'card',
              name: LANG.payment.card
            }]);
            if (value > 0) {
              validate.removeErrorClass(event.target.parentNode);
            }
          }
        }
      },
      pvzItem: {
        click: function (event) {
          if (!event.target) {
            return false;
          }
          if (event.target.className.indexOf('_shiptor_widget_deliverypoint_button') !== -1) {
            htmlBuilder.show.generic(event.target.previousSibling);
            htmlBuilder.hide.generic(event.target);
          }
        }
      },
      pvzButton: {
        click: function (event) {
          htmlBuilder.show.pvzPicker();
          htmlBuilder.map.init();
        }
      },
      pvzPickerBack: {
        click: function (event) {
          htmlBuilder.hide.pvzPicker();
          var activePvz = htmlBuilder.getActivePvz();
          if (!!activePvz) {
            params.deliveryMethod = activePvz.getAttribute('data-shipping-method');
            oPvz.setCurrent(activePvz.value);
            validate.removeErrorClass(htmlBuilder.conts.pvzItem);
            selectPvz();
            htmlBuilder.hide.pvzPickerConfirm();
            scrollAnimate(htmlBuilder.conts.content, htmlBuilder.conts.pvzFioName.offsetTop - 120, 200);
          }
          event.preventDefault();
        }
      },
      pvzPickerList: {
        click: function (event) {
          if (event.target.className.indexOf('_shiptor_widget_points_button') !== -1) {
            htmlBuilder.show.generic(event.target.previousSibling);
            htmlBuilder.hide.generic(event.target);
            event.preventDefault();
          }
        },
        change: function (event) {
          var deliveryMethod = event.target.getAttribute('data-shipping-method');
          htmlBuilder.map.changeLabel(event.target.value, deliveryMethod);
          htmlBuilder.show.pvzPickerConfirm();
        }
      },
      pvzMapLegend: {
        change: function (event) {
          var arAllowedPvz = htmlBuilder.map.getPvzFilters(),
            pvzListInputs = [],
            i = 0,
            currentCourier = event.target.value;
          pvzListInputs = htmlBuilder.conts.pvzPicker.querySelectorAll("._shiptor_widget_points_list ._shiptor_widget_points_item ._shiptor_widget_radio");
          for (i = 0; i < pvzListInputs.length; i++) {
            currentCourier = pvzListInputs[i].getAttribute('data-group');
            if (arAllowedPvz.length > 0) {
              if (arAllowedPvz.indexOf(currentCourier) !== -1) {
                pvzListInputs[i].parentNode.style.display = 'block';
              } else {
                pvzListInputs[i].parentNode.style.display = 'none';
              }
            } else {
              pvzListInputs[i].parentNode.style.display = 'block';
            }
          }
          htmlBuilder.map.init();
        }
      },
      pvzPickerConfirm: {
        click: function (event) {
          var activePvz = htmlBuilder.getActivePvz();
          if (!activePvz) {
            return false;
          }
          params.deliveryMethod = activePvz.getAttribute('data-shipping-method');
          htmlBuilder.hide.pvzPicker();
          oPvz.setCurrent(activePvz.value);
          validate.removeErrorClass(htmlBuilder.conts.pvzItem);
          selectPvz();
          htmlBuilder.hide.pvzPickerConfirm();
          scrollAnimate(htmlBuilder.conts.content, htmlBuilder.conts.pvzFioName.offsetTop - 120, 200);
        }
      },
      pvzMapSwitch: {
        click: function (event) {
          if (htmlBuilder.conts.pvzPickerList.className.indexOf('_shiptor_widget_points_show') !== -1) {
            htmlBuilder.conts.pvzPickerList.className = '_shiptor_widget_points_list';
            htmlBuilder.conts.pvzMap.parentNode.className = '_shiptor_widget_points_map _shiptor_widget_points_show';
            htmlBuilder.conts.pvzMapSwitch.innerText = LANG.show_list;
          } else {
            htmlBuilder.conts.pvzPickerList.className = '_shiptor_widget_points_list _shiptor_widget_points_show';
            htmlBuilder.conts.pvzMap.parentNode.className = '_shiptor_widget_points_map';
            htmlBuilder.conts.pvzMapSwitch.innerText = LANG.show_map;
            var checkedPvz = htmlBuilder.conts.pvzPickerList.querySelector('[type="radio"]:checked');
            if (!!checkedPvz) {
              htmlBuilder.map.scrollTo(checkedPvz.value, checkedPvz.getAttribute('data-shipping-method'));
            }
          }
          event.preventDefault();
        }
      },
      closeOrderX: {
        click: function (event) {
          if (orderSent) {
            location.reload();
          } else {
            htmlBuilder.conts.frameBasket.style.display = 'block';
            htmlBuilder.conts.frame.style.display = 'none';
            var classNames = htmlBuilder.conts.frameBasket.className;
            if (classNames.indexOf('_shiptor_widget_frame_basket_ico') === -1) {
              classNames += ' _shiptor_widget_frame_basket_ico';
            }
            htmlBuilder.conts.frameBasket.className = classNames;
            htmlBuilder.conts.widget.style.position = 'relative';
            if (!!params.overflow) {
              document.body.style.overflow = params.overflow;
            } else {
              document.body.style.overflow = 'unset';
            }
          }
          event.preventDefault();
        }
      },
      overlay: {
        click: function (event) {
          if (orderSent) {
            location.reload();
          } else {
            htmlBuilder.conts.frameBasket.style.display = 'block';
            htmlBuilder.conts.frame.style.display = 'none';
            var classNames = htmlBuilder.conts.frameBasket.className;
            if (classNames.indexOf('_shiptor_widget_frame_basket_ico') === -1) {
              classNames += ' _shiptor_widget_frame_basket_ico';
            }
            htmlBuilder.conts.frameBasket.className = classNames;
            htmlBuilder.conts.widget.style.position = 'relative';
            if (!!params.overflow) {
              document.body.style.overflow = params.overflow;
            } else {
              document.body.style.overflow = 'unset';
            }
          }
          event.preventDefault();
        }
      },
      closeButton: {
        click: function (event) {
          if (validate.run() && !basket.isEmpty()) {
            sendOrder();
            sendGoals('saved', event);
          }
          event.preventDefault();
        }
      }
    },
    basketHandlers = {
      iconBasket: {
        click: function (event) {
          var classes = htmlBuilder.conts.frameBasket.className.replace('_shiptor_widget_frame_basket_ico', '');
          params.overflow = document.body.style.overflow;
          document.body.style.overflow = 'hidden';
          htmlBuilder.conts.frameBasket.className = classes;
          htmlBuilder.create.basketWareList();
          htmlBuilder.conts.widget.style.position = 'fixed';
        }
      },
      orderButton: {
        click: function (event) {
          var total = basket.getTotal();
          if (total.quantity > 0) {
            params.price = total.price;
            params.overflow = null;
            document.body.style.overflow = 'unset';
            initOrder();
            sendGoals('created', event);
          }
        }
      },
      basketClean: {
        click: function (event) {
          basket.clean();
          htmlBuilder.hide.basket();
          if (!!params.overflow) {
            document.body.style.overflow = params.overflow;
          } else {
            document.body.style.overflow = 'unset';
          }
          event.preventDefault();
        }
      },
      basketContinue: {
        click: function (event) {
          htmlBuilder.hide.basket();
          if (!!params.overflow) {
            document.body.style.overflow = params.overflow;
          } else {
            document.body.style.overflow = 'unset';
          }
          event.preventDefault();
        }
      },
      closeX: {
        click: function (event) {
          htmlBuilder.hide.basket();
          if (!!params.overflow) {
            document.body.style.overflow = params.overflow;
          } else {
            document.body.style.overflow = 'unset';
          }
          event.preventDefault();
        }
      },
      overlay: {
        click: function (event) {
          htmlBuilder.hide.basket();
          if (!!params.overflow) {
            document.body.style.overflow = params.overflow;
          } else {
            document.body.style.overflow = 'unset';
          }
          event.preventDefault();
        }
      }
    },
    getCountryCode = function (country) {
      switch (country) {
        case LANG.countries.BY:
        case LANG.countries.BY2:
          params.country = 'BY';
          return 'BY';
        case LANG.countries.KZ:
          params.country = 'KZ';
          return 'KZ';
        case LANG.countries.RU:
          params.country = 'RU';
          return 'RU';
      }
      return null;
    },
    flushDimensions = function () {
      var dDimensions = htmlBuilder.conts.widget.getAttribute('data-dimensions'),
        dWeight = htmlBuilder.conts.widget.getAttribute('data-weight');
      if (dDimensions !== null) {
        params.dimensions = JSON.parse(dDimensions);
        if (!parseInt(params.dimensions.width)) {
          params.dimensions.width = 0;
        }
        if (!parseInt(params.dimensions.length)) {
          params.dimensions.length = 0;
        }
        if (!parseInt(params.dimensions.height)) {
          params.dimensions.height = 0;
        }
      } else {
        params.dimensions = {
          length: 0,
          width: 0,
          height: 0
        };
      }
      if (dWeight !== null) {
        params.weight = parseFloat(dWeight).toFixed(2);
      } else {
        params.weight = 0;
      }
    },
    suggestSettlement = function (data) {
      var jsonData = {
        method: 'suggestSettlement',
        params: data
      };
      var countryCode = getCountryCode(params.country);
      if (countryCode !== null) {
        jsonData.params.country_code = countryCode;
      }
      sendRequest(jsonData, showLocations);
    },
    calculateShipping = function () {
      htmlBuilder.show.wait();
      flushDimensions();
      var jsonData = {
        method: 'simpleCalculate',
        params: {
          length: params.dimensions.length,
          width: params.dimensions.width,
          height: params.dimensions.height,
          weight: params.weight,
          cod: params.cod ? params.price : 0,
          declared_cost: params.price,
          kladr_id: params.location.kladr_id,
          basket: basket.get()
        }
      };
      if (params.payment === 'card' && params.cod > 0) {
        jsonData.params.card = true;
      }
      if (params.courier !== null) {
        jsonData.params.courier = params.courier;
      }
      if (params.externalId !== null) {
        jsonData.params.external_id = params.externalId;
      }
      var countryCode = getCountryCode(params.location.parents[params.location.parents.length - 1]);
      if (['BY', 'KZ'].indexOf(countryCode) !== -1) {
        jsonData.params.country_code = countryCode;
        jsonData.params.cod = 0;
      }
      sendRequest(jsonData, showMethods);
    },
    setDeliveryPoints = function (data) {
      var cacheParams = [data.source.params.shipping_method, data.source.params.kladr_id, data.source.params.limits.weight, data.source.params.limits.length, data.source.params.limits.width, data.source.params.limits.height, params.cod, data.source.params.shipping_method.join('|')];
      if (params.cod && params.payment !== null) {
        cacheParams.push(params.payment);
      }
      var cacheId = 'pvz' + cacheParams.join('|');
      cache.set(cacheId, data.result);
      oPvz.add(data.result);
      htmlBuilder.hide.wait();
      oPvz.count();
      checkPvz();
      htmlBuilder.create.pvzList();
      if (!isEmptyObj(deliveries.pvz.list) && params.deliveryType == 'pvz' && oPvz.getCurrent() === null) {
        htmlBuilder.show.pvzPicker();
        htmlBuilder.map.init();
      }
    },
    showLocations = function (data) {
      try {
        var arLocations = data.result,
          sLength = arLocations.length,
          arVariants = [],
          lowerSearch = data.source.params.query.toLowerCase();
        for (var i = 0; i < sLength; i++) {
          var lowerCity = arLocations[i].name.toLowerCase();
          if (lowerCity.indexOf(lowerSearch) === 0) {
            var variant = {
              type: arLocations[i].type_short,
              kladr_id: arLocations[i].kladr_id,
              city: arLocations[i].name,
              readable: arLocations[i].readable_parents,
              region: arLocations[i].administrative_area,
              country: arLocations[i].country.name
            };
            arVariants.push(variant);
          }
        }
        fireEvent('onLocationSearch', arVariants);
        htmlBuilder.create.settlementVariants(data.source.params.query, arVariants);
        htmlBuilder.hide.deliveriesGroup();
        htmlBuilder.hide.courierVariants();
        htmlBuilder.hide.deliveryPoint();
        htmlBuilder.hide.russianPost();
        htmlBuilder.hide.paymentGroup();
      } catch (error) {
        this.error(error.message);
      }
    },
    showMethods = function (data) {
      try {
        params.dimensions.length = data.result.request.length;
        params.dimensions.width = data.result.request.width;
        params.dimensions.height = data.result.request.height;
        params.weight = data.result.request.weight;
        params.forceDimensions = true;
        methods = data.result.methods;
        payments = data.result.payments;
        if (data.result.request.cod == 0) {
          params.cod = false;
        }
        var sLength = methods.length,
          type = null,
          days = null,
          isPvzExists = false;
        deliveries.flush();
        for (var i = 0; i < sLength; i++) {
          switch (methods[i].method.category) {
            case 'to-door':
            case 'delivery-point-to-door':
            case 'door-to-door':
              type = 'courier';
              break;
            case 'delivery-point':
            case 'door-to-delivery-point':
            case 'delivery-point-to-delivery-point':
              type = 'pvz';
              isPvzExists = true;
              break;
            case 'post-office':
              type = 'post';
              break;
          }
          deliveries.add(type, methods[i]);
          if (params.fixedDeliveryPrice !== null) {
            methods[i].cost.total.readable = params.fixedDeliveryPrice + " " + LANG.rub;
            methods[i].cost.total.sum = params.fixedDeliveryPrice;
          }
          if (deliveries[type].cost === 0 || (parseFloat(deliveries[type].cost) > parseFloat(methods[i].cost.total.sum))) {
            deliveries[type].cost = parseFloat(methods[i].cost.total.sum).toFixed(2);
          }
          if (!!methods[i].days) {
            days = parseInt(methods[i].days);
            if (deliveries[type].time === 0 || (deliveries[type].time > days) && !!days) {
              deliveries[type].time = methods[i].days;
            }
          }
        }
        oPvz.flush();
        if (isPvzExists) {
          htmlBuilder.show.wait();
          getPvz();
        } else {
          htmlBuilder.hide.wait();
        }
        htmlBuilder.create.deliveryVariants();
        htmlBuilder.hide.courierVariants();
        htmlBuilder.hide.deliveryPoint();
        htmlBuilder.hide.russianPost();
        if (deliveries.hasOwnProperty(params.deliveryType) && !isEmptyObj(deliveries[params.deliveryType].list)) {
          switch (params.deliveryType) {
            case 'courier':
              htmlBuilder.create.courierVariants();
              htmlBuilder.show.courierVariants();
              break;
            case 'pvz':
              checkPvz();
              htmlBuilder.create.pvzList();
              htmlBuilder.show.deliveryPoint();
              break;
            case 'post':
              params.deliveryPrice = deliveries.post.cost;
              showPrices();
              htmlBuilder.show.russianPost();
              break;
          }
        } else {
          params.deliveryType = null;
          params.deliveryMethod = null;
        }
        htmlBuilder.show.deliveriesGroup();
      } catch (error) {
        this.error(error.message);
      }
    },
    getPvz = function () {
      try {
        var i, jsonData = {
            wk: params.wk,
            method: 'getDeliveryPoints',
            params: {
              shipping_method: [],
              kladr_id: params.location.kladr_id,
              cod: params.cod,
              limits: {
                weight: params.weight,
                length: params.dimensions.length,
                width: params.dimensions.width,
                height: params.dimensions.height
              }
            }
          },
          cacheParams = [params.location.kladr_id, params.weight, params.dimensions.length, params.dimensions.width, params.dimensions.height, params.cod];
        if (params.cod && params.payment === 'card') {
          jsonData.params.card = true;
        }
        for (var i = 0; i < deliveries.pvz.list.length; i++) {
          jsonData.params.shipping_method.push(deliveries.pvz.list[i].method.id);
          cacheParams.push(id);
        }
        if (params.cod && params.payment !== null) {
          cacheParams.push(params.payment);
        }
        var cachekey = "pvz" + cacheParams.join("|"),
          arPvzCache = cache.get(cachekey);
        if (!!arPvzCache) {
          oPvz.add(arPvzCache);
        } else {
          sendRequest(jsonData, setDeliveryPoints);
        }
      } catch (error) {
        this.error(error.message);
      }
    },
    checkPvz = function () {
      var currentPvz = oPvz.getCurrent();
      if (currentPvz !== null) {
        if (params.cod) {
          if ((params.payment === 'cash' && !currentPvz.cod) || (params.payment === 'card' && !currentPvz.card)) {
            nullPvz();
            validate.error('pvzItem', LANG.validation.pvz);
          }
        }
        if (params.deliveryType === 'pvz') {
          var pvzMethodId = currentPvz.shipping_method,
            pvzMethod = deliveries.getPvz(pvzMethodId);
          if (pvzMethod !== null) {
            params.deliveryPrice = pvzMethod.cost.total.sum;
            htmlBuilder.conts.pvzItem.querySelector('._shiptor_widget_deliverypoint_cost').innerHTML = pvzMethod.cost.total.readable;
            showPrices();
          }
        }
      }
    },
    fireEvent = function (eventName, data) {
      var event = new CustomEvent(eventName, {
        detail: data
      });
      if (!!htmlBuilder.conts.widget.dispatchEvent) {
        htmlBuilder.conts.widget.dispatchEvent(event);
      } else {
        htmlBuilder.conts.widget.fireEvent(event.eventType, event);
      }
    },
    addEventListener = function (eventName, node, handler) {
      if (typeof jQuery != 'undefined') {
        $(node).on(eventName, handler);
      } else {
        node.addEventListener(eventName, handler);
      }
    },
    cache = {
      set: function (key, value) {
        CACHE[key] = value;
      },
      get: function (key) {
        if (CACHE.hasOwnProperty(key)) {
          return CACHE[key];
        } else {
          return null;
        }
      }
    },
    getAnimationEvent = function () {
      if (!!getAnimationEvent.eventName) {
        return getAnimationEvent.eventName;
      }
      var animations = {
          "transition": "animationend",
          "oanimationend": "oanimationend",
          "MSAnimationEnd": "MSAnimationEnd",
          "webkitAnimationEnd": "webkitAnimationEnd"
        },
        i;
      for (i in animations) {
        if (htmlBuilder.conts.widget.style[i] !== undefined) {
          getAnimationEvent.eventName = animations[i];
          break;
        }
      }
      if (!getAnimationEvent.eventName) {
        getAnimationEvent.eventName = animations.transition;
      }
      return getAnimationEvent.eventName;
    },
    sendGoals = function (status, event) {
      var goalsStatuses = {
          created: {
            ya: 'Shiptor_Checkout_order_add',
            ga: 'order_add',
            fp: 'InitiateCheckout'
          },
          saved: {
            ya: 'Shiptor_Checkout_order_created',
            ga: 'order_created',
            fp: 'Lead'
          },
          paid: {
            ya: 'Shiptor_Checkout_order_payment',
            ga: 'payment',
            fp: 'Purchase'
          }
        },
        event_name = 'event_name';
      if (!!event) {
        event_name = event;
      }
      if (!goalsStatuses[status] || !params.analytics) {
        return;
      }
      if (!!params.analytics.ya && typeof Ya !== "undefined") {
        window['yaCounter' + params.analytics.ya].reachGoal(goalsStatuses[status].ya);
      }
      if (!!params.analytics.ga && typeof ga !== "undefined") {
        if (typeof gtag !== "undefined") {
          gtag('event', event_name.type, {
            'event_category': 'Shiptor_Checkout',
            'event_label': goalsStatuses[status].ga
          });
        } else {
          ga('send', 'event', 'Shiptor_Checkout', goalsStatuses[status].ga);
        }
      }
      if (!!params.analytics.fbp && typeof fbq !== "undefined") {
        fbq('track', goalsStatuses[status].fp);
      }
    },
    basket = {
      basketLengthLimit: 1000,
      add: function (data, wareId, quantity) {
        quantity = (quantity ? quantity : 1);
        if (!wareId)
          return false;
        var bask = this.get(),
          ware = data.result;
        if (!!ware) {
          if (!!bask.hasOwnProperty(wareId)) {
            bask[wareId].quantity += quantity;
            fireEvent('onBasketUpdate', bask[wareId]);
          } else {
            bask[wareId] = {
              id: wareId,
              name: ware.name,
              price: !isNaN(ware.retailPrice) ? parseFloat(ware.retailPrice).toFixed(2) : 0,
              quantity: quantity,
              length: ware.length,
              width: ware.width,
              height: ware.height,
              weight: ware.weight,
              url: ware.url
            };
            fireEvent('onBasketAdd', bask[wareId]);
          }
          basket.set(bask);
          if (!!htmlBuilder.conts.frameBasket) {
            if (htmlBuilder.conts.frameBasket.classList.contains('_shiptor_widget_animate')) {
              htmlBuilder.conts.frameBasket.classList.remove("_shiptor_widget_animate");
            }
            htmlBuilder.conts.frameBasket.classList.remove("_shiptor_widget_clear");
            htmlBuilder.conts.frameBasket.classList.add("_shiptor_widget_animate");
          }
          this.calculate();
          if (params.basket.showOnAdd) {
            basketHandlers.iconBasket.click({});
          }
        }
      },
      changeQuantity: function (wareId, quantity) {
        var bask = this.get();
        if (!!bask.hasOwnProperty(wareId) && parseInt(quantity) > 0) {
          bask[wareId].quantity = parseInt(quantity);
          fireEvent('onBasketUpdate', bask[wareId]);
          this.set(bask);
        }
      },
      remove: function (wareId) {
        var bask = this.get();
        if (!!bask.hasOwnProperty(wareId)) {
          fireEvent('onBasketRemove', bask[wareId]);
          delete bask[wareId];
        }
        this.set(bask);
      },
      clean: function () {
        var bask, i = 0;
        do {
          bask = cookie.get('_sh_w_basket' + (i == 0 ? '' : i));
          cookie.delete('_sh_w_basket' + (i == 0 ? '' : i));
          i++;
        } while (bask !== null);
        fireEvent('onBasketClean', {});
        this.calculate();
      },
      get: function () {
        var i = 0,
          basketString = '',
          bask = cookie.get('_sh_w_basket');
        if (!bask) {
          bask = {};
        } else {
          while (bask.length > 0) {
            basketString += bask;
            if (bask.length < this.basketLengthLimit) {
              break;
            }
            i++;
            bask = cookie.get('_sh_w_basket' + i);
            if (bask === null) {
              break;
            }
          }
          try {
            bask = JSON.parse(basketString);
          } catch (e) {
            console.warn(e.message);
            this.clean();
            return {};
          }
        }
        return bask;
      },
      set: function (bask) {
        var stringifiedBasket = JSON.stringify(bask),
          basketLength = stringifiedBasket.length,
          cutLimit, i = 0;
        if (basketLength > this.basketLengthLimit) {
          while (stringifiedBasket.length > 0) {
            cutLimit = stringifiedBasket.substr(0, this.basketLengthLimit);
            if (cutLimit.length > 0) {
              cookie.set('_sh_w_basket' + (i == 0 ? '' : i), cutLimit, {
                expires: SECONDS.DAY
              });
              i++;
              stringifiedBasket = stringifiedBasket.substr(this.basketLengthLimit, basketLength);
            } else {
              break;
            }
          }
        } else {
          cookie.set('_sh_w_basket', stringifiedBasket, {
            expires: SECONDS.DAY
          });
        }
        this.calculate();
      },
      setDimensions: function () {
        if (isEmptyObj(params.dimensions)) {
          params.dimensions = {
            length: 0,
            width: 0,
            height: 0
          };
          params.weight = 0;
        }
      },
      getTotal: function () {
        var bask = this.get(),
          total = {
            price: 0,
            quantity: 0
          };
        if (bask !== {}) {
          for (var wareId in bask) {
            if (!bask.hasOwnProperty(wareId)) {
              continue;
            }
            total.quantity += parseInt(bask[wareId].quantity);
            total.price += parseFloat(bask[wareId].price) * parseInt(bask[wareId].quantity);
          }
        }
        total.price = total.price.toFixed(2);
        this.setDimensions();
        return total;
      },
      updateCounter: function () {
        var total = this.getTotal(),
          strQuantity = total.quantity.toString(),
          cropped;
        if (!!htmlBuilder.conts.counter) {
          htmlBuilder.conts.counter.innerText = total.quantity;
          switch (strQuantity.length) {
            case 1:
            case 2:
            case 4:
            case 7:
              htmlBuilder.conts.counter.style.fontSize = "22px";
              htmlBuilder.conts.counter.style.top = "10%";
              if (strQuantity.length == 4) {
                cropped = Math.round(total.quantity / 1000) + LANG.basket.t;
                htmlBuilder.conts.counter.innerText = cropped;
              }
              if (strQuantity.length == 7) {
                cropped = Math.round(total.quantity / 1000000) + LANG.basket.m;
                htmlBuilder.conts.counter.innerText = cropped;
              }
              break;
            case 3:
            case 5:
            case 6:
            case 8:
              htmlBuilder.conts.counter.style.fontSize = "16px";
              htmlBuilder.conts.counter.style.top = "17%";
              if (strQuantity.length == 5) {
                cropped = Math.round(total.quantity / 1000) + LANG.basket.t;
                htmlBuilder.conts.counter.innerText = cropped;
              }
              if (strQuantity.length == 6) {
                cropped = (total.quantity / 1000000).toFixed(1) + LANG.basket.m;
                htmlBuilder.conts.counter.innerText = cropped;
              }
              if (strQuantity.length == 8) {
                cropped = Math.round(total.quantity / 1000000) + LANG.basket.m;
                htmlBuilder.conts.counter.innerText = cropped;
              }
              break;
            default:
              htmlBuilder.conts.counter.innerHTML = "&#8734;";
              break;
          }
          htmlBuilder.conts.counter.setAttribute('data-unit', getPluralEnum.wares(total.quantity).split(' ').slice(1));
        }
      },
      calculate: function () {
        var total = this.getTotal(),
          that = this;
        if (!!htmlBuilder.conts.priceWaresBasket) {
          htmlBuilder.conts.priceWaresBasket.innerText = total.price;
        }
        if (!!htmlBuilder.conts.priceWares) {
          htmlBuilder.conts.priceWares.innerText = total.price;
        }
        params.price = total.price;
        if (total.quantity > 0) {
          if (!!htmlBuilder.conts.orderButton) {
            htmlBuilder.conts.orderButton.disabled = false;
            htmlBuilder.conts.basketClean.disabled = false;
          }
          if (!!htmlBuilder.conts.frameBasket && htmlBuilder.conts.frameBasket.classList.contains('_shiptor_widget_animate')) {
            htmlBuilder.conts.frameBasket.addEventListener(getAnimationEvent(), function () {
              that.updateCounter();
              htmlBuilder.conts.frameBasket.classList.remove("_shiptor_widget_animate");
            }, {
              once: true
            });
          } else {
            this.updateCounter();
          }
        } else {
          if (!!htmlBuilder.conts.orderButton) {
            htmlBuilder.conts.orderButton.disabled = true;
            htmlBuilder.conts.basketClean.disabled = true;
          }
          if (!!htmlBuilder.conts.frameBasket) {
            htmlBuilder.conts.frameBasket.classList.add('_shiptor_widget_clear');
          }
        }
        htmlBuilder.create.basketWareList();
      },
      isEmpty: function () {
        var bask = this.get();
        return isEmptyObj(bask);
      }
    },
    sendOrder = function () {
      var basketList = basket.get(),
        jsonData = {
          method: 'addOrder',
          params: {
            version: VERSION,
            userAgent: window.navigator.userAgent,
            length: params.dimensions.length,
            width: params.dimensions.width,
            height: params.dimensions.height,
            weight: params.weight,
            price: params.price,
            deliveryPrice: params.deliveryPrice,
            declaredCost: parseFloat(params.price).toFixed(2),
            cod: params.cod,
            payment: (params.payment == 'card_online' ? 'card' : params.payment),
            departure: {
              shipping_method: params.deliveryMethod,
              comment: params.comment,
              address: {
                country: 'RU',
                name: params.name,
                surname: params.surname,
                email: params.email,
                phone: params.phone,
                kladr_id: params.location.kladr_id,
                settlement: params.location.city
              }
            },
            products: []
          }
        };
      if (params.payment === 'card' && params.cod === true) {
        jsonData.params.cashless_payment = true;
      }
      if (params.externalId !== null) {
        jsonData.method = 'updateOrder';
        jsonData.params.external_id = params.externalId;
      }
      for (var countryCode in LANG.countries) {
        if (!LANG.countries.hasOwnProperty(countryCode)) {
          continue;
        }
        if (params.location.parents.indexOf(LANG.countries[countryCode]) !== -1) {
          jsonData.params.departure.address.country = countryCode;
        }
      }
      switch (params.deliveryType) {
        case 'courier':
        case 'post':
          if (params.location.parents.length > 1) {
            jsonData.params.departure.address.administrative_area = params.location.parents[0];
          }
          jsonData.params.departure.address.street = params.street;
          jsonData.params.departure.address.house = params.house;
          jsonData.params.departure.address.apartment = params.flat;
          if (params.deliveryType === 'post') {
            jsonData.params.departure.address.postal_code = params.zip;
          }
          break;
        case 'pvz':
          jsonData.params.departure.delivery_point = oPvz.current;
          break;
      }
      for (var ware in basketList) {
        if (basketList.hasOwnProperty(ware)) {
          jsonData.params.products.push(basketList[ware]);
        }
      }
      htmlBuilder.show.wait();
      sendRequest(jsonData, function (data) {
        htmlBuilder.hide.wait();
        if (!!data.result) {
          orderSent = true;
          var successText = LANG.success + data.result.external_id;
          fireEvent('onOrderSend', data.result);
          basket.clean();
          document.querySelector('#shiptor_widget').style.display = 'none';
          //htmlBuilder.hide.footer();
          //htmlBuilder.hide.header();
          // htmlBuilder.create.info(successText);
          if (data.result.payment == 'card' && params.cod === false) {
            var url = params.url.replace('/api', '') + '/payment?order=' + data.result.external_id + '&wk=' + params.wk;
            htmlBuilder.conts.gotoPayBtn = htmlBuilder.create.tag({
              name: 'button',
              attrs: {
                type: 'button',
                'data-url': url,
                'class': '_shiptor_widget_button _shiptor_widget_button_default'
              },
              text: LANG.goto_payment
            });
            htmlBuilder.conts.content.appendChild(htmlBuilder.conts.gotoPayBtn);
            htmlBuilder.conts.gotoPayBtn.onclick = function (e) {
              var url = this.getAttribute('data-url');
              location.href = url;
            };
          } else {
            // Custom!!!
            window.location = 'https://mystarvit.ru/spasibo/';
            // end Custom!!!
            htmlBuilder.conts.successButton = htmlBuilder.create.tag({
              name: 'button',
              attrs: {
                type: 'button',
                'class': '_shiptor_widget_button _shiptor_widget_button_default'
              },
              text: LANG.ok
            });
            htmlBuilder.conts.successButton.onclick = function (e) {
              location.reload();
            };
            htmlBuilder.conts.content.appendChild(htmlBuilder.conts.successButton);
          }
          htmlBuilder.conts.content.style.textAlign = 'center';
          htmlBuilder.conts.frame.style.height = 'auto';
          htmlBuilder.conts.frame.style.paddingBottom = '20px';
          htmlBuilder.conts.title.style.color = 'white';
        }
      });
    },
    showPrices = function () {
      htmlBuilder.conts.priceDelivery.innerText = params.deliveryPrice;
      htmlBuilder.conts.priceTotal.innerText = (parseFloat(params.price) + parseFloat(params.deliveryPrice)).toFixed(2);
    },
    selectPvz = function () {
      try {
        var pvzInfo = oPvz.getCurrent(),
          shippingMethodId = pvzInfo.shipping_method,
          shippingMethod = deliveries.getPvz(shippingMethodId),
          arPayments = [];
        pvzInfo.cost = shippingMethod.cost.total.readable;
        params.deliveryPrice = parseFloat(shippingMethod.cost.total.sum);
        showPrices();
        pvzInfo.shipping_days = shippingMethod.days;
        fireEvent('onPvzSelect', pvzInfo);
        htmlBuilder.create.pvz(pvzInfo);
        if (pvzInfo.cod) {
          arPayments.push({
            type: 'cash',
            name: LANG.payment.cash
          });
        }
        if (pvzInfo.card) {
          arPayments.push({
            type: 'card',
            name: LANG.payment.card
          });
        }
        htmlBuilder.create.payGroup(arPayments);
      } catch (error) {
        JCShiptorWidgetOrder.instance.error(error.message);
      }
    },
    validate = {
      valid: true,
      phone: {
        RU: 12,
        KZ: 12,
        BY: 13
      },
      run: function () {
        this.valid = true;
        this.city();
        this.method();
        this.checkAgreement('customerAgreement');
        if (this.valid) {
          this.fields();
          this.pay();
        }
        if (!this.valid) {
          this.scrollToError();
        }
        return this.valid;
      },
      city: function () {
        if (!params.location.kladr_id || params.location.kladr_id.length < 5) {
          this.error('city');
        }
      },
      method: function () {
        var methodType = htmlBuilder.conts.deliveryMethods.querySelector('[name="delivery"]:checked');
        if (!methodType) {
          this.error('deliveryMethods', LANG.validation.methods);
        } else {
          switch (methodType.value) {
            case 'courier':
              this.courierMethod();
              break;
            case 'post':
            case 'pvz':
              break;
            default:
              this.error('deliveryMethods', LANG.required_methods);
          }
        }
      },
      courierMethod: function () {
        var courierMethod = parseInt(htmlBuilder.conts.courierSelect.value);
        if (courierMethod === 0) {
          this.error('courierSelect');
        }
      },
      fields: function () {
        var methodType = htmlBuilder.conts.deliveryMethods.querySelector('[name="delivery"]:checked'),
          textFields = [];
        switch (methodType.value) {
          case 'courier':
            textFields = ['courierStreet', 'courierFioName', 'courierFioSurname'];
            for (var i = 0; i < textFields.length; i++) {
              this.checkText(textFields[i]);
            }
            this.checkHouse('courierHouse');
            this.checkFlat('courierFlat');
            this.checkPhone('courierPhone');
            this.checkEmail('courierEmail');
            break;
          case 'pvz':
            if (oPvz.getCurrent() === null) {
              this.error('pvzItem', LANG.validation.pvz);
            }
            textFields = ['pvzFioName', 'pvzFioSurname'];
            for (var i = 0; i < textFields.length; i++) {
              this.checkText(textFields[i]);
            }
            this.checkPhone('pvzPhone');
            this.checkEmail('pvzEmail');
            break;
          case 'post':
            this.checkZip('postZip');
            textFields = ['postStreet', 'postFioName', 'postFioSurname'];
            for (var i = 0; i < textFields.length; i++) {
              this.checkText(textFields[i]);
            }
            this.checkHouse('postHouse');
            this.checkFlat('postFlat');
            this.checkPhone('postPhone');
            this.checkEmail('postEmail');
            break;
        }
      },
      pay: function () {
        if (htmlBuilder.conts.paymentMethods) {
          var payType = htmlBuilder.conts.paymentMethods.querySelector('[name="payment"]:checked');
          if (!payType) {
            this.error('paymentMethods');
          }
        }
      },
      error: function (node, errorText) {
        if (typeof (node) !== 'object') {
          node = htmlBuilder.conts[node];
        }
        if (!errorText) {
          errorText = LANG.validation.field;
        }
        this.valid = false;
        if (node.className.indexOf('_shiptor_widget_methods') !== -1 || node.className.indexOf('_shiptor_widget_deliverypoint_item') !== -1) {
          this.addErrorClass(node, errorText);
        } else {
          this.addErrorClass(node.parentNode, errorText);
        }
        return this.valid;
      },
      addErrorClass: function (node, errorText) {
        if (!!node) {
          var classes = node.className;
          if (classes.indexOf('_shiptor_widget_error') === -1) {
            classes += ' _shiptor_widget_error';
            node.className = classes;
          }
          node.setAttribute('data-error', errorText);
        }
      },
      removeErrorClass: function (node) {
        if (!!node) {
          var classes = node.className;
          classes = classes.replace('_shiptor_widget_error', '');
          node.setAttribute('data-error', '');
          node.className = classes;
        }
      },
      checkZip: function (field) {
        var node = (typeof (field) === 'object') ? field : htmlBuilder.conts[field],
          zip = node.value.trim(),
          isEmpty = Boolean(zip.length <= 0),
          isValid = Boolean(/^\d{6}$/.test(zip));
        if (isEmpty) {
          return this.error(field);
        } else if (!isValid) {
          return this.error(field, LANG.validation.zip);
        }
        return true;
      },
      checkPhone: function (field) {
        var node = (typeof (field) === 'object') ? field : htmlBuilder.conts[field],
          phone = node.value.trim(),
          isEmpty = Boolean(phone.length <= 0),
          isValid = this.testPhoneByCountry(phone);
        if (isEmpty) {
          return this.error(field);
        } else if (!isValid) {
          return this.error(field, LANG.validation.phone);
        }
        return true;
      },
      testPhoneByCountry: function (phone) {
        var result = false;
        switch (params.country) {
          case 'RU':
          default:
            result = Boolean(/^(\+7|8)\d{10}$/i.test(phone));
            break;
          case 'BY':
            result = Boolean(/^\+375\d{9}$/i.test(phone));
            break;
          case 'KZ':
            result = Boolean(/^\+7\d{10}$/i.test(phone));
            break;
        }
        return result;
      },
      checkEmail: function (field) {
        var node = (typeof (field) === "object") ? field : htmlBuilder.conts[field],
          email = node.value.trim(),
          isEmpty = Boolean(email.length <= 0),
          isValid = Boolean(/^([a-z0-9_\-\.])+\@([a-z0-9_\-\.])+\.([a-z]{2,6})$/i.test(email));
        if (isEmpty) {
          return this.error(field);
        } else if (!isValid) {
          return this.error(field, LANG.validation.email);
        }
        return true;
      },
      checkText: function (field) {
        var node = (typeof (field) === 'object') ? field : htmlBuilder.conts[field],
          text = node.value.trim(),
          isEmpty = Boolean(text.length <= 0);
        if (isEmpty) {
          return this.error(node);
        }
        return true;
      },
      checkHouse: function (field) {
        var node = (typeof (field) === 'object') ? field : htmlBuilder.conts[field],
          house = node.value.trim(),
          isEmpty = Boolean(house.length <= 0),
          isValid = Boolean(/\d+/i.test(house));
        if (isEmpty) {
          return this.error(node);
        } else if (!isValid) {
          return this.error(field, LANG.validation.house);
        }
        return true;
      },
      checkFlat: function (field) {
        var node = (typeof (field) === 'object') ? field : htmlBuilder.conts[field],
          flat = node.value.trim(),
          isEmpty = Boolean(flat.length <= 0),
          isValid = Boolean(/\d+/i.test(flat));
        if (!isEmpty && !isValid) {
          return this.error(field, LANG.validation.flat);
        }
        return true;
      },
      checkAgreement: function (field) {
        var node = (typeof (field) === 'object') ? field : htmlBuilder.conts[field];
        if (node.checked) {
          return true;
        } else {
          return this.error(field, LANG.validation.agreement);
        }
      },
      scrollToError: function () {
        var widgetContent = htmlBuilder.conts.content,
          firstError = widgetContent.querySelector('._shiptor_widget_error');
        if (!!firstError) {
          scrollAnimate(widgetContent, firstError.offsetTop - 80, 200);
        }
      },
      duplicate: function (arConts, value) {
        for (var i = 0; i < arConts.length; i++) {
          if (!!htmlBuilder.conts[arConts[i]]) {
            htmlBuilder.conts[arConts[i]].value = value;
          }
        }
      }
    },
    scrollAnimate = function (element, to, duration) {
      if (duration <= 0)
        return;
      var difference = to - element.scrollTop,
        perTick = difference / duration * 5;
      setTimeout(function () {
        element.scrollTop = element.scrollTop + perTick;
        if (element.scrollTop === to)
          return;
        scrollAnimate(element, to, duration - 5);
      }, 5);
    },
    getDefaultParams = function () {
      var eWidget = document.querySelector("#" + id),
        dDebug = eWidget.getAttribute("data-debug"),
        dWeight = eWidget.getAttribute("data-weight"),
        dBasketShowOnAdd = eWidget.getAttribute("data-basketShowOnAdd"),
        dDimensions = eWidget.getAttribute("data-dimensions"),
        dCod = eWidget.getAttribute("data-cod"),
        dMode = eWidget.getAttribute("data-mode"),
        dUrl = eWidget.getAttribute("data-url"),
        dKladr = eWidget.getAttribute("data-kladr"),
        dCourier = eWidget.getAttribute("data-courier"),
        dCountry = eWidget.getAttribute("data-country"),
        dExternalId = eWidget.getAttribute("data-externalId"),
        dCloseBtnText = eWidget.getAttribute("data-closeText"),
        dFixedPrice = eWidget.getAttribute("data-fixedDeliveryPrice"),
        dRound = eWidget.getAttribute("data-round"),
        dDeclaredCost = eWidget.getAttribute("data-declaredCost"),
        dLinkYmaps = eWidget.getAttribute("data-linkYmaps"),
        dWk = eWidget.getAttribute("data-wk"),
        dDomain = eWidget.getAttribute("data-domain"),
        dBasketPos = eWidget.getAttribute("data-basketPos"),
        dAnalyticsYa = eWidget.getAttribute("data-yaMetrika"),
        dAnalyticsGa = eWidget.getAttribute("data-gaAnalytics"),
        dAnalyticsFbp = eWidget.getAttribute("data-fbPixel");
      if (dDimensions !== null) {
        params.dimensions = JSON.parse(dDimensions);
        if (!parseInt(params.dimensions.width) || !parseInt(params.dimensions.length) && !parseInt(params.dimensions.height)) {}
      }
      if (dBasketShowOnAdd !== null) {
        params.basket.showOnAdd = Boolean(dBasketShowOnAdd === "1");
      }
      if (dWeight !== null) {
        params.weight = parseFloat(dWeight).toFixed(2);
      }
      if (dUrl !== null) {
        params.url = dUrl;
      }
      if (dDebug !== null) {
        params.debug = Boolean(dDebug === "1");
      }
      if (dCod !== null) {
        params.cod = Boolean(dCod === "1");
      }
      if (dMode !== null) {
        if (["popup", "inline"].indexOf(dMode) !== -1) {
          params.mode = dMode;
        }
      }
      if (dLinkYmaps !== null) {
        params.linkYmaps = Boolean(dLinkYmaps === "1");
      }
      if (dKladr !== null) {
        params.location = {
          kladr_id: dKladr,
          city: eWidget.getAttribute("data-city"),
          parents: []
        };
        if (dCountry !== null && [LANG.countries.BY, LANG.countries.BY2, LANG.countries.KZ, LANG.countries.RU].indexOf(dCountry) !== -1) {
          params.location.parents = [dCountry];
          params.country = getCountryCode(dCountry);
        }
      }
      if (dCourier !== null) {
        if (["shiptor", "boxberry", "dpd", "iml", "russian-post", "pickpoint", "cdek", "shiptor-one-day", "shiptor-oversize"].indexOf(dCourier) !== -1) {
          params.courier = dCourier;
        }
      }
      if (dDeclaredCost !== null) {
        if (parseFloat(dDeclaredCost) >= 10) {
          params.declaredCost = parseFloat(dDeclaredCost);
        }
      }
      if (dCloseBtnText !== null) {
        params.closeText = dCloseBtnText.toString();
      }
      if (dFixedPrice !== null) {
        params.fixedDeliveryPrice = parseFloat(dFixedPrice);
      }
      if (dRound !== null) {
        params.round = dRound;
      }
      if (dWk !== null) {
        params.wk = dWk.toString();
      }
      if (dExternalId !== null) {
        params.externalId = dExternalId.toString();
      }
      if (dDomain !== null) {
        params.domain = dDomain.toString();
      }
      if (dBasketPos !== null) {
        params.basketPos = dBasketPos.toString();
        if (allowedBasketPos.indexOf(params.basketPos) === -1) {
          params.basketPos = 'right';
        }
      }
      if (dAnalyticsYa !== null) {
        params.analytics.ya = dAnalyticsYa.toString();
      }
      if (dAnalyticsGa !== null) {
        params.analytics.ga = Boolean(dAnalyticsGa === "1");
      }
      if (dAnalyticsFbp !== null) {
        params.analytics.fbp = Boolean(dAnalyticsFbp === "1");
      }
    },
    htmlBuilder = {
      stylesHref: "https://widget.shiptor.ru/embed/styles/css/order.css",
      conts: {
        widget: document.querySelector("#" + id)
      },
      create: {
        tag: function (tag) {
          var eTag = document.createElement(tag.name);
          for (var field in tag.attrs) {
            if (tag.attrs.hasOwnProperty(field)) {
              switch (field) {
                default:
                  eTag.setAttribute(field, tag.attrs[field]);
                  break;
                case "value":
                  eTag.value = tag.attrs[field];
                  break;
              }
            }
          }
          if (!!tag.childs) {
            for (var i = 0; i < tag.childs.length; i++) {
              eTag.appendChild(this.tag(tag.childs[i]));
            }
          }
          if (!!tag.text) {
            eTag.innerText = tag.text;
          }
          if (!!tag.html) {
            eTag.innerHTML = tag.html;
          }
          if (!!tag.styles) {
            for (var name in tag.styles) {
              if (tag.styles.hasOwnProperty(name)) {
                eTag.style[name] = tag.styles[name];
              }
            }
          }
          return eTag;
        },
        stylesAndScripts: function () {
          var head = document.querySelector("head"),
            isStyle = document.querySelector('[href="' + htmlBuilder.stylesHref + '"]');
          if (!!head) {
            if (!isStyle) {
              head.appendChild(this.tag({
                name: "link",
                attrs: {
                  "rel": "stylesheet",
                  "href": htmlBuilder.stylesHref
                }
              }));
              if (params.linkYmaps) {
                head.appendChild(this.tag({
                  name: "script",
                  attrs: {
                    "type": "text/javascript",
                    "src": "//api-maps.yandex.ru/2.1/?lang=ru_RU" + (params.debug ? '&mode=debug' : '')
                  }
                }));
              }
            }
          } else {
            error(LANG.no_head);
          }
        },
        widget: function () {
          htmlBuilder.conts.widget = this.tag({
            name: "div",
            attrs: {
              "class": "_shiptor_widget",
              id: "shiptor_widget"
            }
          });
          document.body.appendChild(htmlBuilder.conts.widget);
        },
        overlay: function () {
          if (!htmlBuilder.conts.overlay) {
            htmlBuilder.conts.overlay = this.tag({
              name: "div",
              attrs: {
                "class": "_shiptor_widget_overlay"
              }
            });
            htmlBuilder.conts.widget.appendChild(htmlBuilder.conts.overlay);
          }
        },
        frame: function () {
          if (!htmlBuilder.conts.frame) {
            htmlBuilder.conts.frame = this.tag({
              name: "div",
              attrs: {
                "class": "_shiptor_widget_frame"
              }
            });
            htmlBuilder.conts.widget.appendChild(htmlBuilder.conts.frame);
            this.header();
            this.content();
            this.pvzPicker();
            this.footer();
          } else {
            htmlBuilder.show.frame();
          }
        },
        frameBasket: function () {
          var additionalClasses = [];
          additionalClasses.push('_shiptor_widget_frame_basket_' + params.basketPos);
          htmlBuilder.conts.frameBasket = this.tag({
            name: "div",
            attrs: {
              "class": "_shiptor_widget_frame_basket _shiptor_widget_frame_basket_ico " + additionalClasses.join(' ')
            },
            styles: {
              "display": "none"
            }
          });
          htmlBuilder.conts.widget.appendChild(htmlBuilder.conts.frameBasket);
          this.iconBasket();
          this.headerBasket();
          this.contentBasket();
          this.footerBasket();
        },
        iconBasket: function () {
          htmlBuilder.conts.iconBasket = this.tag({
            name: "div",
            attrs: {
              "class": "_shiptor_widget_basket_icon",
              "data-label": LANG.basket.to_the_basket,
              "data-message": LANG.basket.added
            },
            childs: [{
              name: "span",
              attrs: {
                "class": "_shiptor_widget_basket_counter",
                "data-label": LANG.basket.in_the_basket,
                "data-unit": LANG.basket.items5
              },
              text: "0"
            }]
          });
          htmlBuilder.conts.frameBasket.appendChild(htmlBuilder.conts.iconBasket);
          htmlBuilder.conts.counter = htmlBuilder.conts.iconBasket.querySelector("._shiptor_widget_basket_counter");
        },
        headerBasket: function () {
          htmlBuilder.conts.headerBasket = this.tag({
            name: "div",
            attrs: {
              "class": "_shiptor_widget_header"
            },
            childs: [{
              name: "div",
              attrs: {
                "class": "_shiptor_widget_title"
              },
              text: LANG.basket.head_text
            }, {
              name: "div",
              attrs: {
                "class": "_shiptor_widget_close"
              },
              html: "&#10005;"
            }]
          });
          htmlBuilder.conts.frameBasket.appendChild(htmlBuilder.conts.headerBasket);
          htmlBuilder.conts.basketTitle = htmlBuilder.conts.headerBasket.querySelector("._shiptor_widget_title");
          htmlBuilder.conts.closeX = htmlBuilder.conts.headerBasket.querySelector("._shiptor_widget_close");
        },
        contentBasket: function () {
          htmlBuilder.conts.contentBasket = this.tag({
            name: "div",
            attrs: {
              "class": "_shiptor_widget_content"
            },
            childs: [{
              name: "div",
              attrs: {
                "class": "_shiptor_widget_order_default"
              }
            }]
          });
          htmlBuilder.conts.frameBasket.appendChild(htmlBuilder.conts.contentBasket);
          htmlBuilder.conts.orderDefaultBasket = htmlBuilder.conts.contentBasket.querySelector("._shiptor_widget_order_default");
          this.basketWareList();
        },
        basketWareList: function () {
          if (!htmlBuilder.conts.wareList) {
            htmlBuilder.conts.wareList = this.tag({
              name: "ul",
              attrs: {
                "class": "_shiptor_widget_group _shiptor_widget_ware_list"
              }
            });
          } else {
            htmlBuilder.conts.wareList.innerHTML = "";
          }
          if (!basket.isEmpty()) {
            var bask = basket.get();
            for (var wareId in bask) {
              htmlBuilder.conts.wareList.appendChild(this.basketWareItem(bask[wareId]));
            }
          }
          htmlBuilder.conts.orderDefaultBasket.appendChild(htmlBuilder.conts.wareList);
        },
        basketWareItem: function (ware) {
          var name = ware.url ? {
              name: "a",
              attrs: {
                "class": "_shiptor_widget_wi_name",
                href: ware.url,
                target: "_blank"
              },
              html: ware.name
            } : {
              name: "div",
              attrs: {
                "class": "_shiptor_widget_wi_name"
              },
              text: ware.name
            },
            item = this.tag({
              name: "li",
              attrs: {
                "class": "_shiptor_widget_group _shiptor_widget_ware_item",
                "data-item": ware.id
              },
              childs: [name, {
                name: "span",
                attrs: {
                  "class": "_shiptor_widget_wi_siprice",
                  "data-r": LANG.r
                },
                text: ware.price
              }, {
                name: "div",
                attrs: {
                  "class": "_shiptor_widget_wi_cont"
                },
                childs: [{
                  name: "a",
                  html: "&#8211;",
                  attrs: {
                    "class": "_shiptor_widget_wi_quantity_down"
                  }
                }, {
                  name: "input",
                  attrs: {
                    "type": "text",
                    "class": "_shiptor_widget_wi_quantity",
                    value: ware.quantity
                  }
                }, {
                  name: "a",
                  text: "+",
                  attrs: {
                    "class": "_shiptor_widget_wi_quantity_up"
                  }
                }, {
                  name: "div",
                  attrs: {
                    "class": "_shiptor_widget_wi_price",
                    "data-r": LANG.r
                  },
                  text: (ware.price * ware.quantity).toFixed(2)
                }, {
                  name: "a",
                  attrs: {
                    title: LANG.basket.delete_item,
                    "class": "_shiptor_widget_wi_delete"
                  },
                  html: "&#10005;"
                }]
              }]
            });
          item.querySelector("._shiptor_widget_wi_delete").addEventListener("click", wareHandlers.remove);
          item.querySelector("._shiptor_widget_wi_quantity_down").addEventListener("click", wareHandlers.quantityDown);
          item.querySelector("._shiptor_widget_wi_quantity_up").addEventListener("click", wareHandlers.quantityUp);
          item.querySelector("._shiptor_widget_wi_quantity").addEventListener("input", wareHandlers.quantityChange);
          item.querySelector("._shiptor_widget_wi_quantity").addEventListener("propertychange", wareHandlers.quantityChange);
          return item;
        },
        footerBasket: function () {
          basket.calculate();
          htmlBuilder.conts.footer = this.tag({
            name: "div",
            attrs: {
              "class": "_shiptor_widget_footer _shiptor_widget_footer_basket"
            },
            childs: [{
              name: "div",
              attrs: {
                "class": "_shiptor_widget_summary"
              },
              childs: [{
                name: "div",
                attrs: {
                  "class": "_shiptor_widget_total _shiptor_widget_group"
                },
                childs: [{
                  name: "div",
                  attrs: {
                    "class": "_shiptor_widget_group_title _shiptor_widget_price_ware",
                    title: LANG.payment.total,
                    "data-r": LANG.r
                  },
                  text: (params.price ? params.price : 0)
                }]
              }, {
                name: "button",
                attrs: {
                  "class": "_shiptor_widget_button _shiptor_widget_button_default _shiptor_widget_basket_continue",
                  "type": "button"
                },
                text: LANG.basket.continue
              }, {
                name: "button",
                attrs: {
                  "class": "_shiptor_widget_button _shiptor_widget_button_default _shiptor_widget_basket_clean",
                  "type": "button"
                },
                text: LANG.basket.clean_text
              }, {
                name: "button",
                attrs: {
                  "class": "_shiptor_widget_button _shiptor_widget_button_default _shiptor_widget_order_but",
                  "type": "button"
                },
                text: LANG.basket.order_text
              }]
            }]
          });
          htmlBuilder.conts.frameBasket.appendChild(htmlBuilder.conts.footer);
          htmlBuilder.conts.priceWaresBasket = htmlBuilder.conts.footer.querySelector("._shiptor_widget_price_ware");
          htmlBuilder.conts.orderButton = htmlBuilder.conts.footer.querySelector("._shiptor_widget_footer ._shiptor_widget_order_but");
          htmlBuilder.conts.basketClean = htmlBuilder.conts.footer.querySelector("._shiptor_widget_footer ._shiptor_widget_basket_clean");
          htmlBuilder.conts.basketContinue = htmlBuilder.conts.footer.querySelector("._shiptor_widget_footer ._shiptor_widget_basket_continue");
          if (basket.isEmpty()) {
            htmlBuilder.conts.orderButton.disabled = true;
            htmlBuilder.conts.basketClean.disabled = true;
          } else {
            htmlBuilder.conts.orderButton.disabled = false;
            htmlBuilder.conts.basketClean.disabled = false;
          }
        },
        header: function () {
          htmlBuilder.conts.header = this.tag({
            name: "div",
            attrs: {
              "class": "_shiptor_widget_header"
            },
            childs: [{
              name: "div",
              attrs: {
                "class": "_shiptor_widget_title"
              },
              text: LANG.head_text
            }, {
              name: "div",
              attrs: {
                "class": "_shiptor_widget_logotype"
              },
              html: '<a href="https://shiptor.ru/" target="_blank" rel="noreferrer">Shiptor</a>'
            }, {
              name: "div",
              attrs: {
                "class": "_shiptor_widget_close"
              },
              html: "&#10005;"
            }]
          });
          htmlBuilder.conts.frame.appendChild(htmlBuilder.conts.header);
          htmlBuilder.conts.title = htmlBuilder.conts.header.querySelector("._shiptor_widget_title");
          htmlBuilder.conts.closeOrderX = htmlBuilder.conts.header.querySelector("._shiptor_widget_close");
        },
        content: function () {
          htmlBuilder.conts.content = this.tag({
            name: "div",
            attrs: {
              "class": "_shiptor_widget_content"
            },
            childs: [{
              name: "div",
              attrs: {
                "class": "_shiptor_widget_order_default"
              }
            }]
          });
          htmlBuilder.conts.frame.appendChild(htmlBuilder.conts.content);
          htmlBuilder.conts.orderDefault = htmlBuilder.conts.content.querySelector("._shiptor_widget_order_default");
          this.settlementGroup();
          this.wait();
          this.deliveriesGroup();
          this.courier();
          this.deliveryPoint();
          this.russianPost();
        },
        footer: function () {
          htmlBuilder.conts.frame.appendChild(this.tag({
            name: "div",
            attrs: {
              "class": "_shiptor_widget_footer"
            },
            childs: [{
              name: "div",
              attrs: {
                "class": "_shiptor_widget_agreement"
              }
            }, {
              name: "div",
              attrs: {
                "class": "_shiptor_widget_summary"
              },
              childs: [{
                name: "div",
                attrs: {
                  "class": "_shiptor_widget_total _shiptor_widget_group"
                },
                childs: [{
                  name: "div",
                  attrs: {
                    "class": "_shiptor_widget_group_columns"
                  },
                  childs: [{
                    name: "div",
                    attrs: {
                      "class": "_shiptor_widget_group_column"
                    },
                    childs: [{
                      name: "div",
                      attrs: {
                        "class": "_shiptor_widget_group_title _shiptor_widget_price_ware",
                        title: LANG.payment.wares,
                        "data-r": LANG.r
                      },
                      text: params.price
                    }, {
                      name: "div",
                      attrs: {
                        "class": "_shiptor_widget_group_title _shiptor_widget_price_delivery",
                        title: LANG.payment.delivery,
                        "data-r": LANG.r
                      },
                      text: "0"
                    }]
                  }, {
                    name: "div",
                    attrs: {
                      "class": "_shiptor_widget_group_column"
                    },
                    childs: [{
                      name: "div",
                      attrs: {
                        "class": "_shiptor_widget_group_title _shiptor_widget_price_total",
                        title: LANG.payment.total,
                        "data-r": LANG.r
                      },
                      text: params.price
                    }]
                  }]
                }]
              }, {
                name: "button",
                attrs: {
                  "class": "_shiptor_widget_button _shiptor_widget_button_default",
                  "type": "button"
                },
                text: params.closeText
              }]
            }]
          }));
          htmlBuilder.conts.footer = htmlBuilder.conts.frame.querySelector("._shiptor_widget_footer");
          htmlBuilder.conts.footer.querySelector("._shiptor_widget_agreement").appendChild(this.getAgreement());
          htmlBuilder.conts.customerAgreement = htmlBuilder.conts.footer.querySelector("[name='shiptor_agreement[customer]']");
          htmlBuilder.conts.closeButton = htmlBuilder.conts.footer.querySelector("._shiptor_widget_footer ._shiptor_widget_button");
          htmlBuilder.conts.priceWares = htmlBuilder.conts.footer.querySelector("._shiptor_widget_price_ware");
          htmlBuilder.conts.priceDelivery = htmlBuilder.conts.footer.querySelector("._shiptor_widget_price_delivery");
          htmlBuilder.conts.priceTotal = htmlBuilder.conts.footer.querySelector("._shiptor_widget_price_total");
          if (params.hideClose) {
            htmlBuilder.hide.closeButton();
          }
        },
        settlementGroup: function () {
          htmlBuilder.conts.settlementGroup = this.tag({
            name: "div",
            attrs: {
              "class": "_shiptor_widget_group _shiptor_widget_required"
            },
            childs: [{
              name: "h3",
              attrs: {
                "class": "_shiptor_widget_section_head"
              },
              text: LANG.settlement
            }, {
              name: "input",
              attrs: {
                "class": "_shiptor_widget_settlement",
                type: "text",
                title: LANG.settlement,
                name: "settlement",
                placeholder: LANG.settlement_placeholder,
                autocomplete: "off"
              }
            }, {
              name: "div",
              attrs: {
                "class": "_shiptor_widget_settlement_suggestions"
              },
              styles: {
                display: "none"
              },
              childs: [{
                name: "div",
                attrs: {
                  "class": "_shiptor_widget_settlement_items"
                }
              }]
            }]
          });
          htmlBuilder.conts.orderDefault.appendChild(htmlBuilder.conts.settlementGroup);
          htmlBuilder.conts.settlementSuggestions = htmlBuilder.conts.settlementGroup.querySelector("._shiptor_widget_settlement_items");
          htmlBuilder.conts.city = htmlBuilder.conts.settlementGroup.querySelector("._shiptor_widget_settlement");
        },
        settlementVariants: function (search, arVariants) {
          var variantsLength = arVariants.length;
          htmlBuilder.conts.settlementSuggestions.innerHTML = "";
          if (variantsLength > 0) {
            for (var i = 0; i < variantsLength; i++) {
              htmlBuilder.conts.settlementSuggestions.appendChild(this.tag({
                name: "div",
                attrs: {
                  'class': '_shiptor_widget_settlement_item',
                  'data-type': arVariants[i].type,
                  'data-kladr': arVariants[i].kladr_id,
                  'data-city': arVariants[i].city,
                  'data-region': arVariants[i].readable,
                  'data-country': arVariants[i].country
                },
                html: arVariants[i].type + ' ' + arVariants[i].city + ', <span class="_shiptor_widget_mute" style="font-size-adjust: 0.45">' + (arVariants[i].readable ? arVariants[i].readable + ', ' : '') + arVariants[i].country + '</span>'
              }));
            }
          } else {
            htmlBuilder.conts.settlementSuggestions.appendChild(this.tag({
              name: "div",
              attrs: {
                "class": "_shiptor_widget_settlement_item",
              },
              styles: {
                "color": "red"
              },
              text: LANG.no_settlement
            }));
          }
          htmlBuilder.show.settlementsVariants();
        },
        deliveriesGroup: function () {
          htmlBuilder.conts.deliveriesGroup = this.tag({
            name: "div",
            attrs: {
              "class": "_shiptor_widget_group _shiptor_widget_required"
            },
            childs: [{
              name: "h3",
              attrs: {
                "class": "_shiptor_widget_section_head"
              },
              text: LANG.shipment
            }, {
              name: "div",
              attrs: {
                "class": "_shiptor_widget_methods"
              }
            }]
          });
          htmlBuilder.conts.orderDefault.appendChild(htmlBuilder.conts.deliveriesGroup);
          htmlBuilder.conts.deliveryMethods = htmlBuilder.conts.deliveriesGroup.querySelector("._shiptor_widget_methods");
        },
        deliveryVariants: function () {
          var textCost, tag, i, type, variants = ['courier', 'pvz', 'post'];
          htmlBuilder.conts.deliveryMethods.innerHTML = "";
          for (i = 0; i < variants.length; i++) {
            type = variants[i];
            if (!deliveries.hasOwnProperty(type) || deliveries[type].cost === 0) {
              continue;
            }
            if (params.fixedDeliveryPrice === null) {
              switch (type) {
                case "post":
                  textCost = deliveries[type].cost + " " + LANG.rub;
                  break;
                default:
                  textCost = LANG.from + " " + deliveries[type].cost + " " + LANG.rub;
              }
            } else {
              textCost = deliveries[type].cost + " " + LANG.rub;
            }
            tag = {
              name: "label",
              attrs: {
                "class": "_shiptor_widget_methods_delivery"
              },
              childs: [{
                name: "input",
                attrs: {
                  "class": "_shiptor_widget_radio",
                  "type": "radio",
                  "name": "delivery",
                  "value": type
                }
              }, {
                name: "span",
                attrs: {
                  "class": "_shiptor_widget_methods_description"
                },
                childs: [{
                  name: "span",
                  attrs: {
                    "class": "_shiptor_widget_methods_title"
                  },
                  text: deliveries[type].name
                }, {
                  name: "span",
                  attrs: {
                    "class": "_shiptor_widget_methods_cost"
                  },
                  text: textCost
                }, {
                  name: "span",
                  attrs: {
                    "class": "_shiptor_widget_methods_time"
                  },
                  text: deliveries[type].time
                }]
              }]
            };
            if (params.deliveryType == type) {
              tag.childs[0].attrs.checked = 'checked';
            } else {
              delete tag.childs[0].attrs.checked;
            }
            htmlBuilder.conts.deliveryMethods.appendChild(this.tag(tag));
          }
        },
        courier: function () {
          htmlBuilder.conts.courier = this.tag({
            name: "div",
            attrs: {
              "class": "_shiptor_widget_order_courier"
            },
            styles: {
              display: "none"
            },
            childs: [{
              name: "div",
              attrs: {
                "class": "_shiptor_widget_group _shiptor_widget_required _shiptor_widget_order_half"
              },
              childs: [{
                name: "div",
                attrs: {
                  "class": "_shiptor_widget_group_title"
                },
                text: LANG.courier_variant
              }, {
                name: "select",
                attrs: {
                  name: "shiptor_courier",
                  title: LANG.courier_variant
                }
              }]
            }, {
              name: "div",
              attrs: {
                "class": "_shiptor_widget_group",
                id: "_shiptor_widget_courier_info"
              }
            }]
          });
          htmlBuilder.conts.content.appendChild(htmlBuilder.conts.courier);
          htmlBuilder.conts.courierSelect = htmlBuilder.conts.courier.querySelector('[name="shiptor_courier"]');
          htmlBuilder.conts.courierFields = htmlBuilder.conts.courier.querySelector("#_shiptor_courier_fields");
        },
        courierVariants: function () {
          var eSelect = htmlBuilder.conts.courier.querySelector("select"),
            isSelected = false,
            variants = deliveries.courier.list,
            i;
          eSelect.innerHTML = "";
          for (i = 0; i < variants.length; i++) {
            var option = {
              name: "option",
              attrs: {
                "value": variants[i].method.id
              },
              text: variants[i].method.name + " - " + variants[i].cost.total.readable + " (" + variants[i].days + ")"
            };
            if (variants[i].method.id == params.deliveryMethod) {
              option.attrs.selected = 'selected';
              isSelected = true;
              params.deliveryPrice = variants[i].cost.total.sum;
              showPrices();
              htmlBuilder.create.payGroup([{
                type: "cash",
                name: LANG.payment.cash
              }, {
                type: "card",
                name: LANG.payment.card
              }]);
              htmlBuilder.show.paymentGroup();
            } else {
              if (variants[i].cost.total.sum == deliveries.courier.cost && params.deliveryMethod == null) {
                params.deliveryMethod = variants[i].method.id;
                option.attrs.selected = 'selected';
                isSelected = true;
                params.deliveryPrice = variants[i].cost.total.sum;
                showPrices();
                htmlBuilder.create.payGroup([{
                  type: "cash",
                  name: LANG.payment.cash
                }, {
                  type: "card",
                  name: LANG.payment.card
                }]);
                htmlBuilder.show.paymentGroup();
              } else {
                delete option.attrs.selected;
              }
            }
            eSelect.appendChild(this.tag(option));
          }
          htmlBuilder.show.courierVariants();
          if (eSelect.querySelectorAll('option').length > 0) {
            if (!isSelected) {
              params.deliveryMethod = eSelect.querySelectorAll('option')[0].value;
              params.deliveryPrice = deliveries.getCourier(params.deliveryMethod).cost.total.sum;
              showPrices();
            }
            htmlBuilder.create.payGroup([{
              type: "cash",
              name: LANG.payment.cash
            }, {
              type: "card",
              name: LANG.payment.card
            }]);
            htmlBuilder.show.paymentGroup();
          }
          this.courierFields();
        },
        courierFields: function () {
          if (!htmlBuilder.conts.courierFields) {
            htmlBuilder.conts.courierFields = this.tag({
              name: "div",
              attrs: {
                id: "_shiptor_courier_fields"
              }
            });
            htmlBuilder.conts.courier.appendChild(this.tag({
              name: "div",
              attrs: {
                "class": "_shiptor_widget_group"
              },
              childs: [{
                name: "h3",
                attrs: {
                  "class": "_shiptor_widget_section_head"
                },
                text: LANG.receiver_address
              }]
            }));
            htmlBuilder.conts.courier.appendChild(htmlBuilder.conts.courierFields);
            htmlBuilder.conts.courierFields.appendChild(this.getStreet("courier"));
            htmlBuilder.conts.courierFields.appendChild(this.getHouseAndFlat("courier"));
            htmlBuilder.conts.courierFields.appendChild(this.tag({
              name: "div",
              attrs: {
                "class": "_shiptor_widget_group"
              },
              childs: [{
                name: "h3",
                attrs: {
                  "class": "_shiptor_widget_section_head"
                },
                text: LANG.receiver_section,
                styles: {
                  marginTop: "7px"
                }
              }]
            }));
            htmlBuilder.conts.courierFields.appendChild(this.getFio("courier"));
            htmlBuilder.conts.courierFields.appendChild(this.getPhone("courier"));
            htmlBuilder.conts.courierFields.appendChild(this.getEmail("courier"));
            htmlBuilder.conts.courierFields.appendChild(this.getComment("courier"));
            htmlBuilder.conts.courierStreet = htmlBuilder.conts.courier.querySelector("[name='shiptor_street[courier]']");
            htmlBuilder.conts.courierHouse = htmlBuilder.conts.courier.querySelector("[name='shiptor_house[courier]']");
            htmlBuilder.conts.courierFlat = htmlBuilder.conts.courier.querySelector("[name='shiptor_flat[courier]']");
            htmlBuilder.conts.courierFioSurname = htmlBuilder.conts.courier.querySelector("[name='shiptor_surname[courier]']");
            htmlBuilder.conts.courierFioName = htmlBuilder.conts.courier.querySelector("[name='shiptor_name[courier]']");
            htmlBuilder.conts.courierPhone = htmlBuilder.conts.courier.querySelector("[name='shiptor_phone[courier]']");
            htmlBuilder.conts.courierEmail = htmlBuilder.conts.courier.querySelector("[name='shiptor_email[courier]']");
            htmlBuilder.conts.courierComment = htmlBuilder.conts.courier.querySelector("[name='shiptor_comment[courier]']");
          } else {
            var countryCode = getCountryCode(params.location.parents[params.location.parents.length - 1]);
            if (countryCode === null) {
              countryCode = 'RU';
            }
            htmlBuilder.conts.courierPhone.setAttribute('placeholder', LANG.placeholder.phone[countryCode]);
            htmlBuilder.conts.courierPhone.setAttribute('maxlength', validate.phone[countryCode]);
          }
          htmlBuilder.show.courierFields();
        },
        deliveryPoint: function () {
          htmlBuilder.conts.pvz = this.tag({
            name: "div",
            attrs: {
              "class": "_shiptor_widget_order_deliverypoint"
            },
            styles: {
              display: "none"
            },
            childs: [{
              name: "div",
              attrs: {
                "class": "_shiptor_widget_group"
              },
              childs: [{
                name: "h3",
                attrs: {
                  "class": "_shiptor_widget_section_head"
                },
                text: LANG.pick_pvz_head,
                styles: {
                  marginTop: "34px"
                }
              }]
            }, {
              name: "div",
              attrs: {
                "class": "_shiptor_widget_group _shiptor_widget_required _shiptor_widget_order_half"
              },
              childs: [{
                name: "div",
                attrs: {
                  "class": "_shiptor_widget_deliverypoint_item"
                }
              }, {
                name: "button",
                attrs: {
                  "class": "_shiptor_widget_button _shiptor_widget_button_default"
                },
                text: LANG.pick_pvz
              }, {
                name: "div",
                attrs: {
                  "class": "_shiptor_widget_deliverypoint_item_info"
                }
              }]
            }]
          });
          htmlBuilder.conts.pvz.appendChild(this.tag({
            name: "div",
            attrs: {
              "class": "_shiptor_widget_group"
            },
            childs: [{
              name: "h3",
              attrs: {
                "class": "_shiptor_widget_section_head"
              },
              text: LANG.receiver_section,
              styles: {
                marginTop: "34px"
              }
            }]
          }));
          htmlBuilder.conts.pvz.appendChild(this.getFio("pvz"));
          htmlBuilder.conts.pvz.appendChild(this.getPhone("pvz"));
          htmlBuilder.conts.pvz.appendChild(this.getEmail("pvz"));
          htmlBuilder.conts.pvz.appendChild(this.getComment("pvz"));
          htmlBuilder.conts.content.appendChild(htmlBuilder.conts.pvz);
          htmlBuilder.conts.pvzItem = htmlBuilder.conts.pvz.querySelector("._shiptor_widget_deliverypoint_item");
          htmlBuilder.conts.pvzButton = htmlBuilder.conts.pvz.querySelector("._shiptor_widget_button");
          htmlBuilder.conts.pvzFioName = htmlBuilder.conts.pvz.querySelector("[name='shiptor_name[pvz]']");
          htmlBuilder.conts.pvzFioSurname = htmlBuilder.conts.pvz.querySelector("[name='shiptor_surname[pvz]']");
          htmlBuilder.conts.pvzPhone = htmlBuilder.conts.pvz.querySelector("[name='shiptor_phone[pvz]']");
          htmlBuilder.conts.pvzEmail = htmlBuilder.conts.pvz.querySelector("[name='shiptor_email[pvz]']");
          htmlBuilder.conts.pvzComment = htmlBuilder.conts.pvz.querySelector("[name='shiptor_comment[pvz]']");
        },
        pvz: function (pvz) {
          var shippingMethodId = pvz.shipping_method,
            shippingMethod = deliveries.getPvz(shippingMethodId),
            shippingDays = shippingMethod.days,
            courierName = getCourierName(pvz);
          htmlBuilder.conts.pvzItem.innerHTML = "";
          htmlBuilder.conts.pvzItem.appendChild(this.tag({
            name: "div",
            attrs: {
              "class": "_shiptor_widget_deliverypoint_title"
            },
            childs: [{
              name: "span",
              text: courierName
            }, {
              name: "br"
            }, {
              name: "span",
              text: pvz.address
            }]
          }));
          htmlBuilder.conts.pvzItem.appendChild(this.tag({
            name: "div",
            attrs: {
              "class": "_shiptor_widget_deliverypoint_values"
            },
            childs: [{
              name: "div",
              attrs: {
                "class": "_shiptor_widget_deliverypoint_cost"
              },
              text: pvz.cost
            }, {
              name: "span",
              attrs: {
                "class": "_shiptor_widget_deliverypoint_payments"
              }
            }, {
              name: "div",
              attrs: {
                "class": "_shiptor_widget_deliverypoint_time"
              },
              text: shippingDays,
              styles: {
                display: "block",
                marginLeft: 0,
                marginTop: '5px'
              }
            }]
          }));
          var ePayments = htmlBuilder.conts.pvzItem.querySelector("._shiptor_widget_deliverypoint_payments");
          if (pvz.card) {
            ePayments.appendChild(this.tag({
              name: "span",
              attrs: {
                "class": "_shiptor_widget_deliverypoint_card"
              },
              childs: [{
                name: "span",
                attrs: {
                  "class": "_shiptor_widget_deliverypoint_note"
                },
                text: LANG.payment.text_card
              }]
            }));
          }
          if (pvz.cod) {
            ePayments.appendChild(this.tag({
              name: "span",
              attrs: {
                "class": "_shiptor_widget_deliverypoint_cash"
              },
              childs: [{
                name: "span",
                attrs: {
                  "class": "_shiptor_widget_deliverypoint_note"
                },
                text: LANG.payment.text_cash
              }]
            }));
          }
          htmlBuilder.conts.pvzItem.appendChild(this.tag({
            name: "div",
            attrs: {
              "class": "_shiptor_widget_deliverypoint_schedule"
            },
            html: this.getWorkSchedule(pvz.work_schedule)
          }));
          htmlBuilder.conts.pvzItem.appendChild(this.tag({
            name: "div",
            attrs: {
              "class": "_shiptor_widget_deliverypoint_info"
            },
            text: pvz.trip_description,
            styles: {
              display: "none"
            }
          }));
          htmlBuilder.conts.pvzItem.appendChild(this.tag({
            name: "div",
            attrs: {
              "class": "_shiptor_widget_deliverypoint_button"
            },
            text: LANG.toggle_desc
          }));
          htmlBuilder.conts.pvzButton.innerText = LANG.change_pvz;
        },
        pvzList: function () {
          var ePvzList = htmlBuilder.conts.pvzPicker.querySelector("._shiptor_widget_points_list"),
            oCourierNames = [],
            i;
          ePvzList.innerHTML = "";
          for (i = 0; i < oPvz.count(); i++) {
            var paymentChilds = [],
              shippingMethodId = oPvz.list[i].shipping_method,
              shippingMethod = deliveries.getPvz(shippingMethodId),
              cost = shippingMethod.cost.total.readable,
              courierName = getCourierName(oPvz.list[i]),
              groupName = shippingMethod.method.group,
              shippingDays = shippingMethod.days,
              gps = {
                lat: parseFloat(oPvz.list[i].gps_location.latitude),
                lon: parseFloat(oPvz.list[i].gps_location.longitude)
              };
            if (isNaN(gps.lat) || isNaN(gps.lon)) {
              continue;
            }
            oCourierNames[groupName] = shippingMethod.method.name;
            if (oPvz.list[i].card) {
              paymentChilds.push({
                name: "span",
                attrs: {
                  "class": "_shiptor_widget_points_card"
                },
                childs: [{
                  name: "span",
                  attrs: {
                    "class": "_shiptor_widget_points_note"
                  },
                  text: LANG.payment.text_card
                }]
              });
            }
            if (oPvz.list[i].cod) {
              paymentChilds.push({
                name: "span",
                attrs: {
                  "class": "_shiptor_widget_points_cash"
                },
                childs: [{
                  name: "span",
                  attrs: {
                    "class": "_shiptor_widget_points_note"
                  },
                  text: LANG.payment.text_cash
                }]
              });
            }
            var inputAttrs = {
              "class": "_shiptor_widget_radio",
              "type": "radio",
              "name": "point",
              "value": oPvz.list[i].id,
              'data-courier': courierName,
              'data-shipping-method': oPvz.list[i].shipping_method,
              'data-group': shippingMethod.method.group
            };
            if (oPvz.current == oPvz.list[i].id && oPvz.list[i].shipping_method == params.deliveryMethod) {
              inputAttrs.checked = "checked";
            }
            ePvzList.appendChild(this.tag({
              name: "label",
              attrs: {
                "class": "_shiptor_widget_points_item"
              },
              childs: [{
                name: "input",
                attrs: inputAttrs
              }, {
                name: "span",
                attrs: {
                  "class": "_shiptor_widget_points_description"
                },
                childs: [{
                  name: "span",
                  attrs: {
                    "class": "__shiptor_widget_points_title"
                  },
                  childs: [{
                    name: "span",
                    text: "[" + courierName + "] ",
                    styles: {
                      "font-weight": "bold"
                    }
                  }, {
                    name: "span",
                    text: oPvz.list[i].address.replace(',' + LANG.street_short, ', ' + LANG.street_short)
                  }]
                }, {
                  name: "span",
                  attrs: {
                    "class": "_shiptor_widget_points_values"
                  },
                  childs: [{
                    name: "span",
                    attrs: {
                      "class": "_shiptor_widget_points_cost"
                    },
                    text: cost
                  }, {
                    name: "span",
                    attrs: {
                      "class": "_shiptor_widget_points_time"
                    },
                    text: shippingDays
                  }, {
                    name: "span",
                    attrs: {
                      "class": "_shiptor_widget_points_payments"
                    },
                    childs: paymentChilds
                  }]
                }, {
                  name: "span",
                  attrs: {
                    "class": "_shiptor_widget_points_schedule"
                  },
                  text: oPvz.list[i].work_schedule
                }, {
                  name: "span",
                  attrs: {
                    "class": "_shiptor_widget_points_info"
                  },
                  text: oPvz.list[i].trip_description,
                  styles: {
                    display: "none"
                  }
                }, {
                  name: "span",
                  attrs: {
                    "class": "_shiptor_widget_points_button"
                  },
                  text: LANG.toggle_desc
                }]
              }]
            }));
          }
          this.pvzLegend(oCourierNames);
        },
        pvzPicker: function () {
          htmlBuilder.conts.pvzPicker = this.tag({
            name: "div",
            attrs: {
              "class": "_shiptor_widget_points"
            },
            styles: {
              display: "none"
            },
            childs: [{
              name: "div",
              attrs: {
                "class": "_shiptor_widget_panel"
              },
              childs: [{
                name: "div",
                attrs: {
                  "class": "_shiptor_widget_panel_back"
                },
                childs: [{
                  name: "a",
                  attrs: {
                    "href": "javascript:void(0);",
                    "class": "_shiptor_widget_button _shiptor_widget_button_default"
                  },
                  styles: {
                    "color": "white"
                  },
                  text: LANG.back
                }]
              }, {
                name: "div",
                attrs: {
                  "class": "_shiptor_widget_panel_switch"
                },
                childs: [{
                  name: "a",
                  attrs: {
                    "href": "javascript:void(0);",
                    "class": "_shiptor_widget_button _shiptor_widget_button_default"
                  },
                  styles: {
                    "color": "white"
                  },
                  text: LANG.show_map
                }]
              }]
            }, {
              name: "div",
              attrs: {
                "class": "_shiptor_widget_points_map"
              },
              childs: [{
                name: "div",
                attrs: {
                  id: "_shiptor_map"
                },
                styles: {
                  height: "100%"
                }
              }, {
                name: "div",
                attrs: {
                  'class': "_shiptor_map_legend"
                }
              }]
            }, {
              name: "div",
              attrs: {
                "class": "_shiptor_widget_points_list _shiptor_widget_points_show"
              }
            }, {
              name: "div",
              attrs: {
                "class": "_shiptor_widget_points_confirm"
              },
              text: LANG.pick_pvz,
              styles: {
                display: "none"
              }
            }]
          });
          htmlBuilder.conts.frame.appendChild(htmlBuilder.conts.pvzPicker);
          htmlBuilder.conts.pvzPickerBack = htmlBuilder.conts.pvzPicker.querySelector("._shiptor_widget_panel_back ._shiptor_widget_button");
          htmlBuilder.conts.pvzPickerList = htmlBuilder.conts.pvzPicker.querySelector("._shiptor_widget_points_list");
          htmlBuilder.conts.pvzPickerConfirm = htmlBuilder.conts.pvzPicker.querySelector("._shiptor_widget_points_confirm");
          htmlBuilder.conts.pvzMap = htmlBuilder.conts.pvzPicker.querySelector("#_shiptor_map");
          htmlBuilder.conts.pvzMapSwitch = htmlBuilder.conts.pvzPicker.querySelector("._shiptor_widget_panel_switch ._shiptor_widget_button");
          htmlBuilder.conts.pvzMapLegend = htmlBuilder.conts.pvzPicker.querySelector("._shiptor_map_legend");
        },
        pvzLegend: function (oCourierNames) {
          var group;
          htmlBuilder.conts.pvzMapLegend.innerHTML = '';
          htmlBuilder.conts.pvzMapLegend.appendChild(this.tag({
            name: 'div',
            attrs: {
              'class': '_shiptor_widget_map_legend_item_desc'
            },
            childs: [{
              name: 'label',
              text: LANG.pvz_map_legend
            }, {
              name: 'select',
              attrs: {
                'class': '_shiptor_widget_map_legend_selector',
                'name': 'pvz_type_switch'
              }
            }]
          }));
          htmlBuilder.conts.pvzMapLegendSelect = htmlBuilder.conts.pvzMapLegend.querySelector('._shiptor_widget_map_legend_selector');
          htmlBuilder.conts.pvzMapLegendSelect.appendChild(this.tag({
            name: 'option',
            attrs: {
              'value': '-'
            },
            text: LANG.pvz_map_legend_all
          }));
          for (group in oCourierNames) {
            if (!oCourierNames.hasOwnProperty(group)) {
              continue;
            }
            htmlBuilder.conts.pvzMapLegendSelect.appendChild(this.tag({
              name: 'option',
              attrs: {
                'value': group
              },
              text: oCourierNames[group]
            }));
          }
        },
        russianPost: function () {
          htmlBuilder.conts.russianPost = this.tag({
            name: "div",
            attrs: {
              "class": "_shiptor_widget_order_russianpost"
            },
            styles: {
              display: "none"
            }
          });
          htmlBuilder.conts.russianPost.appendChild(this.tag({
            name: "div",
            attrs: {
              "class": "_shiptor_widget_group"
            },
            childs: [{
              name: "h3",
              attrs: {
                "class": "_shiptor_widget_section_head"
              },
              text: LANG.receiver_address,
              styles: {
                marginTop: "34px"
              }
            }]
          }));
          htmlBuilder.conts.russianPost.appendChild(this.getZip());
          htmlBuilder.conts.russianPost.appendChild(this.getStreet("post"));
          htmlBuilder.conts.russianPost.appendChild(this.getHouseAndFlat("post"));
          htmlBuilder.conts.russianPost.appendChild(this.tag({
            name: "div",
            attrs: {
              "class": "_shiptor_widget_group"
            },
            childs: [{
              name: "h3",
              attrs: {
                "class": "_shiptor_widget_section_head"
              },
              text: LANG.receiver_section,
              styles: {
                marginTop: "7px"
              }
            }]
          }));
          htmlBuilder.conts.russianPost.appendChild(this.getFio("post"));
          htmlBuilder.conts.russianPost.appendChild(this.getPhone("post"));
          htmlBuilder.conts.russianPost.appendChild(this.getEmail("post"));
          htmlBuilder.conts.russianPost.appendChild(this.getComment("post"));
          htmlBuilder.conts.content.appendChild(htmlBuilder.conts.russianPost);
          htmlBuilder.conts.postZip = htmlBuilder.conts.russianPost.querySelector("[name='shiptor_zip[post]']");
          htmlBuilder.conts.postStreet = htmlBuilder.conts.russianPost.querySelector("[name='shiptor_street[post]']");
          htmlBuilder.conts.postHouse = htmlBuilder.conts.russianPost.querySelector("[name='shiptor_house[post]']");
          htmlBuilder.conts.postFlat = htmlBuilder.conts.russianPost.querySelector("[name='shiptor_flat[post]']");
          htmlBuilder.conts.postFioName = htmlBuilder.conts.russianPost.querySelector("[name='shiptor_name[post]']");
          htmlBuilder.conts.postFioSurname = htmlBuilder.conts.russianPost.querySelector("[name='shiptor_surname[post]']");
          htmlBuilder.conts.postPhone = htmlBuilder.conts.russianPost.querySelector("[name='shiptor_phone[post]']");
          htmlBuilder.conts.postEmail = htmlBuilder.conts.russianPost.querySelector("[name='shiptor_email[post]']");
          htmlBuilder.conts.postComment = htmlBuilder.conts.russianPost.querySelector("[name='shiptor_comment[post]']");
        },
        getWorkSchedule: function (workSchedule) {
          if (workSchedule.length > 0) {
            workSchedule = workSchedule.replace(/\-/gi, "&ndash;");
          }
          return workSchedule;
        },
        getZip: function () {
          var eZipContainer = this.tag({
              name: "div",
              attrs: {
                "class": "_shiptor_widget_group _shiptor_widget_required _shiptor_widget_order_half"
              },
              childs: [{
                name: "div",
                attrs: {
                  "class": "_shiptor_widget_group_title"
                },
                html: LANG.zip
              }, {
                name: "input",
                attrs: {
                  "type": "text",
                  "title": LANG.zip,
                  "name": "shiptor_zip[post]",
                  "value": params.zip,
                  "placeholder": LANG.placeholder.zip,
                  "maxlength": 6
                }
              }]
            }),
            eZip = eZipContainer.querySelector('[name="shiptor_zip[post]"]');
          eZip.oninput = validationHandlers.zip;
          eZip.onpropertychange = validationHandlers.zip;
          eZip.onblur = validationHandlers.zip;
          return eZipContainer;
        },
        getStreet: function (type) {
          var eStreetContainer = this.tag({
              name: "div",
              attrs: {
                "class": "_shiptor_widget_group _shiptor_widget_required _shiptor_widget_order_half"
              },
              childs: [{
                name: "div",
                attrs: {
                  "class": "_shiptor_widget_group_title"
                },
                html: LANG.street
              }, {
                name: "input",
                attrs: {
                  "type": "text",
                  "title": LANG.street,
                  "name": "shiptor_street[" + type + "]",
                  "value": params.street,
                  "placeholder": LANG.placeholder.street,
                  'maxlength': 80
                }
              }]
            }),
            eStreet = eStreetContainer.querySelector('[name="shiptor_street[' + type + ']"]');
          eStreet.oninput = validationHandlers.street;
          eStreet.onpropertychange = validationHandlers.street;
          eStreet.onblur = validationHandlers.street;
          return eStreetContainer;
        },
        getHouseAndFlat: function (type) {
          var eHFContainer = this.tag({
              name: "div",
              attrs: {
                "class": "_shiptor_widget_group _shiptor_widget_order_half"
              },
              childs: [{
                name: "div",
                attrs: {
                  "class": "_shiptor_widget_group_columns"
                },
                childs: [{
                  name: "div",
                  attrs: {
                    "class": "_shiptor_widget_group_column"
                  },
                  childs: [{
                    name: "div",
                    attrs: {
                      "class": "_shiptor_widget_group _shiptor_widget_required"
                    },
                    childs: [{
                      name: "div",
                      attrs: {
                        "class": "_shiptor_widget_group_title"
                      },
                      html: LANG.house
                    }, {
                      name: "input",
                      attrs: {
                        "type": "text",
                        "title": LANG.house,
                        "name": "shiptor_house[" + type + "]",
                        "value": params.house,
                        "placeholder": LANG.placeholder.house,
                        'maxlength': 8
                      }
                    }]
                  }]
                }, {
                  name: "div",
                  attrs: {
                    "class": "_shiptor_widget_group_column"
                  },
                  childs: [{
                    name: "div",
                    attrs: {
                      "class": "_shiptor_widget_group"
                    },
                    childs: [{
                      name: "div",
                      attrs: {
                        "class": "_shiptor_widget_group_title"
                      },
                      html: LANG.flat
                    }, {
                      name: "input",
                      attrs: {
                        "type": "text",
                        "title": LANG.flat,
                        "name": "shiptor_flat[" + type + "]",
                        "value": params.flat,
                        "placeholder": LANG.placeholder.flat,
                        'maxlength': 6
                      }
                    }]
                  }]
                }]
              }]
            }),
            eHouse = eHFContainer.querySelector('[name="shiptor_house[' + type + ']"]'),
            eFlat = eHFContainer.querySelector('[name="shiptor_flat[' + type + ']"]');
          eHouse.oninput = validationHandlers.house;
          eHouse.onpropertychange = validationHandlers.house;
          eHouse.onblur = validationHandlers.house;
          eFlat.oninput = validationHandlers.flat;
          eFlat.onpropertychange = validationHandlers.flat;
          eFlat.onblur = validationHandlers.flat;
          return eHFContainer;
        },
        getFio: function (type) {
          var eFioContainer = this.tag({
              name: "div",
              attrs: {
                "class": "_shiptor_widget_group _shiptor_widget_order_half"
              },
              childs: [{
                name: "div",
                attrs: {
                  "class": "_shiptor_widget_group_columns"
                },
                childs: [{
                  name: "div",
                  attrs: {
                    "class": "_shiptor_widget_group_column"
                  },
                  childs: [{
                    name: "div",
                    attrs: {
                      "class": "_shiptor_widget_group _shiptor_widget_required"
                    },
                    childs: [{
                      name: "div",
                      attrs: {
                        "class": "_shiptor_widget_group_title"
                      },
                      html: LANG.fio_name
                    }, {
                      name: "input",
                      attrs: {
                        "type": "text",
                        "title": LANG.fio_name,
                        "name": "shiptor_name[" + type + "]",
                        "value": params.name,
                        "placeholder": LANG.placeholder.name,
                        'maxlength': 59
                      }
                    }]
                  }]
                }, {
                  name: "div",
                  attrs: {
                    "class": "_shiptor_widget_group_column"
                  },
                  childs: [{
                    name: "div",
                    attrs: {
                      "class": "_shiptor_widget_group _shiptor_widget_required"
                    },
                    childs: [{
                      name: "div",
                      attrs: {
                        "class": "_shiptor_widget_group_title"
                      },
                      html: LANG.fio_surname
                    }, {
                      name: "input",
                      attrs: {
                        "type": "text",
                        "title": LANG.fio_surname,
                        "name": "shiptor_surname[" + type + "]",
                        "value": params.surname,
                        "placeholder": LANG.placeholder.surname,
                        'maxlength': 59
                      }
                    }]
                  }]
                }]
              }]
            }),
            eName = eFioContainer.querySelector('[name="shiptor_name[' + type + ']"]'),
            eSurname = eFioContainer.querySelector('[name="shiptor_surname[' + type + ']"]');
          eName.oninput = validationHandlers.name;
          eName.onpropertychange = validationHandlers.name;
          eName.onblur = validationHandlers.name;
          eSurname.oninput = validationHandlers.surname;
          eSurname.onpropertychange = validationHandlers.surname;
          eSurname.onblur = validationHandlers.surname;
          return eFioContainer;
        },
        getPhone: function (type) {
          var countryCode = getCountryCode(params.location.parents[params.location.parents.length - 1]),
            ePhoneContainer = this.tag({
              name: "div",
              attrs: {
                "class": "_shiptor_widget_group _shiptor_widget_required _shiptor_widget_order_half"
              },
              childs: [{
                name: "div",
                attrs: {
                  "class": "_shiptor_widget_group_title"
                },
                html: LANG.phone
              }, {
                name: "input",
                attrs: {
                  "type": "text",
                  "title": LANG.phone,
                  "name": "shiptor_phone[" + type + "]",
                  "value": params.phone,
                  "placeholder": LANG.placeholder.phone[countryCode ? countryCode : 'RU'],
                  "maxlength": validate.phone[countryCode ? countryCode : 'RU']
                }
              }]
            }),
            ePhone = ePhoneContainer.querySelector('[name="shiptor_phone[' + type + ']"]');
          ePhone.oninput = function (event) {
            this.value = this.value.replace(/[^\d\+]/g, '');
            validate.duplicate(['courierPhone', 'pvzPhone', 'postPhone'], this.value);
          };
          ePhone.onpropertychange = function (event) {
            this.value = this.value.replace(/[^\d\+]/g, '');
            validate.duplicate(['courierPhone', 'pvzPhone', 'postPhone'], this.value);
          };
          ePhone.onblur = validationHandlers.phone;
          ePhone.onfocus = validationHandlers.focusPhone;
          return ePhoneContainer;
        },
        getEmail: function (type) {
          var eEmailContainer = this.tag({
              name: "div",
              attrs: {
                "class": "_shiptor_widget_group _shiptor_widget_required _shiptor_widget_order_half"
              },
              childs: [{
                name: "div",
                attrs: {
                  "class": "_shiptor_widget_group_title"
                },
                html: LANG.email
              }, {
                name: "input",
                attrs: {
                  "type": "text",
                  "title": LANG.email,
                  "name": "shiptor_email[" + type + "]",
                  "placeholder": LANG.placeholder.email,
                  "value": params.email,
                  'maxlength': 80
                }
              }]
            }),
            eEmail = eEmailContainer.querySelector('[name="shiptor_email[' + type + ']"]');
          eEmail.oninput = function () {
            validate.duplicate(['courierEmail', 'pvzEmail', 'postEmail'], this.value);
          };
          eEmail.onpropertychange = function () {
            validate.duplicate(['courierEmail', 'pvzEmail', 'postEmail'], this.value);
          };
          eEmail.onblur = validationHandlers.email;
          return eEmailContainer;
        },
        getComment: function (type) {
          var eCommentContainer = this.tag({
              name: "div",
              attrs: {
                "class": "_shiptor_widget_group _shiptor_widget_order_half"
              },
              childs: [{
                name: "div",
                attrs: {
                  "class": "_shiptor_widget_group_title"
                },
                text: LANG.comment
              }, {
                name: "textarea",
                attrs: {
                  "name": "shiptor_comment[" + type + "]",
                  "text": params.comment
                }
              }]
            }),
            eComment = eCommentContainer.querySelector('[name="shiptor_comment[' + type + ']"]');
          eComment.oninput = validationHandlers.comment;
          eComment.onpropertychange = validationHandlers.comment;
          eComment.onblur = validationHandlers.comment;
          return eCommentContainer;
        },
        getAgreement: function () {
          var eAgreementContainer = this.tag({
              name: "label",
              attrs: {
                "class": "_shiptor_widget_group _shiptor_widget_required _shiptor_widget_half"
              },
              childs: [{
                name: "input",
                attrs: {
                  "type": "checkbox",
                  "title": LANG.pd_processing,
                  "name": "shiptor_agreement[customer]"
                }
              }, {
                name: "span",
                attrs: {
                  "class": "_shiptor_widget_group_title"
                },
                html: LANG.pd_processing
              }]
            }),
            eAgreement = eAgreementContainer.querySelector('[name="shiptor_agreement[customer]"]');
          eAgreement.onchange = validationHandlers.agreement;
          return eAgreementContainer;
        },
        payGroup: function (variants) {
          if (!htmlBuilder.conts.paymentGroup) {
            htmlBuilder.conts.paymentGroup = this.tag({
              name: "div",
              attrs: {
                "class": "_shiptor_widget_group _shiptor_widget_required"
              },
              childs: [{
                name: "h3",
                attrs: {
                  "class": "_shiptor_widget_section_head"
                },
                text: LANG.payment.head
              }, {
                name: "div",
                attrs: {
                  "class": "_shiptor_widget_methods"
                }
              }]
            });
            htmlBuilder.conts.content.appendChild(htmlBuilder.conts.paymentGroup);
            htmlBuilder.conts.paymentMethods = htmlBuilder.conts.paymentGroup.querySelector("._shiptor_widget_methods");
          }
          this.payVariants(variants);
          htmlBuilder.show.paymentGroup();
        },
        payVariants: function (variants) {
          var tag = {
            name: 'label',
            attrs: {
              'class': '_shiptor_widget_methods_pay'
            },
            childs: [{
              name: 'input',
              attrs: {
                'class': '_shiptor_widget_radio',
                'type': 'radio',
                'name': 'payment',
                'value': 'card_online'
              }
            }, {
              name: 'div',
              attrs: {
                'class': '_shiptor_widget_methods_description'
              },
              childs: [{
                name: 'span',
                attrs: {
                  'class': '_shiptor_widget_methods_title'
                },
                text: LANG.payment.card_online
              }, {
                name: 'div',
                attrs: {
                  'class': '_shiptor_widget_pay_card_online'
                }
              }]
            }]
          };
          if (params.cod === false || (payments.length == 1 && payments[0] == 'card_online') || (params.cod === false && params.payment == 'card')) {
            tag.childs[0].attrs.checked = 'checked';
            params.payment = 'card';
          }
          htmlBuilder.conts.paymentMethods.innerHTML = '';
          if (payments.indexOf('card_online') !== -1) {
            htmlBuilder.conts.paymentMethods.appendChild(this.tag(tag));
          }
          var countryCode = getCountryCode(params.location.parents[params.location.parents.length - 1]);
          if (countryCode === null || countryCode === 'RU') {
            for (var i = 0; i < variants.length; i++) {
              if (payments.indexOf(variants[i].type) === -1) {
                continue;
              }
              tag.childs[0].attrs.value = variants[i].type;
              tag.childs[1].childs[0].text = variants[i].name;
              tag.childs[1].childs[1].attrs.class = '_shiptor_widget_pay_' + variants[i].type;
              if (params.cod === true && params.payment == variants[i].type) {
                tag.childs[0].attrs.checked = 'checked';
              } else {
                delete tag.childs[0].attrs.checked;
              }
              htmlBuilder.conts.paymentMethods.appendChild(this.tag(tag));
            }
          }
          if (!htmlBuilder.conts.paymentMethods.onchange) {
            htmlBuilder.conts.paymentMethods.onchange = function (event) {
              var type = event.target.value;
              switch (type) {
                case 'card_online':
                  if (params.cod === true) {
                    params.cod = false;
                    calculateShipping();
                  }
                  params.payment = 'card';
                  break;
                case 'card':
                case 'cash':
                  if (params.cod === false) {
                    params.cod = true;
                  }
                  params.payment = type;
                  calculateShipping();
                  break;
              }
              if (params.deliveryType === 'pvz') {
                checkPvz();
              }
              validate.removeErrorClass(event.target.parentNode.parentNode);
            };
          }
        },
        error: function (errorText) {
          htmlBuilder.conts.content.innerHTML = '<h3 class="shiptor_widget_error">' + errorText + '</h3>';
        },
        info: function (text) {
          htmlBuilder.conts.content.innerHTML = '<h3 class="shiptor_widget_success">' + text + '</h3>';
        },
        wait: function () {
          if (!htmlBuilder.conts.wait) {
            htmlBuilder.conts.wait = this.tag({
              name: 'div',
              attrs: {
                'class': '_shiptor_widget_wait_overlay'
              }
            });
            htmlBuilder.conts.content.appendChild(htmlBuilder.conts.wait);
          }
        }
      },
      map: {
        MAP: null,
        arMarkers: [],
        clusterer: null,
        arColorScheme: {
          'BoxBerry': '#dc214a',
          'DPD': '#b31540',
          'Pickpoint': '#4b555a',
          'CDEK': '#57a228',
          'Shiptor': '#187da6',
          'IML': '#ffa552',
          'default': '#187da6'
        },
        init: function () {
          if (oPvz.count() === 0) {
            JCShiptorWidgetOrder.instance.error(LANG.no_pvz);
          }
          if (!!window.ymaps) {
            ymaps.ready(function () {
              htmlBuilder.map.show();
            });
          } else {
            htmlBuilder.conts.pvzMap.innerHTML = '';
            htmlBuilder.conts.pvzMap.appendChild(htmlBuilder.create.tag({
              name: 'p',
              styles: {
                marginTop: '-9.5px',
                marginLeft: '-25%',
                textAlign: 'center',
                fontSize: '12px',
                top: '50%',
                left: '50%',
                position: 'absolute'
              },
              text: LANG.ymaps_troubles
            }));
          }
        },
        centerCoords: function () {
          var center = {
              lat: null,
              lon: null
            },
            current = {
              lat: null,
              lon: null
            },
            diminished = 0;
          for (var i = 0; i < oPvz.count(); i++) {
            current.lat = parseFloat(oPvz.list[i].gps_location.latitude);
            current.lon = parseFloat(oPvz.list[i].gps_location.longitude);
            if (isNaN(current.lat) || isNaN(current.lon)) {
              diminished++;
            } else {
              center.lat += current.lat;
              center.lon += current.lon;
            }
          }
          center.lat = parseFloat(center.lat / (oPvz.count() - diminished));
          center.lon = parseFloat(center.lon / (oPvz.count() - diminished));
          return center;
        },
        getPvzFilters: function () {
          var arCheckedPvzFilters = [];
          if (htmlBuilder.conts.pvzMapLegendSelect.value !== '-') {
            arCheckedPvzFilters = [htmlBuilder.conts.pvzMapLegendSelect.value];
          }
          return arCheckedPvzFilters;
        },
        show: function () {
          htmlBuilder.conts.pvzMap.innerHTML = "";
          this.arMarkers = [];
          var mapCenter = this.centerCoords(),
            arAllowedPvz = this.getPvzFilters();
          if (!!this.MAP) {
            this.MAP.destroy();
          }
          this.MAP = new ymaps.Map(htmlBuilder.conts.pvzMap, {
            center: [mapCenter.lat, mapCenter.lon],
            zoom: 10,
            controls: ['zoomControl', 'fullscreenControl']
          }, {
            searchControlProvider: 'yandex#search'
          });
          for (var i = 0; i < oPvz.count(); i++) {
            var shippingMethodId = oPvz.list[i].shipping_method,
              shippingMethod = deliveries.getPvz(shippingMethodId),
              courierName = getCourierName(oPvz.list[i]),
              colorIcon = this.arColorScheme.hasOwnProperty(courierName) ? this.arColorScheme[courierName] : this.arColorScheme.default,
              gps = {
                lat: parseFloat(oPvz.list[i].gps_location.latitude),
                lon: parseFloat(oPvz.list[i].gps_location.longitude)
              };
            if ((arAllowedPvz.indexOf(shippingMethod.method.group) === -1 && arAllowedPvz.length > 0) || isNaN(gps.lat) || isNaN(gps.lon)) {
              continue;
            }
            this.arMarkers.push(new ymaps.Placemark([gps.lat, gps.lon], {
              hintContent: '[' + courierName + '] ' + oPvz.list[i].address,
              balloonContentHeader: '[' + courierName + '] ' + oPvz.list[i].address,
              balloonContentBody: '<small>' + '[' + courierName + '] ' + oPvz.list[i].address.replace(',' + LANG.street_short, ', ' + LANG.street_short) + '<br/>' + oPvz.list[i].work_schedule + '</small>',
              clusterCaption: '[' + courierName + '] ' + oPvz.list[i].address,
              shiptorElemValue: oPvz.list[i].id,
              courier: courierName,
              methodId: oPvz.list[i].shipping_method
            }, {
              preset: 'islands#icon',
              iconColor: colorIcon,
              balloonCloseButton: false,
              hideIconOnBalloonOpen: false
            }));
            this.arMarkers[this.arMarkers.length - 1].events.add('click', htmlBuilder.map.markerClick, htmlBuilder.map);
          }
          this.clusterer = new ymaps.Clusterer({
            clusterBalloonContentLayout: 'cluster#balloonAccordion',
            clusterBalloonPagerType: 'marker'
          });
          this.clusterer.add(this.arMarkers);
          this.clusterer.events.add('balloonopen', function (e) {
            var clusterPlacemark = e.get('cluster');
            if (!!clusterPlacemark) {
              new ymaps.Monitor(clusterPlacemark.state).add('activeObject', htmlBuilder.map.markerClick, htmlBuilder.map);
            }
          });
          this.MAP.geoObjects.add(this.clusterer);
          if (oPvz.getCurrent() !== null) {
            setTimeout(function () {
              htmlBuilder.map.changeLabel(oPvz.current, params.deliveryMethod);
              htmlBuilder.map.scrollTo(oPvz.current, params.deliveryMethod);
            }, 700);
          }
        },
        markerClick: function (e) {
          var target = (!!e.originalEvent ? e.get('target') : e),
            v = target.properties.get('shiptorElemValue'),
            m = target.properties.get('methodId');
          this.changeLabel(v, m);
          this.scrollTo(v, m);
        },
        changeLabel: function (v, m) {
          var isMarkerLength = this.arMarkers.length,
            that = this,
            currentMarker = null;
          for (var i = 0; i < isMarkerLength; i++) {
            if (this.arMarkers[i].properties.get('shiptorElemValue') == v && this.arMarkers[i].properties.get('methodId') == m) {
              currentMarker = this.arMarkers[i];
            } else {
              this.arMarkers[i].options.set("preset", "islands#icon");
            }
          }
          if (!!currentMarker) {
            currentMarker.options.set("preset", "default#truckIcon");
            this.MAP.setCenter(currentMarker.geometry.getCoordinates(), 14, {
              duration: 500,
              checkZoomRange: true
            });
            setTimeout(function () {
              that.openBalloon(currentMarker);
            }, 600);
          }
        },
        openBalloon: function (marker) {
          var geoObjectState = this.clusterer.getObjectState(marker);
          if (geoObjectState.isShown) {
            if (geoObjectState.isClustered) {
              geoObjectState.cluster.state.set('activeObject', marker);
              this.clusterer.balloon.open(geoObjectState.cluster);
            } else {
              marker.balloon.open();
            }
          }
        },
        scrollTo: function (v, m) {
          var ePvzList = htmlBuilder.conts.pvzPicker.querySelector("._shiptor_widget_points_list"),
            eCurrentPvz = ePvzList.querySelector('[value="' + v + '"][data-shipping-method="' + m + '"]'),
            parent = eCurrentPvz.offsetParent;
          if (!!parent) {
            ePvzList.scrollTop = parent.offsetTop - 60;
          }
          eCurrentPvz.checked = true;
          htmlBuilder.show.pvzPickerConfirm();
        }
      },
      show: {
        generic: function (container) {
          if (!!container) {
            container.style.display = "block";
          }
        },
        widget: function () {
          this.generic(htmlBuilder.conts.widget);
        },
        frame: function () {
          this.generic(htmlBuilder.conts.frame);
        },
        settlementsVariants: function () {
          this.generic(htmlBuilder.conts.settlementSuggestions.parentNode);
        },
        deliveriesGroup: function () {
          this.generic(htmlBuilder.conts.deliveriesGroup);
        },
        courierVariants: function () {
          this.generic(htmlBuilder.conts.courier);
        },
        courierFields: function () {
          this.generic(htmlBuilder.conts.courierFields);
        },
        deliveryPoint: function () {
          this.generic(htmlBuilder.conts.pvz);
        },
        pvzPicker: function () {
          this.generic(htmlBuilder.conts.pvzPicker);
        },
        pvzPickerConfirm: function () {
          this.generic(htmlBuilder.conts.pvzPickerConfirm);
        },
        russianPost: function () {
          this.generic(htmlBuilder.conts.russianPost);
        },
        paymentGroup: function () {
          this.generic(htmlBuilder.conts.paymentGroup);
        },
        closeButton: function () {
          this.generic(htmlBuilder.conts.closeButton);
        },
        wait: function () {
          this.generic(htmlBuilder.conts.wait);
        },
        footer: function () {
          this.generic(htmlBuilder.conts.footer);
        },
        header: function () {
          this.generic(htmlBuilder.conts.footer);
        }
      },
      hide: {
        generic: function (container) {
          if (!!container) {
            container.style.display = "none";
          }
        },
        widget: function () {
          this.generic(htmlBuilder.conts.widget);
        },
        frame: function () {
          this.generic(htmlBuilder.conts.frame);
        },
        settlementsVariants: function () {
          this.generic(htmlBuilder.conts.settlementSuggestions.parentNode);
        },
        deliveriesGroup: function () {
          this.generic(htmlBuilder.conts.deliveriesGroup);
        },
        courierVariants: function () {
          this.generic(htmlBuilder.conts.courier);
        },
        courierFields: function () {
          this.generic(htmlBuilder.conts.courierFields);
        },
        deliveryPoint: function () {
          this.generic(htmlBuilder.conts.pvz);
        },
        pvzPicker: function () {
          this.generic(htmlBuilder.conts.pvzPicker);
        },
        pvzPickerConfirm: function () {
          this.generic(htmlBuilder.conts.pvzPickerConfirm);
        },
        russianPost: function () {
          this.generic(htmlBuilder.conts.russianPost);
        },
        paymentGroup: function () {
          this.generic(htmlBuilder.conts.paymentGroup);
        },
        closeButton: function () {
          this.generic(htmlBuilder.conts.closeButton);
        },
        wait: function () {
          this.generic(htmlBuilder.conts.wait);
        },
        footer: function () {
          this.generic(htmlBuilder.conts.footer);
        },
        header: function () {
          this.generic(htmlBuilder.conts.footer);
        },
        basket: function () {
          var classes = htmlBuilder.conts.frameBasket.className + " _shiptor_widget_frame_basket_ico";
          htmlBuilder.conts.frameBasket.className = classes;
          htmlBuilder.conts.widget.style.position = "relative";
        }
      },
      setCity: function () {
        if (!!htmlBuilder.conts.city) {
          htmlBuilder.conts.city.setAttribute("data-kladr", params.location.kladr_id);
          htmlBuilder.conts.city.value = (params.location.type ? params.location.type + ' ' : '') + params.location.city + (params.location.parents.length > 0 ? ", " + params.location.parents.join(', ') : "");
        } else {
          this.error(LANG.no_city);
        }
      },
      getActivePvz: function () {
        return htmlBuilder.conts.pvzPicker.querySelector("._shiptor_widget_radio:checked");
      },
      setHandlers: function (eventHandlers) {
        if (!eventHandlers) {
          eventHandlers = handlers;
        }
        for (var elem in eventHandlers) {
          if (eventHandlers.hasOwnProperty(elem) && !!htmlBuilder.conts[elem]) {
            for (var eventName in eventHandlers[elem]) {
              if (eventHandlers[elem].hasOwnProperty(eventName)) {
                htmlBuilder.conts[elem].addEventListener(eventName, eventHandlers[elem][eventName]);
              }
            }
          }
        }
      }
    },
    getPluralEnum = {
      generic: function (number, labels) {
        var variant = [2, 0, 1, 1, 1, 2];
        return number + " " + labels[(number % 100 > 4 && number % 100 < 20) ? 2 : variant[Math.min(number % 10, 5)]];
      },
      days: function (number) {
        return this.generic(number, [LANG.day1, LANG.day2, LANG.day5]);
      },
      wares: function (number) {
        return this.generic(number, [LANG.basket.items1, LANG.basket.items2, LANG.basket.items5]);
      }
    },
    cookie = {
      get: function (name) {
        var matches = document.cookie.match(new RegExp("(?:^|; )" + name.replace(/([\.$?*|{}\(\)\[\]\\\/\+^])/g, '\\$1') + "=([^;]*)"));
        return matches ? decodeURIComponent(matches[1]) : null;
      },
      set: function (name, value, options) {
        options = options || {};
        var expires = options.expires,
          updatedCookie, currentDate;
        if (typeof expires === 'number' && expires) {
          currentDate = new Date();
          currentDate.setTime(currentDate.getTime() + expires * 1000);
          expires = options.expires = currentDate;
        }
        if (expires && expires.toUTCString) {
          options.expires = expires.toUTCString();
        }
        options.path = '/';
        value = encodeURIComponent(value);
        updatedCookie = name + '=' + value;
        for (var prop in options) {
          updatedCookie += '; ' + prop;
          var propValue = options[prop];
          if (propValue !== true) {
            updatedCookie += '=' + propValue;
          }
        }
        document.cookie = updatedCookie;
      },
      delete: function (name) {
        this.set(name, '', {
          expires: -1
        });
      }
    },
    add2BasketHandlers = function () {
      var add2BasketButtons = document.querySelectorAll('[data-role="shiptor_widget_add_basket"]');
      if (add2BasketButtons.length > 0) {
        for (var i = 0; i < add2BasketButtons.length; i++) {
          add2BasketButtons[i].addEventListener('click', JCShiptorWidgetOrder.instance.add2BasketHandler);
        }
      }
    },
    changeQuantityHandlers = function () {
      var changeQuantityFields = document.querySelectorAll('[data-role="shiptor_widget_change_quantity"]');
      if (changeQuantityFields.length > 0) {
        for (var i = 0; i < changeQuantityFields.length; i++) {
          JCShiptorWidgetOrder.instance.changeQuantityHandler({
            target: changeQuantityFields[i]
          });
          addEventListener('change', changeQuantityFields[i], JCShiptorWidgetOrder.instance.changeQuantityHandler);
        }
      }
    },
    changeVariantHandlers = function () {
      var changeVariantFields = document.querySelectorAll('[data-role="shiptor_widget_variant_change"]');
      if (changeVariantFields.length > 0) {
        for (var i = 0; i < changeVariantFields.length; i++) {
          addEventListener('change', changeVariantFields[i], JCShiptorWidgetOrder.instance.changeVariantHandler);
        }
      }
    },
    getCourierName = function (pvz) {
      var shippingMethodId = pvz.shipping_method,
        shippingMethod = deliveries.getPvz(shippingMethodId),
        name = null;
      if (!!LANG[shippingMethod.method.group]) {
        return LANG[shippingMethod.method.group];
      }
      if (!!pvz.name) {
        return pvz.name;
      }
      return shippingMethod.method.name;
    },
    init = function () {
      if (!htmlBuilder.conts.widget) {
        htmlBuilder.create.widget();
      } else {
        getDefaultParams();
      }
      htmlBuilder.create.stylesAndScripts();
    },
    initBasket = function () {
      htmlBuilder.conts.widget.style.position = 'relative';
      htmlBuilder.conts.widget.style.height = 'auto';
      htmlBuilder.create.overlay();
      htmlBuilder.create.frameBasket();
      htmlBuilder.setHandlers(basketHandlers);
      htmlBuilder.show.widget();
      add2BasketHandlers();
      changeQuantityHandlers();
      changeVariantHandlers();
      htmlBuilder.conts.frameBasket.style.display = 'block';
      fireEvent('onWidgetBasketShow', {});
    },
    initOrder = function () {
      htmlBuilder.conts.widget.style.position = 'fixed';
      if (!params.overflow) {
        params.overflow = document.body.style.overflow;
        document.body.style.overflow = 'hidden';
      }
      if (!!htmlBuilder.conts.frameBasket) {
        htmlBuilder.conts.frameBasket.style.display = 'none';
      }
      htmlBuilder.hide.widget();
      htmlBuilder.create.overlay();
      htmlBuilder.create.frame();
      htmlBuilder.setCity();
      htmlBuilder.setHandlers(handlers);
      if (!!params.location.kladr_id) {
        calculateShipping();
      }
      htmlBuilder.show.widget();
      fireEvent('onWidgetOrderShow', {});
    };
  this.destroy = function () {
    var parent = htmlBuilder.conts.widget.parentNode;
    if (!!parent) {
      parent.removeChild(htmlBuilder.conts.widget);
      htmlBuilder.conts.widget = null;
    }
  };
  this.show = function () {
    htmlBuilder.show.widget();
  };
  this.hide = function () {
    htmlBuilder.hide.widget();
  };
  this.error = function (errorText) {
    console.trace();
    console.warn(errorText);
    if (!!htmlBuilder.conts.content) {
      htmlBuilder.create.error(errorText);
    }
  };
  this.add2BasketHandler = function (event) {
    var wareId = this.getAttribute('data-id'),
      quantity = parseInt(this.getAttribute('data-q')),
      jsonData = {
        method: 'getWare',
        params: {
          shop_article: wareId
        }
      };
    if (!wareId) {
      console.warn('Артикул товара не определен');
    } else {
      sendRequest(jsonData, function (data) {
        basket.add(data, wareId, quantity);
      });
    }
    event.preventDefault();
  };
  this.changeQuantityHandler = function (event) {
    var targetProductId = event.target.getAttribute('data-target'),
      quantity = parseInt(event.target.value),
      targetAddButton = document.querySelector('[data-role="shiptor_widget_add_basket"][data-product="' + targetProductId + '"]');
    if (!!targetAddButton && quantity > 0) {
      targetAddButton.setAttribute('data-q', quantity);
    }
  };
  this.changeVariantHandler = function (event) {
    var targetProductId = event.target.getAttribute('data-target'),
      variant = event.target.value,
      targetAddButton = document.querySelector('[data-role="shiptor_widget_add_basket"][data-product="' + targetProductId + '"]');
    if (!!targetAddButton && !!variant) {
      targetAddButton.setAttribute('data-id', variant);
    }
  };
  init();
  initBasket();
  fireEvent('onWidgetInit', {});
};
window.addEventListener('load', function () {
  try {
    window.ShiptorWidgetOrder = new JCShiptorWidgetOrder();
    if (!!document.querySelector('[data-role="shiptor_widget_show"]')) {
      document.querySelector('[data-role="shiptor_widget_show"]').onclick = function (e) {
        try {
          e.preventDefault();
          window.ShiptorWidgetOrder.show();
        } catch (error) {
          window.ShiptorWidgetOrder.error(error.message);
        }
      };
    } else {
      window.ShiptorWidgetOrder.show();
    }
  } catch (error) {
    console.trace();
    console.warn(error.message);
  }
});
