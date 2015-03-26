function initialize() {
    var mapOptions = {
        // Get a key by following these directions: https://msdn.microsoft.com/en-us/library/ff428642.aspx
        credentials: "YOUR_API_KEY_HERE",
        center: new Microsoft.Maps.Location(40.714271, -73.957389),
        mapTypeId: Microsoft.Maps.MapTypeId.road,
        zoom: 18
    };

    var map = new Microsoft.Maps.Map(document.getElementById("map-demo"), mapOptions);

    // Add a pin to our location
    var myLocation = new Microsoft.Maps.Location(40.714271, -73.957389);
    var pin = new Microsoft.Maps.Pushpin(myLocation,
        {
            text: "You Are Here!"
        });

    // add the pin to the map
    map.entities.push(pin);
}

window.addEventListener('load', initialize);

