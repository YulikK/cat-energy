function initMap() {
          var coordinates = {lat: 59.938808, lng: 30.323080},
          markerImage = '../img/png/map-pin.png',
          zoom = 15,

          map = new google.maps.Map(document.getElementById('map'), {
              center: coordinates,
              zoom: zoom,
              disableDefaultUI: true,
              scrollwheel: false
          }),

          marker = new google.maps.Marker({
              position: coordinates,
              map: map,
              icon: markerImage
          });
};

document.addEventListener("DOMContentLoaded", function(event) {
  initMap();
})
