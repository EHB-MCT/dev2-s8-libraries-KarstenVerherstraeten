"use strict";
import Toilet from "./Toilet.js";

// de leaflet library is reeds geimporteerd, en beschikbaar als "L"
// dit via de script en css tag in de index.html, en de "map" div die werd toegevoegd.


const app = {
    map: null, // gebruik dit om de map gemakkelijk aan te spreken doorheen de applicatie
    init() {
        this.loadMarkers();
        // initialise de kaart
     app.map = L.map('map').setView([50.8360171,4.3353876], 13);

L.tileLayer('https://tile.openstreetmap.org/{z}/{x}/{y}.png', {
    attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> Contributors'
}).addTo(app.map);

L.marker([50.8423185, 4.3223651]).addTo(app.map)
    .bindPopup('EHB <br> campus kaai')
    .openPopup();

        
        
    },
    loadMarkers() {

        fetch('https://opendata.brussels.be/api/records/1.0/search/?dataset=toiletten&q=&rows=100&geofilter.distance=50.846475%2C+4.352793%2C+5000')
        .then(toilet => toilet.json())
        .then(function(data){
            data.records.forEach(function(toiletInfo){
                const toilet = new Toilet(toiletInfo.fields.wgs84_lat,toiletInfo.fields.wgs84_long,toiletInfo.fields.adrvoisfr);
                console.log(toilet);
                app.addMarker(toilet.latitude,toilet.longtitude, toilet.adress);
            });
           
        })
        // fetch de data van opendata.brussels.be
            // als er coordinaten beschikbaar zijn, kan je de addMarker functie gebruiken om een marker toe te voegen op de kaart
          
        
        
    },
    addMarker(lat, lon, adress) {
        L.marker([lat, lon]).addTo(app.map)
        .bindPopup(adress)
        .openPopup();
    }
}

app.init();
