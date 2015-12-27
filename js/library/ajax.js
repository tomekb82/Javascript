'use strict'

var ajax = (function () {

    var api = {

        getHttpObject: getHttpObject,

        call: ajaxCall

    };

    /* standard Ajax xhr function */

    function getHttpObject() {

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

    /* define Ajax call */

    function ajaxCall(method, dataUrl, outputElement, callback) {

        const AJAX_STATUS_COMPLETE = 4,
            HTTP_STATUS_OK = 200;

        // get correct Ajax object based on support
        var request = getHttpObject();

        outputElement.innerHTML = "Loading...";

        request.onreadystatechange = function () {

            // check Ajax and HTTP request status
            if (request.readyState === AJAX_STATUS_COMPLETE && request.status === HTTP_STATUS_OK) {

                // save ajax response to variable
                var results = JSON.parse(request.responseText);

                // make sure the callback is indeed a function
                if (typeof callback === "function") {

                    callback(results);
                } // end check

            } // end ajax status check

        } // end onreadystatechange

        if (!method) {
            method = "GET";
        }
        request.open(method, dataUrl, true);
        request.send(null);
    }

    return api;

})();

