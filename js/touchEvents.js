// declare a function to map touch events to mouse events
function mapTouches(e) {
    e.preventDefault();
    var first = e.touches[0], // get the first touch
        type = "",
        simulatedEvent = document.createEvent("MouseEvent"); // initialize a phantom mouse event
    switch(e.type) {
// if the event is touchstart map it to mousedown
        case "touchstart":
            type = "mousedown";
            break;
// if the event is touchmove map it to mousemove
        case "touchmove":
            type = "mousemove";
            break;
// if the event is touchend map it to mouseup
        case "touchend":
            type = "mouseup";
            break;
        default:
            return;
    }
// set all the values of the phantom event
    simulatedEvent.initMouseEvent(type, true, true, window, 1, first.screenX, first.screenY, first.clientX, first.clientY, false, false, false, false, 0, null);
// trigger the event on the item in context
    first.target.dispatchEvent(simulatedEvent);
}


// anonymous function to contain scope
(function(){
// set up the event mapping listeners
    document.addEventListener("touchstart", mapTouches, false);
    document.addEventListener("touchmove", mapTouches, false);
    document.addEventListener("touchend", mapTouches, false); // to change
// test out the mappings with a mousemove event
    document.addEventListener("mousedown", function(e){
        console.log('mousedown got it!');
    }, false);

})(); // End anonymous function