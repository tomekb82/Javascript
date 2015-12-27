'use strict'

var addressBook = (function () {

    var searchField,
        outputElement,
        dataUrl;

    var api = {
        init: function(aSearchField, aOutputElement, aDataUrl){
            searchField = aSearchField;
            outputElement = aOutputElement;
            dataUrl = aDataUrl;
        },
        search: function(event){

            // stop default behavior
            event.preventDefault();

            /* start the Ajax call */
            ajax.call("GET", dataUrl, outputElement, function(data){

                // save the input value, result length and i to variable
                var searchValue = searchField.value,
                    addrBook = data.addressBook,
                    count = addrBook.length,
                    i;

                // clear the target area just in case
                outputElement.innerHTML = "";

                // check the count
                if(count > 0 && searchValue !== ""){

                    // loop through the results
                    for(i = 0; i < count; i = i + 1){

                        // look through the name value to see if it contains the searchterm string
                        var obj = addrBook[i],
                            isItFound = obj.name.indexOf(searchValue);

                        // anything other than -1 means we found a match
                        if(isItFound !==- 1){
                            outputElement.innerHTML += '<p>' + obj.name + ', <a href="mailto: ' + obj.email + '">' + obj.email + '</a></p>';
                        } // end if

                    } // end for loop

                } // end count check

            }); // and ajax call
        },

        getAllContacts: function(){
            
            /* start the Ajax call */
            ajax.call("GET", dataUrl, outputElement, function(data){

                // save the input value, result length and i to variable
                var addrBook = data.addressBook,
                    count = addrBook.length,
                    i;

                // clear the target area just in case
                outputElement.innerHTML = "";

                // check the count
                if(count > 0){

                    // loop through the results
                    for(i = 0; i < count; i = i + 1){

                        // look through the name value to see if it contains the searchterm string
                        var obj = addrBook[i];

                        outputElement.innerHTML += '<p>' + obj.name + ', <a href="mailto: ' + obj.email + '">' + obj.email + '</a></p>';

                        console.log(outputElement);
                    } // end for loop

                } // end count check

            }); // and ajax call
        }
    };

    return api;

})();