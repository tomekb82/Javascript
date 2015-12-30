// an anonymous function to contain the variables
(function () {
// define a function to output all the data returned from navigator.geolocation
    function getPositionData(position) {
        var body = document.getElementById("geo");
        body.innerHTML += "<p>Latitude: " + position.coords.latitude + "</p>";
        body.innerHTML += "<p>Longitude: " + position.coords.longitude + "</p>";
        body.innerHTML += "<p>Position accuracy (in meters): " + position.coords.accuracy + "</p>";
        body.innerHTML += "<p>Altitude: " + position.coords.altitude + "</p>";
        body.innerHTML += "<p>Heading: " + position.coords.heading + "</p>";
        body.innerHTML += "<p>Speed: " + position.coords.speed + "</p>";
    } // end success function
    if(navigator.geolocation) {
// using getCurrentPosition to return positioning data
        navigator.geolocation.getCurrentPosition(getPositionData);
    } else {
// apologize to the user for teasing them
        alert("sorry, this browser doesn't support the Geolocation API");
    } // end support check
})(); // End anonymous function

