/**
 * Created by Tomasz.Belina on 2015-12-30.
 */
// anonymous function to contain the variables
(function(){
// set up an event listener to catch the message
    addEventListener("message", function(e) {
        var data = e.data.addressBook,
            dataCount = data.length,
            counter = 0;
// send the data every half second until it reaches the end
        setInterval(function(){
            if(counter < dataCount){
                console.log("worker: postMessage()");
                postMessage("<p>" + data[counter++].name + "</p>");
            }
        }, 1000);
    }, false);
})();

