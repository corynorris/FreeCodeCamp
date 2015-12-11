var APIKEY = "e1f33a26e66c72057e678eafcb346d4a";

function buildWeatherUrl(lattitude, longitude) {
  return "http://api.openweathermap.org/data/2.5/weather?lat=" + lattitude + "&lon=" + longitude + "&units=metric&APPID=" + APIKEY;
}

function getWeather() {
  if (navigator.geolocation) {
    navigator.geolocation.getCurrentPosition(function(position) {
      var url = buildWeatherUrl(position.coords.latitude, position.coords.longitude);
      $.getJSON(url, showWeather);
    });
  } else {
    $("#weather-data").html("Geolocation is not supported by this browser.");
  }
}

function showWeather(json) {
  var city = json.name;
  var weather = json.weather[0].main.toLowerCase();
  var description = json.weather[0].description;
  var temperature = parseInt(json.main.temp) + " °C";

  $("#weather-data .city").text(city);
  $("#weather-data .temperature").text(temperature);
  $("#weather-data .weather").text(description);


  
    $("body").addClass(weather);
    $("#weather").addClass(weather);
  
  if ( weather === "snow") {
    $("body").snowfall({flakeCount : 100, maxSpeed : 5, minSize : 5, round: true});
  }
  
    if ( weather === "rain" || weather === "thunderstorm" || weather === "drizzle") {
    $("#rain").snowfall({flakeCount : 100, maxSpeed : 5, minHeight: 5,  flakeColor: '#0000ff', flakeIndex: -2,  minSize : 3, shadow: true, minSpeed: 4});
  }
  
}

// I'll deal with rain, snow, clouds, and clear sky
$(document).ready(getWeather());
