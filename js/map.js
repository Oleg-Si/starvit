let contactmap = null;

export const shiptorMakeMap = function (points_in, map_container_id, point_list_id) {


  var _this = this,
    redraw_point_list_timer=null,
    placemarks = {},
    points = [],
    points_link = {};

  for (var i = 0; i < points_in.length; i++) {
    var method = points_in[i];

    for (var j = 0; j < points_in[i]['points'].length; j++) {
      var point =  points_in[i]['points'][j];
      point.id0 = point.id;
      var id = method.code + '_' +  point.id ;
      point.id = id;

      points_link[id] = {
        name: method.name,
        method_value: method.method_value,
        type: 'delivery-point',
        point: point
      };

      points.push(point);
    }
  }


  // центр среди точек
  var centerCoords = function(points){
    var center = {lat: null, lon: null},
      current = {lat: null, lon: null},
      diminished = 0;
    for (var i = 0; i < points; i++) {
      current.lat = parseFloat(points[i].gps_location.latitude);
      current.lon = parseFloat(points[i].gps_location.longitude);
      if (isNaN(current.lat) || isNaN(current.lon)) {
        diminished++;
      } else {
        center.lat += current.lat;
        center.lon += current.lon;
      }
    }
    center.lat = parseFloat(center.lat / (points.length - diminished));
    center.lon = parseFloat(center.lon / (points.length - diminished));
    return [center.lat, center.lon];
  };

  // добавить точку на карту
  var addPointToMap = function(point, i){
    var $text_cod = point.cod ? '<span style="color:green;">Есть</span>' : '<span style="color:red;">Нет</span>';
    var $text_card = point.card ? '<span style="color:green;">Есть</span>' : '<span style="color:red;">Нет</span>';
    var $work_schedule = point.work_schedule ? '<p>Режим работы: ' + point.work_schedule + '</p>' : '';
    var $trip_description = point.trip_description ? '<p>' + point.trip_description + '</p>' : '';

    var placemark = new ymaps.Placemark([point.gps_location.latitude, point.gps_location.longitude], {
      balloonContentBody: [
        '<strong>[' + point.courier.toUpperCase() + ']</strong>',
        '<address>' + point.address + '</address>',
        $work_schedule,
        $trip_description,
        '<span>Наложенный платёж: ' + $text_cod + '</span><br />',
        '<span>Оплата картой: ' + $text_card + '</span>'
      ].join(''),
      shiptorElemValue: point.id,
      shiptorElemIndex: i
    }, {
      preset: 'islands#redIcon',
      balloonCloseButton: true,
      hideIconOnBalloonOpen: true
    });

    placemark.events.add('click', function (event) {
      var id = point.id;
      // console.log(id);
      $("input[name=s_point][value=" + id + "]").attr('checked', 'checked');

      // $('#point_list').get(0).s_point.value = point.id;
    });

    contactmap.geoObjects.add(placemark);
    placemarks[point.id] = placemark;

  };

  //ymaps.ready(function () {

  // var points = $('#' + map_container).data('points');
  if(points.length > 0){
    contactmap = new ymaps.Map(map_container_id, {
      center: centerCoords(points),
      zoom: 10,
      behaviors: ['default', 'scrollZoom'],
      controls: ['zoomControl', 'fullscreenControl']
    });

    const searchControl = new ymaps.control.SearchControl({
      options: {
        // Будет производиться поиск по топонимам и организациям.
        provider: 'yandex#search',
        position: {top:-30},
        noSuggestPanel: true
      }
    });
    contactmap.controls.add(searchControl);
    contactmap.searchControl = searchControl;

    $.map(points, function (point, i) {
      addPointToMap(point, i);
    });
    if (typeof (contactmap.geoObjects.getLength()) != 'undefined' && contactmap.geoObjects.getLength() > 1) {
      contactmap.setBounds(contactmap.geoObjects.getBounds());
    } else {
      contactmap.setCenter(contactmap.geoObjects.get(0).geometry.getCoordinates());
    }

    window.contactmap = contactmap; //todo remove
    window.placemarks = placemarks; //todo remove

    // обновить список точек
    var redraw_point_list = function () {
      if (redraw_point_list_timer != null){
        clearTimeout(redraw_point_list_timer);
      }
      var map_center = contactmap.getCenter();

      $.map(points, function (point, i) {
        point.distance = ymaps.coordSystem.geo.getDistance(map_center,
          [point.gps_location.latitude, point.gps_location.longitude]);
      });

      points.sort( compare_distance );

      var point_list = $('#'+point_list_id);

      var point_list_val = $("input[name='s_point']:checked").val();

      // if (point_list.get(0).s_point){
      //     point_list_val = point_list.get(0).s_point.value
      // }

      point_list.empty();
      $.map(points, function (point, i) {

        var distance_str = ymaps.formatter.distance(point.distance);

        var phones = point.phones.join(', ');

        point_list.append(
          "<div class=\"checkout__shipping_item\">\n" +
          "   <input type=\"radio\" name=\"s_point\" value='"+point.id+"' id='s_point_"+point.id+"'>\n" +
          "   <label for='s_point_"+point.id+"'></label>\n" +
          "   <div class=\"checkout__shipping_item_content\">\n" +
          "      <p class=\"checkout__shipping_item_title\">" +
          "          <span>"+distance_str+"</span> "+point.courier+"</p>\n" +
          "      <p class=\"checkout__shipping_item_descr\">"+ point.address +"</p>\n" +
          "      <p class=\"checkout__shipping_item_descr\">"+ phones +"</p>\n" +
          "   </div>\n" +
          "</div>"
        )

      });

      $('input[type=radio][name=s_point]').change(function() {
        console.log(this.value);
        var id =  this.value;

        var placemark = placemarks[id];

        placemark.balloon.open();
        contactmap.setCenter(placemark.geometry._coordinates);
      });

      if (point_list_val!=null){
        // point_list.get(0).s_point.value = point_list_val;
        $("input[name=s_point][value=" + point_list_val + "]").attr('checked', 'checked');
      }
    };

    redraw_point_list();

    // событие при движении карты
    contactmap.events.add('boundschange', function (event) {
      var e = event.originalEvent;
      if (e.newCenter[0] !== e.oldCenter[0] || e.newCenter[1] !== e.oldCenter[1]){
        if (redraw_point_list_timer != null){
          clearTimeout(redraw_point_list_timer);
        }
        redraw_point_list_timer = setTimeout(redraw_point_list, 2000);
      }
    });
  }
  //});

  // событие при выборе точки в списке
  // $('#'+point_list_id).change(function(e) {
  //
  //     var id =  parseInt(e.target.value);
  //
  //     var placemark = placemarks[id];
  //
  //     placemark.balloon.open();
  //     contactmap.setCenter(placemark.geometry._coordinates);
  //
  // });



  // // подтверждение точки точки
  // $('#'+select_button_id).click(function () {
  //     var point = get_selected_point();
  //     if (point == null){
  //         alert('Выберите точку');
  //         return;
  //     }
  //
  //     //$("#billing_address_1").val( point.address ).trigger('change');
  //     select_callback(point);
  // })

  // найти выбранную точку
  var getSelectedPoint = function(){

    var point_id =  $("input[name='s_point']:checked").val();
    if (point_id){

      return points_link[point_id];
    }

    return null;
  };

  return getSelectedPoint;
};

export const initMapEvents = ($) => {
  $('.checkout__shipping_find-btn').on('click', function () {
    navigator.geolocation.getCurrentPosition(function(pos){
      window.contactmap.setCenter([pos.coords.latitude, pos.coords.longitude])
    });
    return false;
  });

  $('.checkout__shipping_find-input').keypress(function (e) {
    if (e.which == 13) {
      const v = e.target.value;
      if (v){
        window.contactmap.searchControl.search(e.target.value);
      }

      return false;
    }
  });
};

export { shiptorMakeMap as default };
