//let someName = L.map('your-map-div-id').setView([yourLat, yourLon], yourZoom)
let dubaiCity = L.map('dubaiCoordinates').setView([24.4539, 54.3773], 8)
//(IN CLASS EXAMPLE) let basemap = 'https://cartodb-basemaps-{s}.global.ssl.fastly.net/dark_nolabels/{z}/{x}/{y}.png'
//(IN CLASS EXAMPLE) L.tileLayer().addTo(mymap)
//or could combined line 3 and 4 via L.ttleLayer('https://cartodb-basemaps-{s}.global.ssl.fastly.net/dark_nolabels/{z}/{x}/{y}.png').addTo(mymap)
L.tileLayer('https://server.arcgisonline.com/ArcGIS/rest/services/Specialty/DeLorme_World_Base_Map/MapServer/tile/{z}/{y}/{x}').addTo(dubaiCity)
//let markedLocation = L.marker([25.1972, 55.2744]).addTo(dubaiCity)
let cityArea = L.polygon([
//  [24.910730, 54.897153],
//  [24.794114, 55.075650],
//  [25.236954, 55.561160],
//  [25.353866, 55.295399]
    [24.292034, 51.591797],
    [24.119182, 51.591797],
    [22.933101, 52.58606],
    [22.629223, 55.137634],
    [22.712856, 55.220032],
//  [23.676096, 55.500183],
    [24.06402, 56.030273],
//    [24.284523, 55.777588],
//    [24.998505, 55.972595],
    [24.700677, 56.14769],
    [24.948087, 56.396255],
    [25.64524, 56.372223],
    [26.074054, 56.156616],
    [26.050923, 56.086235]
]).addTo(dubaiCity);

let polyline = L.polyline([
  [24.910730, 54.897153],
  [25.236954, 55.561160]
]).addTo(dubaiCity);

//add markers
var markerIcon = L.icon({
    iconUrl: 'OrangeMarker.png',
    iconSize: [60, 60], // size of the icon
    iconAnchor: [20, 44], // point of the icon which will correspond to marker's location
    popupAnchor: [-3, -30] // point from which the popup should open relative to the iconAnchor
});

GeoJSON = [
    {
        "city": "Dubai",
        "country": "UAE",
        "population": "Population: 3.0 million",
        "lat": 25.1972,
        "lng": 55.2744
    },
    {
        "city": "Abu Dhabi",
        "country": "UAE",
        "population": "Population: 1.1 million",
        "lat": 24.4539,
        "lng": 54.3773
    },
    {
        "city": "Sharjah",
        "country": "UAE",
        "population": "Population: 1.4 million",
        "lat": 25.3463,
        "lng": 55.4209
    },
    {
        "city": "Ras al-Khaimah",
        "country": "UAE",
        "population": "Population: 260,000",
        "lat": 25.6741,
        "lng": 55.9804
    },
    {
      "city": "Khasab",
      "country": "Oman",
      "population": "Population: 17,730",
      "lat": 26.1644,
      "lng": 56.2426
    }
];

for (var i = 0; i < GeoJSON.length; ++i) {
    if (GeoJSON[i].country === "Oman") {
        L.marker([GeoJSON[i].lat, GeoJSON[i].lng], { icon: markerIcon })
            .bindPopup('<span class="popup-city">' + GeoJSON[i].city + '</span><br /><span class="popup-country">' + GeoJSON[i].country + '</span><br /><span class="popup-population">' + GeoJSON[i].population + '</span>')
            .addTo(dubaiCity);
    }
    else {
        L.marker([GeoJSON[i].lat, GeoJSON[i].lng], { icon: markerIcon })
            .bindPopup('<span class="popup-city">' + GeoJSON[i].city + '</span><br /><span class="popup-population">' + GeoJSON[i].population + '</span>')
            .addTo(dubaiCity);
    }
}
//Set map pins END

//Display coordinates as a pop up when clicking on the map START
var popup = L.popup();

function onMapClick(e) {
    popup
        .setLatLng(e.latlng)
        .setContent("You clicked the map at " + e.latlng.toString())
        .openOn(dubaiCity);
}

dubaiCity.on('click', onMapClick);
//Display coordinates as a pop up when clicking on the map END

//END

//cityArea.bindPopup('Dubai')
//markedLocation.bindPopup('Burj Khalifa')

dubaiCity.on('click', function (event) {
  console.log('You clicked the map on coordinates ' + event.latlng)
})
