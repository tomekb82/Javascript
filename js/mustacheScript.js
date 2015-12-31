//wrap everything in an anonymous function to contain the variables
(function(){
//define the DOM elements and common variables you'll need
    var getAllButton = document.getElementById("get-all");
//define address book methods
    var addr = {
        getAllContacts : function () {
// set the output element
            var output = document.getElementById("output"),
                mustacheTemplate = document.getElementById("mustache-template"),
               template = mustacheTemplate.innerHTML;
// start Ajax call
            ajaxCall('data/contacts.json', output, function ( data ) {
// render the mustache template by combining the HTML with the JSON data that was returned
                var object = $.parseJSON(data);
                var renderedContent = Mustache.to_html(template, object);
// put the rendered template into the DOM
                output.innerHTML = renderedContent;
            }); // end ajax call
        }
    } // end addr object
// get all contacts when you click the button
    getAllButton.addEventListener("click", addr.getAllContacts, false);
})(); // end anonymous function

/* define the Ajax call */
function ajaxCall(dataUrl, outputElement, callback) {
    /* use our function to get the correct Ajax object based on support */
    var request = getHTTPObject();
    outputElement.innerHTML = "Loading";
    request.onreadystatechange = function() {
// check to see if the Ajax call went through
        if ( request.readyState === 4 && request.status === 200 ) {
// save the ajax response to a variable

            var data = request.responseText;

// make sure the callback is indeed a function before executing it
            if(typeof callback === "function"){
                callback(data);
            } // end check
        } // end ajax status check
    } // end onreadystatechange
    request.open("GET", dataUrl, true);
    request.send(null);
}

/* standard Ajax xhr function */

function getHTTPObject() {

    var xhr;

    if (window.XMLHttpRequest) { // check for support

        // if it's supported, use it becasuse it's better
        xhr = new XMLHttpRequest();
    } else if (window.ActiveXObject) { // check for the IE 6 Ajaax

        // save it to xhr variable
        xhr = new ActiveXObject('Msxml2.XMLHTTP');
    }

    return xhr;
}