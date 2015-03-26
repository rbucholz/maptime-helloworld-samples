function initialize() {
    var provider = new MM.TemplatedLayer('http://tile.openstreetmap.org/{Z}/{X}/{Y}.png');
    var map = new MM.Map('map-demo', provider)
        .setCenter(new MM.Location(40.714271, -73.957389))
        .setZoom(3);
}

window.addEventListener('load', initialize);
