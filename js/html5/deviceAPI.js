// Battery API
(function(){
    var battery = navigator.battery,
        body = document.getElementsByTagName("body")[0];
    function updateBatteryStatus() {

        body.innerHTML+= "<p>Battery level: " + battery.level * 100 + "%</p>";
        body.innerHTML+= "<p>Battery is charging: " + battery.charging + "</p>";
        body.innerHTML+= "<p>Battery charging time: " + battery.chargingTime + "</p>";
        body.innerHTML+= "<p>Battery discharging time: " + battery.dischargingTime + "</p>";
    }

// detect if the battery status API is supported
    if(battery) {
        battery.addEventListener("chargingchange", updateBatteryStatus);
        battery.addEventListener("levelchange", updateBatteryStatus);
        updateBatteryStatus();
    }
})();

// Vibration API
// anonymous function to contain the variables
(function(){
// attach a click event to a button with an ID of "vibrate"
    document.getElementById("vibrate").addEventListener("click", function(){
        if(navigator.vibrate) {
// vibrate for 1 second wait half a second, then vibrate 2 seconds
            navigator.vibrate([1000, 500, 2000]);
        } else {
// apologize to the user for teasing them
            alert("sorry, this browser doesn't support the vibrate API");
        } // end support check
    }, false);
})();


// Network API
// anonymous function to contain the variables
(function (){
// Check bandwidth level is supported
    var connection,
        connectionSpeed,
        images = document.querySelectorAll("img"),//[data-large]"),
        imageCount = images.length,
        i;
// create a custom object if navigator.connection isn't available
    connection = navigator.connection || { 'type': '0' };
    if(imageCount > 0 && connection.type === '0' || connection.type === '1' || connection.type === '2') {
        for (i = 0; i < imageCount; i = i + 1) {
            var obj = images[i],
                largeImg = obj.getAttribute('data-large');
            obj.setAttribute('src', largeImg);
        }
    }
})();

