let locationIndex = 0;

let locations = [
{lat: 40.808029, lng: -73.963859}, {lat:35.659363, lng:139.700964}, {lat:40.7235499, lng:-73.9792336}, {lat: 40.7423643, lng: -73.9889526}, {lat: -8.0104812, lng: -34.8546019}, {lat: 37.3965581, lng: 126.6364439}, {lat: 37.3938247, lng: 126.6430511}, {lat: 52.5136312, lng: 13.4177136}, {lat:40.72976017315663,lng:-73.99156880081819},{lat:35.6595699,lng:139.7005703}
];

function randomLocation(){
  // var locationIndex = Math.floor(Math.random()*locations.length);
  let loc = locations[Math.floor(Math.random()*locations.length)];
  return loc;
}

let tiles = document.getElementById("grid").children;

let randomLoc = randomLocation();

let i;
let urlStartString = "url('https://api.mapbox.com/styles/v1/mapbox/satellite-v9/static/";
let urlEndString = ",17,0,0/1280x700?access_token=pk.eyJ1IjoiY2FsZW5jaHVuZyIsImEiOiJjazBpZjN2eW4wY3U4M2dwdDY2OG9waTFzIn0.NKAXk8LcwmJOP9K5MvzPEw')";

// console.log(urlString);
for (i = 0; i < tiles.length; i++) {
  let urlString = urlStartString + (randomLoc["lng"]+(i*.001)) + ","+ (randomLoc["lat"]+(i*.001)) + urlEndString;
  tiles[i].style.backgroundImage = urlString;
}


/* ----------------------------------------------------------------------------------------
Helper functions
------------------------------------------------------------------------------------------*/

function map (num, in_min, in_max, out_min, out_max) {
  return (num - in_min) * (out_max - out_min) / (in_max - in_min) + out_min;
}

function VwToPx(v) {
  var w = Math.max(document.documentElement.clientWidth, window.innerWidth || 0);
  return (v * w) / 100;
}

function EmToPx(input) {
    var emSize = parseFloat($("body").css("font-size"));
    return (emSize * input);
}

function PxToEm(input) {
    var emSize = parseFloat($("body").css("font-size"));
    return (Math.floor(input / emSize));
}

/*
let mouseX = 0;
let mouseY = 0;
let map_img = document.getElementById("map_img");

// Add the event listeners for mousedown, mousemove, and mouseup

window.addEventListener('mousemove', e => {
    mouseX = e.clientX;
    mouseY = e.clientY;
    map_img.style.left = mouseX + "px";
    map_img.style.top = mouseY + "px";
    // console.log(mouseX);
});
*/
