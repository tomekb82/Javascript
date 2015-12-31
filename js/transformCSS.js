// get the proper transform extension
function getTransformExtension( element ) {
    "use strict";
// create a static array of known extensions
    var properties = [
        "transform", // normal
        "WebkitTransform", // Safari and Chrome
        "msTransform", // Internet Explorer
        "MozTransform", // Firefox
        "OTransform" // Opera
    ];
// get array count for looping
    var count = properties.length,
        i;
// loop through the array
    for (i = 0; i < count; i = i + 1) {
// save the property in context to a variable
        var property = properties[i];
        // pass the property through the element's style object and check if it'sdefined
        if (typeof element.style[property] !== "undefined") {
// when you get something that's not undefined, return it
            return property;
        } // end if
    } // end loop
} // end function

// anonymous function to contain the variables
(function(){
    "use strict";
    var body = document.getElementsByTagName("body")[0],
        block = document.getElementById("block"),
        extension = getTransformExtension(body);
// rotate the block 10 degrees
    block.style[extension] = "rotate(10deg)";
// when the scale value changes, apply the scale value to the block
    block.addEventListener("mousedown"/*"gesturechange"*/, function(e) {
        e.preventDefault();
        //block.style[extension] = "scale("+ e.scale +")";
        block.style[extension] = "scale(2)";
    }, false);
// when the pinch is over, check the scale value
    block.addEventListener("mouseup"/*"gestureend"*/, function(e) {
// if the scale is over 1.5, scale to 3, otherwise return to original state
        if(e.scale > 1.5){
            block.style[extension] = "scale(3)";
        } else {
            block.style[extension] = "scale(1) rotate(10deg)";
        }
    }, false);
})();