import $ from 'jquery';
import whatInput from 'what-input';

window.$ = $;

import Foundation from 'foundation-sites';
// If you want to pick and choose which modules to include, comment out the above and uncomment
// the line below
//import './lib/foundation-explicit-pieces';

$(document).foundation();

document.addEventListener('DOMContentLoaded', function(event) {
  //------------------------------------------------------------------------//
  // map
  ymaps.ready(init);
  var myMap, myPlacemark;

  function init() {
    myMap = new ymaps.Map('map', {
      center: [58.009002, 56.163203],
      zoom: 15,
      controls: ['zoomControl']
    });

    myMap.behaviors.disable(['scrollZoom', 'drag', 'rightMouseButtonMagnifier']);

    myPlacemark = new ymaps.Placemark(
      [58.009002, 56.163203],
      {
        balloonContent: 'Россия, Пермь, улица Дзержинского, 59',
        iconCaption: 'Аренда УК "Мангуст"'
      },
      {
        preset: 'islands#darkGreenLeisureIcon'
      }
    );

    myMap.geoObjects.add(myPlacemark);
  }
  //------------------------------------------------------------------------//
});
