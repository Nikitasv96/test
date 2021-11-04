var map;
var newData = [];
var xToLook;
var yToLook;
function initialize() {
  var mapOptions = {
    center: new google.maps.LatLng(35.658028, 139.751528),
    zoom: 14,
    mapTypeId: google.maps.MapTypeId.ROADMAP,
  };
  map = new google.maps.Map(document.getElementById("map_canvas"), mapOptions);

  var data = [
    new google.maps.LatLng(35.658028, 139.751528),
    new google.maps.LatLng(35.657028, 139.751528),
    new google.maps.LatLng(35.657028, 139.750528),
  ];

  dataPolygon = new google.maps.Polygon({
    paths: data,
    strokeWeight: 0,
    fillColor: "#FF0000",
    fillOpacity: 0.35,
  });
  dataPolygon.setMap(map);
}

function calculate() {
  if (newData.length == 3) {
    alert("You Entered Max Number Of Points");
  }
  var x = document.getElementById("x_input").value;
  var y = document.getElementById("y_input").value;
  xToLook = x;
  yToLook = y;
  newData.push(new google.maps.LatLng(x, y));
  var x = document.getElementById("x_input").value;
  var y = document.getElementById("y_input").value;
}

function submitCor() {
  var mapOptions = {
    center: new google.maps.LatLng(xToLook, yToLook),
    zoom: 16,
    mapTypeId: google.maps.MapTypeId.ROADMAP,
  };
  map = new google.maps.Map(document.getElementById("map_canvas"), mapOptions);

  dataPolygon = new google.maps.Polygon({
    paths: newData,
    strokeWeight: 0,
    fillColor: "#FF0000",
    fillOpacity: 0.35,
  });
  dataPolygon.setMap(map);
}

google.maps.event.addDomListener(window, "load", initialize);
