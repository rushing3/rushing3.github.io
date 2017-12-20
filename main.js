var map = L.map("map",{center:[20.81509864599243, 18.3221435546875],zoom:2});
var Esri_WorldTopoMap = L.tileLayer('http://server.arcgisonline.com/ArcGIS/rest/services/World_Topo_Map/MapServer/tile/{z}/{y}/{x}', {
        attribution: 'Tiles &copy; Esri &mdash; Esri, DeLorme, NAVTEQ, TomTom, Intermap, iPC, USGS, FAO, NPS, NRCAN, GeoBase, Kadaster NL, Ordnance Survey, Esri Japan, METI, Esri China (Hong Kong), and the GIS User Community'
});
Esri_WorldTopoMap.addTo(map);

d3.csv("cities.csv",function(data){
    data.map(function(d){
        d.latLng = [+d.lat,+d.lng];
        return d;
    });

    data.forEach(function(e, i) {
        marker = new L.marker(e.latLng)
            .bindPopup(e.name)
            .addTo(map);
    });

});
