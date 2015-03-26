function initialize() {

    var osmLayer = new ol.layer.Tile({
        source: new ol.source.OSM()
    });

    var mapView = new ol.View({
        center: ol.proj.transform([-73.957389, 40.714271], 'EPSG:4326', 'EPSG:3857'),
        zoom: 18
    });

    var map = new ol.Map({
        layers: [osmLayer],
        target: 'map-demo',
        view: mapView
    });

    var popup = new ol.Overlay({
        element: document.getElementById('popup')
    });

    map.addOverlay(popup);
    var myLocation = ol.proj.transform([-73.957389, 40.714271], 'EPSG:4326', 'EPSG:3857');
    popup.setPosition(myLocation);
    popup.setPositioning('center-center');
}

window.addEventListener('load', initialize);