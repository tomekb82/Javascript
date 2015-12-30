// anonymous function to contain the variables
(function(){
    var links = document.getElementsByTagName('a'),
        linkCount = links.length,
        output = document.getElementById("output"),
        i;
    if(linkCount > 0) {
// loop through all the links on the page
        for (i = 0; i < linkCount; i = i + 1) {
            var obj = links[i];
// attached a click event to each link
            obj.addEventListener('click', function(e) {
                e.preventDefault();
// store the href and text of the link you clicked
                var href = this.getAttribute("href"),
                    title = this.innerHTML;
// push the new URL in to the address bar
                history.pushState(href, title, href);
// make the ajax call to get the HTML snippet in the page
                ajaxCall (href, output, function (data) {
                    output.innerHTML = data;
                });
            }, false);
        } // end loop
    } // end counter check
})();

// listen for the popstate event (forward and back buttons)
window.addEventListener("popstate", function(e) {
// access the history state (the URL that was saved)
    var storedHistoryData = e.state;
// make the ajax call to get the HTML snippet in the page
    ajaxCall(storedHistoryData, output, function (data) {
        output.innerHTML = data;
    });
}); // end listener event

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