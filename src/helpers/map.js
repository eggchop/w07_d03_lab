const Map = function initMap(lat,long) {
  map = new google.maps.Map(document.getElementById('map'), {
  center: {lat: lat, lng: long},
  zoom: 6
  });
};

module.exports = Map;
