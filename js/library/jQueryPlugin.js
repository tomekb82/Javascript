// enclose the plug-in so no variables leak out
(function($){
// define and name the plug-in
    $.fn.zebraStripe = function(options) {
// define default options
        var defaults = {
            elToStripe: "tr"
        };
// let options be customized by the user
        var options = $.extend(defaults, options);
// loop through each element you're attaching the plug-in to
        return this.each(function() {
// use the attached element and option value
            $(this).find(options.elToStripe + ':odd').css({
                'background': 'blue'
            });
        }); // end loop
    };
})(jQuery);
$(document).ready( function () {
// attached zebra strip plug-in to the #tableEl div
    $('#tableEl').zebraStripe({
        elToStripe: "tr" // if you want to change the option (we didn't)
    });
}); // close document.ready