//Instantiate, or load, the leaflet map
let northAmericanMap = L.map('northAmericanMapContainer').setView([42.8864, -78.8784], 4)

//Set default basemap style that will be displayed on page load
L.tileLayer('https://server.arcgisonline.com/ArcGIS/rest/services/Specialty/DeLorme_World_Base_Map/MapServer/tile/{z}/{y}/{x}').addTo(northAmericanMap);

//Add outline for city limits START
//Buffalo, NY
let cityArea = L.polygon([
    //This will make a square
    //top right corner
    [42.948232, -78.616262],
    //extra corner
    [43.016697, -78.796143],
    //top left corner
    [42.947478, -78.955078],
    //bottom left corner
    [42.843255, -78.952675],
    //bottom right corner
    [42.842610, -78.616262]
]).addTo(northAmericanMap);
//Add outline for city limits END

//Set map pins START
//create the custom markers
var maskIcon = L.icon({
    iconUrl: 'Photo/mask.png',
    iconSize: [30, 54], // size of the icon
    iconAnchor: [20, 44], // point of the icon which will correspond to marker's location
    popupAnchor: [-3, -30] // point from which the popup should open relative to the iconAnchor
});

GeoJSON = [
    {
        "city": "Buffalo, NY",
        "country": "USA",
        "venue": "Shea's Performing Arts Center",
        "dateRange": "Apr 25, 2018 - May 6, 2018",
        "lat": 42.8864,
        "lng": -78.8784
    },
    {
        "city": "Schenectady, NY",
        "country": "USA",
        "venue": "Proctors",
        "dateRange": "Apr 24, 2019 - May 5, 2019",
        "lat": 42.8142,
        "lng": -73.9396
    },
    {
        "city": "St. Louis, MO",
        "country": "USA",
        "venue": "The Fabulous Fox",
        "dateRange": "May 9, 2018 - May 20, 2018",
        "lat": 38.6270,
        "lng": -90.1994
    },
    {
        "city": "Toronto, ON",
        "country": "Canada",
        "venue": "Princess of Wales Theater",
        "dateRange": "Jun 7, 2018 - Jun 30, 2018",
        "lat": 43.6532,
        "lng": -79.3832
    }
];

for (var i = 0; i < GeoJSON.length; ++i) {
    if (GeoJSON[i].country === "Canada") {
        L.marker([GeoJSON[i].lat, GeoJSON[i].lng], { icon: maskIcon })
            .bindPopup('<span class="popup-city">' + GeoJSON[i].city + ' ' + GeoJSON[i].country + '</span><br /><span class="popup-venue">' + GeoJSON[i].venue + '</span><br /><span class="popup-showDateRange">' + GeoJSON[i].dateRange + '</span>')
            .addTo(northAmericanMap);
    }
    else {
        L.marker([GeoJSON[i].lat, GeoJSON[i].lng], { icon: maskIcon })
            .bindPopup('<span class="popup-city">' + GeoJSON[i].city + '</span><br /><span class="popup-venue">' + GeoJSON[i].venue + '</span><br /><span class="popup-showDateRange">' + GeoJSON[i].dateRange + '</span>')
            .addTo(northAmericanMap);
    }
}
//Set map pins END

//Display coordinates as a pop up when clicking on the map START
var popup = L.popup();

function onMapClick(e) {
    popup
        .setLatLng(e.latlng)
        .setContent("You clicked the map at " + e.latlng.toString())
        .openOn(northAmericanMap);
}

northAmericanMap.on('click', onMapClick);
//Display coordinates as a pop up when clicking on the map END

//Basemap button click events START
$(".basemap-default").on('click', function () {
    L.tileLayer('https://server.arcgisonline.com/ArcGIS/rest/services/Specialty/DeLorme_World_Base_Map/MapServer/tile/{z}/{y}/{x}').addTo(northAmericanMap);
})

$(".basemap-worldStreetMap").on('click', function () {
    L.tileLayer.provider('Esri.WorldStreetMap').addTo(northAmericanMap);
})

$(".basemap-worldImagery").on('click', function () {
    L.tileLayer.provider('Esri.WorldImagery').addTo(northAmericanMap);
})
//Basemap button click events END
