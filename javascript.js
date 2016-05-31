function initMap() {
  var myLatLng = {lat: 50.008205, lng: 36.239416};

  var map = new google.maps.Map(document.getElementById('map'), {
    zoom: 18,
    center: myLatLng,
    scrollwheel: false
});

    var marker = new google.maps.Marker({
      position: myLatLng,
      map: map,
      title: 'Hello World!'
    });
}
