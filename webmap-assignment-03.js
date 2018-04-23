//let someName = L.map('your-map-div-id').setView([yourLat, yourLon], yourZoom)
let dubaiCity = L.map('dubaiCoordinates').setView([25.1972, 55.2744], 10)
//(IN CLASS EXAMPLE) let basemap = 'https://cartodb-basemaps-{s}.global.ssl.fastly.net/dark_nolabels/{z}/{x}/{y}.png'
//(IN CLASS EXAMPLE) L.tileLayer().addTo(mymap)
//or could combined line 3 and 4 via L.ttleLayer('https://cartodb-basemaps-{s}.global.ssl.fastly.net/dark_nolabels/{z}/{x}/{y}.png').addTo(mymap)
L.tileLayer('https://server.arcgisonline.com/ArcGIS/rest/services/Specialty/DeLorme_World_Base_Map/MapServer/tile/{z}/{y}/{x}').addTo(dubaiCity)
let markedLocation = L.marker([25.1972, 55.2744]).addTo(dubaiCity)
let cityArea = L.polygon([
  [24.910730, 54.897153],
  [24.794114, 55.075650],
  [25.236954, 55.561160],
  [25.353866, 55.295399]
]).addTo(dubaiCity);

let polyline = L.polyline([
  [24.910730, 54.897153],
  [25.236954, 55.561160]
]).addTo(dubaiCity);

cityArea.bindPopup('Dubai')
markedLocation.bindPopup('Burj Khalifa')

dubaiCity.on('click', function (event) {
  console.log('You clicked the map on coordinates ' + event.latlng)
})

let myIcon = L.icon({
  iconUrl: 'https://static.wixstatic.com/media/175079_79f0b566b54c4df7bf0273d35f04ed43~mv2_d_7329_9025_s_4_2.png/v1/fill/w_691,h_851,al_c,usm_0.66_1.00_0.01/175079_79f0b566b54c4df7bf0273d35f04ed43~mv2_d_7329_9025_s_4_2.png',
  iconSize: [38, 95],
  iconAnchor: [22, 94],
  popupAnchor: [-3, -76]
})

let markedLocation = L.marker([25.1972, 55.2744], {icon: myIcon}).addTo(dubaiCity)

let myStyle = {
  color: 'red',
  fillColor: 'pink'
}

let cityArea = L.polygon(cityArea, myStyle).addTo(dubaiCity)
