// When the window has finished loading create our google map below
google.maps.event.addDomListener(window, 'load', init);

function init() {
// Basic options for a simple Google Map
// For more options see: https://developers.google.com/maps/documentation/javascript/reference#MapOptions
var mapOptions = {
// How zoomed in you want the map to start at (always required)
zoom: 13,

// The latitude and longitude to center the map (always required)
center: new google.maps.LatLng(-33.775928, 151.052141), // Carlingford



// How you would like to style the map. 
// This is where you would paste any style found on Snazzy Maps.
styles: [{"featureType":"administrative","elementType":"labels.text.fill","stylers":[{"color":"#444444"}]},{"featureType":"landscape","elementType":"all","stylers":[{"color":"#f2f2f2"}]},{"featureType":"poi","elementType":"all","stylers":[{"visibility":"off"}]},{"featureType":"road","elementType":"all","stylers":[{"saturation":-100},{"lightness":45}]},{"featureType":"road.highway","elementType":"all","stylers":[{"visibility":"simplified"}]},{"featureType":"road.arterial","elementType":"labels.icon","stylers":[{"visibility":"on"}]},{"featureType":"transit","elementType":"all","stylers":[{"visibility":"on"}]},{"featureType":"water","elementType":"all","stylers":[{"color":"#75D1F0"},{"visibility":"on"}]}]
};

var contentString = '<h1>Carlingford Foot Clinic</h1>'+
'<h3>Level 3 Carlingford Court</h3>'+
'<h3>Inside Fitness First, Exl Physiotherapy</h3>'+
'<h3>801 Pennant Hills Road, Carlingford NSW 2118</h3><br>';

// Get the HTML DOM element that will contain your map 
// We are using a div with id="map" seen below in the <body>
var mapElement = document.getElementById('map');

// Create the Google Map using our element and options defined above
var map = new google.maps.Map(mapElement, mapOptions);

var infowindow = new google.maps.InfoWindow({
    content: contentString
});
// Let's also add a marker while we're at it
var marker = new google.maps.Marker({
    position: new google.maps.LatLng(-33.775928, 151.052141),
    map: map,
    title: 'Snazzy!'
});

marker.addListener('click', function() {
    infowindow.open(map, marker);
});
}