// Add console.log to check to see if our code is working.
console.log("working");

//? 13.6.1 Add Earthquake Data to a Map
let streets = L.tileLayer('https://api.mapbox.com/styles/v1/mapbox/streets-v11/tiles/{z}/{x}/{y}?access_token={accessToken}', {
attribution: 'Map data © <a href="https://www.openstreetmap.org/">OpenStreetMap</a> contributors, <a href="https://creativecommons.org/licenses/by-sa/2.0/">CC-BY-SA</a>, Imagery (c) <a href="https://www.mapbox.com/">Mapbox</a>',
    maxZoom: 18,
    accessToken: API_KEY
});

// We create the dark view tile layer that will be an option for our map.
let satelliteStreets = L.tileLayer('https://api.mapbox.com/styles/v1/mapbox/satellite-streets-v11/tiles/{z}/{x}/{y}?access_token={accessToken}', {
    attribution: 'Map data © <a href="https://www.openstreetmap.org/">OpenStreetMap</a> contributors, <a href="https://creativecommons.org/licenses/by-sa/2.0/">CC-BY-SA</a>, Imagery (c) <a href="https://www.mapbox.com/">Mapbox</a>',
        maxZoom: 18,
        accessToken: API_KEY
    });

// Create a base layer that holds both maps.
let baseMaps = {
    "Streets": streets,
    "Satellite": satelliteStreets
};

// Create the map object with a center, zoom level and default layer.
let map = L.map("mapid", {
    center: [39.5, -98.5],
    zoom: 3,
    layers: [streets]
});

// Pass our map layers into our layers control and add the layers control to the map.
L.control.layers(baseMaps).addTo(map);

// Retrieve the earthquake GeoJSON data.
d3.json("https://earthquake.usgs.gov/earthquakes/feed/v1.0/summary/all_week.geojson")
    .then(function(data) {
        // Creating a GeoJSON layer with the retrieved data.
        L.geoJSON(data).addTo(map);
    });





// Grabbing our GeoJSON data.
// d3.json(torontoData).then(function(data) {
//     console.log(data);
//     // Creating a GeoJSON layer with the retrieved data.
//     L.geoJSON(data, {
//         color: "#ffffa1",
//         weight: 2,
//         onEachFeature: function(feature, layer) {
//             console.log(feature);
//             layer.bindPopup("<h3> Airline: " + feature.properties.airline +  "</h3> <hr> <h3> Destination: " + feature.properties.dst + "</h3>")
//         }
//     }).addTo(map);
// });

// todo Refector the code

// 1. create a style for the lines
// let myStyle = {
//     color: "#ffffa1",
//     weight: 2
// };
// 2. Replace the code with myStyle
// d3.json(torontoData).then(function(data) {
//     console.log(data);
//     // Creating a GeoJSON layer with the retrieved data.
//     L.geoJSON(data, {
//         style: myStyle,
//         onEachFeature: function(feature, layer) {
//             console.log(feature);
//             layer.bindPopup("<h3> Airline: " + feature.properties.airline +  "</h3> <hr> <h3> Destination: " + feature.properties.dst + "</h3>")
//         }
//     }).addTo(map);
// });

// d3.json(torontoHoods).then(function(data) {
//     console.log(data),
//     L.geoJSON(data, {
//         color: "blue",
//         weight: 1,
//         fillColor: "yellow",
//         onEachFeature: function(feature, layer) {
//         layer.bindPopup(feature.properties.AREA_NAME)
//         } 
//     }).addTo(map);
// })