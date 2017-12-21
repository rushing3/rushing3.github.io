(function($) {
    "use strict";

    // Scrolling w/ jQuery easing
    $('a.js-scroll-trigger[href*="#"]:not([href="#"])').click(function() {

        if (location.pathname.replace(/^\//, '') == this.pathname.replace(/^\//, '')
            && location.hostname == this.hostname) {

            var target = $(this.hash);
            target = target.length ? target : $('[name=' + this.hash.slice(1) + ']');

            if (target.length) {

                $('html, body').animate({
                    scrollTop: target.offset().top
                }, 1000, "easeInOutExpo");

                return false;
            }
        }
    });

})(jQuery);

// Make header menu dark when scrolling past the landing image
$(document).ready(function(){
    var scroll_pos = 0;
    $(document).scroll(function() {
        scroll_pos = $(this).scrollTop();
        if(scroll_pos > $(window).height() - $(".plane").height()) {
            $(".plane").fadeIn();
        } else {
            $(".plane").fadeOut();
        }
    });
});

// D3 Stuff
var map = L.map("map",{
    scrollWheelZoom:false,
    center:[20.81509864599243, 18.3221435546875],
    zoom:1.5
});
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
