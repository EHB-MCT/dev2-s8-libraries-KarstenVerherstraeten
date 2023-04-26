"use strict";

// de leaflet library is reeds geimporteerd, en beschikbaar als "L"
// dit via de script en css tag in de index.html, en de "map" div die werd toegevoegd.


const app = {
    map: null, // gebruik dit om de map gemakkelijk aan te spreken doorheen de applicatie
    init() {
        // initialise de kaart
        var map = L.map('map').setView([50.8360171,4.3353876], 13);

L.tileLayer('https://tile.openstreetmap.org/{z}/{x}/{y}.png', {
    attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> Contributors'
}).addTo(map);

L.marker([50.8423185, 4.3223651]).addTo(map)
    .bindPopup('EHB <br> campus kaai')
    .openPopup();

        
        
    },
    loadMarkers() {

        fetch('https://bruxellesdata.opendatasoft.com/api/records/1.0/search/?dataset=atms&q=')
        // fetch de data van opendata.brussels.be
            // als er coordinaten beschikbaar zijn, kan je de addMarker functie gebruiken om een marker toe te voegen op de kaart
        
        
    },
    addMarker(lat, lon) {
        // voeg een marker toe op lat, lon
    }
}

app.init();
