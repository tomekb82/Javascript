'use strict'

var css = (function () {

    var element;

    var api = {

        init: init,

        setActiveSection: setActiveSection,

        removeActiveSection: removeActiveSection,

        addHoverClass: addHoverClass,

        removeHoverClass: removeHoverClass

    };

    function init(aElement){
        element = aElement;
    }

    function setActiveSection(){

        // add a class of 'active' to the wrapping div
        this.parentNode.setAttribute("class", "active");
    }

    function removeActiveSection(){

        // remove the class from the wrapping div
        this.parentNode.removeAttribute("class");
    }

    function addHoverClass(){

        // add a class of 'hovering' to the wrapping div
        element.setAttribute("class", "hovering");
    }

    function removeHoverClass(){

        // remove the class from the wrapping div
        element.removeAttribute("class");
    }

    return api;

})();