

$(document).ready(function () {
    $.ajax({
        type : 'GET', // set request type GET or POST
        url : 'data/contacts.json', // data URL
        dataType : 'json', // type: xml, json, script, or html
        success : function( data ) {
            // if the call is a success do this
            console.log( data.addressBook);
        },
        error : function () {
            // if the call fails do this
            alert('an ajax error occurred');
        }
    }); // end Ajax call
}); // close document.ready

$(document).ready(function () {
    // start Ajax call
    $.getJSON('data/contacts.json', function (data) {
        var addrBook = data.addressBook,
            count = addrBook.length;
        // clear the target area just in case there's something in it.
        $('#outputGetJSON').empty();
        // check the count, of course
        if (count > 0) {
            // loop through the contacts
            $.each(addrBook, function (i, obj) {
                $('#outputGetJSON').append('<p>' + obj.name + ', <a href="mailto:' +
                    obj.email + '">'+ obj.email +'</a><p>') .hide().fadeIn() ;
            }); // end each
        } // end count check
    }) .error(function () {
        // if there was an error during the ajax call
        alert('there was an ajax error');
    }).complete(function () {
        // if the ajax call completed (whether it was successful or not)
        //alert('your ajax(getJSON) call was completed');
    }).success(function(){
        // if the ajax call was a success
        //alert('your ajax(getJSON) call was a success');
    }); // end ajax call
}); // close document.ready