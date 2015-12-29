<!-- jquery examples -->
$(document).ready(function () {

    var container = $("#container");

    var module = $(".module");

    ////////////////////////////////////////////////////////////////
    // Traveling Through the DOM
    // travels up one level
    $(".module").parent().addClass('module-parent');
    // travels up multiple levels
    $("p").parents("#container").addClass('p-parents');
    // travels down
    $("#container").find(".module").addClass('container-find');
   // travels sideways
    $(".module").siblings(".module").addClass('module-siblings');


    // get first module
    $(".module").first().addClass('first-module');
    // get next module
    $(".module").first().next().addClass('second-module');
    // get last module
    $(".module").last().addClass('last-module');
    // get previous module
    $(".module").last().prev().addClass('second-to-last-module');


    ////////////////////////////////////////////////////////////////
    // Adding Style Information
    $('.module').css({
        'height': '50px',
        'color': 'red'
    })

    ////////////////////////////////////////////////////////////////
    // Binding Events/ Animation
    // bind a click event to the only button element in the document
    $('#dontClick'). click ( function () {
        // animate all the heights of each module to 0
        $('.module'). animate ({
            'height': '0px'
        }, 500 , function () {
        // after the animation is complete, change the button text
            $('#dontClick').text('now what, smart guy?');
        }); // close animate anonymous callback function

    }); // close click anonymous callback function

    //
    // define your zebra striping function
    function zerbraStripe2( wrapper , elToStripe ){
        $(wrapper).find( elToStripe /*+ ':odd'*/).css({
            'color':  'red'
        });
    }
    // wait for the document to be loaded
    $(document).ready( function () {
        var output = $('table'),
        tr = output.find('tr');
        // call the function with 2 required arguments
        zerbraStripe2(output, tr);
    }); // close document.ready

}); // close document.ready