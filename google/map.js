function initialize() {
    var mapOptions = {
        center: { lat: 40.714271, lng: -73.957389},
        zoom: 18
    };
    var map = new google.maps.Map(document.getElementById('map-demo'),
        mapOptions);


    var myLatlng = new google.maps.LatLng(40.714271,-73.957389);
    var marker = new google.maps.Marker({
        position: myLatlng,
        title:"You Are Here!"
    });

// To add the marker to the map, call setMap();
    marker.setMap(map);

}

google.maps.event.addDomListener(window, 'load', initialize);

